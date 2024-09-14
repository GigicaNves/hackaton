import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { auth, db } from '../server/firebaseConfig';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { logoutUser } from '../server/login-cadastro';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    // Consulta para encontrar o usuário pelo email
                    const userQuery = query(collection(db, "usuarios"), where("email", "==", user.email));
                    const querySnapshot = await getDocs(userQuery);

                    if (!querySnapshot.empty) {
                        const docData = querySnapshot.docs[0].data();
                        setUserData(docData);
                    } else {
                        console.log('Documento do usuário não encontrado');
                        Alert.alert('Erro', 'Dados do usuário não encontrados');
                    }
                } else {
                    console.log('Nenhum usuário autenticado');
                    Alert.alert('Erro', 'Usuário não autenticado');
                }
            } catch (error) {
                console.error('Erro ao carregar dados do usuário:', error);
                Alert.alert('Erro', 'Erro ao carregar dados do usuário');
            } finally {
                setLoading(false);
            }
        };

        loadUserData();
    }, []);

    const handleLogout = async () => {
        try {
          await logoutUser(); // Chama a função de logout
          console.log('Sucesso', 'Usuário deslogado com sucesso!');
          navigation.navigate('TelaInicial')
        } catch (error) {
          console.log('Erro ao deslogar', error.message); // Mensagem de erro
        }
      };
    

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {userData ? (
                <>
                    <Text style={styles.text}>ID: {userData.id_user}</Text>
                    <Text style={styles.text}>Email: {userData.email}</Text>
                    <Text style={styles.text}>Nome: {userData.nome}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleLogout}>
                        <Text style={styles.buttonText}>Sair da Conta</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text style={styles.text}>Dados do usuário não encontrados</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 55,
        fontSize: 16,
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        width: '100%',
        padding: 12,
        borderRadius: 5,
        backgroundColor: '#0066cc',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

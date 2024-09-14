
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { logoutUser } from '../server/login-cadastro';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ficha from './Ficha'
import Perfil from './Perfil'
import Home from './Home'

export default function Inicio() {

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
          await logoutUser(); // Chama a função de logout
          console.log('Sucesso', 'Usuário deslogado com sucesso!');
          navigation.navigate('TelaInicial')
        } catch (error) {
          console.log('Erro ao deslogar', error.message); // Mensagem de erro
        }
      };

  return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Ficha" component={Ficha} options={{headerShown: false}} />
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Tab.Screen name="Perfil" component={Perfil} options={{headerShown: false}} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  button: {
    width: '100%',
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#0066cc',
    alignItems: 'center',
    marginBottom: 10,
  },
});

/*
<View style={styles.container}>

      <Text style={styles.title}>Tela Home</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>
      
    </View>
*/ 

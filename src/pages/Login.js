import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';
import { auth } from '../server/firebaseConfig'
import { loginUser } from '../server/login-cadastro';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password); // Função de login
      console.log('Sucesso', `Usuário ${user.email} logado com sucesso!`);
      setEmail('');
      setPassword('');
      navigation.navigate('Home'); // Navega para a tela Home após login bem-sucedido
    } catch (error) {
      Alert.alert('Erro ao logar', error.message); // Mostra um alerta de erro
    }
  };

  return (

    <View style={styles.container}>
    <ImageBackground
      source={require('../../assets/texturaLogin.png')}
      style={styles.containerBc}
    >
      <StatusBar style="auto" />

      <View style={styles.icon}>
      <AntDesign name="left" size={54} color="black" style={{alignItems: 'left'}} onPress={() => navigation.goBack()}/>
      </View>

      <View style={styles.form}>
      <Image source={require('../../assets/logoEscura.png')} style={styles.imagem} />

<View style={styles.campos}>
      <TextInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
  </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  containerBc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  icon: {
    flex: 0,
    justifyContent: 'left',
    alignItems: 'flex-start',
    marginRight: 280, // Alinha a seta à esquerda
  },
  form: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingStart: 55,
    paddingEnd: 55,
    gap: 30,
  },
  campos: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 60,
    padding: 12,
    borderRadius: 15,
    backgroundColor: '#0066cc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

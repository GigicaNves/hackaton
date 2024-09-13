import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';
import { auth } from '../server/firebaseConfig'
import { loginUser } from '../server/login-cadastro';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function Login() {

  const fonts = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password); // Função de login
      console.log('Sucesso', `Usuário ${user.email} logado com sucesso!`);
      setEmail('');
      setPassword('');
      navigation.navigate('Inicio'); // Navega para a tela Home após login bem-sucedido
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
      <AntDesign name="left" size={45} color="black" style={{alignItems: 'left'}} onPress={() => navigation.goBack()}/>
      </View>

      <View style={styles.form}>
      <Image source={require('../../assets/logoEscura.png')} style={styles.imagem} />

<View style={styles.campos}>
      <TextInput
        placeholder="Usuário:"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha:"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
  </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.text}>_______________  ou  ______________</Text>

      <Text style={styles.textSimple}>
        Não tem uma conta?{' '}
        <Text 
          style={styles.link} 
          onPress={() => navigation.navigate('Cadastro')} // Navega para a tela de Cadastro
        >
          Cadastrar
        </Text>
      </Text>

      </View>

      

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#f5f5f5',
  },
  containerBc: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  icon: {
    justifyContent: 'left',
    alignItems: 'flex-start',
    marginRight: 280, // Alinha a seta à esquerda
  },
  form: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingStart: 64,
    paddingEnd: 64,
    gap: 25,
    marginBottom: 45,
  },
  campos: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 55,
    fontFamily: 'Inter_700Bold',
    color: '#04102B',
    fontSize: 13,
    
    borderRadius: 15,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    
    // Sombras para Android
    elevation: 5,
  },
  button: {
    width: '100%',
    height: 55,
    padding: 12,
    borderRadius: 15,
    backgroundColor: '#04102B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    
    // Sombras para Android
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
  },
  link: {
    textDecorationLine: 'underline',
  },
  imagem: {
    margin: 0,
    padding: 0, 
  },
  text: {
    fontFamily: 'Inter_700Bold',
  },
  textSimple: {
    fontFamily: 'Inter_400Regular',
  }
});

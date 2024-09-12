import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../server/firebaseConfig';
import { registerUser } from '../server/login-cadastro';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authUser, setAuthUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      const user = await registerUser(email, password, nome, cpf); // Chama a função de registro
      console.log('Sucesso', `Usuário cadastrado com sucesso!`);
      setAuthUser(user); // Atualiza o estado authUser com o usuário registrado
      setEmail("");
      setNome("");
      setCpf("");
      setPassword("");
      navigation.navigate('Home')
    } catch (error) {
      console.log('Erro ao cadastrar', error.message); // Mensagem de erro
    }
  }  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      {/* Input de Email */}

      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        autoCapitalize="none"
      />

    <TextInput
        placeholder="Digite seu CPF"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
        autoCapitalize="none"
      />            

      <TextInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Input de Senha */}
      <TextInput
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      {/* Botão de Cadastrar */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#0066cc',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

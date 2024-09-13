import { useState, useEffect } from 'react';
import { auth } from '../server/firebaseConfig';
import { registerUser } from '../server/login-cadastro';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Cadastro() {

  const [font, error] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  const image = require('../../assets/CadastroBaixar.png');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authUser, setAuthUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (font || error) {
      SplashScreen.hideAsync();
    }
  });

  if (!font && !error) {
    return null;
  }

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
      navigation.navigate('Inicio')
    } catch (error) {
      console.log('Erro ao cadastrar', error.message); // Mensagem de erro
    }
  }  

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.fundo}>
        <View style={styles.voltar}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
            <Feather
              name="chevron-left"
              size={45}
              color="#04102B"
              style={{ width: '100%', height: '100%' }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 8.8,
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
            <Image source={require('../../assets/OdontoCare.png')} style={{
    width: windowWidth * 
    40.697674418605 / 100,
    height: windowHeight * 
    21.351931330472 / 100, margin: 0
  }}/>
          <TextInput
            style={[styles.dados, { marginBottom: (windowHeight * 1.6) / 100 }]}
            placeholder="Usuário:"
            value={nome}
            onChangeText={setNome}
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.dados, { marginBottom: (windowHeight * 1.6) / 100 }]}
            placeholder="CPF:"
            value={cpf}
            onChangeText={setCpf}
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.dados, { marginBottom: (windowHeight * 1.6) / 100 }]}
            placeholder="E-mail:"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.dados, { marginBottom: (windowHeight * 1.6) / 100 }]}
            placeholder="Senha:"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.dados}
            placeholder="Confirmar senha:"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.cadastrar} onPress={handleRegister}>
            <Text style={styles.txtCadastrar}>Cadastrar</Text>
          </TouchableOpacity>
          <View
            style={{
              width: (windowWidth * 65.116279069767) / 100,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              marginBottom: (windowHeight * 4.6770386266094) / 100,
            }}>
            <View
              style={{
                width: (windowWidth * 26.511627906977) / 100,
                backgroundColor: '#04102B',
                height: 2,
              }}></View>
            <Text style={styles.ouTxt}>ou</Text>
            <View
              style={{
                width: (windowWidth * 26.511627906977) / 100,
                backgroundColor: '#04102B',
                height: 2,
              }}></View>
          </View>
          <View
            style={{
              width: (windowWidth * 65.116279069767) / 100,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.entrada}>Já tem uma conta? </Text>
            <Text style={styles.entrarTxt}>Entrar</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: '100%', width: '100%', alignItems: 'center' },
  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  voltar: {
    flex: 0.5,
    justifyContent: 'flex-start',
    width: '100%',
    paddingLeft: '11.62%',
    paddingTop: '10.40%',
  },
  dados: {
    backgroundColor: '#FFFFFF',
    width: '65.116279069767%',
    height: (windowHeight * 5.1502145922747) / 100,
    elevation: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 3 },
    borderRadius: 20,
    color: '#000000',
    paddingLeft: '5%',
    paddingRight: '5%',
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
  },
  cadastrar: {
    backgroundColor: '#04102B',
    width: '65.116279069767%',
    height: (windowHeight * 7.2961373390558) / 100,
    elevation: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 3 },
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: (windowHeight * 5.3648068669528) / 100,
  },
  txtCadastrar: {
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 20,
  },
  entrarTxt: {
    textDecorationLine: 'underline',
    textDecorationColor: '#04102B',
    color: '#04102B',
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
  },
  entrada: {
    color: '#04102B',
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
  },
  ouTxt: {
    width: (windowWidth * 4.1860465116279) / 100,
    color: '#000000',
    textAlign: 'center',
    marginLeft: (windowWidth * 3.7209302325581) / 100,
    marginRight: (windowWidth * 3.7209302325581) / 100,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
});

import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

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

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default function TelaInicial() {
  const navigation = useNavigation(); // Adicione esta linha para usar a navegação corretamente

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

  useEffect(() => {
    if (font || error) {
      SplashScreen.hideAsync();
    }
  });

  if (!font && !error) {
    return null;
  }

  return (
    <ImageBackground source={require('../../assets/LoadingDownload2.png')} style={{
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
    }}>
      <Image source={require('../../assets/logoFundo.png')} style={{
    margin: 0,
    padding: 0,
    width: windowWidth,
    height: windowWidth
  }} />
      <TouchableOpacity 
        style={[styles.button, {marginTop: windowHeight * 
          22.210300429185 / 100}]} 
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    width: windowWidth * 
    65.116279069767 / 100,
    padding: 12,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginBottom: windowHeight * 2.6824034334764 / 100,
    height: windowHeight * 
    6.4377682403433 / 100
  },
  buttonText: {
    color: '#04102B',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter_700Bold'
  },
});

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { CheckBox } from '@rneui/themed';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function App() {
  const [selectedIndex, setIndex] = useState(5);
  

  return (
    <SafeAreaView style={styles.container}>
    <View style={{width: '100%', height: '100%'}}>
      <ScrollView style={{width: screenWidth}}>
        <ImageBackground
          source={require('../../assets/TexturaBranca.jpg')}
          resizeMode="cover"
          style={styles.backImage}>
          <Image source={require('../../assets/logoP.png')} style={styles.logo} />
          <Text style={styles.txt}>Ficha</Text>

          <View style={{ width: screenWidth * 0.9, height:'auto', borderRadius: 40, alignSelf: 'center' }}>
            <ImageBackground
              source={require('../../assets/TexturaAzulBranco.png')}
              style={styles.imageCard}>
              <View style={styles.card}>
                <View style={styles.view}>
                  <View style={styles.fotoPerfil}></View>

                  <Text style={styles.dica}>Nome</Text>
                  <TextInput
                    style={styles.dados}
                    placeholder="Digite o seu nome"
                  />

                  <Text style={styles.dica}>Sexo</Text>
                  <TextInput
                    style={styles.dados}
                    placeholder="Digite o seu sexo"
                  />

                  <Text style={styles.dica}>Idade</Text>
                  <TextInput
                    style={styles.dados}
                    placeholder="Digite a sua idade"
                  />

                  <Text style={styles.dica}>Plano de Saúde</Text>
                  <View style={styles.checkboxContainer}>
                    <View style={styles.caixaContainer}>
                      <CheckBox
                        checked={selectedIndex === 0}
                        onPress={() => setIndex(0)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                      />
                      <CheckBox
                        checked={selectedIndex === 1}
                        onPress={() => setIndex(1)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                      />
                      <CheckBox
                        checked={selectedIndex === 2}
                        onPress={() => setIndex(2)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                      />
                    </View>
                    <View style={styles.caixaContainer}>
                      <CheckBox
                        checked={selectedIndex === 3}
                        onPress={() => setIndex(3)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                      />
                      <CheckBox
                        checked={selectedIndex === 4}
                        onPress={() => setIndex(4)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ajusta o SafeAreaView para ocupar toda a tela
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1, // Permite que o ScrollView se ajuste ao conteúdo
  },
  backImage: {
    width: '100%',
    height: screenHeight, // Mantém o background cobrindo a tela inteira
  },
  logo: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.2,
    resizeMode: 'cover',
    alignSelf: 'flex-end',
  },
  txt: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
  },
  card: {
    width: '85%',
    height: '90%',
    alignSelf: 'center',
    borderRadius: 40,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  imageCard: {
    width: '100%',
    height: '100%', // 
    justifyContent: 'center',
  },
  view: {
    flexGrow: 1,
    padding: 20,
    borderRadius: 40,
    backgroundColor: '#04102B',
  },
  fotoPerfil: {
    height: 100,
    width: 100,
    borderRadius: 30,
    borderColor: '#ffffff',
    borderWidth: 2,
    backgroundColor: '#024964',
    marginBottom: 20,
  },
  dica: {
    color: '#ffffff',
    marginBottom: 10,
  },
  dados: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 10,
  },
  caixaContainer: {
    justifyContent: 'space-around',
  },
});
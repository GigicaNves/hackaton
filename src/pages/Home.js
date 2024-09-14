
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView, Image, Dimensions, ImageBackground, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
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

import {
  Lora_400Regular,
  Lora_500Medium,
  Lora_600SemiBold,
  Lora_700Bold,
  Lora_400Regular_Italic,
  Lora_500Medium_Italic,
  Lora_600SemiBold_Italic,
  Lora_700Bold_Italic,
} from '@expo-google-fonts/lora';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';

function weekDay (day)
{
  switch (day)
  {
    case 0:
      return 'Domingo'
      break;
    case 1:
        return 'Segunda-feira'
        break;
    case 2:
        return 'Terça-feira'
        break;
    case 3:
      return 'Quarta-feira'
      break;
    case 4:
        return 'Quinta-feira'
        break;
    case 5:
      return 'Sexta-feira'
      break;
    case 6:
      return 'Sábado'
      break;

  }
}

function weekDay2 (day)
{
  switch (day)
  {
    case 6:
      return 'Domingo'
      break;
    case 0:
        return 'Segunda-feira'
        break;
    case 1:
        return 'Terça-feira'
        break;
    case 2:
      return 'Quarta-feira'
      break;
    case 3:
        return 'Quinta-feira'
        break;
    case 4:
      return 'Sexta-feira'
      break;
    case 5:
      return 'Sábado'
      break;

  }
}

export default function Home() {

  const date = new Date()
  const [data, setData] = useState(null)

  const [consultaAgendada, setConsultaAgendada] = useState(null)

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
    Lora_400Regular,
    Lora_500Medium,
    Lora_600SemiBold,
    Lora_700Bold,
    Lora_400Regular_Italic,
    Lora_500Medium_Italic,
    Lora_600SemiBold_Italic,
    Lora_700Bold_Italic,
  });

  useEffect(() => {
    if (font || error) {
      SplashScreen.hideAsync();
    }
  });

  if (!font && !error) {
    return null;
  }

    const navigation = useNavigation();

      function datazinha (datazin)
      {
        const datona = new Date(datazin)
        return weekDay2(datona.getDay())

      }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/texturaHome.png')} style={{flex: 1, width: '100%', height: '100%', backgroundColor: '#ffffff', alignItems: 'center'}}>
        <View style={{alignItems: 'flex-end', width: '100%'}}><Image source={require('../../assets/Header.png')} style={styles.header} /></View>
        <ImageBackground source={require('../../assets/ImagemPrincipal.png')} style={styles.exibirAgendado}>
          <View style={styles.dataAgendado}>
            <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 14, fontFamily: 'Lora_400Regular'}}>{ data != null ? datazinha(data.timestamp)  : weekDay(date.getDay) }</Text>
            <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 30, fontFamily: 'Lora_400Regular'}}>{ data != null ? data.day : date.getDate}</Text>
            <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 14, fontFamily: 'Lora_400Regular'}}>{ data != null ? data.year : date.getFullYear }</Text>
          </View>
          <View style={styles.situacaoAgendado}>
            <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 14, fontFamily: 'Lora_400Regular'}} >{consultaAgendada != null ? consultaAgendada : 'Nenhuma consulta agendada'}</Text>
          </View>
        </ImageBackground>
        <ScrollView style={{width: '100%', marginTop: windowHeight * 6.1716738197425 / 100}}>
          <View style={{width: '100%'}}>
            <Text style={{fontFamily: 'Lora_600SemiBold', fontWeight: 600, textAlign: 'center', width: '100%', fontSize: 40}}>CONSULTAS{'\n'}AGENDADAS</Text>
            <Calendar 
            style={{marginLeft: windowWidth * 13.255813953488 / 100, marginRight: windowWidth * 13.255813953488 / 100,}} 

            onDayPress={(day) => {setData(day); console.log(day) }}
            onMonthChange={(date) => console.log('onMonthChange', date) }
            onPressArrowLeft={(goToPreviousMonth) => {
              console.log('onPressArrowLeft'); goToPreviousMonth();
            }}
            onPressArrowRight={(goToNextMonth) => {
              console.log('onPressArrowRight'); goToNextMonth();
            }}

            monthFormat={'MMMM yyyy'}

            />
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={{fontFamily: 'Lora_600SemiBold', fontWeight: 600, textAlign: 'center', width: '100%', fontSize: 85.71 * windowWidth / windowHeight, marginBottom: windowHeight * 2.9431330472103 / 100 }}>FAÇA SEU AGENDAMENTO</Text>
            <ImageBackground style={{width: windowWidth * 69.767441860465 / 100, height: windowWidth * 69.767441860465 / 100, alignItems: 'center', paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100, alignItems: 'center', justifyContent: 'center', marginBottom: windowHeight * 2.9431330472103 / 100}} source={require('../../assets/aparelho.png')}>
              <View style={{width: windowWidth * 54.651162790698 / 100, alignItems: 'center', height: windowHeight * 23.605150214592 / 100}}>
                <Text style={{fontFamily: 'Inter_800ExtraBold', fontWeight: 800, color: '#ffffff', fontSize: 21, textAlign: 'left', textAlignVertical: 'top', marginTop: windowHeight * 6.8669527896996 / 100, paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100, width: windowWidth * 54.651162790698 / 100}}>APARELHO{'\n'}ORTODONTICO</Text>
                <Text style={{fontFamily: 'Lora_400Regular', color: '#ffffff', fontSize: 10, marginTop: windowHeight * 1.5021459227468 / 100, textAlign: 'left', width: windowWidth * 54.651162790698 / 100, paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100}}>Agende sua consulta e tenha seu aparelho consertado com rapidez e eficiência. Não perca tempo, marque agora!</Text>
              </View>
              <View style={{width: '100%', height: windowHeight * 6.4377682403433 / 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#04102B', borderRadius: 25}}><TouchableOpacity onPress={() => {navigation.navigate('Agendamento', { servico: 'Aparelho\nOrtodontico' })}} style={{ backgroundColor: '#ffffff', height: windowHeight * 4.2918454935622 / 100, justifyContent: 'center', borderRadius: 20, width: windowWidth * 17.441860465116 / 100}}><Text style={{flex: 1, color: '#04102B', textAlign: 'center', textAlignVertical: 'center'}}>Agendar</Text></TouchableOpacity></View>
            </ImageBackground>

            <ImageBackground style={{width: windowWidth * 69.767441860465 / 100, height: windowWidth * 69.767441860465 / 100, alignItems: 'center', paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100, alignItems: 'center', justifyContent: 'center', marginBottom: windowHeight * 2.9431330472103 / 100}} source={require('../../assets/clareamento.png')}>
              <View style={{width: windowWidth * 54.651162790698 / 100, alignItems: 'center', height: windowHeight * 23.605150214592 / 100}}>
                <Text style={{fontFamily: 'Inter_800ExtraBold', fontWeight: 800, color: '#ffffff', fontSize: 21, textAlign: 'left', textAlignVertical: 'top', marginTop: windowHeight * 6.8669527896996 / 100, paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100, width: windowWidth * 54.651162790698 / 100}}>CLAREAMENTO</Text>
                <Text style={{fontFamily: 'Lora_400Regular', color: '#ffffff', fontSize: 10, marginTop: windowHeight * 1.5021459227468 / 100, textAlign: 'left', width: windowWidth * 54.651162790698 / 100, paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100}}>Agende agora sua consulta de clareamento dental e conquiste um sorriso mais brilhante! Não perca tempo, cuide do seu sorriso hoje mesmo!</Text>
              </View>
              <View style={{width: '100%', height: windowHeight * 6.4377682403433 / 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#04102B', borderRadius: 25}}><TouchableOpacity onPress={() => navigation.navigate('Agendamento', { servico: 'Clareamento' })} style={{ backgroundColor: '#ffffff', height: windowHeight * 4.2918454935622 / 100, justifyContent: 'center', borderRadius: 20, width: windowWidth * 17.441860465116 / 100}}><Text style={{flex: 1, color: '#04102B', textAlign: 'center', textAlignVertical: 'center'}}>Agendar</Text></TouchableOpacity></View>
            </ImageBackground>

            <ImageBackground style={{width: windowWidth * 69.767441860465 / 100, height: windowWidth * 69.767441860465 / 100, alignItems: 'center', paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100, alignItems: 'center', justifyContent: 'center', marginBottom: windowHeight * 2.9431330472103 / 100}} source={require('../../assets/implante.png')}>
              <View style={{width: windowWidth * 54.651162790698 / 100, alignItems: 'center', height: windowHeight * 23.605150214592 / 100}}>
                <Text style={{fontFamily: 'Inter_800ExtraBold', fontWeight: 800, color: '#ffffff', fontSize: 21, textAlign: 'left', textAlignVertical: 'top', marginTop: windowHeight * 6.8669527896996 / 100, paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100, width: windowWidth * 54.651162790698 / 100}}>IMPLANTE</Text>
                <Text style={{fontFamily: 'Lora_400Regular', color: '#ffffff', fontSize: 10, marginTop: windowHeight * 1.5021459227468 / 100, textAlign: 'left', width: windowWidth * 54.651162790698 / 100, paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100}}>Agende sua consulta de implante dental e recupere a confiança no seu sorriso com segurança e qualidade!</Text>
              </View>
              <View style={{width: '100%', height: windowHeight * 6.4377682403433 / 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#04102B', borderRadius: 25}}><TouchableOpacity onPress={() => navigation.navigate('Agendamento', { servico: 'Implante' })} style={{ backgroundColor: '#ffffff', height: windowHeight * 4.2918454935622 / 100, justifyContent: 'center', borderRadius: 20, width: windowWidth * 17.441860465116 / 100}}><Text style={{flex: 1, color: '#04102B', textAlign: 'center', textAlignVertical: 'center'}}>Agendar</Text></TouchableOpacity></View>
            </ImageBackground>

            <ImageBackground style={{width: windowWidth * 69.767441860465 / 100, height: windowWidth * 69.767441860465 / 100, alignItems: 'center', paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100, alignItems: 'center', justifyContent: 'center', marginBottom: windowHeight * 2.9431330472103 / 100}} source={require('../../assets/endodontia.png')}>
              <View style={{width: windowWidth * 54.651162790698 / 100, alignItems: 'center', height: windowHeight * 23.605150214592 / 100}}>
                <Text style={{fontFamily: 'Inter_800ExtraBold', fontWeight: 800, color: '#ffffff', fontSize: 21, textAlign: 'left', textAlignVertical: 'top', marginTop: windowHeight * 6.8669527896996 / 100, paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100, width: windowWidth * 54.651162790698 / 100}}>ENDODONTIA</Text>
                <Text style={{fontFamily: 'Lora_400Regular', color: '#ffffff', fontSize: 10, marginTop: windowHeight * 1.5021459227468 / 100, textAlign: 'left', width: windowWidth * 54.651162790698 / 100, paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100}}>Agende sua consulta de endodontia e trate a saúde dos seus dentes de forma completa. Cuide do seu sorriso com quem entende!</Text>
              </View>
              <View style={{width: '100%', height: windowHeight * 6.4377682403433 / 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#04102B', borderRadius: 25}}><TouchableOpacity onPress={() => navigation.navigate('Agendamento', { servico: 'Endodontia' })} style={{ backgroundColor: '#ffffff', height: windowHeight * 4.2918454935622 / 100, justifyContent: 'center', borderRadius: 20, width: windowWidth * 17.441860465116 / 100}}><Text style={{flex: 1, color: '#04102B', textAlign: 'center', textAlignVertical: 'center'}}>Agendar</Text></TouchableOpacity></View>
            </ImageBackground>

            <ImageBackground style={{width: windowWidth * 69.767441860465 / 100, height: windowWidth * 69.767441860465 / 100, alignItems: 'center', paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100, alignItems: 'center', justifyContent: 'center', marginBottom: windowHeight * 2.9431330472103 / 100}} source={require('../../assets/limpeza.png')}>
              <View style={{width: windowWidth * 54.651162790698 / 100, alignItems: 'center', height: windowHeight * 23.605150214592 / 100}}>
                <Text style={{fontFamily: 'Inter_800ExtraBold', fontWeight: 800, color: '#ffffff', fontSize: 21, textAlign: 'left', textAlignVertical: 'top', marginTop: windowHeight * 6.8669527896996 / 100, paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100, width: windowWidth * 54.651162790698 / 100}}>LIMPEZA</Text>
                <Text style={{fontFamily: 'Lora_400Regular', color: '#ffffff', fontSize: 10, marginTop: windowHeight * 1.5021459227468 / 100, textAlign: 'left', width: windowWidth * 54.651162790698 / 100, paddingLeft: windowWidth * 5.8139534883721 / 100, paddingRight: windowWidth * 5.8139534883721 / 100}}>Agende sua consulta de limpeza dental e mantenha seu sorriso saudável e brilhante!</Text>
              </View>
              <View style={{width: '100%', height: windowHeight * 6.4377682403433 / 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#04102B', borderRadius: 25}}><TouchableOpacity onPress={() => navigation.navigate('Agendamento', { servico: 'Limpeza' })} style={{ backgroundColor: '#ffffff', height: windowHeight * 4.2918454935622 / 100, justifyContent: 'center', borderRadius: 20, width: windowWidth * 17.441860465116 / 100}}><Text style={{flex: 1, color: '#04102B', textAlign: 'center', textAlignVertical: 'center'}}>Agendar</Text></TouchableOpacity></View>
            </ImageBackground>
            
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    width: windowWidth * 
    44.186046511628 / 100,
    height: windowHeight * 
    5.2575107296137 / 100,
    marginTop: windowHeight * 
    5.5793991416309 / 100,
    marginRight: windowWidth * 
    5.5813953488372 / 100,
    marginBottom: windowHeight * 3.4334763948498 / 100
  },
  container: {flex: 1, width: '100%', height: '100%', alignItems: 'center', backgroundColor: '#ffffff'},
  exibirAgendado:{
    width: windowWidth * 81.483720930233 / 100,
    height: windowHeight * 14.361587982833 / 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataAgendado:{
    width: windowWidth * 
    22.325581395349 / 100,
    height: windowHeight * 10.085836909871 / 100,
    backgroundColor: '#04102B',
    marginLeft: windowWidth * 3.4883720930233 / 100,
    marginRight: windowWidth * 8.6046511627907 / 100,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  situacaoAgendado:{
    width: windowWidth * 43.720930232558 / 100,
    height: windowHeight * 10.085836909871 / 100,
    backgroundColor: '#04102B',
    borderRadius: 25,
    marginRight: windowWidth * 3.4883720930233 / 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

/*
<View style={styles.container}>

      <Text style={styles.title}>Tela Home</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>
      
    </View>

    const handleLogout = async () => {
        try {
          await logoutUser(); // Chama a função de logout
          console.log('Sucesso', 'Usuário deslogado com sucesso!');
          navigation.navigate('TelaInicial')
        } catch (error) {
          console.log('Erro ao deslogar', error.message); // Mensagem de erro
        }
      };

      import { logoutUser } from '../server/login-cadastro';
*/ 

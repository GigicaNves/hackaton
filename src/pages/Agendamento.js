import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView, Image, Dimensions, ImageBackground, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
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

import AntDesign from '@expo/vector-icons/AntDesign';
import { Calendar } from 'react-native-calendars';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default function Agendamento ({ route, navigation })
{

    const { servico } = route.params

    return(
    <SafeAreaView style={styles.container}>
        
            <ImageBackground
            source={require('../../assets/agendamentoFundo.png')}
            style={{}}
            >

                <View style={{marginTop: windowHeight * 7.9399141630901 / 100}}>
                    <AntDesign name="left" size={45} color="black" style={{alignItems: 'left'}} onPress={() => navigation.goBack()}/>
                </View>


                <View style={{width: windowWidth, height: windowHeight, justifyContent: 'flex-start', alignItems: 'center',}}>
                    <Text style={{color: '#000000', textAlign: 'center', fontSize: 40, width: '100%', fontFamily: 'Lora_600SemiBold', fontWeight: 600}}>{ servico }</Text>
                    
                    <ScrollView style={{width: windowWidth * 90.697674418605 / 100}}>
                    
                        <View style={{width: '100%', alignItems: 'center'}}>
                            <Text style={{marginTop: windowHeight * 7.5107296137339 / 100}}>Nome do paciente</Text>
                            <TextInput style={{}} placeholder='Digite seu nome'/>
                            <Text>Data desejada</Text>
                            <Calendar/>

                            <Text>Horário Desejado</Text>
                            <TextInput placeholder='Digite o horário' />
                            
                            <Text>Informações adicionais</Text>
                            <TextInput style={{height: windowHeight * 14.592274678112 / 100, backgroundColor: '#ffffff', width: windowWidth * 83.255813953488 / 100, textAlign: 'center', textAlignVertical: 'top'}} placeholder='Alguma observação?' multiline={true} />
                            <TouchableOpacity style={{width: windowWidth * 83.255813953488 / 100, backgroundColor: '#04102B', height: windowHeight * 5.3648068669528 / 100, justifyContent: 'center', borderRadius: 20}}><Text style={{color: '#ffffff', textAlign: 'center'}}>Agendar</Text></TouchableOpacity>
                        </View>
                        
                    </ScrollView>
                    
                </View>

            </ImageBackground>
        
    </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#ffffff',
      width: '100%',
      height: '100%'
    },
  });
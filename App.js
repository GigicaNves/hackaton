import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/server/firebaseConfig'; // Certifique-se de que o caminho está correto
import Login from './src/pages/Login'; 
import Home from './src/pages/Home'; // Tela Home para onde o usuário logado será redirecionado
import TelaInicial from './src/pages/TelaInicial';
import Cadastro from './src/pages/Cadastro';

const Stack = createStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState('TelaInicial'); // Define a tela inicial

  // Verifica o estado de autenticação do usuário
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setInitialRoute('Home'); // Redireciona para a tela Home se o usuário estiver logado
      } else {
        setInitialRoute('TelaInicial'); // Redireciona para a tela Login se o usuário não estiver logado
      }
    });

    // Limpa o listener de autenticação quando o componente desmonta
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Perfil from './pages/Perfil'
import Home from './pages/Home'
import Ficha from './pages/Ficha'

const Tab = createBottomTabNavigator();

export default function Routes ()
{
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Ficha" component={Ficha} options={{headerShown: false}} />
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Tab.Screen name="Perfil" component={Perfil} options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
}
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Importando as Telas
import TelaCalcularPrecoGas from './CalcularPrecoGas';
import TelaHome from './TelaHome';
import TelaNoticia from './TelaNoticia';
import TelaBuscar from './TelaBuscar';
import TelaNotificacoes from './TelaNotificacoes';

const Tab = createBottomTabNavigator();

export default function TelaPrincipal() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          activeTintColor: '#000',
          inactiveTintColor: '#000',
          activeBackgroundColor: '#FF0000',
          inactiveBackgroundColor: '#F4DB0B',
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={TelaHome}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CalcularPrecoGas"
          component={TelaCalcularPrecoGas}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="gas-station"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="TelaBuscar"
          component={TelaBuscar}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notificações"
          component={TelaNotificacoes}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="bell-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Noticias"
          component={TelaNoticia}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="newspaper" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

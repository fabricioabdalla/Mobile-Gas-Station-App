import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importação das telas
import TelaLogin from './src/pages/TelaLogin';
import TelaEsqueciMinhaSenha from './src/pages/TelaEsqueciMinhaSenha';
import TelaNovoCadastro from './src/pages/TelaNovoCadastro';
import TelaPrincipal from './src/pages/TelaPrincipal';
import TelaNoticia from './src/pages/TelaNoticia';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaEsqueciMinhaSenha"
          component={TelaEsqueciMinhaSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaNovoCadastro"
          component={TelaNovoCadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaNoticia"
          component={TelaNoticia}
          options={{ headerShown: false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

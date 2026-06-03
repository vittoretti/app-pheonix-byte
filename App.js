import { useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, Platform } from 'react-native';

import TelaProdutos from './telas/TelaProdutos';
import TelaCadastro from './telas/TelaCadastro';
import telaDescricao from './telas/telaDescricao';

const Stack = createNativeStackNavigator();

const Tema = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(117, 117, 117)',
    text: 'rgb(0, 0, 0)',
  },
};

export default function App() {
  const [dadosCliente, setDadosCliente] = useState(null);

  return (
    <NavigationContainer theme={Tema}>
      <Stack.Navigator
        initialRouteName="TelaProdutos"
        screenOptions={{
          headerShown: true,
          headerStatusBarHeight:
            Platform.OS === 'android' ? StatusBar.currentHeight : undefined,
        }}
      >
        <Stack.Screen name="TelaProdutos" options={{ title: 'Produtos' }}>
          {(props) => (
            <TelaProdutos {...props} dadosCliente={dadosCliente} />
          )}
        </Stack.Screen>

        <Stack.Screen name="TelaCadastro" options={{ title: 'Cadastro' }}>
          {(props) => (
            <TelaCadastro
              {...props}
              setDadosCliente={setDadosCliente}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="telaDescricao" options={{ title: 'Descrição do Produto' }}>
          {(props) => (
            <telaDescricao
              {...props}
              dadosCliente={dadosCliente}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
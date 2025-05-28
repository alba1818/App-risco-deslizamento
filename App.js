import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import DataInputScreen from './src/screens/DataInputScreen';
import RiskViewScreen from './src/screens/RiskViewScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import MitigationActionsScreen from './src/screens/MitigationActionsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="DataInput" component={DataInputScreen} options={{ title: 'Inserir Dados' }} />
        <Stack.Screen name="RiskView" component={RiskViewScreen} options={{ title: 'Visualizar Risco' }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'Histórico' }} />
        <Stack.Screen name="Mitigation" component={MitigationActionsScreen} options={{ title: 'Ações de Mitigação' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

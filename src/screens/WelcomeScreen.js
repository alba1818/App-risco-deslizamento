import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌧️ Monitoramento de Riscos de Deslizamentos</Text>
      <Text style={styles.subtitle}>Proteja sua comunidade com dados em tempo real.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DataInput')}
      >
        <Text style={styles.buttonText}>Inserir Dados Ambientais</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RiskView')}
      >
        <Text style={styles.buttonText}>Visualizar Risco Atual</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('History')}
      >
        <Text style={styles.buttonText}>Histórico de Monitoramento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Mitigation')}
      >
        <Text style={styles.buttonText}>Ações de Mitigação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006994', // azul forte
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#cce6ff',
    textAlign: 'center',
    marginBottom: 40,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#00aaff',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#004466',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android shadow
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

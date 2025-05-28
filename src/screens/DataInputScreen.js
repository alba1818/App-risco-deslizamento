import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DataInputScreen() {
  const [humidity, setHumidity] = useState('');
  const [slope, setSlope] = useState('');
  const [riskLevel, setRiskLevel] = useState(null);

  const calculateRisk = (humidity, slope) => {
    const h = parseFloat(humidity);
    const s = parseFloat(slope);
    if (h > 70 && s > 30) return 'Alto';
    if (h > 50 && s > 20) return 'Médio';
    return 'Baixo';
  };

  const saveData = async () => {
    if (!humidity || !slope) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const risk = calculateRisk(humidity, slope);
    setRiskLevel(risk);

    const newRecord = {
      humidity,
      slope,
      risk,
      timestamp: new Date().toISOString(),
    };

    try {
      const existing = await AsyncStorage.getItem('@monitoramento');
      const data = existing ? JSON.parse(existing) : [];
      data.push(newRecord);
      await AsyncStorage.setItem('@monitoramento', JSON.stringify(data));
      Alert.alert('Sucesso', 'Dados salvos com sucesso!');
    } catch (e) {
      Alert.alert('Erro', 'Falha ao salvar os dados');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inserir Dados Ambientais</Text>

      <TextInput
        style={styles.input}
        placeholder="Umidade do Solo (%)"
        keyboardType="numeric"
        value={humidity}
        onChangeText={setHumidity}
      />

      <TextInput
        style={styles.input}
        placeholder="Inclinação do Terreno (°)"
        keyboardType="numeric"
        value={slope}
        onChangeText={setSlope}
      />

      <Button title="Calcular e Salvar" onPress={saveData} />

      {riskLevel && (
        <Text style={styles.result}>
          Nível de Risco: <Text style={{ fontWeight: 'bold' }}>{riskLevel}</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

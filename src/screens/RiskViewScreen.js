import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RiskViewScreen() {
  const [latestData, setLatestData] = useState(null);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const data = await AsyncStorage.getItem('@monitoramento');
        const parsed = data ? JSON.parse(data) : [];
        if (parsed.length > 0) {
          setLatestData(parsed[parsed.length - 1]);
        }
      } catch (error) {
        console.error('Erro ao carregar o último registro:', error);
      }
    };
    fetchLatest();
  }, []);

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Baixo': return '#4CAF50'; // verde
      case 'Moderado': return '#FFC107'; // amarelo
      case 'Alto': return '#F44336'; // vermelho
      default: return '#757575'; // cinza
    }
  };

  if (!latestData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🔍 Sem dados disponíveis</Text>
        <Text style={styles.subtitle}>Insira dados ambientais primeiro.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Última Leitura</Text>

      <View style={styles.card}>
        <Text style={styles.label}>🌧️ Umidade:</Text>
        <Text style={styles.value}>{latestData.humidity}%</Text>

        <Text style={styles.label}>⛰️ Inclinação:</Text>
        <Text style={styles.value}>{latestData.slope}°</Text>

        <Text style={styles.label}>⚠️ Risco Estimado:</Text>
        <Text style={[styles.riskValue, { color: getRiskColor(latestData.risk) }]}>
          {latestData.risk}
        </Text>

        <Text style={styles.timestamp}>
          📅 {new Date(latestData.timestamp).toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#777' },
  card: {
    width: '100%',
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    elevation: 2,
  },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  value: { fontSize: 18, color: '#333' },
  riskValue: { fontSize: 20, fontWeight: 'bold', marginTop: 5 },
  timestamp: { marginTop: 20, textAlign: 'right', color: '#888', fontSize: 12 },
});

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data = await AsyncStorage.getItem('@monitoramento');
        const parsed = data ? JSON.parse(data) : [];
        setHistory(parsed.reverse()); // exibe o mais recente primeiro
      } catch (error) {
        console.error('Erro ao carregar histórico:', error);
      }
    };
    loadHistory();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Data: {new Date(item.timestamp).toLocaleString()}</Text>
      <Text>Umidade: {item.humidity}%</Text>
      <Text>Inclinação: {item.slope}°</Text>
      <Text style={styles.risk}>Risco: {item.risk}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Monitoramento</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum dado registrado ainda.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  risk: { fontWeight: 'bold', marginTop: 5 },
});

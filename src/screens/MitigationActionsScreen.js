import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function MitigationActionsScreen() {
  // Lista fixa de ações de mitigação
  const actions = [
    {
      id: 1,
      title: 'Controle da Vegetação',
      description: 'Plantar árvores e vegetação para estabilizar o solo e reduzir a erosão.'
    },
    {
      id: 2,
      title: 'Drenagem Adequada',
      description: 'Instalar sistemas de drenagem para evitar acúmulo de água e reduzir a umidade do solo.'
    },
    {
      id: 3,
      title: 'Muros de Contenção',
      description: 'Construir muros para conter o movimento do solo em áreas inclinadas.'
    },
    {
      id: 4,
      title: 'Monitoramento Contínuo',
      description: 'Manter sensores e inspeções regulares para identificar riscos precocemente.'
    },
    {
      id: 5,
      title: 'Educação Comunitária',
      description: 'Promover campanhas para conscientizar a população sobre riscos e prevenção.'
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🏞️ Ações de Mitigação</Text>
      {actions.map(action => (
        <View key={action.id} style={styles.card}>
          <Text style={styles.actionTitle}>{action.title}</Text>
          <Text style={styles.actionDescription}>{action.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#005a87',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#999',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#007bb5',
    marginBottom: 6,
  },
  actionDescription: {
    fontSize: 15,
    color: '#444',
    lineHeight: 20,
  },
});

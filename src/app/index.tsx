import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem-vindo ao Reacto! 🚀
      </Text>
      <Text style={styles.subtitle}>
        Seu app React Native está funcionando!
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          App funcionando perfeitamente! ⚡️
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  card: {
    backgroundColor: '#3b82f6',
    padding: 16,
    borderRadius: 8,
  },
  cardText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});
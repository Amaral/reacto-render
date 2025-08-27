import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Button } from '@/components/Button';
import { useCounterStore } from '@/stores/counter';

export default function ProfileScreen() {
  const { count, reset } = useCounterStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário 👤</Text>
      
      <View style={styles.info}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>Dev Reacto</Text>
        
        <Text style={styles.label}>Contador atual:</Text>
        <Text style={styles.value}>{count}</Text>
      </View>

      <View style={styles.actions}>
        <Button title="Reset Contador" onPress={reset} variant="secondary" />
        
        <Link href="/" asChild>
          <Button title="← Voltar" variant="outline" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  info: {
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
  },
  value: {
    fontSize: 18,
    color: '#333',
    marginTop: 4,
  },
  actions: {
    gap: 16,
  },
});
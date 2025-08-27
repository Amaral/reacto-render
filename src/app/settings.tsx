import { View, Text, StyleSheet, Switch } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import { Button } from '@/components/Button';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações ⚙️</Text>
      
      <View style={styles.settings}>
        <View style={styles.setting}>
          <Text style={styles.settingLabel}>Notificações</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
          />
        </View>
        
        <View style={styles.setting}>
          <Text style={styles.settingLabel}>Modo Escuro</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
          />
        </View>
      </View>

      <View style={styles.actions}>
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
  settings: {
    marginBottom: 40,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  actions: {
    gap: 16,
  },
});
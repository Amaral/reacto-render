import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { 
  BellIcon, 
  GlobeIcon, 
  HelpCircleIcon, 
  InfoIcon, 
  LockIcon, 
  MoonIcon, 
  PaletteIcon, 
  ShieldIcon, 
  SunIcon, 
  VolumeXIcon
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Alert, ScrollView, Switch, View } from 'react-native';

type SettingItem = {
  title: string;
  description: string;
  icon: any;
  color: string;
  type: 'toggle' | 'action' | 'theme';
  value?: boolean;
  onPress?: () => void;
  onToggle?: (value: boolean) => void;
};

export default function SettingsScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [notifications, setNotifications] = React.useState(true);
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const [autoBackup, setAutoBackup] = React.useState(false);
  
  const handleAction = (action: string) => {
    switch (action) {
      case 'language':
        Alert.alert('Idioma', 'Funcionalidade em desenvolvimento');
        break;
      case 'privacy':
        Alert.alert('Privacidade', 'Funcionalidade em desenvolvimento');
        break;
      case 'security':
        Alert.alert('Segurança', 'Funcionalidade em desenvolvimento');
        break;
      case 'help':
        Alert.alert('Ajuda', 'Funcionalidade em desenvolvimento');
        break;
      case 'about':
        Alert.alert(
          'Sobre o App',
          'React Native Demo App\nVersão 1.0.0\n\nDesenvolvido com Expo e NativeWind'
        );
        break;
    }
  };

  const settingSections = [
    {
      title: 'Aparência',
      items: [
        {
          title: 'Tema',
          description: `Modo ${colorScheme === 'dark' ? 'escuro' : 'claro'} ativado`,
          icon: colorScheme === 'dark' ? MoonIcon : SunIcon,
          color: 'text-purple-600',
          type: 'theme' as const,
          onPress: toggleColorScheme,
        },
        {
          title: 'Personalização',
          description: 'Customize cores e layout',
          icon: PaletteIcon,
          color: 'text-pink-600',
          type: 'action' as const,
          onPress: () => handleAction('customization'),
        },
      ],
    },
    {
      title: 'Notificações',
      items: [
        {
          title: 'Notificações Push',
          description: 'Receber notificações do app',
          icon: BellIcon,
          color: 'text-blue-600',
          type: 'toggle' as const,
          value: notifications,
          onToggle: setNotifications,
        },
        {
          title: 'Sons',
          description: 'Reproduzir sons de notificação',
          icon: VolumeXIcon,
          color: 'text-orange-600',
          type: 'toggle' as const,
          value: soundEnabled,
          onToggle: setSoundEnabled,
        },
      ],
    },
    {
      title: 'Conta e Segurança',
      items: [
        {
          title: 'Privacidade',
          description: 'Gerencie suas configurações de privacidade',
          icon: LockIcon,
          color: 'text-green-600',
          type: 'action' as const,
          onPress: () => handleAction('privacy'),
        },
        {
          title: 'Segurança',
          description: 'Autenticação e proteção da conta',
          icon: ShieldIcon,
          color: 'text-red-600',
          type: 'action' as const,
          onPress: () => handleAction('security'),
        },
        {
          title: 'Backup Automático',
          description: 'Fazer backup dos dados automaticamente',
          icon: ShieldIcon,
          color: 'text-indigo-600',
          type: 'toggle' as const,
          value: autoBackup,
          onToggle: setAutoBackup,
        },
      ],
    },
    {
      title: 'Geral',
      items: [
        {
          title: 'Idioma',
          description: 'Português (Brasil)',
          icon: GlobeIcon,
          color: 'text-cyan-600',
          type: 'action' as const,
          onPress: () => handleAction('language'),
        },
        {
          title: 'Ajuda e Suporte',
          description: 'Obtenha ajuda e entre em contato',
          icon: HelpCircleIcon,
          color: 'text-yellow-600',
          type: 'action' as const,
          onPress: () => handleAction('help'),
        },
        {
          title: 'Sobre',
          description: 'Informações sobre o aplicativo',
          icon: InfoIcon,
          color: 'text-gray-600',
          type: 'action' as const,
          onPress: () => handleAction('about'),
        },
      ],
    },
  ];

  const renderSettingItem = (item: SettingItem, index: number) => (
    <Card key={index}>
      <CardHeader 
        className={item.type !== 'toggle' ? 'cursor-pointer' : ''}
        onTouchEnd={item.type !== 'toggle' ? item.onPress : undefined}
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3 flex-1">
            <View className={`p-2 rounded-full ${colorScheme === 'dark' ? 'bg-muted' : 'bg-gray-100'}`}>
              <Icon as={item.icon} className={`size-4 ${item.color}`} />
            </View>
            <View className="flex-1">
              <CardTitle className="text-base">
                {item.title}
              </CardTitle>
              <CardDescription>
                {item.description}
              </CardDescription>
            </View>
          </View>
          
          {item.type === 'toggle' && (
            <Switch
              value={item.value}
              onValueChange={item.onToggle}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={item.value ? '#f5dd4b' : '#f4f3f4'}
            />
          )}
          
          {item.type === 'theme' && (
            <Button size="sm" variant="outline" onPress={item.onPress}>
              <Text>Alternar</Text>
            </Button>
          )}
        </View>
      </CardHeader>
    </Card>
  );

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Header */}
      <View className="px-4 py-6 pt-12">
        <Text className="text-2xl font-bold mb-2">Configurações</Text>
        <Text className="text-muted-foreground mb-6">
          Personalize sua experiência no aplicativo
        </Text>
      </View>

      {/* Settings Sections */}
      <View className="px-4 pb-6">
        {settingSections.map((section, sectionIndex) => (
          <View key={sectionIndex} className="mb-6">
            <Text className="text-lg font-semibold mb-3">
              {section.title}
            </Text>
            <View className="gap-3">
              {section.items.map((item, itemIndex) => 
                renderSettingItem(item, itemIndex)
              )}
            </View>
          </View>
        ))}
      </View>

      {/* App Version */}
      <View className="px-4 pb-8">
        <Card>
          <CardContent className="items-center py-6">
            <Text className="text-sm text-muted-foreground mb-2">
              React Native Demo App
            </Text>
            <Text className="text-xs text-muted-foreground">
              Versão 1.0.0 • Build 1
            </Text>
            <Text className="text-xs text-muted-foreground mt-1">
              Desenvolvido com ❤️ usando Expo
            </Text>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
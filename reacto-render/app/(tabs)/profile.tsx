import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { 
  EditIcon, 
  LogOutIcon, 
  MailIcon, 
  PhoneIcon, 
  ShieldIcon, 
  UserIcon,
  CalendarIcon,
  MapPinIcon
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Alert, ScrollView, View } from 'react-native';

const PROFILE_STATS = [
  {
    label: 'Pedidos',
    value: '47',
    color: 'text-blue-600',
  },
  {
    label: 'Favoritos',
    value: '23',
    color: 'text-red-600',
  },
  {
    label: 'Avaliações',
    value: '156',
    color: 'text-yellow-600',
  },
];

const PROFILE_ACTIONS = [
  {
    title: 'Editar Perfil',
    description: 'Atualize suas informações pessoais',
    icon: EditIcon,
    color: 'text-blue-600',
    action: 'edit',
  },
  {
    title: 'Segurança',
    description: 'Gerencie senha e autenticação',
    icon: ShieldIcon,
    color: 'text-green-600',
    action: 'security',
  },
  {
    title: 'Sair da Conta',
    description: 'Fazer logout do aplicativo',
    icon: LogOutIcon,
    color: 'text-red-600',
    action: 'logout',
  },
];

export default function ProfileScreen() {
  const { colorScheme } = useColorScheme();
  const { user } = useUser();
  const { signOut } = useAuth();
  
  const handleAction = (action: string) => {
    switch (action) {
      case 'edit':
        Alert.alert('Editar Perfil', 'Funcionalidade em desenvolvimento');
        break;
      case 'security':
        Alert.alert('Segurança', 'Funcionalidade em desenvolvimento');
        break;
      case 'logout':
        Alert.alert(
          'Sair da Conta',
          'Tem certeza que deseja sair?',
          [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Sair', style: 'destructive', onPress: () => signOut() },
          ]
        );
        break;
    }
  };
  
  const formatDate = (date: Date | null) => {
    if (!date) return 'Não informado';
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Header */}
      <View className="px-4 py-6 pt-12">
        <Text className="text-2xl font-bold mb-6">Meu Perfil</Text>
        
        {/* Profile Card */}
        <Card className="mb-6">
          <CardHeader className="items-center pb-4">
            <View className="w-20 h-20 bg-primary rounded-full items-center justify-center mb-4">
              {user?.imageUrl ? (
                <Text className="text-2xl font-bold text-primary-foreground">
                  {user.firstName?.charAt(0) || user.emailAddresses[0]?.emailAddress.charAt(0) || 'U'}
                </Text>
              ) : (
                <Icon as={UserIcon} className="size-10 text-primary-foreground" />
              )}
            </View>
            <CardTitle className="text-xl text-center">
              {user?.fullName || 'Usuário'}
            </CardTitle>
            <CardDescription className="text-center">
              {user?.emailAddresses[0]?.emailAddress || 'email@exemplo.com'}
            </CardDescription>
          </CardHeader>
          
          {/* Stats */}
          <CardContent>
            <View className="flex-row justify-around border-t border-border pt-4">
              {PROFILE_STATS.map((stat, index) => (
                <View key={index} className="items-center">
                  <Text className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </Text>
                  <Text className="text-sm text-muted-foreground">
                    {stat.label}
                  </Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>
      </View>

      {/* Profile Information */}
      <View className="px-4 pb-6">
        <Text className="text-lg font-semibold mb-3">Informações Pessoais</Text>
        
        <Card className="mb-6">
          <CardContent className="gap-4">
            <View className="flex-row items-center gap-3">
              <Icon as={MailIcon} className="size-5 text-muted-foreground" />
              <View className="flex-1">
                <Text className="font-medium">Email</Text>
                <Text className="text-sm text-muted-foreground">
                  {user?.emailAddresses[0]?.emailAddress || 'Não informado'}
                </Text>
              </View>
            </View>
            
            <View className="flex-row items-center gap-3">
              <Icon as={PhoneIcon} className="size-5 text-muted-foreground" />
              <View className="flex-1">
                <Text className="font-medium">Telefone</Text>
                <Text className="text-sm text-muted-foreground">
                  {user?.phoneNumbers[0]?.phoneNumber || 'Não informado'}
                </Text>
              </View>
            </View>
            
            <View className="flex-row items-center gap-3">
              <Icon as={CalendarIcon} className="size-5 text-muted-foreground" />
              <View className="flex-1">
                <Text className="font-medium">Membro desde</Text>
                <Text className="text-sm text-muted-foreground">
                  {formatDate(user?.createdAt || null)}
                </Text>
              </View>
            </View>
            
            <View className="flex-row items-center gap-3">
              <Icon as={MapPinIcon} className="size-5 text-muted-foreground" />
              <View className="flex-1">
                <Text className="font-medium">Localização</Text>
                <Text className="text-sm text-muted-foreground">
                  São Paulo, Brasil
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>
      </View>

      {/* Profile Actions */}
      <View className="px-4 pb-6">
        <Text className="text-lg font-semibold mb-3">Ações da Conta</Text>
        
        <View className="gap-3">
          {PROFILE_ACTIONS.map((action, index) => (
            <Card key={index}>
              <CardHeader 
                className="cursor-pointer"
                onTouchEnd={() => handleAction(action.action)}
              >
                <View className="flex-row items-center gap-3">
                  <Icon as={action.icon} className={`size-5 ${action.color}`} />
                  <View className="flex-1">
                    <CardTitle className="text-base">
                      {action.title}
                    </CardTitle>
                    <CardDescription>
                      {action.description}
                    </CardDescription>
                  </View>
                  <Icon as={EditIcon} className="size-4 text-muted-foreground" />
                </View>
              </CardHeader>
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { 
  BellIcon, 
  CheckIcon, 
  InfoIcon, 
  MessageSquareIcon, 
  ShieldAlertIcon,
  TrendingUpIcon 
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const NOTIFICATIONS_DATA = [
  {
    id: 1,
    title: 'Nova venda realizada',
    description: 'Você recebeu um novo pedido no valor de R$ 299,90',
    time: '2 min atrás',
    icon: TrendingUpIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    unread: true,
  },
  {
    id: 2,
    title: 'Mensagem recebida',
    description: 'João Silva enviou uma nova mensagem',
    time: '15 min atrás',
    icon: MessageSquareIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    unread: true,
  },
  {
    id: 3,
    title: 'Atualização de segurança',
    description: 'Nova atualização de segurança disponível',
    time: '1 hora atrás',
    icon: ShieldAlertIcon,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    unread: false,
  },
  {
    id: 4,
    title: 'Relatório mensal',
    description: 'Seu relatório mensal está pronto para visualização',
    time: '2 horas atrás',
    icon: InfoIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    unread: false,
  },
  {
    id: 5,
    title: 'Backup concluído',
    description: 'O backup dos seus dados foi concluído com sucesso',
    time: '1 dia atrás',
    icon: CheckIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    unread: false,
  },
];

export default function NotificationsScreen() {
  const { colorScheme } = useColorScheme();
  const [notifications, setNotifications] = React.useState(NOTIFICATIONS_DATA);
  
  const unreadCount = notifications.filter(n => n.unread).length;
  
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };
  
  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, unread: false } : n)
    );
  };

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Header */}
      <View className="px-4 py-6 pt-12">
        <View className="flex-row items-center justify-between mb-4">
          <View>
            <Text className="text-2xl font-bold">Notificações</Text>
            <Text className="text-muted-foreground">
              {unreadCount > 0 ? `${unreadCount} não lidas` : 'Todas as notificações lidas'}
            </Text>
          </View>
          <Icon as={BellIcon} className="size-6 text-muted-foreground" />
        </View>
        
        {unreadCount > 0 && (
          <Button 
            onPress={markAllAsRead} 
            size="sm" 
            variant="outline" 
            className="self-start"
          >
            <Text>Marcar todas como lidas</Text>
          </Button>
        )}
      </View>

      {/* Notifications List */}
      <View className="px-4 pb-6">
        <View className="gap-3">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={notification.unread ? 'border-l-4 border-l-blue-500' : ''}
            >
              <CardHeader className="pb-3">
                <View className="flex-row items-start justify-between">
                  <View className="flex-row items-center gap-3 flex-1">
                    <View className={`p-2 rounded-full ${colorScheme === 'dark' ? 'bg-muted' : notification.bgColor}`}>
                      <Icon 
                        as={notification.icon} 
                        className={`size-4 ${notification.color}`} 
                      />
                    </View>
                    <View className="flex-1">
                      <CardTitle className="text-base">
                        <Text>{notification.title}</Text>
                        {notification.unread && (
                          <View className="ml-2 w-2 h-2 bg-blue-500 rounded-full" />
                        )}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {notification.description}
                      </CardDescription>
                    </View>
                  </View>
                  <Text className="text-xs text-muted-foreground">
                    {notification.time}
                  </Text>
                </View>
              </CardHeader>
              {notification.unread && (
                <CardContent className="pt-0">
                  <Button 
                    onPress={() => markAsRead(notification.id)}
                    size="sm" 
                    variant="ghost" 
                    className="self-start"
                  >
                    <Text>Marcar como lida</Text>
                  </Button>
                </CardContent>
              )}
            </Card>
          ))}
        </View>
        
        {notifications.length === 0 && (
          <View className="items-center justify-center py-12">
            <Icon as={BellIcon} className="size-12 text-muted-foreground mb-4" />
            <Text className="text-lg font-medium text-muted-foreground">
              Nenhuma notificação
            </Text>
            <Text className="text-sm text-muted-foreground text-center mt-2">
              Quando você receber notificações, elas aparecerão aqui
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
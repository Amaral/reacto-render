import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { UserMenu } from '@/components/user-menu';
import { useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { 
  ActivityIcon, 
  BarChart3Icon, 
  CalendarIcon, 
  MoonStarIcon, 
  SunIcon, 
  TrendingUpIcon,
  UsersIcon 
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const STATS_DATA = [
  {
    title: 'Total de Vendas',
    value: 'R$ 45.231',
    change: '+20.1%',
    icon: BarChart3Icon,
    color: 'text-green-600',
  },
  {
    title: 'Novos Usuários',
    value: '2.350',
    change: '+180.1%',
    icon: UsersIcon,
    color: 'text-blue-600',
  },
  {
    title: 'Atividade',
    value: '12.234',
    change: '+19%',
    icon: ActivityIcon,
    color: 'text-purple-600',
  },
  {
    title: 'Crescimento',
    value: '+573',
    change: '+201%',
    icon: TrendingUpIcon,
    color: 'text-orange-600',
  },
];

export default function HomeScreen() {
  const { colorScheme } = useColorScheme();
  const { user } = useUser();
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Bom dia' : currentHour < 18 ? 'Boa tarde' : 'Boa noite';

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-6 pt-12">
        <View>
          <Text className="text-2xl font-bold">
            {greeting}{user?.firstName ? `, ${user.firstName}` : ''}!
          </Text>
          <Text className="text-muted-foreground">
            Aqui está o resumo do seu dia
          </Text>
        </View>
        <View className="flex-row gap-2">
          <ThemeToggle />
          <UserMenu />
        </View>
      </View>

      {/* Stats Grid */}
      <View className="px-4 pb-6">
        <View className="flex-row flex-wrap gap-3">
          {STATS_DATA.map((stat, index) => (
            <View key={index} className="flex-1 min-w-[160px]">
              <Card>
                <CardHeader className="pb-2">
                  <View className="flex-row items-center justify-between">
                    <Icon as={stat.icon} className={`size-5 ${stat.color}`} />
                    <Text className={`text-xs font-medium ${stat.color}`}>
                      {stat.change}
                    </Text>
                  </View>
                </CardHeader>
                <CardContent>
                  <Text className="text-2xl font-bold">{stat.value}</Text>
                  <Text className="text-xs text-muted-foreground">
                    {stat.title}
                  </Text>
                </CardContent>
              </Card>
            </View>
          ))}
        </View>
      </View>

      {/* Quick Actions */}
      <View className="px-4 pb-6">
        <Text className="text-lg font-semibold mb-3">Ações Rápidas</Text>
        <View className="gap-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex-row items-center gap-2">
                <Icon as={CalendarIcon} className="size-5 text-blue-600" />
                <Text>Agenda do Dia</Text>
              </CardTitle>
              <CardDescription>
                Você tem 3 reuniões agendadas para hoje
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                <Text>Ver Agenda</Text>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex-row items-center gap-2">
                <Icon as={BarChart3Icon} className="size-5 text-green-600" />
                <Text>Relatórios</Text>
              </CardTitle>
              <CardDescription>
                Visualize os relatórios de performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" variant="outline" className="w-full">
                <Text>Ver Relatórios</Text>
              </Button>
            </CardContent>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button onPress={toggleColorScheme} size="icon" variant="ghost" className="rounded-full">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}

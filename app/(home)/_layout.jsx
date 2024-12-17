import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tabs
                screenOptions={{ tabBarActiveTintColor: 'green', tabBarInactiveTintColor: 'gray' }}
            // option={{ tabBarActiveTintColor: '#012001', tabBarBarInactiveTintColor: 'gray' }}
            >
                <Tabs.Screen
                    name="index"
                    // screenOptions={{}} 
                    options={{
                        headerShown: false,
                        tabBarIcon: (({ color }) => <Ionicons name='home' size={20} color={color} />),
                        tabBarLabel: 'Home'

                    }}
                />
                <Tabs.Screen
                    name="topup"
                    options={{
                        headerShown: true,
                        tabBarIcon: (({ color }) => <Ionicons name='cash' size={20} color={color} />),
                        tabBarLabel: 'Top Up',
                        headerTitle: 'Top Up'
                    }}
                />
                <Tabs.Screen
                    name="transfer"
                    options={{
                        headerShown: true,
                        tabBarIcon: (({ color }) => <Ionicons name='send' size={20} color={color} />),
                        tabBarLabel: 'Transfer',
                        headerTitle: 'Transfer'
                    }}

                />
            </Tabs>
        </SafeAreaView>
    );
}
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'gray', tabBarShowLabel: false, tabBarStyle: { backgroundColor: 'white' } }}>
                <Tabs.Screen
                    name="index"
                    // screenOptions={{}} 
                    options={{
                        headerShown: false,
                        tabBarIcon: (() => <Ionicons name='home' color='red' size={32} />),

                    }}
                />
                <Tabs.Screen
                    name="topup"
                    options={{
                        headerShown: false
                    }}
                />
                <Tabs.Screen
                    name="transfer"
                    options={{
                        headerShown: false
                    }}

                />
            </Tabs>
        </SafeAreaView>
    );
}
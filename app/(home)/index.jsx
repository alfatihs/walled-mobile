import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import DashboardBody from '../../components/DashboardBody';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <DashboardBody />
            <Link href='/(home)'>Ke Home</Link>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%'
    },
});
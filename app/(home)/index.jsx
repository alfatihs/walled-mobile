import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import DashboardBody from '../../components/DashboardBody';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
export default function Home() {
    useEffect(() => {
        console.log('use effect!');
        const getToken = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token !== null) {
                    console.log('token ada', token)
                    const res = await axios.get(`${apiUrl}/transactions`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    if (res.status === 200) {
                        console.log(res.data.data, 'ini data transaksi');
                    }
                }
            } catch (err) {
                console.log(err, 'error get token')
            }
        }
        getToken()
    }, [])
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
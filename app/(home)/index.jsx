import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import DashboardBody from '../../components/DashboardBody';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function Home() {
    const [profileData, setProfileData] = useState({
        id: '',
        name: '',
        email: '',
        balance: 0,
        imgurl: '',
        noaccount: ''
    })
    const [userTransactions, setUserTransactions] = useState(
        [{
            id: 0,
            amount: 0,
            type: '',
            description: '',
            fromto: 0,
            datetime: '',
            user_id: 0
        }]

    )
    useEffect(() => {
        console.log('use effect!');
        const getData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token !== null) {
                    console.log('token ada', token)
                    try {
                        const res_user = await axios.get(`${apiUrl}/profile`, {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        })
                        if (res_user.status === 200) {
                            console.log(res_user.data.data, 'ini data user');
                            setProfileData(res_user.data.data)
                            // console.log(profileData, 'ini profile data terbaru')
                        }
                    } catch (err) {
                        console.log(err.response.data, 'error get user data')
                    }
                    try {
                        const res = await axios.get(`${apiUrl}/transactions`, {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        })
                        if (res.status === 200) {
                            console.log(res.data.data, 'ini data transaksi');
                            setUserTransactions(res.data.data)
                            // console.log(userTransactions, 'ini user transactions terbaru')
                        }
                    } catch (err) {
                        console.log(err, 'error get user transactions')
                    }
                }
            } catch (err) {
                console.log(err, 'error get token')
            }
        }
        getData()
    }, [])

    useEffect(() => {
        console.log('Updated profileData:', profileData);
    }, [profileData]);

    useEffect(() => {
        console.log('Updated userTransactions:', userTransactions);
    }, [userTransactions]);
    return (
        <View style={styles.container}>
            <Header name={profileData.name} imgurl={profileData.imgurl} />
            <DashboardBody balance={profileData.balance} noaccount={profileData.noaccount} name={profileData.name} transactions={userTransactions} />
            <Link href='/login'>Login!</Link>
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
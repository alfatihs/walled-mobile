import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, StyleSheet, Image } from 'react-native';
import LoginIcon from '../assets/icon.png';
import { Link, router } from 'expo-router';
import Checkbox from 'expo-checkbox';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import { z } from 'zod';
import axios from 'axios';


const RegisterSchema = z.object({
    name: z.string().min(3, { message: 'name is at least 3 characters' }),
    email: z.string().email({ message: "Invalid email addres" }),
    password: z.string().min(5, { message: 'password is at least 5 characters' })
})

const apiUrl = process.env.EXPO_PUBLIC_API_URL;


export default function Register() {
    const [isChecked, setChecked] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [errorsMsg, setErrors] = useState({})
    const [serverError, setServerError] = useState("");

    const handleInputChange = (key, value) => {
        setForm({ ...form, [key]: value })
        try {
            RegisterSchema.pick({ [key]: true }).parse({ [key]: value })
            setErrors((prev) => ({ ...prev, [key]: "" }))
        } catch (err) {
            setErrors((prev) => ({ ...prev, [key]: err.errors[0].message }))
        }
    }

    const handleSubmit = async () => {
        console.log('submit!', form);
        try {
            RegisterSchema.parse(form);
            console.log('axios!')
            const res = await axios.post(`${apiUrl}/auth/register`, form);
            if (res) {
                // console.log(res, 'res')
                alert('Register Berhasil!');
                router.replace('/login')
            }else{
                alert('Register Gagal!');
            }
        } catch (err) {
            console.log(err, 'error')
            setServerError(err.response.data.error);
            const validation = err.errors;
            const errors = {}
            validation.map((item) => {
                const key = item.path[0];
                errors[key] = item.message;
            })
        }
    }

    return (
        <View style={[styles.container, { flexDirection: 'column' }]}>
            <StatusBar style="dark" />
            <Image source={LoginIcon} style={styles.iconImage} />
            <TextInput style={styles.input} placeholder='Fullname' onChangeText={(text) => { handleInputChange('name', text) }} />
            {errorsMsg.name && <Text style={styles.errorMessage}>{errorsMsg.name}</Text>}
            <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' onChangeText={(text) => { handleInputChange('email', text) }} />
            {errorsMsg.email && <Text style={styles.errorMessage}>{errorsMsg.email}</Text>}
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} onChangeText={(text) => { handleInputChange('password', text) }} />
            {errorsMsg.password && <Text style={styles.errorMessage}>{errorsMsg.password}</Text>}
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', columnGap: 10 }}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <Text >I have read and agree to the <Link href='/tnc'><Text style={{ color: '#19918f' }}>Terms and Conditions </Text></Link><Text style={{ color: 'red' }}>*</Text></Text>
            </View>
            <PrimaryButton text='Register' handlePress={handleSubmit} />
            <Text style={styles.serverError}>{serverError}</Text>
            <View style={{ flexDirection: 'row', width: '100%', gap: 4, marginTop: 10 }}>
                <Text style={styles.loginDesc}>have account? </Text>
                <Link href='/login'><Text style={{ fontWeight: 'bold' }}>Login Here</Text></Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontWeight: '800',
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        paddingTop: 100,
        padding: 35,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
        fontSize: 16,
    },
    button: {
        margin: 10,
        backgroundColor: '#4DB6AC',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        width: '100%',
        alignItems: 'center',
    },
    loginText: {
        fontWeight: 'bold',
        color: "#fff",
    },
    iconImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    errorMessage: {
        width: '100%',
        color: 'red',
        marginTop: -10,
        marginBottom: 10,
    },
    serverError: {
        width: '100%',
        marginTop: 10,
        color: 'red'
    },

});

import { View, Text } from 'react-native';
import { useState } from 'react';
import TransferInput from '../../components/TranferInput';
import PrimaryButton from '../../components/PrimaryButton';
import Ionicons from '@expo/vector-icons/Ionicons'
export default function TopUp() {

    const [amount, setAmount] = useState('');
    const [notes, setNotes] = useState('');

    return (
        <View style={{ paddingHorizontal: 30, paddingVertical: 30, flex: 1, justifyContent: 'space-between' }}>
            <View style={{ rowGap: 25 }}>
                <TransferInput title='Amount' subtitle='IDR' value={amount} setValue={setAmount}></TransferInput>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16 }}>BYOND Pay</Text>
                    <Ionicons name='chevron-down' size={20} />
                </View>
                <TransferInput title='' subtitle='Notes' value={notes} setValue={setNotes}></TransferInput>
            </View>
            <PrimaryButton text='Top Up'></PrimaryButton>
        </View>
    )
}
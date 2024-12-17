
import { View, Text, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
export default function TransferInput({ title = 'Amount', subtitle = 'IDR', value = '', setValue = () => { } }) {

    const [input, setInput] = useState('');

    useEffect(() => {
        setInput(value);
    }, [value])


    return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }}>
            {title.length > 0 && (<Text style={{ fontSize: 16, color: 'grey' }}>{title}</Text>)}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, columnGap: 16 }}>
                <Text style={[value.length !== 0 ? { color: 'black' } : { color: 'grey' }, { marginTop: 20, minWidth: 40 }]}>{subtitle}</Text>
                <TextInput
                    placeholder={'input amount'}
                    style={{ flex: 1, fontSize: 36 }}
                    value={input}
                    onChangeText={(text) => {
                        setInput(text);
                        setValue(text);
                    }}
                ></TextInput>
            </View>
        </View >
    )
}
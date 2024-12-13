import { View, StyleSheet, Pressable, Text } from 'react-native'
import { Icon } from 'react-native-vector-icons/FontAwesome'
export default function ThemeToggle() {
    return (
        <Pressable onPress={() => console.log('hai')}>
            <Text>Button</Text>
            {/* <Icon name="moon" size={24} color="black"></Icon> */}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 5,
        padding: 10,
    }
})


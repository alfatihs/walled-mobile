import { StyleSheet, View, Image } from 'react-native';

export default function ProfilePhoto({ imgurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kFH8DUKQhgdW1dkuo5C51YAPLuDB3vtcAw&s' }) {
    return (
        <Image
            style={styles.image}
            src={imgurl}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 75,
        borderWidth: 3,
        borderColor: '#19918F',
    },
});

import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image, Modal, Pressable, ScrollView, SafeAreaView } from 'react-native';

import { useState } from 'react';


export default function Tnc() {
    return (
        <SafeAreaView>
            <ScrollView style={styles.modalContent}>

                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    fullModalView: {
        width: '100%',
        minHeight: '100%',
        backgroundColor: 'white'
    },
    modalContent: {
        textAlign: 'justify',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    modalHeader: {
        fontSize: 60,
        fontWeight: 'bold',
    }
});
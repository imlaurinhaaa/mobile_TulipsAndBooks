import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>De um nome para nossa linda capivara! 🌸</Text>
            <TextInput style={styles.input} placeholder='Digite aqui'></TextInput>
            <TouchableOpacity style={styles.button}>
                <Button title='Fazer Carinho' onPress={() => alert('Capivaras amam um pouco de carinho 😍')} color="#DA387C" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 18,
    },

    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
    },

    button: {
        marginTop: 20,
        width: 200,
        boxShadow: '4px 4px 4px rgb(186, 45, 104)',
    },
});
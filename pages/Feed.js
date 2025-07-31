import React from 'react';
import Post from '../components/Post';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Post />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FB8DA0',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
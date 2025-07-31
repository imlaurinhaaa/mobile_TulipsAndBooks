import React from 'react';
import Post from '../components/Post';
import { StyleSheet, View, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
    return (
            <ImageBackground
              source={require("../assets/fundoHome (6).png")}
              style={styles.background}
              resizeMode="cover"
            >
                <ScrollView>
        <View style={styles.container}>
            <Post />
            <Post />
            <Post />
        </View>
        </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },

});
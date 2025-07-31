import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/fundoHome (6).png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <View style={styles.div}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText1}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.buttonText}>Cadastra-se</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  logo: {
    width: 300,
    height: 300,
    marginBottom: 80,
    marginTop: -80,
  },
  div: {
    width: "80%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  button1: {
    backgroundColor: "#F9F1F0",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: "50%",
    borderColor: "#FB8DA0",
    borderWidth: 2,
    boxShadow: "4px 4px 4px rgb(214, 104, 150)",
    shadowColor: "#000",
  },
  button2: {
    backgroundColor: "#FB8DA0",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: "50%",
    borderColor: "#FB8DA0",
    borderWidth: 2,
    boxShadow: "4px 4px 4px rgb(214, 104, 150)",
    shadowColor: "#000",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonText1: {
    color: "#FB8DA0",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Image,
    Modal,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableWithoutFeedback } from "react-native";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMsg, setModalMsg] = useState("");
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [successModalMsg, setSuccessModalMsg] = useState("");

    useEffect(() => {
        const carregarCredenciais = async () => {
            const emailSalvo = await SecureStore.getItemAsync("userEmail");
            const senhaSalva = await SecureStore.getItemAsync("userPassword");

            if (emailSalvo && senhaSalva) {
                setEmail(emailSalvo);
                setPassword(senhaSalva);
            }
        };
        carregarCredenciais();
    }, []);

    const handleLogin = async () => {
        if (!email || !password) {
            setModalMsg("Email e senha devem ser preenchidos.");
            setModalVisible(true);
            return;
        }
        try {
            await SecureStore.setItemAsync("userEmail", email);
            await SecureStore.setItemAsync("userPassword", password);
            setSuccessModalMsg("Login realizado e dados salvos!");
            setSuccessModalVisible(true);
            setTimeout(() => {
                setSuccessModalVisible(false);
                navigation.navigate("Feed");
            }, 1000); 
        } catch (error) {
            setModalMsg("Erro ao salvar os dados de login.");
            setModalVisible(true);
        }
    };

    return (
        <ImageBackground
            source={require("../assets/fundoHome (6).png")}
            style={styles.background}
        >
            <View style={styles.container}>
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="fade"
                >
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <View style={styles.modalContainer}>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalContent}>
                                    <Text style={styles.modalText}>{modalMsg}</Text>
                                    <TouchableOpacity
                                        style={styles.modalButton}
                                        onPress={() => setModalVisible(false)}
                                    >
                                        <Text style={styles.modalButtonText}>OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <Modal
                    transparent={true}
                    visible={successModalVisible}
                    animationType="fade"
                >
                    <TouchableWithoutFeedback onPress={() => setSuccessModalVisible(false)}>
                        <View style={styles.modalContainer}>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalContent}>
                                    <Text style={styles.modalText}>{successModalMsg}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <Image
                    source={require("../assets/iconLogin.png")}
                    style={styles.iconOverlay}
                />
                <View style={styles.div}>
                    <TextInput
                        style={styles.input1}
                        placeholder="Email"
                        placeholderTextColor="#747474"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={[styles.input, { paddingRight: 40 }]}
                            placeholder="Password"
                            placeholderTextColor="#747474"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={styles.eyeIcon}
                        >
                            <Icon
                                name={showPassword ? "visibility" : "visibility-off"}
                                size={20}
                                color="#747474"
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    div: {
        width: "90%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(251, 141, 159, 0.53)",
        paddingTop: 50,
        paddingBottom: 50,
        paddingHorizontal: 20,
        borderRadius: 20,
        position: "relative",
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 60,
        marginTop: -80,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 20,
    },
    input1: {
        width: "90%",
        backgroundColor: "#FFF",
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#E0D6CC",
        height: 50,
        paddingVertical: 10,
    },
    input: {
        width: "100%",
        backgroundColor: "#FFF",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E0D6CC",
        height: 50,
    },
    button: {
        width: "90%",
        backgroundColor: "#FB6B90",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    passwordContainer: {
        position: "relative",
        width: "90%",
        marginBottom: 15,
    },
    eyeIcon: {
        position: "absolute",
        right: 15,
        top: "50%",
        transform: [{ translateY: -10 }],
    },
    person: {
        marginBottom: -40,
    },
    iconOverlay: {
        position: "absolute",
        top: 190,
        alignSelf: "center",
        zIndex: 1,
        width: 100,
        height: 100,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 30,
        borderRadius: 10,
        alignItems: "center",
        width: "80%",
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    modalButton: {
        backgroundColor: "#FB6B90",
        padding: 10,
        borderRadius: 5,
    },
    modalButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    successModalContent: {
        backgroundColor: "#4CAF50",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        width: "80%",
    },
    successModalText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        marginVertical: 0, // Adicionado para remover margens verticais desnecessárias
        paddingVertical: 0, // Adicionado para ajustar o espaçamento interno
    },
});

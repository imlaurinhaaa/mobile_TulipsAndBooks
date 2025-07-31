import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity, Modal, Image, ScrollView, TextInput } from 'react-native';

// ...existing code...
export default function Post() {

    const [liked, setLiked] = useState(false);
    const [modalCommentVisible, setModalCommentVisible] = useState(false);
    const [modalShareVisible, setModalShareVisible] = useState(false);
    const [modalVerMaisVisible, setModalVerMaisVisible] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    }


    return (
        <View style={styles.postContainer}>
            <Image
                style={styles.postImage}
                source={require('../assets/capa_assimqueacaba.png')}
            />

            <View style={styles.postFunctions}>
                <TouchableOpacity onPress={handleLike} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome
                        name={liked ? "heart" : "heart-o"}
                        size={24}
                        color={liked ? "red" : "black"}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setModalCommentVisible(true)}>
                    <FontAwesome name="comment-o" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setModalShareVisible(true)}>
                    <FontAwesome name="share" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Modal de Comentário */}
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalCommentVisible}
                onRequestClose={() => setModalCommentVisible(false)}>
                <View style={styles.overlay}>
                    <View style={styles.modalContainerComment}>
                        <Text style={styles.textComment}>Seja o primeiro comentário!</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu comentário aqui"
                            multiline
                            numberOfLines={4}
                        />
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalCommentVisible(false)}>
                            <Text style={styles.buttonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal de Compartilhamento */}
            <Modal
                transparent={true}
                visible={modalShareVisible}
                                animationType="slide"
                onRequestClose={() => setModalShareVisible(false)}>
                <View style={styles.overlay}>
                    <View style={styles.modalContainerShare}>
                        <Text style={{alignItems: 'center', color: '#ffff', fontSize: 20}}>Compartilhar</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, gap: 10 }}>
                        <Image style={styles.imageShare}
                            source={require('../assets/zap.jpg')} />
                        <Image style={styles.imageShare}
                            source={require('../assets/tiktok.png')} />
                        <Image style={styles.imageShare}
                            source={require('../assets/link.png')} />
                            </View>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalShareVisible(false)}>
                            <Text style={styles.buttonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal Ver Mais */}
            <Modal
                transparent={true}
                visible={modalVerMaisVisible}
                                animationType="slide"
                onRequestClose={() => setModalVerMaisVisible(false)}>
                <View style={styles.overlay}>
                    <View style={styles.modalContainerVerMais}>
                        <ScrollView contentContainerStyle={{ padding: 20 }}>
                            <Image
                                style={styles.postImageModal}
                                source={require('../assets/assimqueacaba1.png')}
                            />
                            <Text style={{ color: '#000', marginTop: 20, paddingHorizontal: 10, fontWeight: 'bold' }}>Detalhes do livro: É ASSIM QUE ACABA 🤍🌸</Text>
                            <Text style={{ color: '#000', marginTop: 20, paddingHorizontal: 10 }}>
                                Conta a história de Lily Bloom, uma jovem que tem um sonho de abrir uma floricultura. Lily acaba conhecendo Ryle Kincaid, um neurocirurgião atraente e bem-sucedido, e eles iniciam um relacionamento intenso e apaixonado.
                                melhor livro que já li em toda minha VIDA!!! juro que livro fantástico, sempre que eu parava de ler dava vontade de ler mais.
                                motivo do meu colapso: Atlas Corrigan kkk, ele aborda temas bem importantes como a violência doméstica e mostra como a personagem sofreu com tudo isso, foi um dos livros que me fez me apaixonar a ler e me fez amar e acompanhar a Colleen Hoover, recomendo muitoo, leitura fácil e rápida e sem palavras difíceis, eu amei
                            </Text>
                            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVerMaisVisible(false)}>
                                <Text style={styles.buttonText}>Fechar</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity style={styles.postDescription} onPress={() => setModalVerMaisVisible(true)}>
                <Text style={styles.postText}>
                    É ASSIM QUE ACABA 🤍🌸 <Text style={styles.negrito}>Ver mais...</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}
// ...existing code...

const styles = StyleSheet.create({
    postContainer: {
        width: 330,
        alignItems: "center",
        height: 380,
        backgroundColor: "#ffffff",
        borderRadius: 20,
    },
    postImage: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginTop: 35,
    },
    likeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#DA387C',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    modalContainerVerMais: {
        width: 330,
        height: 500,
        backgroundColor: "#ffffff",
        borderRadius: 20,
    },
    modalContainerComment: {
        width: 330,
        height: 300,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        padding: 25,
    },
    modalContainerShare: {
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    postImageModal: {
        width: 250,
        height: 250,
        borderRadius: 10,
    },
    modalText: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 20,
    },
    closeButton: {
        padding: 10,
        backgroundColor: '#DA387C',
        borderRadius: 5,
        marginTop: 20,
    },

    closeButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
    postFunctions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    negrito: {
        fontWeight: 'bold',
    },
    postDescription: {
        padding: 10,
    },
    textComment: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    input: {
        height: 50,
        borderColor: "#DA387C",
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 100,
        margin: 2,
        fontSize: 16,
        backgroundColor: "#ffffff",
    },
    imageShare: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },

});
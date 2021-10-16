import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Switch, StatusBar, Modal, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';



export function ConfigBar(props) {
    
    
    const [isEnabled, setIsEnabled] = useState(false);
    const [modalOpen, setModalOpen] = React.useState(null);
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" backgroundColor="#183557" />
            <View style={styles.status}>
                <TouchableOpacity style={styles.bars}>
                    <Ionicons name="menu" size={27} color="white" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.textNome2}>{props.nome}</Text>
                </View>
                <View style={styles.rightBar}>
                    <TouchableOpacity onPress={() => setModalOpen(true)} style={styles.settings}>
                        <Ionicons name="settings-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.viewIcon}>
                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                        <Ionicons name="arrow-up" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                        <Text style={styles.textIcon}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.background}>
                    <View>
                        <Text style={styles.modalTitle}>Atualizaçôes</Text>
                        <Text style={styles.modalTitle}>Ao desativar, você não receberá mais as atualizações dos planos.</Text>
                        <Switch>
                        </Switch>
                    </View>
                    <View style={styles.containerCampos}>
                        <Text style={styles.modalTitle}>Novidades</Text>
                        <Text style={styles.modalTitle}>Permite que você receba as novidades dos planos existentes e novos.</Text>
                        <Switch>
                        </Switch>
                    </View>
                    <View style={styles.containerBotao}>
                        <Text style={styles.modalTitle}>Gerais</Text>
                        <Text style={styles.modalTitle}>Notifica o status atual dos serviços, caso estejam com algum problema.</Text>
                        <Switch>
                        </Switch>
                    </View>
                    <View style={styles.containerBotao}>
                        <Text style={styles.modalTitle}>Destivar</Text>
                        <Text style={styles.modalTitle}>Ao desativar, você não receberá mais nenhuma notificação.</Text>
                        <Switch>
                        </Switch>
                    </View>
                </View>
            </Modal>
        </View>


    )

}


const styles = StyleSheet.create({
    status: {
        display: "flex",
        backgroundColor: "#183557",
        borderBottomRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10
    },
    bars: {
        marginRight: 15,
        marginLeft: 15
    },
    textNome: {
        lineHeight: 25,
        marginTop: 15,
        fontSize: 18,
        color: "white"
    },
    textNome2: {
        lineHeight: 25,
        marginTop: 17,
        marginBottom: 20,
        fontSize: 18,
        color: "white"
    },
    textEmail: {
        lineHeight: 25,
        marginBottom: 15,
        fontSize: 14,
        color: "white"
    },
    container: {
        display: "flex",
        alignContent: "center"
    },
    rightBar: {
        flex: 1
    },
    settings: {
        alignItems: "flex-end",
        marginRight: 25
    },
    //Modal
    background: {
        flex: 1,
        backgroundColor: "#EAEAEA",
        height: "100%",
        alignItems: "center"
    },
    modalTitle: {
        fontSize: 18,
        color: "black",
        margin: 22,
        marginBottom: 0
    },
    campos: {
        width: 280,
        height: 40,
        marginBottom: 15,
        marginHorizontal: 40,
        backgroundColor: "#36B8B8",
        paddingLeft: 10,

    },
    containerCampos: {
        marginBottom: 0
    },
    botaoModal: {
        width: 100,
        alignItems: "center",
        justifyContent: "center"
    },
});
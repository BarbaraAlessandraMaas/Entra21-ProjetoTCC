import React from "react";
import { Modal, StyleSheet, View, Text } from "react-native";

export function TelaOpcoes() {
    // const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={styles.container}>
            <Modal visible={false}>
                <View style={styles.modalSobre}>
                    <Text>
                        Desenvolvido pela equipe App-in Five, 2021.
                    </Text>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalSobre: {
        backgroundColor: "#183557"
    }
});
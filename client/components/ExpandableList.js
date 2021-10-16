import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function ExpandableList({ item, onClickFunction }) {
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setLayoutHeight(null);
        } else {
            setLayoutHeight(3);
        }
    }, [item.isExpanded]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item} onPress={onClickFunction}>
                <Text style={styles.itemText}>{item.ds_velocidade}</Text>
                <AntDesign style={styles.icon} name="down" size={24} color="white" />
            </TouchableOpacity>

            <View style={{ height: layoutHeight, overflow: "hidden", marginBottom: 40 }}>
                {
                    item.subcategory.map((item) => (
                        <TouchableOpacity style={styles.content}>
                            <Text style={styles.valorPlano}>
                                {item.vl_plano}
                            </Text>
                            <Text style={styles.descricaoPlano}>
                                {item.ds_plano}
                            </Text>
                            <View style={styles.separator} />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#36B8B8",
        padding: 20,
        color: "white"
    },
    itemText: {
        fontSize: 24,
        fontWeight: "500",
        padding: 10,
        color: "white"
    },
    icon: {
        paddingTop: 15,
        paddingRight: 10
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#EAEAEA",
        borderBottomRightRadius: 10
    },
    valorPlano: {
        fontSize: 30,
        paddingTop: 25,
        paddingLeft: 25
    },
    descricaoPlano: {
        fontSize: 14,
        paddingLeft: 25,
        paddingTop: 15,
        paddingBottom: 30
    },
    separator: {
        height: 0.5,
        backgroundColor: "#EAEAEA",
        width: "100%"
    }
});
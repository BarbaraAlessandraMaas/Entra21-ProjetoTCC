import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export function ExpandableList({ item, onClickFunction }) {
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setLayoutHeight(null);
        } else {
            setLayoutHeight(0);
        }
    }, [item.isExpanded]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item} onPress={onClickFunction}>
                <Text style={styles.itemText}>
                    {item.categoryName}
                </Text>
                <AntDesign style={styles.icon} name="down" size={24} color="black" />
            </TouchableOpacity>
            <View style={{ height: layoutHeight, overflow: "hidden", marginBottom: 40 }}>
                {
                    item.subcategory.map((item, key) => (
                        <TouchableOpacity key={key} style={styles.content}>
                            <Text style={styles.text}>
                                {key}. {item.val}
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
        backgroundColor: "#EAEAEA",
        padding: 20
    },
    itemText: {
        fontSize: 24,
        fontWeight: "500"
    },
    icon: {
        textAlign: "right"
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#fff"
    },
    text: {
        fontSize: 18,
        padding: 10
    },
    separator: {
        height: 0.5,
        backgroundColor: "#EAEAEA",
        width: "100%"
    }
});
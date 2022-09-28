import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Start = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenidos al item shop</Text>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Categories")}>
            <View>
                <Image
                source={require('../../../assets/img/oh.png')}
                style={{width: 300, height: 300, marginBottom:20,}}
                />
            </View>
            <View>
                <Text style={styles.text}>
                    Ver categorias
                </Text>
            </View>
            </TouchableOpacity>
        </View>
    )
};

export default Start;
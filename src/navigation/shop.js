import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Start, Categories, Products, } from "../screens";
import { Image, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Start">
            <Stack.Screen name="Home" component={Start} options={styles.header}/>
            <Stack.Screen name="Categories" component={Categories} options={styles.header}/>
            <Stack.Screen name="Products" component={Products} options={styles.header}/>
        </Stack.Navigator>
    )
}

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../../assets/img/icon.png')}
        />
    );
}

const styles = StyleSheet.create({
    header: {
        headerStyle: {
            backgroundColor: '#e5ecdc',
        },
        headerTitle: () => <LogoTitle />,
    }
})

export default ShopNavigator;
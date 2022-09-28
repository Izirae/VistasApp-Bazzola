import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <View style={styles.categoriesContainer}>
                <View style={styles.categories}>
                    <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                        <Button
                            title="Fighter"
                            color={'#c8aa6b'}
                        />
                        <Image
                            source={require('../../../assets/img/Fighter_icon.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.categories}>
                    <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                        <Button
                            title="Marksman"
                            color={'#c8aa6b'}
                        />
                        <Image
                            source={require('../../../assets/img/Marksman_icon.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.categories}>
                    <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                        <Button
                            title="Assassin"
                            color={'#c8aa6b'}
                        />
                        <Image
                            source={require('../../../assets/img/Slayer_icon.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.categoriesContainer}>
                <View style={styles.categories}>
                    <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                        <Button
                            title="Mage"
                            color={'#c8aa6b'}
                        />
                        <Image
                            source={require('../../../assets/img/Mage_icon.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                <View style={styles.categories}>
                    <Button
                        title="Tank"
                        color={'#c8aa6b'}
                        onPress={() => navigation.navigate("Products")}
                    />
                    <Image
                        source={require('../../../assets/img/Tank_icon.png')}
                        style={styles.image}
                    />
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                <View style={styles.categories}>
                    <Button
                        title="Support"
                        color={'#c8aa6b'}
                        onPress={() => navigation.navigate("Products")}
                    />
                    <Image
                        source={require('../../../assets/img/Support_icon.png')}
                        style={styles.image}
                    />
                </View>
                </TouchableOpacity>
            </View>

        </View>
    )
};

export default Categories;
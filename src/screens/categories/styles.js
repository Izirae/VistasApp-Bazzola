import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#021622",
        alignItems: "center",
        justifyContent: "flex-start", 
    },
    title: {
        marginVertical:20,
        marginBottom: 50,
        fontFamily: 'Lato-Bold',
        fontSize:40,
        color: '#e5ecdc',
    },
    categoriesContainer:{
        
        flexDirection: "row",
    },
    categories:{
        width:125,
        height:200,
        margin:3,
        color:'black',
        backgroundColor:'#042e48',
        borderRadius: 5,
    },
    image:{
        width: 125,
        height: 125,
        marginTop:15,
        borderRadius:50,
    }

})
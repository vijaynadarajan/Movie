import React from "react";
import {View,Text,StyleSheet} from "react-native";

export default function Detailsscreen(){
    return(
        <View style={styles.container} >
            <Text> Detailsscreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
})
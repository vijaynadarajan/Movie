import React from "react";
import {View,Text,StyleSheet,TextInput} from "react-native";

export default function Inputcomponent({placeholder}){
    return(
        <View style={styles.container} >
            <TextInput style={{paddingTop:10,paddingLeft:10 ,fontWeight:"bold",color:"black",fontSize:15,}} placeholder={placeholder} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        
      width:"100%",
      height:50,
      borderRadius:50,
      backgroundColor:"#fff",
      borderWidth:1,
    },
})
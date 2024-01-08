import React from "react";
import {View,Text,StyleSheet} from "react-native";



export default function ButtonComponent({name}){
    return(
        <View style={styles.container} >
            <Text style={{paddingTop:16,alignSelf:"center",fontWeight:"bold",color:"#fff",fontSize:18,}} >{name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        
      width:"85%",
      height:60,
      borderRadius:50,
      backgroundColor:"#rgba(143, 59, 242, 0.8)",
    },
})
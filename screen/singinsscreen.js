import React from "react";
import {View,StyleSheet,TouchableOpacity} from "react-native";
//import component 
import SinginsBody from "../component/singinbody";
import Singinbodyimage from "../component/singinbodyimage";
import ButtonComponent from "../component/buttoncomponent";

export default function Singinscreen({navigation}){
    return(
        <View style={styles.container} >
           <Singinbodyimage />
           
           <SinginsBody />
           <TouchableOpacity style={{justifyContent:"center",alignItems:"center",}} onPress={()=>navigation.navigate("CustomerInterface")} >
                <ButtonComponent name={"Sing Up"} />
             </TouchableOpacity>  
     
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      
        width:"100%",
        height:"100%",

    },
})
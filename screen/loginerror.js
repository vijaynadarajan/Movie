import React from "react";
import {View,Text,StyleSheet, Image,TouchableOpacity, Alert} from "react-native";

//component import 
import Inputcomponent from "../component/inputecomponent";
import ButtonComponent from "../component/buttoncomponent";

export default function Loginerror(){
    return(
        <View style={styles.container} >
             <View style={{width:130,height:130,borderRadius:70,overflow:"hidden",}}>
                  <Image style={{width:"100%",height:"100%",}} source={{uri:"https://yt3.googleusercontent.com/ytc/AIf8zZTE0uP-2Av5E41LjpJnTIzbNhIgEM5DQX0mmU98EQ=s900-c-k-c0x00ffffff-no-rj"}} />
             </View>
             <View style={{justifyContent:"center",alignItems:"center",top:10,}}> 
                 <Text style={{fontWeight:"bold",fontSize:25,}}>Forgot Password</Text>
                 <Text style={{fontSize:15,top:10,}}>No worries, we'll help you regain access</Text>      
            </View>
            <View style={{top:40,width:"85%",height:100,}}>                    
                         <Inputcomponent  placeholder={"Username"} />
            </View>
            <TouchableOpacity style={{top:10,alignItems:"center",width:"100%"}} onPress={()=>Alert.alert("Sent OTP youre egister Email")}>
                        <ButtonComponent name={"Recvive credentials"} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
   

    },
})
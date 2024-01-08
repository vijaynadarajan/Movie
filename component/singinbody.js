import React from "react";
import {View,Text,StyleSheet, TouchableOpacity} from "react-native";

//componet import 
import Inputcomponent from "./inputecomponent";
import PasswordButton from "./passwordButton";

export default function SinginsBody(){
    return(
        <View style={styles.container} >
      
             <View style={{top:40,left:18,}}>
                  <Text style={{fontWeight:"bold",fontSize:25,}}>Create an Account</Text>
            </View>
             <View style={{width:320,height:330,top:60,left:17,}}>
                 <View style={{paddingHorizontal:10,paddingVertical:7,}} >    
                        <Inputcomponent  placeholder="Email" />
                 </View>     
                 <View  style={{paddingHorizontal:10,paddingVertical:7,}}>    
                       <PasswordButton placeholder="Password" />
                 </View> 
                 <View  style={{paddingHorizontal:10,paddingVertical:7,}}>    
                       <Inputcomponent placeholder="Name" />
                 </View> 
                 <View  style={{paddingHorizontal:10,paddingVertical:7,}}>    
                       <Inputcomponent placeholder="PhoneNumber" />
                 </View> 
                 <View  style={{paddingHorizontal:10,paddingVertical:7,}}>    
                       <Inputcomponent placeholder="Email Address" />
                 </View> 
            </View> 
           
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
       
       
        width:"100%",
        height:440,
  
          backgroundColor:"#f0f0f0",
          borderTopRightRadius:35,
          borderTopLeftRadius:35,
    },
})
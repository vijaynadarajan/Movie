import React from "react";
import {View,Text,StyleSheet, Image, TouchableOpacity, } from "react-native";

//import components
import Inputcomponent from "../component/inputecomponent";
import ButtonComponent from "../component/buttoncomponent";
import PasswordButton from "../component/passwordButton";

export default function Loginscreen({navigation}){
    return(
        <View style={styles.container} >
            
            <View style={{width:350,height:200,left:10}} >
                <Image style={{width:"100%",height:"100%",}} source={require("../assets/loginimgae.png")} />
            </View>

            <View style={{justifyContent:"center",alignItems:"center",top:10,}}> 
                 <Text style={{fontWeight:"bold",fontSize:25,}}>MovieTrack</Text>
                 <Text style={{fontSize:15,top:10,}}>Your favorite Movie at youre fingertips!</Text>      
            </View>
             <View style={{width:"100%",height:190,top:30,paddingHorizontal:10,}}>
                    <View style={{top:10,}}>                    
                         <Inputcomponent  placeholder={"Email"} />
                    </View>
     
                    <View style={{top:20,}} >                    
                         <PasswordButton  placeholder={"Password"} />
                    </View>
                    <TouchableOpacity style={{alignItems:"flex-end",top:30,}} onPress={()=>navigation.navigate("LogError")}>
                         <Text>Forgot your password?</Text>
                    </TouchableOpacity>

             </View>
             <View style={{width:"100%",height:230,}}>
                    <TouchableOpacity style={{top:10,alignItems:"center",}} onPress={()=>navigation.navigate("CustomerInterface")}>
                        <ButtonComponent name={"Sing in"} />
                    </TouchableOpacity>
                    <View style={{top:"20%",alignItems:"center",}}>
                        <Text>---------------------------------- or ----------------------------------</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center",top:70,left:15,}}>
                        <View style={{width:150,height:50,}}>
                             <ButtonComponent name={"Facebook"} />
                        </View>
                        <View style={{width:150,height:50,}}>
                             <ButtonComponent name={"Google"} />
                        </View>
                    </View>

             </View>
             <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}} onPress={()=>navigation.navigate("SingIN")} >
                <Text style={{fontWeight:"bold",fontSize:13,}}>Need an account? Register</Text>
             </TouchableOpacity>
    
      
        

            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:"#fff",

    },
})
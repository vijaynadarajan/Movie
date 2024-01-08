import React from "react";
import {View,Text,StyleSheet, Image, StatusBar,TouchableOpacity} from "react-native";

//components import 
import ButtonComponent from "../component/buttoncomponent";

export default function Welcomepage({navigation}){
    return(
        <View style={styles.container} >
            <StatusBar />
            
           
             <View style={{width:"100%",height:350,top:20,}}>
                  <Image style={{width:"100%",height:"100%",}} source={require("../assets/welcomepage.png")}/>
             </View>

             <View style={{justifyContent:"center",alignItems:"center"}}>
                  <View style={{top:45,}}>
                      <Text style={{fontWeight:"bold",fontSize:35,}}>MovieMate</Text>
                  </View> 
                  <View style={{top:60,alignItems:"center",}}>
                      <Text style={{fontSize:20,}}>Discover and</Text>
                      <Text style={{fontSize:20,}}>search fot movies</Text>
                  </View>  
             </View>
             <TouchableOpacity style={{top:180 ,alignItems:"center",}} onPress={()=>navigation.navigate("LogIN")}>
                <ButtonComponent name="Get Started" />
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
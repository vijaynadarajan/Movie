import React from "react";
import {View,Text,StyleSheet, ImageBackground} from "react-native";
//import component 


export default function Singinbodyimage(){
    return(
        <View style={styles.container} >
           
            <ImageBackground style={{width:"100%",height:250,}} source={{uri:"https://us.123rf.com/450wm/dacosta/dacosta2306/dacosta230600057/206208406-generative-ai-illustration-of-crowd-of-multiracial-people-in-casual-outfits-walking-on-city-square.jpg?ver=6"}} >
                 <View style={{top:80,alignItems:"center"}}>
                     <Text style={{color:"#fff",fontWeight:"bold",fontSize:30}}>Discover Movies</Text>
                      <Text style={{color:"#fff",fontSize:15}} >Find your next favorite movie</Text>
          
                  </View>
            </ImageBackground>  
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{

        width:"100%",
        height:200,

    },
})
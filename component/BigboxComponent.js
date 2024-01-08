import React from "react";
import {View,Text,StyleSheet,Image, ImageBackground} from "react-native";

export default function BigbocComponent(){
    return(
        <View style={styles.container} >
            
                 <ImageBackground style={{width:"100%",height:"100%",}} source={{uri:"https://chokhidhani.com/village-fair-restaurant-jaipur/wp-content/uploads/2022/08/1.webp"}}>
                      <View style={{width:"100%",height:50,borderTopRightRadius:20,borderTopStartRadius:20,backgroundColor:"white",top:100,}}>
                             <View style={{left:15,top:3,}}> 
                                  <Text style={{fontWeight:"bold",fontSize:15,}}>Incredible action</Text>
                                  <Text style={{fontSize:15,top:4,}}>Tadeas izo</Text>      
                            </View>
                      </View>
                  </ImageBackground>
      
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
 
      width:280,
      height:150,
      overflow:"hidden",
      backgroundColor:"pink",
       borderRadius:15,
       backgroundColor:"yellow",
      
      
     
    },
})
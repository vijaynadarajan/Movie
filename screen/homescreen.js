import React from "react";
import {View,Text,StyleSheet,Image, Pressable,TouchableOpacity,ImageBackground, ScrollView} from "react-native";

import Bigboxdata from "../datastore/bigboxdata";
import Movietype from "../datastore/moviegenres"
import Smallboxdata from "../datastore/smallboxdata"
//icons imports
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//import firebase 

function Homescreen (){

    return(
         
        <View style={styles.container} >
         <ScrollView> 
            <View style={{width:"100%",height:64,top:10,flexDirection:"row",}}>
                <View style={{width:64,height:"100%",left:20,backgroundColor:"pink",borderRadius:50,overflow:"hidden",}}>
                     <Image style={{width:"100%",height:"100%",}} source={{uri:"https://www.bollywoodhungama.com/wp-content/uploads/2020/02/allu-arjun.jpg"}} />
                </View>
                <View style={{justifyContent:"center",left:30,}}>
                       <Text style={{fontWeight:"bold",fontSize:20}}>Hello ,</Text>
                       <Text>Lorem ipsum</Text>
                </View>
            </View>
 {/*mostpopular title and arrow fullcode */}         
            <View style={{width:"100%",height:40,top:20,flexDirection:"row",}}>
                    <View style={{justifyContent:"center",left:15}}>
                            <Text style={{fontWeight:"bold"}}>Most Popular Movies</Text>
                    </View>
                    <View style={{top:10,left:170,flexDirection:"row"}}>
                             <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                             <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
                    </View>
            </View>
 {/*bigbox fullcode */}        
             <View style={{flexDirection:"row",top:30}}>    
                  <ScrollView horizontal={true} >
                         {Bigboxdata.map((Demodata)=>( 
                     <Pressable  style={{width:250,height:160,borderTopRightRadius:20,borderTopStartRadius:20,marginHorizontal:5,overflow:"hidden",shadowColor:"black",shadowRadius:50,}} >   
                      
                         <ImageBackground style={{width:"100%",height:"100%"}} source={{uri:Demodata.image}}>

                             <View style={{width:"100%",height:40,paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"space-between"}} >
                                  <View style={{top:10,paddingLeft:10,width:78,height:25,borderRadius:10,backgroundColor:"#rgba(213, 96, 248, 0.8)"}}>   
                                       <Text style={{fontSize:15,color:"#fff"}}>premium</Text>   
                                  </View>
                                  <View style={{top:10,paddingLeft:3,paddingTop:3,width:45,height:25,borderRadius:10,backgroundColor:"#rgba(213, 96, 248, 0.8)",flexDirection:"row",}}> 
                                        <Entypo name="star" size={15} color="black" />
                                        <Text style={{fontSize:15,color:"#fff"}}>4.9</Text>   
                                  </View>
                                 
                             </View>
                             <View style={{width:"100%",height:50,borderTopRightRadius:20,borderTopStartRadius:20,backgroundColor:"white",top:70,}}>
                                  <View style={{left:15,top:3,}}> 
                                       <Text style={{fontWeight:"bold",fontSize:15,}}>{Demodata.titles}</Text>
                                       <Text style={{fontSize:15,top:4,}}>{Demodata.details}</Text>      
                                 </View>
                             </View>
                         </ImageBackground> 
                    
                     </Pressable> ))}  
                  </ScrollView>   
                 </View> 
 {/*Quick movie picks title and arrow fullcode */}         
      <View style={{width:"100%",height:40,top:40,flexDirection:"row",}}>
                    <View style={{justifyContent:"center",left:15}}>
                            <Text style={{fontWeight:"bold"}}>Quick movie picks </Text>
                    </View>
                    <View style={{top:10,left:170,flexDirection:"row"}}>
                             <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                             <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
                    </View>
            </View>
 {/*smallbox fullcode */}        
             <View style={{flexDirection:"row",top:50}}>    
                  <ScrollView horizontal={true} >
                         {Smallboxdata.map((Smallbox)=>(
                     <Pressable style={{width:150,height:160,borderTopRightRadius:20,borderTopStartRadius:20,marginHorizontal:5,overflow:"hidden",shadowColor:"black",shadowRadius:50,}} onPress={()=>console.log("press samll box")} >   
                      
                         <ImageBackground style={{width:"100%",height:"100%"}} source={{uri:Smallbox.image}}>

                             <View style={{width:"100%",height:40,paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"flex-end"}} >
                             
                                  <View style={{top:10,paddingLeft:3,paddingTop:3,width:45,height:25,borderRadius:10,backgroundColor:"#rgba(213, 96, 248, 0.8)",flexDirection:"row",}}> 
                                        <Entypo name="star" size={15} color="black" />
                                        <Text style={{fontSize:15,color:"#fff"}}>4.9</Text>   
                                  </View>
                                 
                             </View>
                             <View style={{width:"100%",height:50,borderTopRightRadius:20,borderTopStartRadius:20,backgroundColor:"white",top:70,}}>
                                  <View style={{left:15,top:3,}}> 
                                       <Text style={{fontWeight:"bold",fontSize:15,}}>{Smallbox.titles}</Text>
                                       <Text style={{fontSize:15,top:4,}}>{Smallbox.details}</Text>      
                                 </View>
                             </View>
                         </ImageBackground> 
                    
                     </Pressable>
                 ))}  
                  </ScrollView>   
                 </View>   
 {/*Movie genres fullcode */}         
   <View style={{width:"100%",height:40,top:70,}}>
                    <View style={{justifyContent:"center",left:15}}>
                            <Text style={{fontWeight:"bold",fontSize:18}}>Movie genres </Text>
                    </View>
            </View>
 {/*categorry fullcode */}        
            <View style={{flexDirection:"row",top:80}}>    
                  <ScrollView horizontal={true} >
                     {Movietype.map((Movielistdatabase)=>(
                          <Pressable style={{width:80,height:170,marginHorizontal:5,overflow:"hidden",shadowColor:"black",shadowRadius:50,}}  >   
                                  <View style={{width:70,height:70,backgroundColor:"#rgba(213, 96, 248, 0.8)",left:6,borderRadius:20,justifyContent:"center",alignItems:"center",}}> 
                                       <Ionicons name="md-football-outline" size={36} color="black" />
                                 </View>
                                 <View style={{justifyContent:"center",alignItems:"center",top:10,}}>
                                    <Text>{Movielistdatabase.filmtype}</Text>
                                 </View>
                          </Pressable>
                       ))}  
                </ScrollView>   
            </View>   
           <View style={{width:"100%",height:100,}}>

           </View>


            </ScrollView>  
             </View>
    
          
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
     

    },
    Bigboxstyle:{
        width:80,
        height:150,
        overflow:"hidden",
        backgroundColor:"pink",
         borderRadius:15,
         backgroundColor:"yellow",
    },
})

export default Homescreen;
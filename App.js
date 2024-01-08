import { StatusBar } from 'expo-status-bar';
import {  Text, View, } from 'react-native';
//navigate install
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
// stack navigation screen import 
import Welcomepage from "./screen/Welcomepage";
import SinginScreen from "./screen/singinsscreen";
import Loginscreen from "./screen/loginscreen";
import Loginerror from './screen/loginerror';
// BottonTab navigation screen import 
import Homescreen from "./screen/homescreen";
import Detailsscreen from "./screen/detailsscreen";
import Downloadscreen from "./screen/downlodscreen";
//icons import 
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';



//store stacks
const Stack = createNativeStackNavigator();
const BottonTab = createBottomTabNavigator();

const CustomerLogin =()=>(
  <Stack.Navigator >
    <Stack.Screen options={{headerShown:false}}  name='WelcomePage' component={Welcomepage} />
    <Stack.Screen options={{headerShown:false}} name='SingIN' component={SinginScreen} />
    <Stack.Screen options={{headerShown:false}} name='LogIN' component={Loginscreen} />
    <Stack.Screen options={{headerShown:false}} name='LogError' component={Loginerror} />
  </Stack.Navigator>
)
const CustomerInterface =()=>(
  <BottonTab.Navigator   screenOptions ={{tabBarStyle:{backgroundColor:"#rgba(234, 41, 238, 0.8)",borderRadius:99,},}}>
    <BottonTab.Screen options={{headerShown:false,tabBarIcon: ({size,color }) => (<Entypo name="home" size={size} color={color} />),tabBarActiveTintColor:"#rgba(242, 249, 82, 0.8)" ,}}  name='Home' component={Homescreen} />
    <BottonTab.Screen options={{headerShown:false,tabBarIcon: ({size,color }) => (<Ionicons name="navigate-circle-outline" size={size} color={color} />),tabBarActiveTintColor:"#rgba(242, 249, 82, 0.8)" ,}}  name='Details' component={Detailsscreen} />
    <BottonTab.Screen options={{headerShown:false,tabBarIcon: ({size,color }) => (<Fontisto name="download" size={size} color={color}/>),tabBarActiveTintColor:"#rrgba(242, 249, 82, 0.8)" ,}}  name='Download' component={Downloadscreen} />
  </BottonTab.Navigator>
)






export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
           <Stack.Screen options={{headerShown:false}} name='Customer' component={CustomerLogin} />
           <Stack.Screen options={{headerShown:false}} name='CustomerInterface' component={CustomerInterface} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}



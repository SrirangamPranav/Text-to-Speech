import React,{Component} from "react"
import{Button,View,TouchableOpacity,Text,StyleSheet,TextInput,Image} from "react-native"
import {Audio} from "expo-av"
import Appheader from './components/Appheader'
import * as Speech from 'expo-speech'
import {SafeAreaProvider,SafeAreaView} from "react-native-safe-area-context"
export default class App extends Component{
  constructor(){
    super()
    this.state={
      text:""
    }
  }
  speak=()=>{
    var thingtosay=this.state.text
    this.state.text===""
    ?alert("Please enter some word")
    : Speech.speak(this.state.text)
  }
  render(){
    return(
      <SafeAreaProvider>
      <View style={styles.container}>
      <Appheader/>
     <Image style={styles.imageicon} source={{uri:'https://addons.cdn.mozilla.net/user-media/previews/full/219/219717.png?modified=1622132156'}}>
        </Image>
        <Text style={{fontWeight:700,fontSize:25,textAlign:"center",marginTop:30}}>Enter A Word</Text>
      <TextInput
      style={
        styles.inputbox
      }
      onChangeText={
          text=>{
            this.setState({
              text:text
            })
            
          }
        }
        value={
           this.state.text
        }
        >
      </TextInput>
      <TouchableOpacity style={styles.gobutton} onPress={()=>{
       this.speak()
      }}><Text style={styles.buttontext}>Go</Text></TouchableOpacity>
      </View>
      </SafeAreaProvider>
    )
  }
}
const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:"white"
  },
  inputbox:{
  marginTop:80,
  width:"80%",
  alignSelf:"center",
  height:40,
  textAlign:"center",
  borderWidth:4,
  outLine:"none"
  },
  gobutton:{
   width:"50%",
   height:55,
   alignSelf:"center",
   padding:10,
  },
  buttontext:{
   textAlign:"center",
   fontSize:30,
   fontWeight:"bold"
  },
  
  imageicon:{
     width:150,
     height:150,
     marginLeft:95,
  },
 
});
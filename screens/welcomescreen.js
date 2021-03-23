import React from 'react'
import{TextInput,TouchableOpacity,View,StyleSheet,Text} from "react-native"
import db from '../config'
import firebase from 'firebase'
import {Input,Icon} from "react-native-elements" 
export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
        }
    }
    userlogin=()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.emailId,this.state.password).then((response)=>{
        alert("user login confirmed")
        this.props.navigation.navigate("HomeScreen")
        }).catch((error)=>{
         alert(error)   
        })
    
    }
    userlogin2=()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.emailId,this.state.password).then((response)=>{
        alert("user login confirmed")
        this.props.navigation.navigate("TeacherScreen")
        }).catch((error)=>{
         alert(error)   
        })
    
    }
    render(){
        return(
            <View>
                 <Input 
             placeholder={"EmailId"}
             leftIcon= {{type:"font-awesome", name:"id-card"}}
              onChangeText={(text)=>{
                 this.setState({
                     emailId:text
                 })
             }} />
            <Input 
            placeholder={"Password"}
            leftIcon= {{type:"font-awesome", name:"lock"}}
            onChangeText={(text)=>{
                this.setState({
                    password:text
                })
            }}
            secureTextEntry={true} />
            <TouchableOpacity style={{width:200,height:30,borderWidth:3,backgroundColor:"orange"}} onPress={()=>{
             this.userlogin()   
            }}>
            <Text>Student Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:200,height:30,borderWidth:3,backgroundColor:"orange"}} onPress={()=>{
                
           this.userlogin2()         
            
            }}>
            <Text>Teacher Login</Text>
            </TouchableOpacity>
            </View>
        

            
            
        )
    }
} 

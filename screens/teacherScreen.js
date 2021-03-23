import React from "react"
import {View,Text,TouchableOpacity} from 'react-native'
import {Input,Icon} from 'react-native-elements'
import firebase from 'firebase'
import db from '../config'
export default class TeacherScreen extends React.Component{
    constructor(){
        super()
        this.state={
         subject:"",
         homework:"",

        }
    }
    addHomework=()=>{
        db.collection("homework").add({
            subject:this.state.subject,
            homework:this.state.homework,
           
        })
    }
    render(){
        return(
            <View>
                <Input
                placeholder={"Subject"}
                leftIcon={{type:"font-awesome",name:"book"}}
                onChangeText={(text)=>{
                    this.setState({
                        subject:text
                    })
                }}>
                </Input>
                
                <Input
                placeholder={"Homework"}
                leftIcon={{type:"font-awesome",name:"book"}}
                onChangeText={(text)=>{
                    this.setState({
                        homework:text
                    })
                }}></Input>
                <TouchableOpacity
                style={{backgroundColor:"orange",borderRadius:3,width:200,height:30,alignSelf:"center",alignItems:"center",borderBottomWidth:2}}
               onPress={()=>{
            this.addHomework()
            alert("homework added")
               }} >
                
                    <Text>  Add  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"orange",borderRadius:3,width:200,height:30,alignSelf:"center",alignItems:"center",borderBottomWidth:2}}
                onPress={()=>{
                    this.props.navigation.navigate("TeacherQuery")
                }}
                >
                    <Text>See Query</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={{backgroundColor:"orange",borderRadius:20,width:200,height:20,alignItems:"center",borderBottomWidth:2}} 
                 onPress={
                ()=>{
firebase.auth().signOut()
this.props.navigation.navigate("WelcomeScreen")
                }
            }>
                <Text>logout</Text>

            </TouchableOpacity>
            </View>
        )
    }
}
import React from "react"
import {View,Text,TouchableOpacity} from "react-native"
import {Input,Icon} from "react-native-elements"
import firebase from 'firebase'
import db from '../config'
export default class AnswerQuery extends React.Component{
    constructor(){
        super()
        this.state={
    answerQuery:""
        }
    }
    answerQuery=()=>{
        db.collection("queryAnswers").add({
            answer:this.state.answerQuery,
            query:this.props.navigation.getParam("details")["query"]
        })

    }
    render(){
        return(
            <View>
            <Input
            placeholder={"Answer Query"}
            leftIcon={{type:"font-awesome",name:"clipboard"}}
            onChangeText={(text)=>{
        this.setState({
            answerQuery:text
        })   
            }}
            ></Input>
            <TouchableOpacity
                style={{backgroundColor:"orange",borderRadius:50,width:200,height:30,alignItems:"center",borderBottomWidth:2}}
                 onPress={()=>{
                     this.answerQuery()
                 }}>
                    <Text>Add Answer</Text>
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
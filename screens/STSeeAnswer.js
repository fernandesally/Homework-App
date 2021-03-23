import React from 'react'
import {View,FlatList,Text,TouchableOpacity} from "react-native"
import firebase from "firebase"
import db from "../config"
export default class Answers extends React.Component{
    constructor(){
        super()
        this.state={
            answers:[]
        }
    }
    getdata=()=>{
        db.collection("queryAnswers").onSnapshot((snapshot)=>{
    snapshot.docs.map(doc =>{
    this.setState({
        answers:[...this.state.answers,doc.data()]
    })
    })
        })
    }
    componentDidMount(){
        this.getdata()
    }
    render(){
        return(
            <View>
             <FlatList
        data={this.state.answers}
        renderItem={({item})=>{
            return(
                <View style={{borderBottomWidth:2}}>
                    <Text>{item.query}</Text>
                    <Text>{item.answer}</Text>
                     </View>
            )
        }}
        keyExtractor={(item,index)=>index.toString}
               /> 

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
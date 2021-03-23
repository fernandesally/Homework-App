import React from 'react'
import {View,TouchableOpacity,Text} from 'react-native'
import {Input,Icon} from 'react-native-elements'
import firebase from 'firebase'
import db from '../config'
export default class QueryScreen extends React.Component{
    constructor(){
        super()
        this.state={
            query:"",
            userid:firebase.auth().currentUser.email
        }
    }
    AddQuery=()=>{
db.collection("query").doc(this.state.userid).set({
    query:this.state.query,
    userid:this.state.userid
})
    }
    render(){
        return(
            <View>
           <Input
           placeholder={"Ask A Doubt"}
           leftIcon={{type:"font-awesome",name:"question"}}
           onChangeText={(text)=>{
        this.setState({
            query:text
        })
           }}
           
           
           ></Input> 
           <TouchableOpacity style={{backgroundColor:"orange",borderRadius:30,width:200,height:30,alignItems:"center",alignSelf:"center"}}
           onPress={()=>{
               this.AddQuery()
           }}>
           <Text>Add Query</Text>
           </TouchableOpacity>  
           <TouchableOpacity style={{backgroundColor:"orange",borderRadius:30,borderBottomWidth:2,width:200,height:30,alignItems:"center"}}
          onPress={()=>{
              this.props.navigation.navigate("STSeeAnswer",{"detail":this.state.query})
          }} >
              <Text>SeeAnswer</Text> 
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
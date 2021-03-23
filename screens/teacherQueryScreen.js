import React from 'react'
import {View,FlatList,TouchableOpacity,Text} from 'react-native'
import firebase from 'firebase'
import db from '../config'
export default class TeacherQueryScreen extends React.Component{
    constructor(){
        super()
        this.state={
    answerQuery:[]
        }
    }
getdata=()=>{
    db.collection("query").onSnapshot((snapshot)=>{
        snapshot.docs.map(doc=>{
            this.setState({
                answerQuery:[...this.state.answerQuery,doc.data()]
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
            data={this.state.answerQuery}
            renderItem={({item})=>(
                <View styles={{boderBottomWidth:2}}>
                    <Text>{item.query}</Text>
                    <TouchableOpacity
                  style={{backgroundColor:"orange",borderRadius:20,width:200,height:20,alignItems:"center",borderBottomWidth:2}} 
                  onPress={()=>{
                    this.props.navigation.navigate("AnswerQuery",{"details":item})
                }}
                   >
                       <Text>Answer Doubt</Text>
                   </TouchableOpacity>
                </View>

            )}
            keyExtractor={(item,index)=>index.toString()}
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
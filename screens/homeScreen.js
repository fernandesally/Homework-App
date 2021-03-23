import React from "react"
import{View,FlatList,Text,TouchableOpacity} from "react-native"
import firebase from 'firebase'
import db from '../config'

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            allhomework:[]
        }
    }
    getdata=()=>{
        db.collection("homework").onSnapshot((snapshot)=>{
snapshot.docs.map(doc=>{
    this.setState({
        allhomework:[...this.state.allhomework,doc.data()]
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
        data={this.state.allhomework}
        renderItem={({item})=>{
            return(
                <View style={{borderBottomWidth:2}}>
                    <Text>{item.subject}</Text>
                    <Text>{item.details}</Text>
                <TouchableOpacity
                style={{backgroundColor:"orange",borderRadius:50,width:200,height:30,alignItems:"center"}}
                onPress={()=>{
                    this.props.navigation.navigate("queryScreen")
                }}
                >
                    <Text>Ask A Query</Text>
                    </TouchableOpacity>    
                </View>
            )
        }}
        keyExtractor={(item,index)=>index.toString}
               ></FlatList>

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
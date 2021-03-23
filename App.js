import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomescreen'
import HomeScreen from './screens/homeScreen'
import TeacherScreen from './screens/teacherScreen'
import QueryScreen from './screens/queryScreen'
import TeacherQueryScreen from './screens/teacherQueryScreen'
import AnswerQuery from './screens/AnswerQuery'
import STSeeAnswer from './/screens/STSeeAnswer'

import {createAppContainer,createSwitchNavigator} from 'react-navigation'


export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
<AppContainer/>

    </View>
  );
}
}
const AppNavigator=createSwitchNavigator({
WelcomeScreen:WelcomeScreen,
HomeScreen:HomeScreen,
TeacherScreen:TeacherScreen,
queryScreen:QueryScreen,
TeacherQuery:TeacherQueryScreen,
AnswerQuery:AnswerQuery,
STSeeAnswer:STSeeAnswer
})
const AppContainer=createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
   
  },
});

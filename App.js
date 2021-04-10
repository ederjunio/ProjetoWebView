import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {WebView} from 'react-native-webview';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Aba Texto" component={Tela01}></Tab.Screen>
        <Tab.Screen name="Aba YouTube" component={Tela02}></Tab.Screen>
        <Tab.Screen name="Aba somente vídeo" component={Tela03}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'top'
  },
});

function Tela01(){
  return(
      <WebView style={{flex:1, marginTop:40}} source={{uri: 'https://www.academia.org.br/academicos/manuel-bandeira/biografia'}}></WebView>
  );
}

function Tela02(){
  return(
    <WebView style={{flex:1, height: 300}} source={{ uri: 'https://www.youtube.com/embed/GV0B6nGf9mcrel=0&autoplay=0&showinfo=0&controls=1&fullscreen=1' }}/>
  );
}

function Tela03(){
  return(
      <WebView style={{flex:1, marginTop:40}} javaScriptEnabled={true}
          source={{html:"<html><body><iframe marginTop='40' width='1000' height='700' src='https://www.youtube.com/embed/rHANBi7E2cI' frameborder='0' allowfullscreen> </iframe></body></html>"}}
      ></WebView>
  );
}
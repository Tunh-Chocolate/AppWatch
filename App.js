import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import OnBoardScreen from'./screens/OnBoardScreen';
import HomeScreen from './screens/HomeScreen';
import ListWC from './screens/ListWC';
import DetailsScreen from './screens/DetailsScreen';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';
import SignUpScreen from './screens/SignUpScreen';
import CompleteScreen from './screens/CompleteScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import CartProduction from './screens/Cartproduction';
import SignInScreen from './screens/SignInScreen';
import ScreenADB from './screens/ScreenADB';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App=()=>{
  return(
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="BottomNavigator" component={OnBoardScreen}/>
      <Stack.Screen  name="ListWC" component={ListWC}/>
      <Stack.Screen  name="Cartproduction" component={CartProduction}/>
        
        <Stack.Screen  name="OnBroandScreen" component={OnBoardScreen}/>
        <Stack.Screen  name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name ="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name= "DetailsScreen" component={DetailsScreen}/>
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
        <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="ScreenADB" component={ScreenADB} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;

 

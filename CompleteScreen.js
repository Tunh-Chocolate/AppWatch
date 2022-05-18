import React,{Component} from 'react';
import { StyleSheet,Imag,Text,Image,ImageBackground, View,TouchableOpacity } from 'react-native';
import COLORS from './colors';
import comImage from '../assets/products/logo1.png';
import complete from '../assets/products/complete1.png';
import complete1 from '../assets/products/qlgiohang.png';


import {createDrawerNavigator} from '@react-navigation/drawer'

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { NavigationContainer } from '@react-navigation/native';
import { Constructor } from 'react-native';
import  state  from 'react-native-gesture-handler';


const CompleteScreen =({navigation})=>{
    return(
        <View style={styles.logoContainer}>
            <Image source={comImage}  style={styles.logo}/>
            <Text style={styles.logoText1}>Đã thanh toán thành công</Text>
            <Text style={styles.logoText}>Cảm ơn đã tin tưởng chúng tôi</Text>
        <TouchableOpacity  onPress={()=>navigation.navigate('HomeScreen')}>
             <Image source={complete}  style={styles.logo1}/> 
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigation.navigate('CartScreen')}>
             <Image source={complete1}  style={styles.logo2}/> 
        </TouchableOpacity>
        </View>
       
    );
   
};

const styles= StyleSheet.create({
    logoContainer:{
        alignItems:'center',
        marginBottom:50,
    },
    logo:{
        
        width:350,
        height:350,
        borderRadius:200,
    },
    logo1:{
        top:'30%',  
        width:300,
        height:50,
        borderRadius:90,
    },
    logo2:{
        top:'50%',  
        width:300,
        height:50,
        borderRadius:90,
    },
    logoText1:{
        top:'5%',
        color:COLORS.gold,
        fontSize:30,
        fontWeight:'500',
        marginTop:10,
        opacity:0.5,
        fontWeight:'bold',
    },
    logoText:{
        top:'35%',
        color:COLORS.dark,
        fontSize:20,
        fontWeight:'500',
        marginTop:10,
        opacity:0.5,
        fontWeight:'bold',
    },
});

export default CompleteScreen;
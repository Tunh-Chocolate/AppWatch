import React,{Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Pressable,
    Alert
} from 'react-native';

const {width:WIDTH} =Dimensions.get('window');

export default class ScreenADB extends React.Component{  
    render(){
    return(
        <Pressable style={styles.backgroundContainer}>
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={styles.logoContainer}>
                <Text source={{uri:'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg'}} style={{color:'red',fontSize:10}}>Adobe</Text>
                </View>
                <View style={styles.signin}>
                    <text> Sign in</text>
                </View>
                </View>
                    
            
        </Pressable>
        
    );
    }
    
};

const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        width:null,
        height:null,
        alignItems:'center',
    },
    logo:{
        width:160,
        height:120,
        borderRadius:30,
    },
    logoContainer:{
        alignItems:'center',
        marginBottom:50,
    },
    logoText:{
        color:'white',
        fontSize:20,
        fontWeight:'500',
        marginTop:10,
        opacity:0.5,
    },
    input:{
        width:WIDTH -105,
        height:45,
        borderRadius:25,
        fontSize:16,
        paddingLeft:45,
        backgroundColor:'#fff',
        marginHorizontal:25,
        elevation:4,
    },
    inputIcon:{
        top:8,
        /*top:8,
        left:37,
        color:'#6bdb91'
        */
    },
    inputContainer:{
        marginTop:10,
        flexDirection:'row',
    },
    btnEye:{
        position:'absolute',
        top:300,
        right:37,
    },
    btnLogin:{
        width:WIDTH -55,
        height:55,
        borderRadius:25,
        backgroundColor:"#fff",
        justifyContent:'center',
        elevation:5,
        marginTop:20,
    },
    text:{
        color:'#6bdb91',
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
    },
});

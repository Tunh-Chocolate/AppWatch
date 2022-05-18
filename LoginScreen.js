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
    Pressable
} from 'react-native';
import COLORS from './colors';
import bgImage from '../assets/products/login.jpg';
import logo from '../assets/products/logota.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { Constructor } from 'react-native';
import  state  from 'react-native-gesture-handler';

const {width:WIDTH} =Dimensions.get('window')

const LoginScreen =({navigation})=>{
    
    return(
        <ImageBackground  style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
            <Image source={logo}  style={styles.logo}/>
            <Text style={styles.logoText}>Chào mừng bạn</Text>
            </View>
            <View style={styles.inputContainer}>
                <Icon name={'person'} size={28} color={'rgba(0,0,0,0.8)'} style={styles.inputIcon}/>
                <TextInput style={styles.input}
                  placeholder={'Username'}
                  placeholderTextColor={'rgba(0,0,0,0.8)'}
                  underlineColorAndroid='transparent'
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name={'lock-closed-outline'} size={28} color={'rgba(0,0,0,0.8)'} style={styles.inputIcon}/>
                <TextInput style={styles.input}
                  placeholder={'Password'}
                  secureTextEntry={true}
                  placeholderTextColor={'rgba(0,0,0,0.8)'}
                  underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={styles.btnEye}>
                    <Icon name='eye-outline'size={26} color={'rgba(0,0,0,0.8)'}  />
                </TouchableOpacity>
            </View>
           
            
                <TouchableOpacity style={styles.btnLogin} onPress={()=>navigation.navigate('HomeScreen')}>
                     <Text style={styles.text}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin} onPress={()=>navigation.navigate('SignUpScreen')}>
                     <Text style={styles.text}>Đăng kí</Text>
                </TouchableOpacity>
           
            
        </ImageBackground>
        
    );
    
};

const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        width:160,
        height:120,
    },
    logoContainer:{
        alignItems:'center',
        marginBottom:50,
    },
    logoText:{
        color:COLORS.dark,
        fontSize:20,
        fontWeight:'500',
        marginTop:10,
        opacity:0.5,
    },
    input:{
        width:WIDTH -55,
        height:45,
        borderRadius:25,
        fontSize:16,
        paddingLeft:45,
        backgroundColor:'rgba(25,219,156,0.5)',
        marginHorizontal:25
    },
    inputIcon:{
        position:'absolute',
        top:8,
        left:37,
    },
    inputContainer:{
        marginTop:10,
    },
    btnEye:{
        position:'absolute',
        top:8,
        right:37,
    },
    btnLogin:{
        width:WIDTH -55,
        height:45,
        borderRadius:25,
        backgroundColor:"#957166",
        justifyContent:'center',
        marginTop:20,
    },
    text:{
        color:'snow',
        fontSize:16,
        textAlign:'center',
    },
});

export default LoginScreen;
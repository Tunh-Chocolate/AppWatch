import React,{useState} from 'react';
import { ScrollView,StyleSheet,Text,Dimensions,View,TouchableOpacity,Image,FlatList } from 'react-native';
import COLORS from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import house from './house';

const CartProduct=() =>{
    const [count,setCount] =useState(1);
    
    
    return(
        <View style={[styles.row,{margin:12,elevation:12,backgroundColor:"white",alignItems:"center",justifyContent:"center"}]}>
             <Image 
               style={{
                   height:140,
                   width:140,
                   marginRight:16.0,
               }}
               source={require('../assets/products/rolex1.jpg')}
             />
            <View>
               <Text style={styles.name}> Rolex new</Text>
               <Text style={styles.name}> Rolex </Text>
               <Text style={styles.name}> 150.000 $ </Text>
               <View style={[styles.row,{marginTop:12.0,width:120,backgroundColor:"#f6f6f6",height:50,justifyContent:"space-evenly",alignItems:"center"}]}>
                 <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>{
                        if(count>1){
                            setCount(parseInt(count)-1);
                        }
                    }}
                    >
                    <Ionicons size={35} color="black" name ="remove" />
                 </TouchableOpacity>
                 <Text style={{fontWeight:"normal",fontSize:20}}>{count}</Text>
                 <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>{
                        setCount(parseInt(count)+1);
                    }}
                    >
                    <Ionicons size={35} color="black" name ="add" />
                 </TouchableOpacity>
               </View>
            </View>

            
            
        </View>
        
        
        
    );
    
    
};

const styles= StyleSheet.create({
    row:{
        flexDirection:"row"
    },
    name:{
        fontSize:20,
        color:"#2C323C",
        marginTop:12.0,
    },

});
export default CartProduct;
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';
import house from './house';

const FavoriteScreen =({}) =>{
    return(
        <View style={style.container}>
          <ScrollView>
            <View style={[style.row,{margin:12,elevation:10,backgroundColor:"white",alignItems:"center",justifyContent:"center"}]}>
              <Image source ={require("../assets/products/rolex2.jpg")} 
                style ={{width:200,height:200}}
              />
              <Text style={style.name}> Rolex Cellinite</Text>
           
            </View>
            <View style={[style.row,{margin:12,elevation:10,backgroundColor:"white",alignItems:"center",justifyContent:"center"}]}>
           <Image source ={require("../assets/products/rolexs1.jpg")} 
            style ={{width:200,height:200,marginTop:20}}
            />
            <Text style={style.name}> Rolex demncity</Text>
           </View>

           <View style={[style.row,{margin:12,elevation:10,backgroundColor:"white",alignItems:"center",justifyContent:"center"}]}>
           <Image source ={require("../assets/products/rolex1.jpg")} 
            style ={{width:200,height:200,marginTop:20}}
            />
            <Text style={style.name}> Rolex Vip</Text>
           </View>
           <View style={[style.row,{margin:12,elevation:10,backgroundColor:"white",alignItems:"center",justifyContent:"center"}]}>
           <Image source ={require("../assets/products/rolex2.jpg")} 
            style ={{width:200,height:200,marginTop:20}}
            />
            <Text style={style.name}> Rolex</Text>
           </View>
          </ScrollView>
        </View>
    );
};

const style =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
  },
  name:{
    fontSize:17,
    color:"#2C323C",
    marginTop:12.0,
  },
  row:{
    flexDirection:"row"
  },


});

export default FavoriteScreen;
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
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from './colors';
import Cartproduct from './Cartproduct';
import Cartproduction from './Cartproduction';




var{height,width}=Dimensions.get("window");

const CartScreen =({navigation}) =>{
    return(
      <ScrollView>
        <View>
          <Ionicons name={"arrow-back"} size={35} color="grey"  onPress={navigation.goBack} />
        </View>
        <Text style={styles.title}>Cart</Text>
       <Cartproduct/> 
         {/* <Cartproduction  /> */}
       
        <View style={{marginHorizontal:0.0}}>
          <TouchableOpacity style={styles.bookBtn} onPress={()=>navigation.navigate('CompleteScreen')}>
            <Text>Đặt hàng</Text>
          </TouchableOpacity>
        </View> 
      </ScrollView>
    );
};

const styles =StyleSheet.create({
  bookBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "orange",
    borderRadius: 20,
    paddingHorizontal: 20,
  }, 
  title:{
    fontSize:24,
    marginTop:"12%",
    marginLeft:"8%",
    marginBottom:"4%",
    color:"black"
  }


});


export default CartScreen;
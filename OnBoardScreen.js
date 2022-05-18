import { NavigationContainer } from '@react-navigation/native';
import { left } from 'inquirer/lib/utils/readline';
import React from 'react';
import { StyleSheet,SafeAreaView,Image,StatusBar,View,Text, Pressable } from "react-native";
import COLORS from "./colors";

const OnBoardScreen =({navigation})=> {
    return( <SafeAreaView style={{flex:1,backgroundColor:COLORS.yellownew}}>
        <StatusBar translucent backgroundColor={COLORS.tranparent} />
        <Image
          source={ require('../assets/products/logo1.png')}
          style={style.image}
        />
        <View style={style.indicatorContainer}>
          <View style={[style.indicator,style.indicatorActive]}/>
          <View style={style.indicator}/>    
          <View style={style.indicator}/>   
        </View>
        <View style={{paddingHorizontal:20,paddingTop:20}}>
            <View>
                <Text style={style.title}> WatchApp </Text>
                <Text style={style.title}> Báu Vật Của Thời Gian </Text>
            </View>
            <View style={{marginTop:50}}>
                <Text style={style.textStyle1}> Đẳng cấp theo thời gian </Text>
                <Text style={style.textStyle}>    Thành lập từ năm 2021, WatchApp chuyên cung cấp đồng hồ chính hãng từ những thương hiệu cao cấp được cả thế giới công nhận như Patek Philippe, Rolex, Hublot, Audemars Piguet... </Text>
            </View>
        </View>
        <View style={{flex:1,justifyContent:'flex-end',paddingBottom:40}}>
            <Pressable onPress={()=>navigation.navigate('ScreenADB')}>
                <View style={style.btn}>
                    <Text style={{color:COLORS.white}}>Mua sắm</Text>
                </View>
            </Pressable>
        </View>
    </SafeAreaView>
    );
};

const style =StyleSheet.create({
    image:{
        left:0,
        height:420,
        width:'100%',
        borderBottomLeftRadius:100,
    },
    indicatorContainer:{
        height:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    indicator:{
        height:3,
        width:30,
        backgroundColor:COLORS.grey,
        marginHorizontal:5,
        borderRadius:5,
    },
    indicatorActive:{
        backgroundColor:COLORS.dark,
    },
    title:{
        marginTop:'-2%',
        alignItems:'center',
        marginHorizontal:10,
        color:COLORS.rich,
        fontSize:32,
        fontWeight:'bold',
        
    },
    textStyle:{
        fontSize:16,
        color:COLORS.rich,
        fontWeight:'bold',
    },
    textStyle1:{
        marginTop:'-12%',
        fontWeight:'bold',
        alignItems:'center',
        marginHorizontal:10,
        fontSize:20,
        color:COLORS.rich,
    },
    btn:{
        height:60,
        marginHorizontal:20,
        backgroundColor:COLORS.rich,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
});
export default OnBoardScreen;
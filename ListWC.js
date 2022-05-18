import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { SafeAreaView,StyleSheet,View,Text,Image, Dimensions ,TouchableOpacity} from 'react-native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import COLORS from './colors';
import house from './house';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { FontAwesome5 } from '@expo/vector-icons'; 
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { NavigationContainer } from '@react-navigation/native';


const {width}=Dimensions.get('screen');



    
    const ListOptions = ()=>{
        const optionList=[
            {title:'Đồng hồ cổ điển', img: require('../assets/products/logoemployee.jpg')},
                
        ];
        return (
           <View style={style.optionListContainer}>
            {optionList.map((option,index) =>
                <View style={style.optionCard}  key={index}>
                    <Image source={option.img} style={style.optionCardImage}/>
                    <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>{option.title}</Text>
                </View>    
            )}
        </View>
        
         );
    };
    const ListWC =({navigation}) =>{
        const LisCategories =()=>{
            const [selectedCategoryIndex,setSelectedCategoryIndex]=React.useState(0);
            const categoryList=['Sản phẩm mới nhất'];
            return ( <View style={style.categoryListContainer}>
                {categoryList.map((category,index)=>(
                    <Pressable key={index} onPress={()=>setSelectedCategoryIndex(index)}>
                    <Text style={[style.categoryListText,
                    index == selectedCategoryIndex && style.activeCategoryListText,]}>
                    {category} 
                    </Text>
                    </Pressable>
                    
                ))}
               
            </View>
            
            );
        };
    const Card =({house})=>{
        return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={()=>navigation.navigate('DetailsScreen',house)}>
              <View style={style.card}>
                <View style={{alignItems: 'flex-end'}}>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: house.like
                        ? 'rgba(245, 42, 42,0.2)'
                        : 'rgba(0,0,0,0.2) ',
                    }}>
                    <Icon
                      name="favorite"
                      size={18}
                      color={house.like ? COLORS.red : COLORS.black}
                    />
                            </View>
                </View>
      
                <View
                  style={{
                    height: 100,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={house.image}
                    style={{flex: 1, resizeMode: 'contain'}}
                  />
                </View>
      
                <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
                  {house.title}
                </Text>
                <Text style={{ fontSize: 15, marginTop: 10}}>
                  {house.meme}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}>
                    <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                     <Icon
                      name="money"
                      size={18}
                      color={house.like ? COLORS.red : COLORS.black}
                    />
                  
                    {house.price}
                  </Text>
                  <View
                    style={{
                      height: 25,
                      width: 25,
                      backgroundColor: COLORS.green,
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                      +
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        
    };
    

     

   
  
    return( <SafeAreaView style={{backgroundColor:COLORS.light,flex:1}}>
       
       
        <ScrollView>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingHorizontal:20,
            }}>
                <TouchableOpacity style={style.searchInputContainer}>
                    <Icon name="search" size={25} color={COLORS.light}/>
                    <TextInput  placeholder="Tìm kiếm                                                                     " color={COLORS.light}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.srortBtn}>
                    <Icon name="tune" color={COLORS.white} size={25} />
                </TouchableOpacity>
            </View>
            <ListOptions />
            <LisCategories />
            <FlatList
                contentContainerStyle={{paddingLeft:20,paddingVertical:20}}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={house}
                renderItem={({item})=> <Card house={item} />}
            />
        </ScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header:{
        paddingVertical:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    profileImage:{
        height:50,
        width:50,
        borderRadius:25,
    },
    searchInputContainer:{
        height:50,
backgroundColor:COLORS.br1,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        borderRadius:10,
    },
    srortBtn:{
        backgroundColor:COLORS.dark,
        height:50,
        width:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
    },
    optionListContainer:{
        flexDirection:'row',
        marginTop:20,
        marginRight:50,
        paddingHorizontal:20,
    },
    optionCard:{
        height:210,
        width:width/ 2-30,
        elevation:15,
        backgroundColor:COLORS.white, 
        alignItems:'center',
        paddingHorizontal:10,
        paddingTop:10,
        borderRadius:20,
    },
    optionCardImage:{
        height:140,
        borderRadius:10,
        width:'100%',
    },
    categoryListContainer:{
        marginTop:40,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:40,
    },
    categoryListText:{
        fontSize:16,
        fontWeight:'bold',
        paddingBottom:5,
        color:COLORS.grey,
    },
    activeCategoryListText:{
        color:COLORS.dark,
        borderBottomWidth:1,
        paddingBottom:5,
    },
    card: {
        flexDirection:'column',
        height:250,
        backgroundColor:COLORS.white,
        marginHorizontal: 2,
        elevation:10,
        width:width -40,
        marginRight:20,
        padding:15,
        borderRadius:20,
      },

    card1:{
        flexDirection:'column',
        height:250,
        backgroundColor:COLORS.white,
        elevation:10,
        width:width -40,
        marginRight:20,
        padding:15,
        borderRadius:20,
    },
    cardImage:{ 
        flexDirection:'column',
        width:"100%",
        height:120,
        borderRadius:15,
    },
    facility:{
        flexDirection:'row',
        marginRight:15,
    },
    facilityText:{
        marginLeft:5,
        color:COLORS.grey,
    },
   
});



export default ListWC;
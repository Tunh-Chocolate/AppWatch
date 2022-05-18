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

const HomeScreen =({navigation}) =>{
    const LisCategories =()=>{
        const [selectedCategoryIndex,setSelectedCategoryIndex]=React.useState(0);
        const categoryList=['Phổ biến','Đặc biệt','Giới hạn'];
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
    
    const ListOptions = ()=>{
        const optionList=[
            {title:'Đồng hồ cổ điển', img: require('../assets/products/rolex1.jpg')},
            {title:'Đồng hồ hiện đại',img: require('../assets/products/rolexs1.jpg')},        
        ];
        return (
            <Pressable onPress={()=>navigation.navigate('ListWC')}><View style={style.optionListContainer}>
            {optionList.map((option,index) =>
                <View style={style.optionCard}  key={index}>
                    <Image source={option.img} style={style.optionCardImage}/>
                    <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>{option.title}</Text>
                </View>    
            )}
        </View>
        </Pressable>
         
         );
    };
    const Card =({house})=>{
        
        return(
        <Pressable onPress={()=>navigation.navigate('DetailsScreen',house)}>
        <View style={style.card} >
        <Image source ={house.image} style={style.cardImage} />
        <View style={{flexDirection:'row',
            justifyContent:'space-between',
            marginTop:10,
        }}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>{house.title}</Text>
            <Text style={{fontSize:16,fontWeight:'bold',color:COLORS.gold}}>{house.price}</Text>
        </View>
        <Text style={{color:COLORS.yellow1,fontSize:14,marginTop:5}}>{house.location}</Text>
        <View style={{marginTop:10,flexDirection:'row'}}>
            <View style={style.facility}>
                <Icon name="watch" size={18}/>
                <Text style={{fontSize:14,color:COLORS.gold}}>{house.watch}</Text>
            </View>
            
            <View style={style.facility}>
                <Icon name="favorite" size={18}
                color={house.like ? COLORS.red : COLORS.black}/>
                 <Text style={{fontSize:14,color:COLORS.gold}}>{house.tim}</Text>
            </View>
        </View>
        </View>
        
        </Pressable>
         
        );
        
    };
 
  
    return( <SafeAreaView style={{backgroundColor:COLORS.light,flex:1}}>
        <StatusBar
            translucent={false}
            backgroundColor={COLORS.white}
            barStyle="dark-content"
        />
        <View style={style.header}>
            <View>
                <Text style={{color:COLORS.br}}> Location </Text>
                <Text style={{color:COLORS.dark,fontSize:20,fontWeight:'bold'}}>VietNam</Text>
            </View>
            <Pressable onPress={()=>navigation.navigate('LoginScreen')}>
            <Image source={require('../assets/products/logoronew.jpg')} style={style.profileImage}/></Pressable>
        </View>
        <ScrollView>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingHorizontal:20,
            }}>
                <TouchableOpacity style={style.searchInputContainer}>
                    <Icon name="search" size={25} color={COLORS.light}/>
                    <TextInput  placeholder="Tìm kiếm                                                                   " color={COLORS.br}/>
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
        <View style={style.bootom}>
      
        <TouchableOpacity  style={style.c4} onPress={()=>navigation.navigate('ListWC', {loaiId: 8})}>
            <FontAwesome5 style = {{}} name="book" size={20} color="grey"
            />
        </TouchableOpacity>  
      
        <TouchableOpacity  style={style.c4} onPress={()=>navigation.navigate('HomeScreen')}>
            <View  style={style.c5}>
              <FontAwesome5 style = {{}} name="search" size={20} color="grey"
              />
            </View>
        </TouchableOpacity>  
        <TouchableOpacity  style={style.c4} onPress={()=>navigation.navigate('HomeScreen')}>
            <FontAwesome5 style = {{}} name="igloo" size={50} color="grey"
            />
        </TouchableOpacity>
        <TouchableOpacity  style={style.c4} onPress={()=>navigation.navigate('FavoriteScreen')}>
            <FontAwesome5 style = {{}} name="heart" size={20} color="grey"
            />
        </TouchableOpacity>
        <TouchableOpacity  style={style.c4} onPress={()=>navigation.navigate('LoginScreen')}>
            <FontAwesome5 style = {{}} name="user-circle" size={20} color="grey"
            />
        </TouchableOpacity>
      </View>
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
        width:60,
        borderRadius:0,
    },
    searchInputContainer:{
        height:50,
        backgroundColor:COLORS.br1,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        borderRadius:100,
    },
    srortBtn:{
        backgroundColor:COLORS.gold,
        height:50,
        width:50,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
    },
    optionListContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
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
    card:{
        height:250,
        backgroundColor:COLORS.white,
        elevation:10,
        width:width -40,
        marginRight:20,
        padding:15,
        borderRadius:20,
    },
    cardImage:{
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
    bootom: {
    width:'100%',
    color:COLORS.white,
    alignItems: 'center',
    flexDirection:'row',
    elevation:3,
  },
  c4: { 
    padding:10,
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  bottom1:{
    marginTop:'40%',
    height:250,
    backgroundColor:COLORS.black,
    elevation:10,
    padding:15,
    borderRadius:20,

  },
});



export default HomeScreen;
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
  Pressable
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';

const {width} = Dimensions.get('screen');
const DetailsScreen = ({navigation, route}) => {
  const house = route.params;

  const InteriorCard = ({interior}) => {
    return <Image source={interior} style={style.interiorImage} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* House image */}

        <View style={style.backgroundImageContainer}>
          <ImageBackground style={style.backgroundImage} source={house.image}>
            <View style={style.header}>
              <View style={style.headerBtn}>
                <Icon
                  name="arrow-back-ios"
                  size={20}
                  onPress={navigation.goBack}
                />
              </View>
              <TouchableOpacity style={style.headerBtn} onPress={()=>navigation.navigate('FavoriteScreen')} >
                <Icon name="favorite" size={20} color={COLORS.red}  />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* Virtual Tag View */}
          
        </View>

        <View style={style.detailsContainer}>
          {/* Name and rating view container */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {house.title}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={style.ratingTag}>
                <Text style={{color: COLORS.white}}> {house.poin}</Text>
              </View>
              <Text style={{fontSize: 15, marginLeft: 5, color:COLORS.yellow1}}> {house.ratting}</Text>
            </View>
          </View>

          {/* Location text */}
          <Text style={{fontSize: 16, color: COLORS.yellow1}}>
            {house.location}
          </Text>

          {/* Facilities container */}
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={style.facility}>
              <Icon name="watch" size={18} />
              <Text style={{fontSize:14,color:COLORS.gold}}>{house.watch}</Text>
            </View>
            
            <View style={style.facility}>
            <Icon name="favorite" size={18}
                color={house.like ? COLORS.red : COLORS.black}/>
                 <Text style={{fontSize:14,color:COLORS.gold}}>{house.tim}</Text>
              
            </View>
          </View>
          <Text style={{marginTop: 20, color: COLORS.br}}>
            {house.details}
          </Text>

          {/* Interior list */}
          <FlatList
            contentContainerStyle={{marginTop: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key.toString()}
            data={house.interiors}
            renderItem={({item}) => <InteriorCard interior={item} />}
          />

          {/* footer container */}
          <View style={style.footer}>
            <View>
            <Text style={{fontSize:16,fontWeight:'bold',color:COLORS.gold}}>{house.price}</Text>
            </View>
            <TouchableOpacity style={style.bookNowBtn} onPress={()=>navigation.navigate('CartScreen')}>
              <Text style={{color: COLORS.white}}>Đặt hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 350,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.navi,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.grey},
});

export default DetailsScreen;
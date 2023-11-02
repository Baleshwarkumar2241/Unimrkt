import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomBtn from '../Screens/Compnents/CustomBtn';
const {width, height} = Dimensions.get('window');
const SubmitScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        source={require('../Screens/assest/img1.png')}
        resizeMode="contain"
        style={{
          width: width / 1.3,
          height: 155,
          alignSelf: 'center',
          marginTop: '15%',
        }}
      />

      <View
        style={{marginTop: '25%', width: width / 1.2, marginHorizontal: 20}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: '#1E1E1E',
            marginBottom: 10,
          }}>
          List Of Items added
        </Text>
        <Text style={{fontSize: 14, fontWeight: 400, color: '#1E1E1E'}}>
          You have shared your response as below:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            width: width / 1.12,
            paddingHorizontal: 3,
          }}>
          <View
            style={{
              width: 6,
              height: 6,
              backgroundColor: '#000',
              borderRadius: 10,
              borderWidth: 1,
            }}
          />
          <Text style={{marginStart: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            width: width / 1.12,
            paddingHorizontal: 3,
          }}>
          <View
            style={{
              width: 6,
              height: 6,
              backgroundColor: '#000',
              borderRadius: 10,
              borderWidth: 1,
            }}
          />
          <Text style={{marginStart: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            width: width / 1.12,
            paddingHorizontal: 3,
          }}>
          <View
            style={{
              width: 6,
              height: 6,
              backgroundColor: '#000',
              borderRadius: 10,
              borderWidth: 1,
            }}
          />
          <Text style={{marginStart: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            width: width / 1.12,
            paddingHorizontal: 3,
          }}>
          <View
            style={{
              width: 6,
              height: 6,
              backgroundColor: '#000',
              borderRadius: 10,
              borderWidth: 1,
            }}
          />
          <Text style={{marginStart: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: '15%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 30,
          alignItems: 'center',
          // backgroundColor:'red'
        }}>
        <CustomBtn
          title={'< Go Back'}
          style={{
            alignSelf: 'center',
            backgroundColor: '#F4F4FC',
            width: '45%',
          }}
          textstyle={{color: '#2A1BD3'}}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <CustomBtn
          disabled={true}
          title={'Procced >'}
          style={{
            alignSelf: 'center',
            //   marginTop: 12,
            width: '45%',

            backgroundColor: '#B7B7B7',
          }}
          textstyle={{color: '#5E5E5E'}}
        />
      </View>
    </View>
  );
};

export default SubmitScreen;

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 12,

    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    width: width / 1.1,
    //   margin: 10,
    marginTop: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

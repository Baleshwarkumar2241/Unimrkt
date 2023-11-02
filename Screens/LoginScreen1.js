import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomBtn from '../Screens/Compnents/CustomBtn';
const {width, height} = Dimensions.get('window');
const LoginScreen1 = props => {
  const {navigation} = props;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../Screens/assest/img1.png')}
        resizeMode="contain"
        style={{width: width / 1.3}}
      />
      <CustomBtn
        title={'Login'}
        onPress={() => {
          navigation.navigate('login2');
        }}
      />
    </View>
  );
};

export default LoginScreen1;

const styles = StyleSheet.create({});

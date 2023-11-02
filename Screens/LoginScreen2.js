import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import CustomBtn from '../Screens/Compnents/CustomBtn';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
const LoginScreen2 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
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

        <View style={{alignSelf: 'center', marginTop: '25%'}}>
          <Text
            style={{
              margin: 10,
              fontSize: 24,
              fontWeight: 700,
              color: '#1E1E1E',
            }}>
            Login
          </Text>
          <View style={styles.textinput}>
            <Text style={{fontSize: 12, fontWeight: '400', color: '#2E2E2E'}}>
              Email ID
            </Text>
            <TextInput value="..." />
          </View>
          <View style={styles.textinput}>
            <Text style={{fontSize: 12, fontWeight: '400', color: '#2E2E2E'}}>
              Password
            </Text>
            <TextInput value="..." style={{}} />
          </View>
        </View>
        <View style={{marginTop: '15%'}}>
          <CustomBtn
            title={'Cancel'}
            style={{alignSelf: 'center', backgroundColor: '#F4F4FC'}}
            textstyle={{color: '#2A1BD3'}}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <CustomBtn
            title={'Login'}
            style={{alignSelf: 'center', marginTop: 12}}
            onPress={() => {
              navigation.navigate('home');
            }}
          />
        </View>

        <View style={{alignSelf: 'center', marginTop: '25%'}}>
          <Text>or sign-in with</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingHorizontal: 30,
            marginBottom: 40,
          }}>
          <CustomBtn
            title={'F'}
            style={{
              alignSelf: 'center',
              marginTop: 12,
              width: '25%',
              backgroundColor: '#EEEEEE',
            }}
            textstyle={{color: '#B7B7B7'}}
          />
          <CustomBtn
            title={'G'}
            style={{
              alignSelf: 'center',
              marginTop: 12,
              width: '25%',
              backgroundColor: '#EEEEEE',
            }}
            textstyle={{color: '#B7B7B7'}}
          />
          <CustomBtn
            title={'T'}
            style={{
              alignSelf: 'center',
              marginTop: 12,
              width: '25%',
              backgroundColor: '#EEEEEE',
            }}
            textstyle={{color: '#B7B7B7'}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen2;

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#fff',
    width: width / 1.1,
    justifyContent: 'center',
    margin: 10,
    height: Dimensions.get('window').height / 10,
    borderRadius: 12,

    paddingHorizontal: 15,
  },
});

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
const Home = ({navigation}) => {
  const ChangeText = () => {
    console.log('hello');
    if (textChange == false) {
      setTextChange(true);
    }
    // else if(textChange==false){
    //     setTextChange(true);
    // }
  };
  const [textChange, setTextChange] = useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTextChange(false);
    });
    setTextChange(false);

    return unsubscribe;
  }, [navigation]);
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
          Add Study Type
        </Text>
        <Text style={{fontSize: 14, fontWeight: 400, color: '#1E1E1E'}}>
          and tell us something about yourself in as many points as you would
          want to
        </Text>
        {/* {/* <TextInput placeholder="Email ID" style={styles.textinput} /> */}
        <Pressable
          style={{}}
          onPress={() => {
            ChangeText();
          }}>
          <Text
            style={[
              styles.textinput,
              {color: textChange ? '#1E1E1E' : '#5E5E5E'},
            ]}>
            {textChange ? 'Here’s something about me..' : 'Your response here'}
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          marginTop: '15%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 30,
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
          title={'Submit >'}
          style={{
            alignSelf: 'center',
            marginTop: 12,
            width: '45%',
            backgroundColor: textChange ? '#8278FC' : '#B7B7B7',
          }}
          textstyle={{color: textChange ? '#fff' : '#5E5E5E'}}
          onPress={() => {
            textChange == true && navigation.navigate('Submit');
          }}
        />
      </View>
    </View>
  );
};

export default Home;

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

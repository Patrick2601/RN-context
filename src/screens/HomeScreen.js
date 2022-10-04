import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
  Image,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

function HomeScreen({navigation}) {
  // const route=useRoute()
  // const navigation=useNavigation()
  // console.log('route...',route)
  // console.log('navigation...',navigation)

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#bdc6a0'}}>
      <Text style={{fontSize: 20, marginTop: 20,color:'black'}}>Home Screen</Text>
      {/* <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={{fontSize: 20, marginTop: 20}}>GO TO LOGIN PAGE</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Flexbox')}>
        <Text style={{fontSize: 20, marginTop: 20}}>GO TO FLEX BOX</Text>
      </Pressable> */}
    </View>
  );
}

export default HomeScreen;

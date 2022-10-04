import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';

const Buttons = ({onPress, name}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 20},
  button: {
    backgroundColor: '#f6a01f',
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Buttons;

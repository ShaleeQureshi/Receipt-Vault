import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SecondaryButton = props => {
  const styles = StyleSheet.create({
    btn: {
      backgroundColor: '#272341',
      borderRadius: 100,
      maxWidth: 300,
      maxHeight: 50,
      minWidth: 300,
      minHeight: 50,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 20,
      textAlignVertical: 'center',
      alignSelf: 'center',
    },
  });
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btn}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
export default SecondaryButton;

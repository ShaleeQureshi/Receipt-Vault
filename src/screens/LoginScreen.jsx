import React, {useState} from 'react';
import {StyleSheet, View, Image, Dimensions, Text} from 'react-native';
import RECEIPT_VAULT_LOGO from '../assets/images/ReceiptVault-logos.png';

const LoginScreen = () => {
  // Styles
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#00CDAC',
      minHeight: Dimensions.get('window').height,
      minWidth: Dimensions.get('window').width,
    },
    image: {
      position: 'absolute',
      top: 25,
      left:
        Dimensions.get('window').width - Dimensions.get('window').width * 1.15,
      maxHeight: '15%',
      maxWidth: '25%',
    },
    heading: {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
      verticalAlign: 'middle',
      top: Dimensions.get('window').height * 0.25,
      fontSize: 40,
    },
    subHeadingContainer: {
      maxWidth: 150,
      alignSelf: 'center',
      top: Dimensions.get('window').height * 0.3,
    },
    subHeading: {
      color: '#ffffff',
      fontWeight: '300',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });

  const [email, setEmail] = useState();

  return (
    <View style={styles.container}>
      <View>
        <Image source={RECEIPT_VAULT_LOGO} style={styles.image} />
        <Text style={styles.heading}>Welcome Back</Text>
        <View style={styles.subHeadingContainer}>
          <Text
            style={styles.subHeading}
            numberOfLines={2}
            ellipsizeMode="tail">
            Login to start saving your receipts for{' '}
            <Text style={{fontWeight: 'bold'}}>free</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

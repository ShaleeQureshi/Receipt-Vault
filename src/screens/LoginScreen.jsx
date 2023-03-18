import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
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
      top: 0,
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
    textInputView: {
      textAlignVertical: 'center',
      alignSelf: 'center',
      top: Dimensions.get('window').height * 0.3,
    },
    textInputEmailHeading: {
      marginTop: 80,
      color: '#ffffff',
      fontWeight: '400',
    },
    emailAddress: {
      fontWeight: 'bold',
    },
    textInputEmailBox: {
      backgroundColor: '#ffffff',
      marginTop: 10,
      borderRadius: 100,
      maxWidth: Dimensions.get('window').width * 0.8,
      minWidth: Dimensions.get('window').width * 0.8,
      minHeight: 25,
      maxHeight: 25,
      paddingLeft: 5,
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 5,
    },
  });

  const [email, setEmail] = useState();

  return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.textInputView}>
          <Text style={styles.textInputEmailHeading}>
            Please enter your{' '}
            <Text style={styles.emailAddress}>email address</Text>
          </Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Please enter your email address"
            keyboardType="email-address"
            style={styles.textInputEmailBox}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;

import React, {useState} from 'react';
import {
  StyleSheet, 
  View, Image, 
  Dimensions, 
  Text, 
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import RECEIPT_VAULT_LOGO from '../assets/images/ReceiptVault-logos.png';
import { PrimaryButton, SecondaryButton } from '../components';



const SignUpScreen = () => {
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
      top: Dimensions.get('window').height * 0.2,
      fontSize: 40,
    },
    subheading: {
      color: '#ffffff',
      fontWeight: '300',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    subheadingContainer: {
      maxWidth: 150,
      alignSelf: 'center',
      top: Dimensions.get('window').height * 0.25,
    },
    textInputViewEmail: {
      textAlignVertical: 'center',
      alignSelf: 'center',
      top: Dimensions.get('window').height * 0.22,
    },
    textInputEmailHeading: {
      marginTop: 80,
      color: '#ffffff',
      fontWeight: '400',
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
    textInputViewPassword: {
      textAlignVertical: 'center',
      alignSelf: 'center',
      top: Dimensions.get('window').height * 0.22,
    },
    textInputPasswordHeading: {
      marginTop: 10,
      color: '#ffffff',
      fontWeight: '400',
    },
    textInputPasswordBox: {
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
    btnGroup: {
      top: Dimensions.get('window').height * 0.1,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={RECEIPT_VAULT_LOGO} style={styles.image} />
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.subheadingContainer}>
        <Text
          style={styles.subheading}
          numberOfLines={2}
          ellipsizeMode="tail">
          Join for{' '}
          <Text style={{fontWeight: 'bold'}}>free</Text>
          {' '}and start saving your receipts!
        </Text>
      </View>

      <View style={styles.textInputViewEmail}>
        <Text style={styles.textInputEmailHeading}>
          Please enter your{' '}
          <Text style={{fontWeight: 'bold'}}>email address</Text>
        </Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email Address"
          keyboardType="email-address"
          style={styles.textInputEmailBox}
        />
      </View>

      <View style={styles.textInputViewPassword}>
        <Text style={styles.textInputPasswordHeading}>
          Please enter a{' '}
          <Text style={{fontWeight: 'bold'}}>password</Text>
        </Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.textInputPasswordBox}
        />
      </View>

      <View style={styles.textInputViewPassword}>
        <Text style={styles.textInputPasswordHeading}>
          Please confirm your{' '}
          <Text style={{fontWeight: 'bold'}}>password</Text>
        </Text>
        <TextInput
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
          placeholder="Confirm Password"
          style={styles.textInputPasswordBox}
        />
      </View>

      <View style={styles.btnGroup}>
        <PrimaryButton
          text="Sign Me Up"
          onPress={() => {
            console.log('signed up');
          }}
        />
        <View style={{marginTop: 20}}>
          <SecondaryButton
            text="Already Have An Account?"
            onPress = {() => {
              console.log('switching to login page')
            }}
          />
        </View>
      </View>

    </SafeAreaView>
  )
};

export default SignUpScreen;

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
import {PrimaryButton, SecondaryButton} from '../components';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

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
      top: Dimensions.get('window').height * 0.2,
      fontSize: 40,
    },
    subHeadingContainer: {
      maxWidth: 150,
      alignSelf: 'center',
      top: Dimensions.get('window').height * 0.25,
    },
    subHeading: {
      color: '#ffffff',
      fontWeight: '300',
      textAlign: 'center',
      textAlignVertical: 'center',
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
      color: '#000000',
    },
    textInputViewPassword: {
      textAlignVertical: 'center',
      alignSelf: 'center',
      marginTop: Dimensions.get('window').height * 0.24,
    },
    textInputPasswordHeading: {
      marginTop: 10,
      color: '#ffffff',
      fontWeight: '400',
    },
    password: {
      fontWeight: 'bold',
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
      color: '#000000',
    },
    btnGrp: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    const user = await auth().signInWithEmailAndPassword(email, password);
    if (user) {
      console.log('Successfully logged in user');
      console.log(user);
      console.log('**** Redirecting to PostAuthHomeScreen ****');
      navigation.navigate('PostAuthHome');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={RECEIPT_VAULT_LOGO} style={styles.image} />
      <Text style={styles.heading}>Welcome Back</Text>
      <View style={styles.subHeadingContainer}>
        <Text style={styles.subHeading} numberOfLines={2} ellipsizeMode="tail">
          Login to start saving your receipts for{' '}
          <Text style={{fontWeight: 'bold'}}>free</Text>
        </Text>
      </View>
      <View style={styles.textInputViewEmail}>
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
          autoCapitalize="none"
          autoComplete="off"
        />
      </View>
      <View style={styles.textInputViewPassword}>
        <Text style={styles.textInputPasswordHeading}>
          Please enter your <Text style={styles.password}>password</Text>
        </Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Please enter your password"
          style={styles.textInputPasswordBox}
          autoCapitalize="none"
          autoComplete="off"
        />
      </View>
      <View style={styles.btnGrp}>
        <PrimaryButton
          text="Login"
          onPress={() => {
            handleLogin();
          }}
        />
        <View style={{marginTop: 20}}>
          <SecondaryButton
            text="Don't have an Account?"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;

import {useNavigation} from '@react-navigation/native';
import RECEIPT_VAULT_LOGO from '../assets/images/ReceiptVault-logos.png';
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Text,
} from 'react-native';
import {PrimaryButton, SecondaryButton} from '../components';
import auth from '@react-native-firebase/auth';

const PostAuthHomeScreen = () => {
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
    btnGrp: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={RECEIPT_VAULT_LOGO} style={styles.image} />
      <Text style={styles.heading}>Welcome</Text>
      <View style={styles.btnGrp}>
        <PrimaryButton
          text="Access Receipts"
          onPress={() => {
            navigation.navigate('Receipts');
          }}
        />
        <View style={{marginTop: 20}}></View>
        <PrimaryButton
          text="Open VaultCode"
          onPress={() => {
            navigation.navigate('VaultCode');
          }}
        />
        <View style={{marginTop: 40}}></View>
        <SecondaryButton
          text="Sign Out"
          onPress={() => {
            auth()
              .signOut()
              .then(() => {
                console.log('User has been signed out');
                console.log('Redirecting user to home page');
                navigation.navigate('Home');
              });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostAuthHomeScreen;

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import RECEIPT_VAULT_LOGO from '../assets/images/ReceiptVault-logos.png';
import {PrimaryButton, SecondaryButton} from '../components';

const HomePage = () => {
  const navigation = useNavigation();
  // Styles
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#00CDAC',
      minHeight: Dimensions.get('window').height,
      minWidth: Dimensions.get('window').width,
    },
    inside: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      maxHeight: '50%',
      maxWidth: '75%',
      marginTop: -10,
    },
    divider: {
      marginTop: 20,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.inside}>
        <Image source={RECEIPT_VAULT_LOGO} style={styles.image} />
        <PrimaryButton
          text="Get Started"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        <View style={styles.divider}>
          <SecondaryButton
            text="Login"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomePage;

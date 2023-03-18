import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import RECEIPT_VAULT_LOGO from '../assets/images/ReceiptVault-logos.png';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={RECEIPT_VAULT_LOGO} style={styles.image} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00CDAC',
  },
  image: {
    maxHeight: '50%',
    maxWidth: '75%',
    marginBottom: '10%',
  },
});

export default SplashScreen;

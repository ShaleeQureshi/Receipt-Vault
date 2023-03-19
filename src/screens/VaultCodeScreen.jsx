import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Dimensions} from 'react-native';
import Barcode from 'react-native-barcode-builder';

const VaultCodeScreen = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#00CDAC',
      minHeight: Dimensions.get('window').height,
      minWidth: Dimensions.get('window').width,
    },
    heading: {
      textAlign: 'center',
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 20,
    },
    barcodeParentContainer: {
      flex: 1,
      justifyContent: 'center',
      transform: [{rotate: '90deg'}],
    },
    barcodeContainer: {
      backgroundColor: '#ffffff',
      width: 500,
      marginLeft: -50,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Scan this Barcode at Checkout</Text>
      <View style={styles.barcodeParentContainer}>
        <View style={styles.barcodeContainer}>
          <Barcode value="7cEsoer1Xi" width={3} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VaultCodeScreen;

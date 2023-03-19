import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Dimensions} from 'react-native';
import database from '@react-native-firebase/database';
import Barcode from 'react-native-barcode-builder';

const ReceiptInfoScreen = ({route}) => {
  const {data} = route.params;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#00CDAC',
      minHeight: Dimensions.get('window').height,
      minWidth: Dimensions.get('window').width,
    },
    inside: {
      marginTop: 50,
    },
    heading: {
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });
  const [receiptData, setReceiptData] = useState();
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await database()
          .ref('/users/' + data.customKey + '/receipts/' + data.index)
          .once('value');
        const val = snapshot.val();
        const arr = Object.values(val).filter(item => !item['info']);
        // console.log(arr);
        setReceiptData(arr);

        let newSubtotal = 0;
        arr.forEach(item => {
          console.log(item.price);
          if (item.price != undefined) {
            newSubtotal += item.price;
          }
        });
        setSubtotal(Math.round(newSubtotal * 100) / 100);

        const newTax = newSubtotal * 0.13;
        setTax(Math.round(newTax * 100) / 100);

        const newTotal = newSubtotal + newTax;
        setTotal(Math.round(newTotal * 100) / 100);
      } catch (error) {
        console.log(error);
        // Handle the error here
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inside}>
        <Text style={styles.heading}>
          Receipt for {data.location} on {data.date}
        </Text>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            width: '80%',
            alignSelf: 'center',
          }}
        />
        {receiptData ? (
          receiptData.map((item, index) => (
            <View key={index} style={{flexDirection: 'row', padding: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#ffffff',
                  flex: 1,
                  textAlign: 'left',
                }}>
                {item.product}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#ffffff',
                  flex: 0,
                  textAlign: 'right',
                }}>
                {item.price}
              </Text>
            </View>
          ))
        ) : (
          <Text style={{color: '#ffffff', textAlign: 'center'}}>
            No receipt data found.
          </Text>
        )}
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            width: '80%',
            alignSelf: 'center',
          }}
        />
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text
            style={{
              fontSize: 20,
              color: '#ffffff',
              flex: 1,
              textAlign: 'left',
            }}>
            Subtotal
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#ffffff',
              flex: 0,
              textAlign: 'right',
            }}>
            {subtotal}
          </Text>
        </View>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text
            style={{
              fontSize: 20,
              color: '#ffffff',
              flex: 1,
              textAlign: 'left',
            }}>
            HST (13%)
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#ffffff',
              flex: 0,
              textAlign: 'right',
            }}>
            {tax}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            width: '80%',
            alignSelf: 'center',
          }}
        />
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text
            style={{
              fontSize: 20,
              color: '#ffffff',
              flex: 1,
              textAlign: 'left',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#ffffff',
              flex: 0,
              textAlign: 'right',
            }}>
            {total}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            width: '80%',
            alignSelf: 'center',
          }}
        />
        <Barcode width={3} value={data.transaction_id} />
      </View>
    </SafeAreaView>
  );
};

export default ReceiptInfoScreen;

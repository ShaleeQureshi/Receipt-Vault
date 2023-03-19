import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Rows, Table, Row} from 'react-native-table-component';
import RECEIPT_VAULT_LOGO from '../assets/images/ReceiptVault-logos.png';
import database from '@react-native-firebase/database';
import auth, {firebase} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const ReceiptScreen = () => {
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
      fontWeight: '400',
      marginTop: 20,
      marginBottom: 20,
    },
    HeadStyle: {
      height: 50,
      alignContent: 'center',
      backgroundColor: '#DCDCDC',
    },
  });

  const navigation = useNavigation();

  useEffect(() => {
    const userUid = auth().currentUser.uid;
    const fetchData = async () => {
      const snapshot1 = await database()
        .ref('/users/uids/' + userUid)
        .once('value');
      const customKey = snapshot1.val();
      setCustomK(customKey);

      const numberOfReceipts = await database()
        .ref('/users/' + customKey + '/number_of_receipts')
        .once('value');

      if (numberOfReceipts.val() > 0) {
        const snapshot2 = await database()
          .ref('/users/' + customKey + '/receipts')
          .once('value');
        if (snapshot2 && snapshot2.val()) {
          const info = snapshot2
            .val()
            .map(item => [item['info'].date, item['info'].location]);

          setData(info);
        }
      }
    };

    fetchData();
  }, []);

  const headings = ['Date', 'Location'];
  const [customK, setCustomK] = useState();
  const [data, setData] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inside}>
        <Text style={styles.heading}>
          All of your Receipts can be found below!
        </Text>
        <Table>
          <Row
            data={headings}
            style={styles.HeadStyle}
            textStyle={{margin: 10}}
          />
          {data.map((rowData, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                console.log(rowData);
                navigation.navigate('Receipt-Info', {
                  data: {
                    location: rowData[0],
                    date: rowData[1],
                    index: index,
                    customKey: customK,
                  },
                });
              }}>
              <Row
                key={index}
                data={rowData}
                style={{backgroundColor: '#ffffff'}}
                textStyle={{margin: 10}}
              />
            </TouchableOpacity>
          ))}
        </Table>
      </View>
    </SafeAreaView>
  );
};

export default ReceiptScreen;

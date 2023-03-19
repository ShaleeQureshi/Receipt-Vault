const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set, child, push, update, onValue, get } = require('firebase/database');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://receiptvault-6b9f8-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app2);


app.use(express.json());

app.post('/receive-receipt', async (req, res) => {
    try {
      const receipt = req.body.receipt;
      const receipt_info = receipt.pop().info;
      const uid = req.body.uid;
      
      const number_of_receipts_ref = ref(database, `users/${uid}/number_of_receipts`);

      // onValue(number_of_receipts_ref, (snapshot) => {
      //   const number_of_receipts = snapshot.val();
      //   console.log(number_of_receipts);
      // });

      get(number_of_receipts_ref).then((snapshot) => {
        if (snapshot.exists()) {
          number_of_receipts = snapshot.val();
  
          const updates = {};
          const second_updates = {};

          updates[`/users/${uid}/receipts/${number_of_receipts}`] = receipt;
          updates[`/users/${uid}/number_of_receipts`] = number_of_receipts + 1;
  
          update(ref(database), updates)
            .then(() => {
              console.log('Success');
            })
            .catch((error) => {
              console.error('Error: ', error);
            });

          second_updates[`/users/${uid}/receipts/${number_of_receipts}/info`] = receipt_info;

          update(ref(database), second_updates)
            .then(() => {
              console.log('Success second update');
            })
            .catch((error) => {
              console.error('Error: ', error);
            });

        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      res.status(200).send('Receipt added to database');
    } catch (error) {
      console.error(error);
    }
});

// start the server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
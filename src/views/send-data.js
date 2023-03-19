import React from "react";
import { Button, Form } from "react-bootstrap";
const SendData = () => {
  const postData = async (id) => {
    const sendBody = {
      uid: id,
      receipt: [
        {
          product: "Laptop bag",
          price: 123.45,
        },
        {
          product: "Suit",
          price: 1250.0,
        },
        {
          product: "Jordans",
          price: 420,
        },
        {
          info: {
            date: "02/12/23",
            location: "Sobeys",
            transaction_id: 13842957,
            total_price: 1042.08,
          },
        },
      ],
    };
    fetch("https://localhost:3000/receive-receipt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendBody,
    })
      .then((response) => {
        alert(response);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="wrapper">
      <div className="center">
        <h1>Please scan the customer's barcode</h1>
        <Form.Control type="text" required id="id" />
        <Button
          className="mt-2 w-100"
          variant="outline-dark"
          onClick={(e) => {
            e.preventDefault();
            const id = document.getElementById("id").value;
            if (id !== "") {
              // make request to back end
              postData(id);
            } else {
              alert(
                "You have not scanned the customer's barcode.\nPlease scan the customer's barcode and try again."
              );
            }
          }}>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default SendData;
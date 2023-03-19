import React from "react";
import { Button } from "react-bootstrap";

const StoreView = () => {
  return (
    <div className="wrapper">
      <div className="center">
        <Button
          onClick={() => {
            window.location.replace("/send-data");
          }}
          className="w-100 text-center mb-5"
          variant="outline-dark">
          User Wants to use ReceiptVault
        </Button>
        <Button
          className="w-100 text-center"
          variant="outline-dark"
          onClick={() => {
            alert("Continue to payment");
          }}>
          User does not want to use ReceiptVault
        </Button>
      </div>
    </div>
  );
};
export default StoreView;

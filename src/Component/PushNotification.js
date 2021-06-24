import React from "react";
import { Button } from "@material-ui/core";
import addNotification from "react-push-notification";
import GooglePayButton from "@google-pay/button-react";

function PushNotification() {
  const notificationHandler = () => {
    addNotification({
      title: "Hiiee I am notification",
      subtitle: "How are you doing??",
      message: "Take care of yourself",
      theme: "darkblue",
      //native: "true",
    });
  };
  return (
    <div>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
      />
      <Button onClick={notificationHandler}>Push Notification</Button>
    </div>
  );
}

export default PushNotification;

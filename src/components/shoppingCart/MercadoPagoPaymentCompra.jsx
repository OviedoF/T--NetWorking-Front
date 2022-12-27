import React, { useEffect, useState } from "react";
import axios from 'axios';
import env from "../../env";

const MercadoPagoPaymentCompra = ({ cart, setPaymentID, paymentID }) => {
  console.log(cart);
  const [state, setState] = useState(false);
  //Mercado Pago
  const FORM_ID = "payment-form";

  const getData = async () => {
    const response = await axios.post(`${env.API_URL}/payments`, { cart });
    const data = response.data;
    console.log('peticion hecha');

    console.log(data);
    setPaymentID(data.id);
  }


  useEffect(() => {
    if (paymentID && !state) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", paymentID);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
      setState(true);
      console.log('renderizado');
    }
  }, [paymentID]);

  useEffect(() => {
    if (paymentID === null) {
      getData();
    }
  }, []);

  return (
    <>
      <form id={FORM_ID} method="GET" />
    </>
  );
};

export default MercadoPagoPaymentCompra;
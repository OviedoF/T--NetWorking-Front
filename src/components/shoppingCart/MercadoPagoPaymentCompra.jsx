import React, { useEffect, useState } from "react";
import axios from 'axios';
import env from "../../env";

const MercadoPagoPaymentCompra = ({ cart }) => {
  console.log(cart);
  const [state, setState] = useState(false);
  //Mercado Pago
  const FORM_ID = "payment-form";

  const getData = async () => {
    const response = await axios.post(`${env.API_URL}/payments`, { cart });
    const data = response.data;
    console.log('peticion hecha');

    console.log(data);
  }


  useEffect(() => {
    if (!state) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", );
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
      setState(true);
      console.log('renderizado');
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form id={FORM_ID} method="GET" />
    </>
  );
};

export default MercadoPagoPaymentCompra;
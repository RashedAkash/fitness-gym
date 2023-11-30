import React from 'react';
import Title from '../../components/Title/Title';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);

const Payment = () => {
  return (
    <div>
      <div>
        <Title subheading='payment' heading='Payment Salary' />
      </div>
      <div className='py-16'>
         <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
      </div>
    </div>
  );
};

export default Payment;
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useTrainer from '../../Hooks/useTrainer';

const CheckoutForm = () => {
  const axiosSecure = useAxiosSecure;
  const { trainer } = useTrainer();
   const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState('');

const totalSalary = trainer?.reduce((total, tr) => tr?.salary + total, 0)
 useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ salary : totalSalary }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalSalary]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError(' ')
    }
  };
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn bg-[#dc1853] text-white' type="submit" disabled={!stripe }>
        Pay
        </button>
        {error}
    </form>
    </div>
  );
};

export default CheckoutForm;
import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUB_KEY = "pk_test_51KHRiBE8NBTTWoLqY6yTrfGZXM7qxnm9gjA2O95ksAzcOefjxcHKwakXiVhHSrCbz5ZLISWdhqhkIDi0mEQAsmdP00843e5Xjo"

const stripeTestPromise = loadStripe(PUB_KEY);

export default function StripeContainer() {
    return(
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
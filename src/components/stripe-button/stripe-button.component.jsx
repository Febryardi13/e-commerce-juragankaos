import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishedKey = 'pk_test_51HA8U9Csm0rFI8syiXKhNyvH0XjPPxuIZNPWfpWxJ0OCv1mTvA8alWqi2VG2scFiwfWN5Pj92fKirzTQPqw8P9yJ004JEks85p'

    const onToken = token => {
        console.log(token)
        alert('Payment Successfully')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Juragan Kaos Ltd'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishedKey}
        />
    )
}

export default StripeCheckoutButton
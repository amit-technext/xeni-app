import React, { useEffect, useState, FC } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import CheckoutForm from '../../components/stripe/CheckoutForm'

const stripePromise = loadStripe('pk_test_p90mLzM5je1tfg8ElqBpYNef')

const PaymentDetailsPage = function PaymentDetailsPage() {
	const [clientSecret, setClientSecret] = useState('')

	useEffect(() => {
		axios
			.request({
				method: 'POST',
				url: 'https://stripe-server.slms.app/create-payment-intent',
				headers: { 'Content-Type': 'application/json' }
			})
			.then(response => {
				setClientSecret(response.data.clientSecret)
				console.log(response.data)
			})
			.catch(error => {
				console.error(error)
			})
	}, [])

	const appearance = {
		theme: 'stripe'
		// variables: {
		//   colorPrimary: '#8eb5dc',
		//   colorBackground: '#d30d0d',
		//   colorText: '#2b38bf'
		// }
	}
	const options = {
		clientSecret,
		appearance
	}

	return (
		<div>
			<div className='d-flex flex-column mt-6'>
				<p className='text-center fs-1 text-black fw-bold'>Payment Details</p>
				<p className='text-center text-800 mx-auto w-50'>
					Your Xeniapp login grants you access to a full portfolio of bookable
					travel. Book everything from villas to cruises to private jet travel and
					much more, at the best prices on the market.
				</p>
			</div>
			{clientSecret ? (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			) : (
				<div className='d-flex justify-content-center'>
					<Spinner animation='border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</Spinner>
				</div>
			)}
		</div>
	)
}
export default PaymentDetailsPage

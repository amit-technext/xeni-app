/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Link } from 'react-router-dom'
import React, { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartItemInfo from './CartItemInfo-no-need'
import Flex from '../../components/common/utils/Flex'
import { Car, Flight, Hotel } from '../../data/b2c-desktop/flightInfoData'

const Cart: FC = function Cart() {
	const [buttonClass, setButtonClass] = useState('flight')

	return (
		<Flex direction='column' className='card'>
			<div className='d-flex align-items-center ps-3 py-2 rounded-top fw-semi-bold bg-200'>
				<div className='pe-2'>
					<FontAwesomeIcon className='text-900' icon={faShoppingCart} />
				</div>
				<div className='fw-semi-bold text-1000'>Cart</div>
			</div>
			<div>
				<Flex justifyContent='evenly'>
					<div
						className={
							buttonClass === 'flight'
								? 'border-2 border-bottom border-primary outline-none py-2 flex-fill cursor-pointer text-center fs--1 fw-semi-bold'
								: 'flex-fill cursor-pointer py-2 text-center fs--1 fw-semi-bold'
						}
						onClick={() => setButtonClass('flight')}
					>
						Flight
					</div>
					<div
						className={
							buttonClass === 'hotel'
								? 'border-2 border-bottom border-primary outline-none py-2 flex-fill cursor-pointer text-center fs--1 fw-semi-bold'
								: 'flex-fill cursor-pointer py-2 text-center fs--1 fw-semi-bold'
						}
						onClick={() => setButtonClass('hotel')}
					>
						Hotel
					</div>
					<div
						className={
							buttonClass === 'car'
								? 'border-2 border-bottom border-primary outline-none py-2 flex-fill cursor-pointer text-center fs--1 fw-semi-bold'
								: 'flex-fill cursor-pointer py-2 text-center fs--1 fw-semi-bold'
						}
						onClick={() => setButtonClass('car')}
					>
						Car
					</div>
				</Flex>

				{buttonClass === 'flight' ? (
					<CartItemInfo data={Flight} />
				) : buttonClass === 'hotel' ? (
					<CartItemInfo data={Hotel} />
				) : (
					<CartItemInfo data={Car} />
				)}
			</div>
			<div className='fw-semi-bold text-1000 mx-auto py-3'>
				<Link
					to={{ pathname: '/b2c/booking/payment-details' }}
					className='btn bg-primary text-white btn-sm px-1 px-md-4 text-nowrap'
				>
					Checkout
				</Link>
			</div>
		</Flex>
	)
}

export default Cart

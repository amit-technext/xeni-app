import React, { FC } from 'react'

const HotelPolicy: FC = function HotelPolicy() {
	return (
		<>
			<div className='mt-4' id='Policies'>
				<b className='fw-bold fs-0'>Policies</b>
				<p className='fs--1 fw-semi-bold mt-2 mb-1'>Check-in</p>
				<p className='fs--1 mb-1 mt-0'>Check-in from 3:00 PM - 4:00 AM</p>
				<p className='fs--1 mb-1'>Early check-in subject to availability</p>
				<p className='fs--1 mb-1'>
					Early check-in is available for a fee (amount varies)
				</p>
				<p className='fs--1 mb-1'>Late check-in subject to availability</p>
				<p className='fs--1 mb-1'>Minimum check-in age - 18</p>

				<p className='fs--1 fw-semi-bold mt-3 mb-1'>
					Special check-in instructions
				</p>
				<p className='fs--1 mb-1 mt-0'>
					Front desk staff will greet guests on arrival
				</p>
				<p className='fs--1 fw-semi-bold mt-3 mb-1'>Renovations and closures</p>
				<p className='fs--1 mb-1 mt-0'>
					Due to COVID-19, this property’s food and beverage options may be limited.
				</p>
				<p className='fw-semi-bold fs--1 mt-2 mb-2'>Property payment types</p>
				<div>
					<img
						width='62px'
						className='me-1'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png'
						alt='img'
					/>
					<img
						width='62px'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png'
						alt='img'
					/>
				</div>
			</div>
			<div className='mt-4'>
				{/* Policies */}
				<b className='fw-bold fs-0'>Important information</b>
				<p className='fs--1 fw-semi-bold mt-2'>You need to know</p>
				<p className='fs--1 '>
					Extra-person charges may apply and vary depending on property policy
				</p>
				<p className='fs--1'>
					Government-issued photo identification and a credit card, debit card, or
					cash deposit may be required at check-in for incidental charges
				</p>
				<p className='fs--1'>
					Special requests are subject to availability upon check-in and may incur
					additional charges; special requests cannot be guaranted
				</p>
				<p className='fs--1'>
					This property accepts Visa, Mastercard, American Express, debit cards, and
					cash
				</p>
				<p className='fs--1'>
					Safety features at this property include a fire extinguisher, a smoke
					detector, a security system, a first aid kit, and window guards
				</p>
			</div>
			<div className='mt-2'>
				{/* Policies */}
				<p className='fs--1 fw-semi-bold'>We should mention</p>
				<p className='fs--1'>
					This property offers transfers from the airport (surcharges may apply);
					guests must contact the property with arrival details before travel, using
					the contact information on the booking confirmation Reservations are
					required for spa treatments; reservations can be made by contacting the
					property prior to arrival, using the contact information on the booking
					confirmation Reservations are required for spa treatments; reservations can
					be made by contacting the property prior to arrival, using the contact
					information on the booking confirmation
				</p>
				<p className='fs--1'>
					Up to 2 children 16 years old and younger stay free when occupying the
					parent or guardian&apos;s room, using existing bedding The property has
					connecting/adjoining rooms, which are subject to availability and can be
					requested by contacting the property using the number on the booking
					confirmation
				</p>
				<p className='fs--1'>
					The property has connecting/adjoining rooms, which are subject to
					availability and can be requested by contacting the property using the
					number on the booking confirmation
				</p>
				<p className='fs--1'>
					Guests under 16 years old are not allowed in the swimming pool, health
					club, fitness facility, or spa tubs
				</p>
			</div>
		</>
	)
}

export default HotelPolicy

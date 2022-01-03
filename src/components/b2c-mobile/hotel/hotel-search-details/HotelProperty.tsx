import React, { FC } from 'react'

const HotelProperty: FC = function HotelProperty() {
	return (
		<div className='mt-4 mb-2'>
			<b className='fw-bold fs-0'>About this property</b>
			<p className='fs--1 fw-semi-bold mt-2 mb-0'>
				Novotel New Delhi Aerocity Hotel
			</p>
			<p className='fs--1 mt-2 mb-0'>
				A full-service spa, a restaurant, and an outdoor pool are available at this
				hotel. Free WiFi in public areas and free valet parking are also provided.
				Additionally, a health club, a bar/lounge, and a poolside bar are onsite.
				All 400 soundproofed rooms provide free WiFi, free wired Internet, and
				24-hour room service
			</p>
			<button
				type='button'
				className='bg-transparent border-0 fs--1 px-0 text-primary'
			>
				See all
			</button>
			<p className='fs--1 fw-semi-bold mt-3 mb-0'>Awards and affiliations</p>
			<p className='fs--1 mt-2 mb-0'>
				This property has signed the UNESCO Sustainable Tourism Pledge.
			</p>
		</div>
	)
}

export default HotelProperty

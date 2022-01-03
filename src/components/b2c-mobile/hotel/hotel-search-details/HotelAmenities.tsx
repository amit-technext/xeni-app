import {
	faBath,
	faBed,
	faBreadSlice,
	faParking,
	faWifi
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

const HotelAmenities: FC = function HotelAmenities() {
	return (
		<>
			<div id='Amenities' className='mt-4'>
				{/* Property amenities */}
				<b className='fw-bold fs-0'>Property amenities</b>
				<div className='row mt-3'>
					<div className='col-1 pe-0'>
						<FontAwesomeIcon icon={faWifi} className='fs-1 mt-1 pt-0' />
					</div>
					<div className='col-11'>
						<div className='fs--1 fw-semi-bold py-1'>Internet</div>
						<div className='fs--1 py-1'>
							Available in all rooms: Free WiFi and wired Internet
						</div>
						<div className='fs--1 py-1'>
							vailable in some public areas: Free WiFi and wired Internet
						</div>
					</div>
				</div>
				<div className='row mt-3'>
					<div className='col-1 mt-1 pe-0'>
						<FontAwesomeIcon icon={faParking} className='fs-1 pt-0' />
					</div>
					<div className='col-11'>
						<div className='fs--1 fw-semi-bold py-1'>Parking and transportation</div>
						<div className='fs--1 py-1'>
							Free secured, covered self parking on site
						</div>
						<div className='fs--1 py-1'>
							Free secured, covered valet parking on site
						</div>
						<div className='fs--1 py-1'>
							24-hour roundtrip airport shuttle (surcharge)
						</div>
					</div>
				</div>
				<div className='row mt-3'>
					<div className='col-1 mt-2 pe-0'>
						<FontAwesomeIcon icon={faBreadSlice} className='fs-1' />
					</div>
					<div className='col-11'>
						<div className='fs--1 fw-semi-bold py-2'>Food and drink</div>
						<div className='fs--1 py-1'>
							Full breakfast available for a fee 6:30 AM–10:30 AM on weekdays and 6:30
							AM–10:30 AM on weekends: INR 599-999 for adults and INR 299-599 for
							children
						</div>
						<div className='fs--1 py-1'>1 restaurant and 1 coffee shop/café</div>
						<div className='fs--1 py-1'>1 poolside bar and 1 bar</div>
						<div className='fs--1 py-1'>24-hour room service</div>
						<div className='fs--1 py-1'>Coffee/tea in common area(s)</div>
					</div>
				</div>
				<button
					type='button'
					className='bg-transparent border-0 fs--1 text-primary'
				>
					See all
				</button>
			</div>
			<div className='mt-4'>
				{/* Room amenities */}
				{/*  */}
				<b>Room amenities</b>
				<div className='row mt-2'>
					<div className='col-1 mt-0 pe-0'>
						<FontAwesomeIcon icon={faBed} className='fs-1 mt-1 pt-0' />
					</div>
					<div className='col-11'>
						<div className='fs--1 fw-semi-bold py-1'>Bedroom</div>
						<div className='fs--1 py-1'>Air conditioning (climate-controlled)</div>
						<div className='fs--1 py-1'>Free cribs/infant beds</div>
						<div className='fs--1 py-1'>Rollaway/extra beds (surcharge)</div>
					</div>
				</div>
				<div className='row mt-3'>
					<div className='col-1 mt-1 pe-0'>
						<FontAwesomeIcon icon={faBath} className='fs-2 pt-0' />
					</div>
					<div className='col-11'>
						<div className='fs--1 fw-semi-bold py-2'>Bathroom</div>
						<div className='fs--1 py-1'>Bathrobes</div>
						<div className='fs--1 py-1'>Hair dryer</div>
						<div className='fs--1 py-1'>Toilet paper</div>
						<div className='fs--1 py-1'>Soap</div>
						<div className='fs--1 py-1'>Towels</div>
					</div>
				</div>
				<div className='row mt-3'>
					<div className='col-1 mt-1 pe-0'>
						<FontAwesomeIcon icon={faBreadSlice} className='fs-1' />
					</div>
					<div className='col-11'>
						<div className='fs--1 fw-semi-bold py-1'>Food and drink</div>
						<div className='fs--1 py-1'>Electric kettle</div>
						<div className='fs--1 py-1'>Free bottled water</div>
						<div className='fs--1 py-1'>Mini-fridge</div>
						<div className='fs--1 py-1'>Minibar</div>
					</div>
				</div>
				<button
					type='button'
					className='bg-transparent border-0 fs--1 px-0 text-primary'
				>
					See all
				</button>
			</div>
		</>
	)
}

export default HotelAmenities

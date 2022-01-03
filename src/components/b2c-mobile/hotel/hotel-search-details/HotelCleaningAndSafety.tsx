import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faBookMedical, faHandHolding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

const HotelCleaningAndSafety: FC = function HotelCleaningAndSafety() {
	return (
		<div className='mt-4'>
			{/* Cleaning and safety practices */}
			<b className='fw-bold fs-0'>Cleaning and safety practices</b>
			<div className='row mt-2'>
				<div className='col-1 mt-0 pe-0'>
					<FontAwesomeIcon icon={faHandHolding} className='fs-1 mt-0 pt-0' />
				</div>
				<div className='col-11'>
					<div className='fs--1 fw-semi-bold py-2'>
						Enhanced cleanliness measures
					</div>
					<div className='fs--1 py-1'>
						Disinfectant is used to clean the property
					</div>
					<div className='fs--1 py-1'>
						High-touch surfaces are cleaned and disinfected
					</div>
					<div className='fs--1 py-1'>
						Sheets and towels are washed at 60°C/140°F or hotter
					</div>
					<div className='fs--1 py-1'>
						Follows standard cleaning and disinfection practices of ALLSAFE (Accor
						Hotels)
					</div>
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-1 mt-2 pe-0'>
					<FontAwesomeIcon icon={faDiscord} className='fs-1 pt-0' />
				</div>
				<div className='col-11'>
					<div className='fs--1 fw-semi-bold py-2'>Social distancing</div>
					<div className='fs--1 py-1'>Contactless check-in and check-out</div>
					<div className='fs--1 py-1'>
						Protective shields in place at main contact areas
					</div>
					<div className='fs--1 py-1'>
						Guest rooms kept vacant for 24 hours between stays
					</div>
					<div className='fs--1 py-1'>Social distancing measures in place</div>
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-1 mt-2 pe-0'>
					<FontAwesomeIcon icon={faBookMedical} className='fs-1' />
				</div>
				<div className='col-11'>
					<div className='fs--1 fw-semi-bold py-2'>Safety measures</div>
					<div className='fs--1 py-1'>
						Personal protective equipment worn by staff
					</div>
					<div className='fs--1 py-1'>Temperature checks given to staff</div>
					<div className='fs--1 py-1'>Temperature checks available for guests</div>
					<div className='fs--1 py-1'>Masks and gloves available</div>
					<div className='fs--1 py-1'>Hand sanitizer provided</div>
				</div>
			</div>
			<div className='fs--1 my-1'>
				This information is provided by our partners.
			</div>
		</div>
	)
}

export default HotelCleaningAndSafety

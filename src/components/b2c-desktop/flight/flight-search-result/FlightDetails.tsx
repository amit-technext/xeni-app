import React, { FC, HTMLAttributes } from 'react'
import { Form } from 'react-bootstrap'
import Flex from '../../../common/utils/Flex'
import { FlightData } from '../../../../type/FlightSearchResultDataType'

interface FlightDetailsProps extends HTMLAttributes<HTMLOrSVGElement> {
	flightData: FlightData
}

const FlightDetails: FC<FlightDetailsProps> = function FlightDetails(props) {
	const { flightData } = props

	return (
		<Flex justifyContent='start' className='ps-1 me-0 mb-0 mt-0 FlightDetails'>
			<Flex justifyContent='start' className='ms-2'>
				<div className='d-none d-sm-block'>
					<Form>
						<Form.Check
							defaultChecked={flightData.isChecked}
							inline
							name='group1'
							type='checkbox'
							id='inline-1'
						/>
					</Form>
				</div>
				<div className='d-flex d-lg-none align-self-center flex-column mx-0 mx-md-1 mb-2'>
					<div>
						<img height={25} width={25} src={flightData.logo1} alt='p-logo' />
					</div>
				</div>
				<div
					className='d-none d-lg-flex flex-column me-2 mt-0'
					style={{ width: '2.2em' }}
				>
					<div>
						<img
							height={35}
							className='mt-1'
							width={35}
							src={flightData.logo2}
							alt='p-logo'
						/>
					</div>
				</div>
			</Flex>
			<div className='mx-2 px-1'>
				<p className='fw-semi-bold fs--1 fs-sm-0 text-dark text-nowrap mb-1'>
					{`${flightData.departureTime} - ${flightData.arrivalTime}`}
				</p>
				<p className='fw-medium text-600 fs--2 mb-1'>
					<span className='d-none d-md-block text-truncate'>
						{flightData.departureCountry} - {flightData.arrivalCountry}
					</span>
					<span className='d-block d-md-none'>SAW-SAN</span>
				</p>
			</div>
			<div className='mx-2 px-1  d-md-block d-none'>
				<p className='fw-semi-bold text-dark text-nowrap mb-1 fs--1 mt-1'>
					{flightData.stopsCount} stops
				</p>
				<p className='fw-normal fs--1 text-600 mb-1'>
					{flightData.stops.map(stop => (
						<span className='me-1' key={stop}>
							{stop}
						</span>
					))}
				</p>
			</div>
			<div className='mx-2 px-1 d-md-none d-block'>
				<p className='fw-medium fs--1 text-900 text-nowrap mb-1'>
					{flightData.stopsCount} stops
				</p>
				<p className='fw-medium fs--2 text-nowrap mb-2'>
					{flightData.journeyDuration}
				</p>
			</div>

			<div className='d-none d-sm-block ms-1 me-1 mt-1'>
				<p className='fw-semi-bold fs--1 text-dark text-nowrap mb-2'>
					{flightData.journeyDuration}
				</p>
			</div>
		</Flex>
	)
}
export default FlightDetails

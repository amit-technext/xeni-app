import React, { FC } from 'react'
import FlightExpandedDetails from '../../../components/b2c-desktop/flight/flight-details/FlightExpandedDetails'
import Plane from '../../../assets/icon/plane.svg'
import Airlines from '../../../assets/img/logos/planeIcon.svg'

const ResultExpandedDetails: FC = function ResultExpandedDetails() {
	return (
		<div className='bg-100'>
			<div className='py-4 container'>
				<FlightExpandedDetails
					departureTravelsDetails={[
						{
							id: 'string | number',
							airlineIcon: Airlines,
							planeIcon: Plane,
							airlineCompany: 'American Airlines',
							departureAirport: 'Newark (EWR)',
							departureTime: '4:00 PM',
							destinationAirport: 'Montreal Pierre Elliott Trudeau Intl (YUL)',
							destinationTime: '5:29 PM',
							arrivalDate: '26th JAN 2021',
							flightType: 'Overnight flight',
							seatClass: 'Economy',
							totalTime: '1h 29m'
						},
						{
							id: 'string | number',
							airlineIcon: Airlines,
							planeIcon: Plane,
							airlineCompany: 'American Airlines',
							departureAirport: 'Montreal Pierre Elliott Trudeau Intl (YUL)',
							departureTime: '7:45 pm',
							destinationAirport: 'London Heathrow (LHR)',
							destinationTime: '7:39 PM',
							arrivalDate: '27th Jan 2021',
							flightType: 'Overnight flight',
							seatClass: 'Basic Economy',
							totalTime: '6h 45m'
						}
					]}
					returnTravelDetails={[
						{
							id: 'string | number',
							airlineIcon: Airlines,
							planeIcon: Plane,
							airlineCompany: 'American Airlines',
							departureAirport: 'Newark (EWR)',
							departureTime: '4:00 PM',
							destinationAirport: 'Montreal Pierre Elliott Trudeau Intl (YUL)',
							destinationTime: '5:29 PM',
							arrivalDate: '26th JAN 2021',
							flightType: 'Overnight flight',
							seatClass: 'Economy',
							totalTime: '1h 29m'
						},
						{
							id: 'string | number',
							airlineIcon: Airlines,
							planeIcon: Plane,
							airlineCompany: 'American Airlines',
							departureAirport: 'Montreal Pierre Elliott Trudeau Intl (YUL)',
							departureTime: '7:45 pm',
							destinationAirport: 'London Heathrow (LHR)',
							destinationTime: '7:39 PM',
							arrivalDate: '27th Jan 2021',
							flightType: 'Overnight flight',
							seatClass: 'Basic Economy',
							totalTime: '6h 45m'
						}
					]}
				/>
			</div>
		</div>
	)
}

export default ResultExpandedDetails

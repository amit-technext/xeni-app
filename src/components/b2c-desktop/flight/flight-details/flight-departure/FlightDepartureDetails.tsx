import React, { FC, HTMLAttributes } from 'react'
import FlightInfo from '../FlightInfo'
import FlightClass from '../FlightClass'

import FlightCollapseBase from '../flight-collapse/FlightCollapseBase'

import { FlightOverviewType } from '../../../../../type/FlightOverviewType'
import { LightTabType } from '../../../../../type/TabType'

interface FlightDepartureDetailsProps extends HTMLAttributes<HTMLOrSVGElement> {
	departureTravelsDetails: FlightOverviewType[]
	departTab: LightTabType[]
}

const FlightDepartureDetails: FC<FlightDepartureDetailsProps> =
	function FlightDepartureDetails({
		departureTravelsDetails,
		departTab
	}: FlightDepartureDetailsProps) {
		return (
			<>
				<FlightCollapseBase
					initialState
					date='Wed, Sep 15'
					flightState='Depart'
					travelDuration='06h 45m'
				>
					{departureTravelsDetails?.map(item => (
						<FlightInfo
							key={item.id}
							Airlines={item.airlineIcon}
							Plane={item.planeIcon}
							airlineCompany={item.airlineCompany}
							departureAirport={item.departureAirport}
							departureTime={item.departureTime}
							destinationAirport={item.destinationAirport}
							destinationTime={item.destinationTime}
							arrivalDate={item.arrivalDate}
							flightType={item.flightType}
							seatClass={item.seatClass}
							totalTime={item.totalTime}
						/>
					))}
				</FlightCollapseBase>
				<FlightClass tabData={departTab} />
			</>
		)
	}

export default FlightDepartureDetails

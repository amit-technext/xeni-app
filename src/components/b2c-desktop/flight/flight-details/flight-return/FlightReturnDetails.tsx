import React, { FC, HTMLAttributes } from 'react'
import FlightInfo from '../FlightInfo'
import FlightClass from '../FlightClass'
import FlightCollapseBase from '../flight-collapse/FlightCollapseBase'
import { FlightOverviewType } from '../../../../../type/FlightOverviewType'
import { LightTabType } from '../../../../../type/TabType'

interface FlightReturnDetailsProps extends HTMLAttributes<HTMLOrSVGElement> {
	returnTravelDetails: FlightOverviewType[]
	returnTab: LightTabType[]
}

const FlightReturnDetails: FC<FlightReturnDetailsProps> =
	function FlightReturnDetails({
		returnTravelDetails,
		returnTab
	}: FlightReturnDetailsProps) {
		return (
			<>
				<FlightCollapseBase
					initialState
					date='Thu, Sep 30'
					flightState='Return'
					travelDuration='16h 45m'
				>
					<FlightInfo
						Airlines={returnTravelDetails[0].airlineIcon}
						Plane={returnTravelDetails[0].planeIcon}
						airlineCompany={returnTravelDetails[0].airlineCompany}
						departureAirport={returnTravelDetails[0].departureAirport}
						departureTime={returnTravelDetails[0].departureTime}
						destinationAirport={returnTravelDetails[0].destinationAirport}
						destinationTime={returnTravelDetails[0].destinationTime}
						seatClass={returnTravelDetails[0].seatClass}
						totalTime={returnTravelDetails[0].totalTime}
						flightType={returnTravelDetails[0].flightType}
					/>
					<div className='border-bottom border-top px-4 py-3 fs--1'>
						1h 35m . change flights in Zurich (ZRH)
					</div>
					<FlightInfo
						Airlines={returnTravelDetails[1].airlineIcon}
						Plane={returnTravelDetails[1].planeIcon}
						airlineCompany={returnTravelDetails[1].airlineCompany}
						departureAirport={returnTravelDetails[1].departureAirport}
						departureTime={returnTravelDetails[1].departureTime}
						destinationAirport={returnTravelDetails[1].destinationAirport}
						destinationTime={returnTravelDetails[1].destinationTime}
						seatClass={returnTravelDetails[1].seatClass}
						totalTime={returnTravelDetails[1].totalTime}
						flightType={returnTravelDetails[1].flightType}
					/>
				</FlightCollapseBase>
				<FlightClass tabData={returnTab} />
			</>
		)
	}

export default FlightReturnDetails

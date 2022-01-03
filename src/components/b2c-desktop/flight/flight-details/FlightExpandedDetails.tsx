import React, { FC, HTMLAttributes } from 'react'
import { Card, Button } from 'react-bootstrap'
import FlightDepartureDetails from './flight-departure/FlightDepartureDetails'
import GoBack from '../../../common/utils/GoBack'
import FlightReturnDetails from './flight-return/FlightReturnDetails'
import { FlightOverviewType } from '../../../../type/FlightOverviewType'
import {
	returnTab,
	departTab
} from '../../../../data/b2c-desktop/expandedDetailsData'

interface FlightExpandedDetailsProps extends HTMLAttributes<HTMLOrSVGElement> {
	departureTravelsDetails: FlightOverviewType[]
	returnTravelDetails: FlightOverviewType[]
}

const FlightExpandedDetails: FC<FlightExpandedDetailsProps> =
	function FlightExpandedDetails(props) {
		const { departureTravelsDetails, returnTravelDetails } = props

		return (
			<>
				<div className='d-flex'>
					<div className='me-3'>
						<GoBack />
					</div>
					<div style={{ lineHeight: '8px' }}>
						<p className='fw-bold text-dark'>Newark - London</p>
						<p className='fs--1 fw-medium text-800'>Round-Trip, 1 Traveller</p>
					</div>
				</div>
				<Card className='mb-3'>
					<FlightDepartureDetails
						departureTravelsDetails={departureTravelsDetails}
						departTab={departTab}
					/>
				</Card>
				<Card className='mb-3'>
					<FlightReturnDetails
						returnTravelDetails={returnTravelDetails}
						returnTab={returnTab}
					/>
				</Card>
				<Card className='px-4 py-3'>
					<div className='d-flex justify-content-between align-items-center'>
						<span className='text-700 fs--1 fs-sm-0'>
							Nice Job! You&apos;re almost done
						</span>
						<Button className='px-2 px-sm-5 py-1 bg-primary border-0 text-white fs--2 fs-sm--1'>
							Add To Cart
						</Button>
					</div>
				</Card>
			</>
		)
	}

export default FlightExpandedDetails

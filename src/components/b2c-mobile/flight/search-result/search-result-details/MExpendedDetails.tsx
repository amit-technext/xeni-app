import React, { FC, HTMLAttributes, useState } from 'react'
import { Accordion, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MTicketClass from './MTicketClass'
import MStopsDetails from './MStopsDetails'
import MStopsOverView from './MStopsOverView'
import Flex from '../../../../common/utils/Flex'
import MCustomToggle from '../../../ui/MCustomToggle'
import { FlightDetailsInfoType } from '../../../../../type/FlightSearchResultDataType'

interface MExpendedDetailsProps extends HTMLAttributes<HTMLOrSVGElement> {
	flightDetailsInfo: FlightDetailsInfoType
}

const MExpendedDetails: FC<MExpendedDetailsProps> = function MExpendedDetails({
	flightDetailsInfo
}: MExpendedDetailsProps) {
	const [open, setOpen] = useState(false)

	return (
		<Flex direction='column'>
			<div className='d-flex'>
				{flightDetailsInfo.airport.map(airport => (
					<Image
						key={airport.id}
						height={50}
						className='me-2'
						src={airport.airline}
						alt={`${airport.from}-${airport.to}`}
					/>
				))}
			</div>

			{flightDetailsInfo?.airport.map(airport => (
				<h3 key={airport.id} className='fw-semi-bold mb-0 text-black'>
					{`${airport.from} - ${airport.to}`}
				</h3>
			))}

			<p className='mb-0'>
				{`${flightDetailsInfo?.travelDuration.month} 
        ${flightDetailsInfo?.travelDuration.duration},
        ${flightDetailsInfo?.travelDuration.traveler}, Traveler`}
			</p>
			<hr />

			<Accordion>
				<MCustomToggle setOpen={setOpen} eventKey='0'>
					<div className='border-bottom'>
						<Flex justifyContent='between'>
							<p className='mb-0 text-900'>Airline policy updates</p>
							<FontAwesomeIcon
								icon={open ? 'chevron-up' : 'chevron-down'}
								className='ms-1 cursor-pointer'
							/>
						</Flex>
						<p className='fs--1 mb-0 text-wrap text-900'>
							Flexible cancellation options & additional safety measures.
							<button
								type='button'
								className='btn link-primary px-0 btn-small fs--1 box-shadow-none'
							>
								Read more.
							</button>
						</p>
					</div>
				</MCustomToggle>

				<Accordion.Collapse eventKey='0'>
					<p className='fs--1 my-2'>{flightDetailsInfo?.airlinePolicy}</p>
				</Accordion.Collapse>
			</Accordion>

			{flightDetailsInfo?.flightTicketClassDetails.map(details => (
				<React.Fragment key={details.id}>
					<p className='fs-0 text-black fw-semi-bold mt-3'>{details.type}</p>
					<hr className='mt-1' />

					{details?.flightOverViewDetails?.map(overviewData => (
						<React.Fragment key={overviewData.id}>
							<MStopsOverView overView={overviewData.stopsOverView} />

							{overviewData.flightOverViewData?.map(item => (
								<MStopsDetails key={item.id} flightOverView={item} />
							))}
						</React.Fragment>
					))}
					<MTicketClass ticketClass={details.ticketClass} />

					<div className='mt-2 mx-auto' style={{ width: '210px' }}>
						<p className='text-center mb-0 fs--1'>{details.condition}</p>
					</div>
				</React.Fragment>
			))}
		</Flex>
	)
}

export default MExpendedDetails

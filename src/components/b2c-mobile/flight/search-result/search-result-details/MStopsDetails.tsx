import React, { FC, HTMLAttributes, useState } from 'react'
import {
	Accordion,
	Card,
	Col,
	Image,
	ListGroup,
	ListGroupItem
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAirbnb, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {
	faChair,
	faChargingStation,
	faMoon,
	faUtensilSpoon
} from '@fortawesome/free-solid-svg-icons'
import MCustomToggle from '../../../ui/MCustomToggle'
import Flex from '../../../../common/utils/Flex'
import { textFirstLetter } from '../../../../../helpers/helpers'
import { flightOverViewDataType } from '../../../../../type/FlightSearchResultDataType'

const flightOverViewIconsOnAccordion = [
	faAirbnb,
	faMoon,
	faChair,
	faChargingStation,
	faYoutube,
	faUtensilSpoon
]

interface MStopsDetailsProps extends HTMLAttributes<HTMLOrSVGElement> {
	flightOverView: flightOverViewDataType
}

const MStopsDetails: FC<MStopsDetailsProps> = function MStopsDetails({
	flightOverView
}) {
	const [open, setOpen] = useState(false)

	return (
		<Card className='border border-2 mb-3'>
			<Card.Body>
				<Flex justifyContent='center' className='text-black fs--1 fw-semi-bold'>
					<Image
						height={20}
						className='me-2'
						src={flightOverView?.flightImage}
						alt=''
					/>
					<p>{flightOverView?.flightName}</p>
				</Flex>
				<div className='d-flex align-items-center'>
					<Col xs='auto'>
						<div className='text-start text-black'>
							<p className='mb-0 fw-medium'>{flightOverView?.flightFromData?.from}</p>
							<p className='mb-0 fw-semi-bold'>
								{flightOverView?.flightFromData?.time}
							</p>
							<p className='mb-0 fw-medium fs--1'>
								{flightOverView?.flightFromData?.date}
							</p>
							<p className='mb-0 fw-medium fs--1'>
								{flightOverView?.flightFromData?.city}
							</p>
						</div>
					</Col>
					<Col className='position-relative'>
						<p className='mb-0 text-center time-line'>
							<span className='bg-white fs--1 px-1 fw-semi-bold position-relative text-nowrap text-dark'>
								{flightOverView?.approximateTime}
							</span>
						</p>
					</Col>
					<Col xs='auto'>
						<div className='text-end text-black'>
							<p className='mb-0 fw-medium'>{flightOverView?.flightToData?.from}</p>
							<p className='mb-0 fw-semi-bold'>{flightOverView?.flightToData?.time}</p>
							<p className='mb-0 fw-medium fs--1'>
								{flightOverView?.flightToData?.date}
							</p>
							<p className='mb-0 fw-medium fs--1'>
								{flightOverView?.flightToData?.city}
							</p>
						</div>
					</Col>
				</div>
				<div>
					<Accordion>
						<MCustomToggle setOpen={setOpen} eventKey='0'>
							<div
								className='bg-200 p-2 mx-auto rounded-3 my-3'
								style={{ width: 'max-content' }}
							>
								<Flex alignItems='center' className='text-black'>
									<p className='mb-0 fs--1 fw-medium text-black'>Economy</p>
									{flightOverViewIconsOnAccordion?.map((faIcon, index) => (
										<span key={index.toString()} className='mx-2'>
											<FontAwesomeIcon icon={faIcon} size='sm' />
										</span>
									))}
									<span>
										<FontAwesomeIcon
											icon={open ? 'chevron-up' : 'chevron-down'}
											className='ms-1'
										/>
									</span>
								</Flex>
							</div>
						</MCustomToggle>

						<Accordion.Collapse eventKey='0'>
							<ListGroup variant='flush' className='text-black fs--1 fw-medium'>
								<ListGroupItem>
									<span className='text-uppercase'>
										{textFirstLetter(flightOverView?.flightProviderName, 3)}
									</span>
									<span className='mx-3'>{flightOverView?.flightProviderName}</span>
								</ListGroupItem>
								<ListGroupItem>
									<span>LIS</span>
									<span className='mx-3'>Humberto Delgado</span>
								</ListGroupItem>

								{flightOverView?.specifications?.map(specification => (
									<ListGroupItem key={specification.id}>
										<FontAwesomeIcon icon={specification.icon} />
										<span className='mx-3'>{specification.text}</span>
									</ListGroupItem>
								))}
							</ListGroup>
						</Accordion.Collapse>
					</Accordion>
				</div>
				<div className='bg-100 py-2 text-center rounded-2'>
					<span className='mb-0 fs--1 fw-medium text-900'>
						<span className='fs--1 fw-bold text-black'>2h 20m</span> layover in
						Barajas
					</span>
				</div>
			</Card.Body>
		</Card>
	)
}

export default MStopsDetails

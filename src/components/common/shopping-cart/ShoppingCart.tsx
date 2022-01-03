import Flex from 'components/common/utils/Flex'
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPlane,
	faHotel,
	faCar,
	faWind,
	faSlidersH,
	faArrowRight,
	faEnvelopeOpen
} from '@fortawesome/free-solid-svg-icons'
import { Card, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import features from './data'

const ShoppingCart: FC = function ShoppingCart() {
	return (
		<Card className='p-3'>
			<div className='row mt-2'>
				<div className='col-1 pe-0'>
					<div
						className='rounded-circle bg-primary d-flex align-items-center'
						style={{ height: '24px', width: '24px' }}
					>
						<FontAwesomeIcon
							icon={faPlane}
							size='sm'
							className='text-white mx-auto'
						/>
					</div>
				</div>
				<div className='col-11'>
					<Flex
						alignItems='center'
						justifyContent='between'
						className='mb-2 fw-semi-bold'
					>
						<span>Roundtrip Flight</span>
						<span>$600</span>
					</Flex>
					<div className='w-90 fs--1'>
						<p className='mb-1 fw-semi-bold'>
							New York City, NY - London, United Kingdom
						</p>
						<p className='mb-1'>Wed, Dec 15 - Thu, Dec 16</p>
						<p className='m-0'>2 Tickets, 2 Adults</p>
					</div>
				</div>
			</div>
			<hr />
			<div className='row'>
				<div className='col-1 pe-0'>
					<div
						className='rounded-circle bg-primary d-flex align-items-center'
						style={{ height: '24px', width: '24px' }}
					>
						<FontAwesomeIcon
							icon={faHotel}
							size='sm'
							className='text-white mx-auto'
						/>
					</div>
				</div>
				<div className='col-11'>
					<Flex
						alignItems='center'
						justifyContent='between'
						className='mb-2 fw-semi-bold'
					>
						<span>The Exhibitionist Hotel</span>
						<span>$450</span>
					</Flex>
					<div className='w-90 fs--1'>
						<p className='mb-1 fw-semi-bold'>
							8-10 Queensberry Place, London, SW7 2EA
						</p>
						<p className='mb-1'>Wed, Dec 15 - Thu, Dec 16</p>
						<p className='m-0'>1 room, 2 nights</p>
					</div>
				</div>
			</div>
			<hr />
			<div className='row'>
				<div className='col-1 pe-0'>
					<div
						className='rounded-circle bg-primary d-flex align-items-center'
						style={{ height: '24px', width: '24px' }}
					>
						<FontAwesomeIcon icon={faCar} size='sm' className='text-white mx-auto' />
					</div>
				</div>
				<div className='col-11'>
					<Flex
						alignItems='center'
						justifyContent='between'
						className='mb-2 fw-semi-bold'
					>
						<span>F Chevrolet Malibu</span>
						<span>$200</span>
					</Flex>
					<div className='w-90 fs--1'>
						<p className='mb-1 fw-semi-bold'>
							8-10 Queensberry Place, London, SW7 2EA
						</p>
						<p className='mb-1'>Wed, Dec 15 - Thu, Dec 16</p>
						<div className='d-flex flex-wrap mb-1'>
							{features?.map((item, index) => (
								<OverlayTrigger
									key={index.toString()}
									overlay={
										<Tooltip id='overlay-trigger-example'>
											{item.itemCount} {item.itemName}
										</Tooltip>
									}
								>
									<div className='d-flex align-items-center me-3 text-black cursor-pointer'>
										<FontAwesomeIcon icon={item.icon} size='sm' className='me-2' />
										<span className='fs--1'>{item.itemCount}</span>
									</div>
								</OverlayTrigger>
							))}
							<div className='me-3'>
								<FontAwesomeIcon
									icon={faSlidersH}
									size='sm'
									className='me-2 text-black'
								/>
								<span className='fs--1 text-black'>Automatic</span>
							</div>
							<div>
								<FontAwesomeIcon icon={faWind} size='sm' className='me-2 text-black' />
								<span className='fs--1 text-black'>AC</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Flex
				justifyContent='between'
				alignItems='center'
				className='bg-100 p-3 rounded mb-3 mt-3'
			>
				<div className='d-flex'>
					<FontAwesomeIcon
						icon={faEnvelopeOpen}
						size='sm'
						className='text-700 me-3'
					/>
					<p className='text-700 m-0 fw-semi-bold fs--1'>Email Itinerary</p>
				</div>

				<div className='border shadow-sm d-flex align-items-center p-1'>
					<FontAwesomeIcon icon={faArrowRight} size='sm' className='text-600' />
				</div>
			</Flex>
			<Flex
				justifyContent='between'
				alignItems='center'
				className='bg-100 p-3 rounded'
			>
				<p className='text-primary m-0 fw-semi-bold fs--1'>Total due</p>
				<p className='fw-semi-bold m-0 fs-1'>$1250.50</p>
			</Flex>
			<hr />
			<p className='fs--1 text-700'>
				Rates are quoted in US Dollars. All taxed or fees collected by the hotel
				will be settled in local currency.
			</p>
			<Button className='bg-primary outline-none border-0 mt-4 w-100 fw-normal'>
				Check Out
			</Button>
		</Card>
	)
}

export default ShoppingCart

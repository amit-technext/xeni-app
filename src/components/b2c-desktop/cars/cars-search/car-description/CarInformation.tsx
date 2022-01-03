import React, { FC } from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUserAlt,
	faWind,
	faSlidersH,
	faSimCard,
	faShoppingBag
} from '@fortawesome/free-solid-svg-icons'
import Flex from 'components/common/utils/Flex'
import image1 from '../../../../../assets/img/car/car1.png'

const CarInformation: FC = function CarInformation() {
	return (
		<Card className='p-4'>
			<Flex
				direction='row'
				justifyContent='between'
				alignItems='center'
				className='mb-1'
			>
				<div>
					<p className='fs--1 fs-sm-1 fw-bold text-dark mb-0 mt-2 mt-md-0'>
						F CHEVROLET MALIBU
					</p>
					<p className='mb-2 fs--1 text-900 fw-semi-bold'>Compact </p>
					<Flex className='gap-2 flex-wrap'>
						<span className='px-2 py-1 fs--1 rounded-2 bg-soft-primary'>
							Unlimited Free Miles Included
						</span>
						<span className='px-2 py-1 fs--1 rounded-2 bg-soft-primary'>
							Free cancellation
						</span>
						<span className='px-2 py-1 fs--1 rounded-2 bg-soft-primary'>
							Book now, pay later
						</span>
					</Flex>
					<Flex className='mt-3 gap-3 flex-wrap'>
						<div className='d-flex align-items-center text-black cursor-pointer me-1'>
							<FontAwesomeIcon icon={faUserAlt} size='sm' className='me-2' />
							<span className='fs--1'>5 people</span>
						</div>
						<div className='d-flex align-items-center text-black cursor-pointer me-1'>
							<FontAwesomeIcon icon={faShoppingBag} size='sm' className='me-2' />
							<span className='fs--1'>1 bag</span>
						</div>
						<div className='d-flex align-items-center text-black cursor-pointer me-1'>
							<FontAwesomeIcon icon={faSimCard} size='sm' className='me-2' />
							<span className='fs--1'>4 doors</span>
						</div>
					</Flex>
					<Flex className='mt-2 flex-wrap gap-3'>
						<div className='me-3'>
							<FontAwesomeIcon icon={faWind} size='sm' className='me-2 text-black' />
							<span className='fs--1 text-black'>Air Conditioning</span>
						</div>
						<div>
							<FontAwesomeIcon
								icon={faSlidersH}
								size='sm'
								className='me-2 text-black'
							/>
							<span className='fs--1 text-black'>Automatic transmission</span>
						</div>
					</Flex>
				</div>
				<div>
					<img src={image1} height='80' alt='car' />
				</div>
			</Flex>
			<hr />
			<Row className='mt-1 mb-1'>
				<Col sm={6}>
					<p className='fs--1 fw-bold text-dark mb-0'>Pick-up</p>
					<p className='fs--1 text-900 mb-0'>11:00 AM,</p>
					<p className='fs--1 text-900 mb-0'>GREENWICH VILLAGE</p>
				</Col>
				<Col sm={6}>
					<p className='fs--1 fw-bold text-dark mb-0'>Drop-off</p>
					<p className='fs--1 text-900 mb-0'>11:00 AM,</p>
					<p className='fs--1 text-900 mb-0'>GREENWICH VILLAGE</p>
				</Col>
			</Row>
			<hr />
			<Row className='mt-1 mb-1'>
				<Col md={3}>
					<p className='fw-bold fs--1 text-black mb-0'>Fuel Policy</p>
					<p className='fs--1 mb-0'>Full to full</p>
				</Col>
				<Col md={3}>
					<p className='fw-bold fs--1 text-black mb-0'>Included Mileage</p>
					<p className='fs--1 mb-0'>Unlimited</p>
				</Col>
				<Col md={3}>
					<p className='fw-bold fs--1 text-black mb-0'>Estimated Deposit</p>
					<p className='fs--1 mb-0'>$174.00</p>
				</Col>
			</Row>
			<hr />
			<Row className='mt-1 mb-1'>
				<Col sm={6}>
					<p className='fs--1 fw-bold text-dark mb-0'>Collision Damage Waiver</p>
					<p className='fs--1 text-900 mb-0'>$0.00 Excess</p>
				</Col>
				<Col sm={6}>
					<p className='fs--1 fw-bold text-dark mb-0'>Theft Protection</p>
					<p className='fs--1 text-900 mb-0'>$0.00 Excess</p>
				</Col>
			</Row>
			<hr />
			<Row className='mt-1 mb-1'>
				<Col md={3}>
					<p className='fw-bold fs--1 text-black mb-0'>Rate Code</p>
					<p className='fs--1 mb-0'>CRONEX</p>
				</Col>
				<Col md={3}>
					<p className='fw-bold fs--1 text-black mb-0'>Accounting Number</p>
					<p className='fs--1 mb-0'>267111329970</p>
				</Col>
				<Col md={3}>
					<p className='fw-bold fs--1 text-black mb-0'>$253</p>
					<p className='fs--1 mb-0'>Price for 7 days</p>
				</Col>
			</Row>
			<div className='text-end mt-4 mb-2'>
				<Button className='bg-primary border-0'>Add to cart</Button>
			</div>
		</Card>
	)
}

export default CarInformation

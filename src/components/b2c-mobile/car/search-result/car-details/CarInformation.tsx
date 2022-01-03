import React, { FC } from 'react'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUserAlt,
	faWind,
	faSlidersH,
	faSimCard,
	faShoppingBag
} from '@fortawesome/free-solid-svg-icons'
import image1 from '../../../../../assets/img/car/car5.png'
import Flex from '../../../../common/utils/Flex'

const CarInformation: FC = function CarInformation() {
	return (
		<Card className='p-2 pb-3 mb-3'>
			<img
				src={image1}
				className='p-2 mx-auto'
				style={{ maxWidth: '248px', maxHeight: '130px' }}
				alt='car'
			/>
			<hr />
			<Flex
				direction='row'
				justifyContent='between'
				alignItems='center'
				className='mb-1'
			>
				<div>
					<p className='fs-0 fw-bold text-dark mb-0 mt-1'>F CHEVROLET MALIBU</p>
					<p className='mb-2 fs--1 text-900 fw-medium'>Compact </p>
					<Flex className='gap-2 flex-wrap'>
						<span className='px-2 py-1 fs--1 fw-medium rounded-2 bg-soft-primary'>
							Unlimited Free Miles Included
						</span>
						<span className='px-2 py-1 fs--1 fw-medium rounded-2 bg-soft-primary'>
							Free cancellation
						</span>
						<span className='px-2 py-1 fs--1 fw-medium rounded-2 bg-soft-primary'>
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
					<Flex className='mt-2 flex-wrap gap-1'>
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
			</Flex>
			<hr />
			<Flex justifyContent='between' className='flex-wrap'>
				<div>
					<p className='fs--1 fw-medium text-dark mb-0'>Pick-up</p>
					<p className='fs--1 text-900 mb-0'>11:00 AM,</p>
					<p className='fs--1 text-900 mb-0'>GREENWICH VILLAGE</p>
				</div>
				<div>
					<p className='fs--1 fw-medium text-dark mb-0'>Drop-off</p>
					<p className='fs--1 text-900 mb-0'>11:00 AM,</p>
					<p className='fs--1 text-900 mb-0'>GREENWICH VILLAGE</p>
				</div>
			</Flex>
			<hr />
			<Flex justifyContent='between' className='flex-wrap gap-2'>
				<div className='fs--1 pe-0'>
					<p className='fw-medium text-black mb-0'>Fuel Policy</p>
					<p className='mb-0'>Full to full</p>
				</div>
				<div className='fs--1 pe-0'>
					<p className='fw-medium text-black mb-0'>Included Mileage</p>
					<p className='mb-0'>Unlimited</p>
				</div>
				<div className='fs--1 pe-0'>
					<p className='fw-medium text-black mb-0'>Estimated Deposit</p>
					<p className='mb-0'>$174.00</p>
				</div>
			</Flex>
			<hr />
			<Flex justifyContent='between' className='flex-wrap'>
				<div>
					<p className='fs--1 fw-medium text-dark mb-0'>Collision Damage Waiver</p>
					<p className='fs--1 text-900 mb-0'>$0.00 Excess</p>
				</div>
				<div>
					<p className='fs--1 fw-medium text-dark mb-0'>Theft Protection</p>
					<p className='fs--1 text-900 mb-0'>$0.00 Excess</p>
				</div>
			</Flex>
			<hr />
			<Flex justifyContent='between' className='flex-wrap'>
				<div>
					<p className='fs--1 fw-medium text-dark mb-0'>Rate Code</p>
					<p className='fs--1 text-900 mb-0'>CRONEX</p>
				</div>
				<div>
					<p className='fs--1 fw-medium text-dark mb-0'>Accounting Number</p>
					<p className='fs--1 text-900 mb-0'>267111329970</p>
				</div>
			</Flex>
			<Flex justifyContent='between' className='flex-wrap mt-4'>
				<div>
					<p className='fs-0 fw-medium text-dark mb-0'>$253</p>
					<p className='fs--1 text-900 mb-0'>Price for 7 days</p>
				</div>
				<div>
					<Button className='bg-primary border-0 fs--1'>Add to cart</Button>
				</div>
			</Flex>
		</Card>
	)
}

export default CarInformation

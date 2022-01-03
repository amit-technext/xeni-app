import React, { FC } from 'react'
import { Card } from 'react-bootstrap'
import Flex from '../../../../common/utils/Flex'

const CarSummary: FC = function CarSummary() {
	return (
		<Card className='px-3 py-3 mb-3 pb-4'>
			<Flex direction='column'>
				<div className='mb-3'>
					<p className='fs-0 fw-bold text-dark mb-2'>Summary</p>
					<p className='fs--1 mb-0'>Fri, Sep 11 - 13:00 PM</p>
					<p className='fs--1 mb-0'>Sat, Sep 12 - 15:00 PM</p>
				</div>
				<hr className='mt-0' />
				<div className='mb-3'>
					<p className='fs-0 fw-bold text-dark mb-2'>Charges</p>
					<Flex justifyContent='between' className='fs--1'>
						<p className='mb-0'>Economy</p>
						<p className='mb-0'>$406.80</p>
					</Flex>
					<Flex justifyContent='between' className='fs--1'>
						<p className='mb-0'>Taxes and fees</p>
						<p className='mb-0'>$223.82</p>
					</Flex>
				</div>
				<hr className='mt-0' />
				<Flex justifyContent='between' className='fw-bold fs-0'>
					<p className='fs-0 text-dark mb-0'>Total</p>
					<p className='mb-0'>$630.62</p>
				</Flex>
			</Flex>
		</Card>
	)
}

export default CarSummary

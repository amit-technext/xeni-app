import Flex from 'components/common/utils/Flex'
import React, { FC } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const CarSummary: FC = function CarSummary() {
	return (
		<Card className='p-4'>
			<Row>
				<Col sm={6} md={5} lg={3} className='mb-3 mb-sm-0 border-end'>
					<p className='fs--1 fs-sm-0 fw-bold text-dark mb-2'>Summary</p>
					<p className='fs--1 mb-0'>Fri, Sep 11 - 13:00 PM</p>
					<p className='fs--1 mb-0'>Sat, Sep 12 - 15:00 PM</p>
				</Col>
				<Col sm={6} md={5} lg={6} className='mb-3 mb-sm-0 border-end px-4'>
					<p className='fs--1 fs-sm-0 fw-bold text-dark mb-2'>Charges</p>
					<Flex justifyContent='between' className='fs--1'>
						<p className='mb-0'>Economy</p>
						<p className='mb-0'>$406.80</p>
					</Flex>
					<Flex justifyContent='between' className='fs--1'>
						<p className='mb-0'>Taxes and fees</p>
						<p className='mb-0'>$10.00</p>
					</Flex>
				</Col>
				<Col sm={6} md={2} lg={3} className='fw-bold fs-0 pt-3 text-center'>
					<p className='fs--1text-dark mb-0'>Total</p>
					<p className='mb-0'>$150</p>
				</Col>
			</Row>
		</Card>
	)
}

export default CarSummary

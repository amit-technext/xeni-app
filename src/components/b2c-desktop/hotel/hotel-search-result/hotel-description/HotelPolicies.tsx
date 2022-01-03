import React, { FC } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'
import CustomCollapse from '../../../../common/collapse/CustomCollapse'

const HotelPolicies: FC = function HotelPolicies() {
	return (
		<div className='mt-4'>
			<Row>
				<Col md={4} sm={12}>
					<p className='fs-1 fw-semi-bold text-dark'>Policies</p>
				</Col>
				<Col md={8} sm={12}>
					<Row>
						<Col md={6} sm={12} className='mb-3'>
							<p className='fs-0 fw-semi-bold text-dark mb-1'>Check-in</p>
							<ListGroup as='ul' variant='flush' className='mt-2'>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Check-in from 3:00 PM - 4:00 AM</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'> Early check-in subject to availability</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>
										{' '}
										Early check-in is available for a fee (amount varies)
									</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Late check-in subject to availability</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Minimum check-in age - 18</p>
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={6} sm={12} className='mb-3'>
							<p className='fs-0 fw-semi-bold text-dark mb-1'>Check-out</p>
							<ListGroup as='ul' variant='flush' className='mt-2'>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Check-out before noon</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Late check-out subject to availability</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>A late check-out fee will be charged</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Express check-out</p>
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className='mt-4'>
				<Col md={4} sm={12}>
					<p className='fs-1 fw-semi-bold text-dark'>Important information</p>
				</Col>
				<Col md={8} sm={12}>
					<Row>
						<Col md={12} className='mb-4'>
							<p className='fs-0 fw-semi-bold text-1000 mb-2'>Optional extras</p>
							<div className='fs--1 text-800'>
								<ListGroup as='ul' variant='flush'>
									<ListGroup.Item
										as='li'
										className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
									>
										<p className='mb-0 fs--1'>
											Breakfast fee: between INR 599 and INR 999 for adults, INR 299 and
											INR 599 for children (approximately)
										</p>
									</ListGroup.Item>
									<ListGroup.Item
										as='li'
										className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
									>
										<p className='mb-0 fs--1'>
											Airport shuttle fee: INR 1200 per vehicle (one-way, maximum occupancy
											02)
										</p>
									</ListGroup.Item>
									<ListGroup.Item
										as='li'
										className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
									>
										<p className='mb-0 fs--1'>Pet fee: INR 1000 per pet, per night</p>
									</ListGroup.Item>
									<ListGroup.Item
										as='li'
										className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
									>
										<p className='mb-0 fs--1'>
											Early check-in is available for a fee (subject to availability,
											amount varies)
										</p>
									</ListGroup.Item>
									<ListGroup.Item
										as='li'
										className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
									>
										<p className='mb-0 fs--1'>
											Late check-out is available for a fee (subject to availability,
											amount varies)
										</p>
									</ListGroup.Item>
									<ListGroup.Item
										as='li'
										className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
									>
										<p className='mb-0 fs--1'>Rollaway bed fee: INR 1500.0 per stay</p>
									</ListGroup.Item>
								</ListGroup>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className='mt-4'>
				<Col md={4} sm={12}>
					<p className='fs-1 fw-semi-bold text-dark'>Frequently asked questions</p>
				</Col>
				<Col md={8} sm={12}>
					<Row>
						<Col sm={12} lg={6} className='mb-4'>
							<CustomCollapse
								fontSize='fs-0'
								title='Is Novotel Delhi pet-friendly?'
								initialState
							>
								<p className='fs--1 fw-normal'>
									{`Yes, cats and dogs are allowed at this property. There's a fee of USD
									25.00 per pet, per night. Service animals are exempt from fees.`}
								</p>
							</CustomCollapse>
							<CustomCollapse
								fontSize='fs-0'
								title='How much is parking at Novotel Delhi?'
								initialState={false}
							>
								<p className='fs--1 fw-normal'>
									{`Yes, cats and dogs are allowed at this property. There's a fee of USD
									25.00 per pet, per night. Service animals are exempt from fees.`}
								</p>
							</CustomCollapse>
							<CustomCollapse
								fontSize='fs-0'
								title='What time is check-in at Novotel Delhi?'
								initialState={false}
							>
								<p className='fs--1 fw-normal'>
									{`Yes, cats and dogs are allowed at this property. There's a fee of USD
									25.00 per pet, per night. Service animals are exempt from fees.`}
								</p>
							</CustomCollapse>
							<CustomCollapse
								fontSize='fs-0'
								title='Where is Novotel Delhi located?'
								initialState={false}
							>
								<p className='fs--1 fw-normal'>
									{`Yes, cats and dogs are allowed at this property. There's a fee of USD
									25.00 per pet, per night. Service animals are exempt from fees.`}
								</p>
							</CustomCollapse>
							<CustomCollapse
								fontSize='fs-0'
								title='Can I cancel my reservation for free at Novotel Delhi and receive a full refund?'
								initialState={false}
							>
								<p className='fs--1 fw-normal'>
									{`Yes, cats and dogs are allowed at this property. There's a fee of USD
									25.00 per pet, per night. Service animals are exempt from fees.`}
								</p>
							</CustomCollapse>
						</Col>
					</Row>
				</Col>
			</Row>
			<hr />
		</div>
	)
}

export default HotelPolicies

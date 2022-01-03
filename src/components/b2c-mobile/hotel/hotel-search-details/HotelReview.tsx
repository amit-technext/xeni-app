import React, { FC } from 'react'
import { Col, Row, ProgressBar } from 'react-bootstrap'
import Flex from 'components/common/utils/Flex'
import CustomCollapse from 'components/common/collapse/CustomCollapse'
import Review from './Review'

const HotelReview: FC = function HotelReview() {
	return (
		<>
			<div>
				<b className='fs-1 fw-semi-bold text-dark'>Frequently asked questions</b>
				<Row>
					<Col sm={12} lg={6} className='mb-4'>
						<CustomCollapse
							fontSize='fs-0'
							title='Is Novotel Delhi pet-friendly?'
							initialState
						>
							<p className='fs--1 fw-normal'>
								Yes, cats and dogs are allowed at this property. There&apos;s a fee of
								USD 25.00 per pet, per night. Service animals are exempt from fees.
							</p>
						</CustomCollapse>
						<CustomCollapse
							fontSize='fs-0'
							title='How much is parking at Novotel Delhi?'
							initialState={false}
						>
							<p className='fs--1 fw-normal'>
								Yes, cats and dogs are allowed at this property. There&apos;s a fee of
								USD 25.00 per pet, per night. Service animals are exempt from fees.
							</p>
						</CustomCollapse>
						<CustomCollapse
							fontSize='fs-0'
							title='What time is check-in at Novotel Delhi?'
							initialState={false}
						>
							<p className='fs--1 fw-normal'>
								Yes, cats and dogs are allowed at this property. There&apos;s a fee of
								USD 25.00 per pet, per night. Service animals are exempt from fees.
							</p>
						</CustomCollapse>
						<CustomCollapse
							fontSize='fs-0'
							title='Where is Novotel Delhi located?'
							initialState={false}
						>
							<p className='fs--1 fw-normal'>
								Yes, cats and dogs are allowed at this property. There&apos;s a fee of
								USD 25.00 per pet, per night. Service animals are exempt from fees.
							</p>
						</CustomCollapse>
						<CustomCollapse
							fontSize='fs-0'
							title='Can I cancel my reservation for free at Novotel Delhi and receive a full refund?'
							initialState={false}
						>
							<p className='fs--1 fw-normal'>
								Yes, cats and dogs are allowed at this property. There&apos;s a fee of
								USD 25.00 per pet, per night. Service animals are exempt from fees.
							</p>
						</CustomCollapse>
					</Col>
				</Row>
			</div>
			<div id='Reviews'>
				{/* Review */}
				<Row>
					<Col md={4} sm={12}>
						<Flex alignItems='center' className='mb-4'>
							<div className='fs-4 fw-semi-bold text-dark me-3'>4.5</div>
							<div className='lh-1'>
								<p className='mb-1 fw-semi-bold text-dark'>Wonderfull</p>
								<button
									type='button'
									className='bg-transparent border-0 fs--1 text-primary px-0'
								>
									50 reviews
								</button>
							</div>
						</Flex>
						<div>
							<Flex justifyContent='between' className='fs--1 fw-semi-bold mb-1'>
								<span>Excellent - 5</span>
								<span>30</span>
							</Flex>
							<div className='mb-3'>
								<ProgressBar now={70} style={{ height: '10px' }} />
							</div>
						</div>
						<div>
							<Flex justifyContent='between' className='fs--1 fw-semi-bold mb-1'>
								<span>Good - 4</span>
								<span>16</span>
							</Flex>
							<div className='mb-3'>
								<ProgressBar now={50} style={{ height: '10px' }} />
							</div>
						</div>
						<div>
							<Flex justifyContent='between' className='fs--1 fw-semi-bold mb-1'>
								<span>Okay - 3</span>
								<span>03</span>
							</Flex>
							<div className='mb-3'>
								<ProgressBar now={10} style={{ height: '10px' }} />
							</div>
						</div>
						<div>
							<Flex justifyContent='between' className='fs--1 fw-semi-bold mb-1'>
								<span>Poor - 2</span>
								<span>01</span>
							</Flex>
							<div className='mb-3'>
								<ProgressBar now={5} style={{ height: '10px' }} />
							</div>
						</div>
						<div>
							<Flex justifyContent='between' className='fs--1 fw-semi-bold mb-1'>
								<span>Terrible - 1</span>
								<span>00</span>
							</Flex>
							<div className='mb-3'>
								<ProgressBar now={0} style={{ height: '10px' }} />
							</div>
						</div>
					</Col>
					<Row className='pt-2'>
						<Col xs={6} className='pe-0'>
							<p className='mb-0 fw-semi-bold fs-1'>4.6/5</p>
							<p className='fs--1'>Cleanliness</p>
						</Col>
						<Col xs={6} className='pe-0'>
							<p className='mb-0 fw-semi-bold fs-1'>4.5/5</p>
							<p className='fs--1'>Staff & service</p>
						</Col>
						<Col xs={6} className='pe-0'>
							<p className='mb-0 fw-semi-bold fs-1'>4.5/5</p>
							<p className='fs--1'>Amenities</p>
						</Col>
						<Col xs={6} className='pe-0'>
							<p className='mb-0 fw-semi-bold fs-1'>4.6/5</p>
							<p className='fs--1'>Property conditions & facilities</p>
						</Col>
					</Row>
					<Col md={8} sm={12} className='mb-4'>
						<Review />
					</Col>
				</Row>
			</div>
		</>
	)
}

export default HotelReview

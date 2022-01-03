import React, { FC } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Flex from '../../components/common/utils/Flex'

const CompanyInformationPage: FC = function CompanyInformationPage() {
	return (
		<div>
			<div className='d-flex flex-column mt-6 mb-3'>
				<p className='text-center fs-1 text-black fw-bold'>Business Details</p>
				<p className='text-center text-800 mx-auto w-90 w-md-65'>
					You are almost there, Please fill up the additional information listed
					below
				</p>
			</div>

			<Card className='d-flex flex-row mx-auto w-100 w-md-90 w-lg-85 w-xl-75 my-4 bg-100'>
				<div className='d-none d-md-block'>
					<img alt='' className='position-absolute leftimage' />
				</div>
				<Form className='w-100 mx-4 mt-2 position-relative bg-transparent text-black'>
					<Row className='py-4 px-3'>
						<Col xs={12} md={4}>
							<div>
								<h5 className='mb-2 pt-1'>Business Details</h5>
								<Flex className='w-96'>
									<div>
										<FontAwesomeIcon className=' me-2' icon={faInfoCircle} />
									</div>
									<p className='fs--2 fs-xxl--1 pe-2' style={{ paddingTop: '2.7px' }}>
										This information can be changed from your profile settings page
									</p>
								</Flex>
							</div>
						</Col>
						<Col xs={12} md={8}>
							<Row>
								<Col xs={12} md={6}>
									<Form.Group className='mb-3' controlId='Business Name'>
										<Form.Label>Business Name</Form.Label>
										<Form.Control
											className='w-100'
											type='text'
											placeholder='Enter Business Name'
										/>
									</Form.Group>
								</Col>
								<Col xs={12} md={6} className=''>
									<Form.Group className='mb-3' controlId='Business Website'>
										<Form.Label>Business Website</Form.Label>
										<Form.Control type='text' placeholder='Enter Business Website' />
									</Form.Group>
								</Col>
								<Col xs={12} md={6} className=''>
									<Form.Group className='mb-3' controlId='city'>
										<Form.Label>City</Form.Label>
										<Form.Control type='text' placeholder='Enter City' />
									</Form.Group>
								</Col>
								<Col xs={12} md={6} className=''>
									<Form.Group className='mb-3' controlId='state'>
										<Form.Label>State</Form.Label>
										<Form.Control type='text' placeholder='Enter State' />
									</Form.Group>
								</Col>
								<Col xs={12} md={6} className=''>
									<Form.Group className='mb-3' controlId='zipCode'>
										<Form.Label>Zip Code</Form.Label>
										<Form.Control type='number' placeholder='Enter Zip Code' />
									</Form.Group>
								</Col>
								<Col xs={12} md={6} className=''>
									<Form.Group className='mb-3' controlId='country'>
										<Form.Label>Country</Form.Label>
										<Form.Control type='text' placeholder='Country' />
									</Form.Group>
								</Col>
								<Col xs={12} md={6} className=''>
									<Form.Group className='mb-3' controlId='CustomerPhoneNumber'>
										<Form.Label>Customer Service Phone Number</Form.Label>
										<Form.Control type='number' placeholder='Enter Phone Number' />
									</Form.Group>
								</Col>
								<Col xs={12} md={6} className=''>
									<Form.Group className='mb-3' controlId='CustomerServiceEmail'>
										<Form.Label>Customer Service Email</Form.Label>
										<Form.Control type='email' placeholder='Enter Email' />
									</Form.Group>
								</Col>
								<Col xs={12} md={6} className=''>
									<Form.Group className='mb-3' controlId='IATA Number'>
										<Form.Label>IATA Number</Form.Label>
										<Form.Control type='number' placeholder='Enter Number' />
									</Form.Group>
								</Col>
								<Col xs={12} md={6} className=''>
									<Form.Group className='mb-3' controlId='ARCnumber'>
										<Form.Label>ARC Number (optional)</Form.Label>
										<Form.Control type='text' placeholder='Enter ARC Number ' />
									</Form.Group>
								</Col>
							</Row>
						</Col>
					</Row>
					<div className='d-flex justify-content-end mb-4 px-3'>
						<Link
							to='/customize-website'
							className='btn px-5 bg-primary text-white btn-sm '
						>
							Continue
						</Link>
					</div>
				</Form>
			</Card>
		</div>
	)
}

export default CompanyInformationPage

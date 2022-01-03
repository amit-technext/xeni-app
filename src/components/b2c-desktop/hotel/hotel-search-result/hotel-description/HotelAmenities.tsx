import React, { FC } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faBed } from '@fortawesome/free-solid-svg-icons'
import Flex from '../../../../common/utils/Flex'

const HotelAmenities: FC = function HotelAmenities() {
	return (
		<div className='mt-4'>
			<Row>
				<Col md={4} sm={12}>
					<p className='fs-1 fw-semi-bold text-dark'>Property amenities</p>
				</Col>
				<Col md={8} sm={12}>
					<Row>
						<Col md={6} sm={12} className='mb-3'>
							<Flex alignItems='center'>
								<FontAwesomeIcon icon={faWifi} className='me-2' />
								<span className='fs-0 fw-semi-bold text-dark'>Internet</span>
							</Flex>
							<ListGroup as='ul' variant='flush' className='ms-4 mt-2'>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>
										Available in all rooms: Free WiFi and wired Internet
									</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>
										{' '}
										Available in some public areas: Free WiFi and wired Internet
									</p>
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className='mt-4'>
				<Col md={4} sm={12}>
					<p className='fs-1 fw-semi-bold text-dark'>Room amenities</p>
				</Col>
				<Col md={8} sm={12}>
					<Row>
						<Col md={6} sm={12} className='mb-3'>
							<Flex alignItems='center'>
								<FontAwesomeIcon icon={faBed} className='me-2' />
								<span className='fs-0 fw-semi-bold text-dark'>Bedroom</span>
							</Flex>
							<ListGroup as='ul' variant='flush' className='ms-4 mt-2'>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Air conditioning (climate-controlled</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Bed sheets</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Blackout drapes/curtains</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Free cribs/infant beds</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Rollaway/extra beds (surcharge)</p>
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</Col>
			</Row>
			<hr />
		</div>
	)
}

export default HotelAmenities

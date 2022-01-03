import React, { FC } from 'react'
import { Col, Row, ListGroup, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCheckCircle,
	faChevronDown,
	faChevronRight,
	faExternalLinkSquareAlt,
	faCity,
	faBed,
	faWifi,
	faParking
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Flex from '../../../../common/utils/Flex'
import image1 from '../../../../../assets/img/hotel/101.jpg'

const HotelRoom: FC = function HotelRoom() {
	const number = [
		{
			id: 1
		},
		{
			id: 2
		},
		{
			id: 3
		}
	]

	return (
		<div className='mt-4'>
			<p className='fs-1 fw-semi-bold text-dark'>Choose your room</p>
			<Row>
				{number.map(item => (
					<Col md={4} sm={6} className='mb-4' key={item.id}>
						<img
							src={image1}
							alt='hotel img'
							className='img-fluid h-100 w-100 objectFit rounded rounded-bottom-0'
							style={{ maxHeight: '210px' }}
						/>
						<div className='border rounded-3 rounded-top-0 bg-white'>
							<div className='ps-3'>
								<p className='fw-semi-bold text-dark mb-0 pt-3'>
									Standard Twin Room, 2 Twin Beds
								</p>
								<p className='fs--1'>4.4/5 guest room rating</p>
							</div>
							<ListGroup as='ul' variant='flush' className='ps-3 mb-2'>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center'
								>
									<FontAwesomeIcon
										icon={faExternalLinkSquareAlt}
										className='me-2'
										size='sm'
									/>
									<p className='mb-0 fs--1'>279 sq ft</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center'
								>
									<FontAwesomeIcon icon={faCity} className='me-2' size='sm' />
									<p className='mb-0 fs--1'>City view</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center'
								>
									<FontAwesomeIcon icon={faBed} className='me-2' size='sm' />
									<p className='mb-0 fs--1'>Sleeps 4</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center'
								>
									<FontAwesomeIcon icon={faBed} className='me-2' size='sm' />
									<p className='mb-0 fs--1'>2 Twin Beds</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center'
								>
									<FontAwesomeIcon icon={faWifi} className='me-2' size='sm' />
									<p className='mb-0 fs--1'>Free WiFi</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center'
								>
									<FontAwesomeIcon icon={faParking} className='me-2' size='sm' />
									<p className='mb-0 fs--1'>Free self parking</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center'
								>
									<FontAwesomeIcon icon={faCheckCircle} className='me-2' size='sm' />
									<p className='mb-0 fs--1'>Reserve now, pay later</p>
								</ListGroup.Item>
							</ListGroup>
							<Link to='#!' className='fs--1 ps-3'>
								More details{' '}
								<FontAwesomeIcon icon={faChevronRight} size='sm' className='ms-2' />
							</Link>
							<hr />
							<div className='ps-3 fs--1 fw-semi-bold mb-2'>Extras</div>
							<Form className='ps-3'>
								<Flex justifyContent='between' className='me-3'>
									<Form.Check
										type='radio'
										id={Math.random().toString()}
										label='No extras'
										name='radio'
										className='mb-0'
									/>
									<span>+$0</span>
								</Flex>
								<Flex justifyContent='between' className='me-3'>
									<Form.Check
										type='radio'
										id={Math.random().toString()}
										label='Breakfast'
										name='radio'
									/>
									<span>+$8</span>
								</Flex>
							</Form>
							<div className='ps-3'>
								<p className='fw-semi-bold fs-2 mb-0'>$50</p>
								<p className='fs--2 mb-0'>per night</p>
								<p className='fs--2 mb-0'>$63 total</p>
								<p className='fs--2 mb-0'>Includes taxes & fees</p>
							</div>
							<Flex className='py-3 pe-3' alignItems='center' justifyContent='between'>
								<Link to='#!' className='fs--1 ps-3'>
									Price details{' '}
									<FontAwesomeIcon icon={faChevronDown} size='sm' className='ms-2' />
								</Link>
								<Button className='bg-primary border-0 fs--1'>Add to cart</Button>
							</Flex>
						</div>
					</Col>
				))}
			</Row>
			<hr />
		</div>
	)
}

export default HotelRoom

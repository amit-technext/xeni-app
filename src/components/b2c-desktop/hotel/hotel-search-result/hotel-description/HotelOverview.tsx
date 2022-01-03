import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faWifi,
	faWind,
	faSwimmingPool,
	faSpa,
	faParking,
	faPaw,
	faSprayCan,
	faPumpSoap,
	faClipboardCheck,
	faPeopleArrows,
	faMapMarkerAlt,
	faPlane,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Flex from '../../../../common/utils/Flex'

const image3 = require('../../../../../assets/img/hotel/map-lg.png')

const HotelOverview: FC = function HotelOverview() {
	return (
		<>
			<Row className='mt-4'>
				<Col md={7}>
					<div>
						<p className='fw-semi-bold text-dark'>Description</p>
						<p className='fs--1'>
							Novotel New Delhi Aerocity is spacious and contemporary in design. The
							400 rooms available are truly a place for living and perfect for all your
							needs. The hotel offers services for both business and leisure guests
							multiple dining options.
						</p>
					</div>
					<div className='mb-4 pt-3'>
						<p className='fw-semi-bold text-dark'>Popular amenities</p>
						<Row className='mb-2'>
							<Col sm={6} md={4} className='mb-2'>
								<FontAwesomeIcon
									icon={faWifi}
									size='sm'
									className='text-primary text-700 me-2'
								/>
								<span className='fs--1'>Free WiFi</span>
							</Col>
							<Col sm={6} md={4} className='mb-2'>
								<FontAwesomeIcon
									icon={faWind}
									size='sm'
									className='text-primary text-700 me-2'
								/>
								<span className='fs--1'>Air conditioning</span>
							</Col>
							<Col sm={6} md={4} className='mb-2'>
								<FontAwesomeIcon
									icon={faSwimmingPool}
									size='sm'
									className='text-primary text-700 me-2'
								/>
								<span className='fs--1'>Pool</span>
							</Col>

							<Col sm={6} md={4} className='mb-2'>
								<FontAwesomeIcon
									icon={faSpa}
									size='sm'
									className='text-primary text-700 me-2'
								/>
								<span className='fs--1'>Spa</span>
							</Col>
							<Col sm={6} md={4} className='mb-2'>
								<FontAwesomeIcon
									icon={faPaw}
									size='sm'
									className='text-primary text-700 me-2'
								/>
								<span className='fs--1'>Pet friendly</span>
							</Col>
							<Col sm={6} md={4} className='mb-2'>
								<FontAwesomeIcon
									icon={faParking}
									size='sm'
									className='text-primary text-700 me-2'
								/>
								<span className='fs--1'>Parking included</span>
							</Col>
						</Row>
						<Link to='#!' className='fs--1'>
							See all
							<FontAwesomeIcon icon={faChevronRight} size='sm' className='ms-2' />
						</Link>
					</div>
					<div>
						<p className='fw-semi-bold text-dark'>Cleaning and safety practices</p>
						<Row>
							<Col sm={6} className='mb-2'>
								<FontAwesomeIcon
									icon={faSprayCan}
									size='sm'
									className='text-primary text-700 me-2'
								/>
								<span className='fs--1'>Cleaned with disinfectant</span>
							</Col>
							<Col sm={6} className='mb-2'>
								<FontAwesomeIcon
									icon={faClipboardCheck}
									size='sm'
									className='text-primary text-700 me-2'
								/>
								<span className='fs--1'>Contactless check-in</span>
							</Col>
							<Col sm={6} className='mb-2'>
								<FontAwesomeIcon
									icon={faPumpSoap}
									size='sm'
									className='text-primary text-700 me-2'
								/>
								<span className='fs--1'>Hand sanitizer provided</span>
							</Col>
							<Col sm={6} className='mb-2'>
								<FontAwesomeIcon
									icon={faPeopleArrows}
									size='sm'
									className='text-primary text-700 me-2'
								/>
								<span className='fs--1'>Social distancing</span>
							</Col>
						</Row>
						<Link to='#!' className='fs--1'>
							See all
							<FontAwesomeIcon icon={faChevronRight} size='sm' className='ms-2' />
						</Link>
					</div>
				</Col>

				<Col md={5}>
					<div className='mb-3'>
						<img
							src={image3}
							alt='hotel img'
							className='img-fluid h-100 w-100 objectFit rounded mb-2'
						/>
						<p className='fs--1 mb-2'>
							Asset 2, Aerocity Hospitality District, New Delhi 110037
						</p>
						<Link to='#!' className='fs--1'>
							View in a map{' '}
							<FontAwesomeIcon icon={faChevronRight} size='sm' className='ms-2' />
						</Link>
					</div>
					<p className='fw-semi-bold text-dark'>Explore the area</p>
					<Flex alignItems='center' justifyContent='between' className='mb-2'>
						<div>
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								size='sm'
								className='text-700 me-3'
							/>
							<span className='fs--1'>Worldmark</span>
						</div>

						<span className='fs--1 text-end'>7 min walk</span>
					</Flex>
					<Flex alignItems='center' justifyContent='between' className='mb-2'>
						<div>
							<FontAwesomeIcon icon={faPlane} size='xs' className='text-700 me-3' />
							<span className='fs--1'>Delhi (DEL-Indira Gandhi Intl.)</span>
						</div>
						<span className='fs--1'>11 min drive</span>
					</Flex>
					<Flex alignItems='center' justifyContent='between' className='mb-2'>
						<div>
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								size='sm'
								className='text-700 me-3'
							/>
							<span className='fs--1'>DLF Emporio Vasant Kunj</span>
						</div>
						<span className='fs--1'>20 min drive</span>
					</Flex>
					<Flex alignItems='center' justifyContent='between' className='mb-2'>
						<div>
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								size='sm'
								className='text-700 me-3'
							/>
							<span className='fs--1'>DLF Promenade Vasant Kunj</span>
						</div>
						<span className='fs--1'>25 min drive</span>
					</Flex>
				</Col>
			</Row>
			<hr />
		</>
	)
}

export default HotelOverview

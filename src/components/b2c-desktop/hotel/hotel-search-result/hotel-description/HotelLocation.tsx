import React, { FC } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faEdit,
	faMapMarkerAlt,
	faUtensils,
	faCar,
	faPeopleArrows
} from '@fortawesome/free-solid-svg-icons'
import Flex from '../../../../common/utils/Flex'

const image3 = require('../../../../../assets/img/hotel/map-lg.png')
const image1 = require('../../../../../assets/img/hotel/101.jpg')

const HotelLocation: FC = function HotelLocation() {
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
			<Row className='mb-7 mb-md-5'>
				<p className='fs-1 fw-semi-bold text-dark'>About this area</p>
				<Col md={5} sm={12}>
					<p className='fs-0 fw-semi-bold text-dark mb-2'>New Delhi</p>
					<p className='fs--1'>
						Located in Aerocity neighborhood, Novotel New Delhi Aerocity Hotel is
						connected to a rail/subway station. Rashtrapati Bhavan and India Gate are
						notable landmarks, and travelers looking to shop may want to visit
						Worldmark and DLF Emporio Vasant Kunj. Dilli Haat and Delhi Zoo are also
						worth visiting. Spend some time exploring the area&apos;s activities,
						including outlet shopping.
					</p>
					<Link to='#!' className='fs--1'>
						View travel guide <FontAwesomeIcon icon={faEdit} className='ms-2' />
					</Link>
				</Col>
				<Col md={7} sm={12}>
					<img
						src={image3}
						alt='hotel img'
						className='img-fluid h-100 w-100 objectFit rounded mb-2'
						style={{ maxHeight: '250px' }}
					/>
					<div className='text-center'>
						<Link to='#!' className='fs--1'>
							View in a map
						</Link>
					</div>
					<Row className='mt-3'>
						<Col md={6} sm={12} className='mb-3'>
							<Flex alignItems='center'>
								<FontAwesomeIcon icon={faMapMarkerAlt} className='me-3' />
								<span className='fs-0 fw-semi-bold text-dark'>What&apos;s nearby</span>
							</Flex>
							<ListGroup as='ul' variant='flush' className='ms-4 mt-2'>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Worldmark - 7 min walk</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Fortis Hospital - 6 min drive</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Dada Dev Mandir - 14 min drive</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>DLF Emporio Vasant Kunj - 19 min drive</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>DLF Promenade Vasant Kunj - 20 min drive</p>
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={6} sm={12} className='mb-3'>
							<Flex alignItems='center'>
								<FontAwesomeIcon icon={faUtensils} className='me-3' />
								<span className='fs-0 fw-semi-bold text-dark'>Restaurants</span>
							</Flex>
							<ListGroup as='ul' variant='flush' className='ms-4 mt-2'>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Food Exchange — 1 min walk</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Quoin — 1 min walk</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Pluck — 3 min walk</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Pling — 3 min walk</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>K3 — 4 min walk</p>
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={6} sm={12} className='mb-3'>
							<Flex alignItems='center'>
								<FontAwesomeIcon icon={faCar} size='sm' className='me-3' />
								<span className='fs-0 fw-semi-bold text-dark'>Getting around</span>
							</Flex>
							<ListGroup as='ul' variant='flush' className='ms-4 mt-2'>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>Delhi Aero City Station - 10 min walk</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>New Delhi Palam Station - 11 min drive</p>
								</ListGroup.Item>
								<ListGroup.Item
									as='li'
									className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
								>
									<p className='mb-0 fs--1'>
										Indira Gandhi International Airport (DEL) - 11 min drive
									</p>
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</Col>
			</Row>

			<Row>
				<p className='fs-1 fw-semi-bold text-dark'>
					35 popular things to do nearby
				</p>
				{number.map(item => (
					<Col md={4} sm={6} className='mb-4' key={item.id}>
						<img
							src={image1}
							alt='hotel img'
							className='img-fluid h-100 w-100 objectFit rounded-3 rounded-bottom-0'
							style={{ maxHeight: '210px' }}
						/>
						<div className='border rounded-3 rounded-top-0'>
							{/* <FontAwesomeIcon
                icon={faHeart}
                className="position-relative outline-white"
                style={{ top: '-201px', left: '90%' }}
              /> */}
							<div className='px-3'>
								<p className='fw-semi-bold text-dark mb-0 pt-3'>
									Taj Mahal Tour from Delhi
								</p>
							</div>

							<Flex className='py-3 px-3' alignItems='center' justifyContent='between'>
								<div className='fs--2'>0.8 mi away</div>
								<div>
									<p className='fs-2 fw-semi-bold text-dark mb-0'>$125</p>
									<p className='fs--2'>per adult</p>
								</div>
							</Flex>
						</div>
					</Col>
				))}
			</Row>
			<Row className='mt-5'>
				<Col md={4} sm={12}>
					<p className='fs-1 fw-semi-bold text-dark'>About this property</p>
				</Col>
				<Col md={8} sm={12}>
					<div className='mb-3'>
						<p className='fs-0 fw-semi-bold text-1000 mb-2'>
							Novotel New Delhi Aerocity Hotel
						</p>
						<div className='fs--1 text-800'>
							A full-service spa, a restaurant, and an outdoor pool are available at
							this hotel. Free WiFi in public areas and free valet parking are also
							provided. Additionally, a health club, a bar/lounge, and a poolside bar
							are onsite. All 400 soundproofed rooms provide free WiFi, free wired
							Internet, and 24-hour room service. Guests can appreciate conveniences
							like electric kettles and free tea bags/instant coffee, and other
							amenities include minibars and satellite TV.
						</div>
					</div>
					<div className='mb-3'>
						<p className='fs-0 fw-semi-bold text-1000 mb-2'>
							Awards and affiliations
						</p>
						<div className='fs--1 text-800'>
							This property has signed the UNESCO Sustainable Tourism Pledge.
						</div>
					</div>
				</Col>
			</Row>
			<Row className='mt-4'>
				<Col md={4} sm={12}>
					<p className='fs-1 fw-semi-bold text-dark'>
						Cleaning and safety practices
					</p>
				</Col>
				<Col md={8} sm={12} className='mb-3'>
					<div className='mb-4'>
						<Flex alignItems='center'>
							<FontAwesomeIcon icon={faPeopleArrows} className='me-2' />
							<span className='fs-0 fw-semi-bold text-dark'>
								Enhanced cleanliness measures
							</span>
						</Flex>
						<ListGroup as='ul' variant='flush' className='ms-4 mt-2'>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
							>
								<p className='mb-0 fs--1'>Disinfectant is used to clean the property</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
							>
								<p className='mb-0 fs--1'>
									{' '}
									High-touch surfaces are cleaned and disinfected
								</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
							>
								<p className='mb-0 fs--1'>
									{' '}
									Sheets and towels are washed at 60°C/140°F or hotter
								</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 align-items-center bg-transparent'
							>
								<p className='mb-0 fs--1'>
									Follows standard cleaning and disinfection practices of ALLSAFE (Accor
									Hotels
								</p>
							</ListGroup.Item>
						</ListGroup>
					</div>
				</Col>
			</Row>
			<hr />
		</div>
	)
}

export default HotelLocation

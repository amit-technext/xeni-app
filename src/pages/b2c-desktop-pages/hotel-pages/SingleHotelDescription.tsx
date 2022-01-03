import React, { FC } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronLeft,
	faShareAlt,
	faHeart
} from '@fortawesome/free-solid-svg-icons'
import Rating from 'components/common/rating/Rating'
import image3 from '../../../assets/img/hotel/103.jpg'
import image1 from '../../../assets/img/hotel/101.jpg'
import Flex from '../../../components/common/utils/Flex'
import Navbar from '../../../components/b2c-desktop/hotel/hotel-search-result/hotel-description/Navbar'
import HotelReviews from '../../../components/b2c-desktop/hotel/hotel-search-result/hotel-description/HotelReviews'
import HotelPolicies from '../../../components/b2c-desktop/hotel/hotel-search-result/hotel-description/HotelPolicies'
import HotelRoom from '../../../components/b2c-desktop/hotel/hotel-search-result/hotel-description/HotelRoom'
import HotelAmenities from '../../../components/b2c-desktop/hotel/hotel-search-result/hotel-description/HotelAmenities'
import HotelLocation from '../../../components/b2c-desktop/hotel/hotel-search-result/hotel-description/HotelLocation'
import HotelOverview from '../../../components/b2c-desktop/hotel/hotel-search-result/hotel-description/HotelOverview'

const SingleHotelDescription: FC = function SingleHotelDescription() {
	const history = useHistory()

	return (
		<Container className='singleHotelDesc bg-100 mt-5'>
			<Row className='mb-5'>
				<Col>
					<Flex justifyContent='between' alignItems='center' className='mb-3'>
						<div
							role='button'
							tabIndex={0}
							onClick={(): void => history.goBack()}
							onKeyPress={(): void => history.goBack()}
							className='fs--1 mb-0 hover-primary cursor-pointer'
						>
							<FontAwesomeIcon icon={faChevronLeft} size='sm' className='me-2' />
							See all properties
						</div>
						<Flex>
							<div className='border border-1 px-2 py-1 rounded-3 me-2'>
								<FontAwesomeIcon icon={faHeart} size='sm' />
							</div>
							<div className='border border-1 px-2 py-1 rounded-3'>
								<FontAwesomeIcon icon={faShareAlt} size='sm' />
							</div>
						</Flex>
					</Flex>
					<Flex className='gap-1'>
						<div className='w-50'>
							<img
								src={image3}
								alt='hotel img'
								className='img-fluid h-100 w-100 objectFit rounded-3 rounded-end-0 mainImage'
							/>
						</div>
						<div className='d-flex w-50 gap-1'>
							<div className='d-flex flex-column gap-1 w-100'>
								<img
									src={image1}
									alt='hotel img'
									className='img-fluid h-100 w-100 objectFit secondaryImage'
								/>
								<img
									src={image1}
									alt='hotel img'
									className='img-fluid h-100 w-100 objectFit secondaryImage'
								/>
							</div>
							<div className='d-flex flex-column gap-1 w-100'>
								<img
									src={image1}
									alt='hotel img'
									className='img-fluid h-100 w-100 objectFit rounded-3 rounded-bottom-0 rounded-start-0 secondaryImage'
								/>
								<img
									src={image1}
									alt='hotel img'
									className='img-fluid h-100 w-100 objectFit rounded-3 rounded-top-0 rounded-start-0 secondaryImage'
								/>
							</div>
						</div>
					</Flex>
					<Flex justifyContent='between' className='mt-4 mb-4'>
						<div>
							<Flex alignItems='center' className='mb-1'>
								<div className='fs-1 fw-bold text-dark mb-0 me-3'>
									Novotel New Delhi Aerocity
								</div>
								<Rating rating={5} />
							</Flex>
							<p className='fs--1'>
								Asset 2, Aerocity Hospitality District, New Delhi 110037
							</p>
							<div className='d-flex align-items-center'>
								<Button className='px-2 py-1 me-2 border-0 bg-primary'>5.0</Button>
								<div className='fw-bold text-dark fs--1'>
									Great <span className='fw-normal ps-2'>1550 reviews</span>
								</div>
							</div>
						</div>
						<div>
							<Button className='fs--1 bg-primary py-2 border-0'>
								Reserve a room
							</Button>
						</div>
					</Flex>

					<Navbar />

					<div
						data-bs-spy='scroll'
						data-bs-target='#navbar-example2'
						data-bs-offset='0'
						className='scrollspy-example'
					>
						<div id='Overview'>
							<HotelOverview />
						</div>
						<div id='Rooms'>
							<HotelRoom />
						</div>
						<div id='Location'>
							<HotelLocation />
						</div>
						<div id='Amenities'>
							<HotelAmenities />
						</div>
						<div id='Policies'>
							<HotelPolicies />
						</div>
						<div id='Reviews'>
							<HotelReviews />
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default SingleHotelDescription

import { nanoid } from 'nanoid'
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { Col, Container, Row, Image, ListGroup, Button } from 'react-bootstrap'
import { IHotelSearchProps } from 'interface/IHotelProps'
import { useAppSelector } from 'hooks/useReduxState'
import Rating from '../../../common/rating/Rating'
import HotelDescription from '../../../common/hotel-description-more-less/HotelDescription'
import mapImage from '../../../../assets/img/hotel/map-lg.png'

type RowTitleType = {
	title: string
}

interface HotelCompareModalProps {
	selectedHotels: IHotelSearchProps[]
	dayCount: number
}

const RowTitle: FC<RowTitleType> = function RowTitle(props) {
	const { title } = props

	return (
		<Col lg={2}>
			<div className='d-flex align-items-center justify-content-end h-100'>
				<p className='fw-bold fs-1 text-1000'>{title}</p>
			</div>
		</Col>
	)
}

const RowContent: FC<React.ReactNode> = function RowContent(props) {
	const { children } = props
	return <Col lg={10}>{children}</Col>
}

const HotelCompareModal: FC<HotelCompareModalProps> =
	function HotelCompareModal(props) {
		const { selectedHotels, dayCount } = props
		const { currency } = useAppSelector(state => state.context)
		return (
			<>
				<Container>
					<Row>
						<Col lg={2} />
						<RowContent>
							<Row>
								{selectedHotels?.map(hotel => (
									<Col lg={4} key={hotel?.id}>
										<div className='d-flex justify-content-between align-items-center mb-3 p-1 border-bottom'>
											<div>
												<p className='mb-0 fw-bold fs-1 text-1000'>
													{currency}
													{(+hotel.rate.baseRate / dayCount).toFixed(2)}
												</p>
												<p className='mb-0 fw-normal fs--1 text-600'>Cost per night</p>
											</div>
											<Button className='px-4'>Select</Button>
										</div>
									</Col>
								))}
							</Row>
						</RowContent>
					</Row>
				</Container>

				<div className='overflow-auto vh-100'>
					<Container>
						<Row>
							<RowTitle title='Hotel' />
							<RowContent>
								<Row>
									{selectedHotels?.map(hotel => (
										<Col key={hotel.id} lg={4}>
											<div>
												<div className='p-2 border border-1 rounded-3 w-100'>
													<Image
														src={hotel?.heroImage}
														alt='image'
														rounded
														className='w-100 h-100'
														style={{ maxHeight: '160px', objectFit: 'cover' }}
													/>

													<div>
														<p className='pt-3 fw-bold text-1000 fs-1 text-truncate mb-0'>
															{hotel?.name}
														</p>
														<p className='fs--1 fw-normal text-truncate mb-2'>
															{hotel?.contact.address.line1}
														</p>
														<Rating rating={hotel?.starRating} />
													</div>
												</div>
											</div>
										</Col>
									))}
								</Row>
							</RowContent>
						</Row>

						<Row className='mt-4'>
							<RowTitle title='Show on map' />
							<RowContent>
								<Image src={mapImage} fluid rounded className='w-100' />
							</RowContent>
						</Row>

						<Row className='mt-4'>
							<RowTitle title='Description' />
							<RowContent>
								<Row>
									{selectedHotels?.map(hotel => (
										<HotelDescription
											key={hotel.id}
											hotel={hotel}
											col={4}
											initialLength={170}
										/>
									))}
								</Row>
							</RowContent>
						</Row>

						<Row className='mt-1'>
							<RowTitle title='Amenities' />
							<RowContent>
								<Row>
									{selectedHotels?.map(hotel => (
										<Col key={hotel.id} lg={4}>
											<ListGroup as='ul' variant='flush'>
												{hotel?.facilities.map(facility => (
													<ListGroup.Item
														key={nanoid()}
														as='li'
														className='border-0 d-flex px-0 py-2'
													>
														<FontAwesomeIcon
															icon={faCheckCircle}
															className='text-primary me-2 mt-1'
														/>
														<p className='mb-0 '>{facility?.name}</p>
													</ListGroup.Item>
												))}
											</ListGroup>
										</Col>
									))}
								</Row>
							</RowContent>
						</Row>
					</Container>
				</div>
			</>
		)
	}

export default HotelCompareModal

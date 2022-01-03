// import PropTypes from 'prop-types'
import React, { FC, useState } from 'react'
import { Button, Modal, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { useAppSelector } from 'hooks/useReduxState'
import { nanoid } from 'nanoid'
import Rating from '../../../common/rating/Rating'
import Flex from '../../../common/utils/Flex'
import FalconCloseButton from '../../../common/utils/FalconCloseButton'
import HotelDescription from '../../../common/hotel-description-more-less/HotelDescription'
import { IHotelSearchProps } from '../../../../interface/IHotelProps'

interface HotelCompareOffCanvasProps
	extends React.HTMLAttributes<HTMLOrSVGElement> {
	openCompare: boolean
	closeCompare: (action: boolean) => void
	HotelData: IHotelSearchProps[]
}

const HotelCompareOffCanvas: FC<HotelCompareOffCanvasProps> =
	function HotelCompareOffCanvas(props) {
		const { openCompare, closeCompare, HotelData } = props

		const { currency } = useAppSelector(state => state.context)

		const [dayCount] = useState(3)
		const [show, setShow] = useState(openCompare)

		// console.log(HotelData)

		const handleClose = (): void => {
			setShow(false)
			closeCompare(false)
		}

		return (
			<Modal show={show} onHide={handleClose} fullscreen>
				<Modal.Header className='border-0'>
					<FalconCloseButton onClick={handleClose} size='lg' noOutline />
				</Modal.Header>

				<Modal.Body>
					<div className='row flex-row flex-nowrap'>
						{HotelData.map(
							(hotel, index): React.ReactNode => (
								<div key={nanoid() + index.toString()} className='w-90 me-2'>
									<div className='d-flex justify-content-between align-items-center mb-3 p-1 border-bottom'>
										<div>
											<p className='mb-0 fw-bold text-1000'>
												{' '}
												{currency}
												{(+hotel.rate.baseRate / dayCount).toFixed(2)}
											</p>
											<p className='mb-0 fw-normal fs--1 text-600'>Cost per night</p>
										</div>
										<Button className='px-4 py-1'>Select</Button>
									</div>
									<div className='p-2 border border-1 rounded-3 w-100'>
										<img
											src={hotel.heroImage}
											alt='hotel'
											className='w-100 h-100 rounded-3'
											style={{ maxHeight: '140px', objectFit: 'cover' }}
										/>

										<div>
											<p className='pt-3 fw-bold text-1000 text-truncate mb-0'>
												{hotel.name}
											</p>
											<p className='fs--1 fw-normal text-truncate mb-2'>
												{hotel?.contact?.address?.line1}
											</p>
											<Rating rating={hotel?.starRating} />
										</div>
									</div>
									<Flex justifyContent='start' className='text-1000 fw-bold mt-2'>
										Hotel
									</Flex>
									<hr />
									<HotelDescription hotel={hotel} initialLength={170} />
									<Flex justifyContent='start' className='text-1000 fw-bold mt-2'>
										Description
									</Flex>
									<hr />
									<div>
										<ListGroup as='ul' variant='flush'>
											{hotel.facilities.map((facility, i) => (
												<ListGroup.Item
													key={nanoid() + i.toString()}
													as='li'
													className='border-0 d-flex px-0 py-2'
												>
													<FontAwesomeIcon
														icon={faCheckCircle}
														className='text-primary me-2 mt-1'
													/>
													<p className='mb-0 fs--1'>{facility?.name}</p>
												</ListGroup.Item>
											))}
										</ListGroup>
									</div>
									<Flex justifyContent='start' className='text-1000 fw-bold mt-2'>
										Amenities
									</Flex>
								</div>
							)
						)}
					</div>
				</Modal.Body>
			</Modal>
		)
	}

export default HotelCompareOffCanvas

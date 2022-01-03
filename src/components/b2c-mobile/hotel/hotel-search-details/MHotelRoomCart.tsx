/* eslint-disable no-console */
import React, { FC, useState } from 'react'
import {
	faBed,
	faChevronDown,
	faChevronRight,
	faCity,
	faExternalLinkSquareAlt,
	faWifi
} from '@fortawesome/free-solid-svg-icons'
import FalconCloseButton from 'components/common/utils/FalconCloseButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListGroup, Button, Modal } from 'react-bootstrap'
import Radio from 'components/common/input/Radio'
import Flex from '../../../common/utils/Flex'

// import Radio from 'components/b2c-desktop/ui/radio/Radio'

const hotelExtra = [
	{ id: 'he1', label: 'No extras', value: 'nothing', subLabel: '+$0' },
	{ id: 'he2', label: 'Breakfast', value: 'Breakfast', subLabel: '+$80' }
]

interface MHotelRoomCartProps {
	data: number[]
}

const MHotelRoomCart: FC<MHotelRoomCartProps> = function MHotelRoomCart({
	data
}) {
	const [visible, setVisible] = useState(4)

	const loadMore = (): void => {
		if (visible === 4) {
			setVisible(preValue => preValue + 10)
		} else {
			setVisible(4)
		}
	}

	const items = [
		{ icon: faExternalLinkSquareAlt, name: '279 sq ft' },
		{ icon: faCity, name: 'City view' },
		{ icon: faBed, name: 'Sleeps 4' },
		{ icon: faBed, name: '2 Twin Beds' },
		{ icon: faWifi, name: 'Free WiFi' },
		{ icon: faExternalLinkSquareAlt, name: 'Free self parking' },
		{ icon: faCity, name: 'Reserve now, pay later' }
	]

	const [show, setShow] = useState(false)
	const handleShow = (): void => setShow(true)

	return (
		<>
			<div className='mt-2'>
				<div className='row'>
					{data.map(item => (
						<div key={item.toString()} className='mb-4 col-12'>
							<img
								src='https://thumbs.dreamstime.com/b/hotel-room-8983786.jpg'
								alt='hotel img'
								className='img-fluid h-100 w-100 objectFit rounded rounded-bottom-0'
								style={{ maxHeight: '181px' }}
							/>
							<div className='border rounded-3 rounded-top-0 bg-white'>
								<div className='ps-3'>
									<p className='fw-semi-bold text-dark mb-0 pt-3'>
										Standard Twin Room, 2 Twin Beds
									</p>
									<p className='fs--1'>4.4/5 guest room rating</p>
								</div>
								<ListGroup as='ul' variant='flush' className='ps-3 mb-2'>
									{items.slice(0, visible).map((el, index) => (
										<ListGroup.Item
											key={index.toString()}
											as='li'
											className='border-0 px-0 py-1'
										>
											<div className='row'>
												<div className='col-1 pe-0'>
													<FontAwesomeIcon icon={el.icon} size='sm' />
												</div>
												<div className='col-11'>
													<p className='mb-0 fs--1 mt-1'>{el.name}</p>
												</div>
											</div>
										</ListGroup.Item>
									))}
								</ListGroup>
								<button
									type='button'
									onClick={loadMore}
									className='bg-transparent border-0 fs--1 ps-3 text-primary'
								>
									{visible > 4 ? 'Less details' : 'More details'}

									<FontAwesomeIcon icon={faChevronRight} size='sm' className='ms-2' />
								</button>
								<hr />
								<div className='ps-3 fs--1 fw-semi-bold mb-2'>Extras</div>

								{/* <Radio /> */}
								<div className='px-3'>
									<Radio
										options={hotelExtra}
										defaultCheck='Breakfast'
										getResult={(ddd): void => console.log(ddd)}
									/>
								</div>

								<div className='ps-3'>
									<p className='fw-semi-bold fs-2 mb-0'>$50</p>
									<p className='fs--2 mb-0'>per night</p>
									<p className='fs--2 mb-0'>$63 total</p>
									<p className='fs--2 mb-0'>Includes taxes & fees</p>
								</div>
								<Flex
									className='py-3 pe-3'
									alignItems='center'
									justifyContent='between'
								>
									<button
										type='button'
										onClick={handleShow}
										className='bg-transparent border-0 fs--1 ps-3 text-primary'
									>
										Price details
										<FontAwesomeIcon icon={faChevronDown} className='ms-2 fs--2' />
									</button>
									<Button className='bg-primary border-0 fs--1'>Add to cart</Button>
								</Flex>
							</div>
						</div>
					))}
				</div>
			</div>
			<Modal
				show={show}
				fullscreen
				onHide={(): void => setShow(false)}
				aria-labelledby='example-modal-sizes-title-lg'
			>
				<Modal.Header>
					<Modal.Title id='example-modal-sizes-title-lg' className='fw-medium fs-0'>
						Price details
					</Modal.Title>

					<FalconCloseButton onClick={(): void => setShow(false)} size='sm' />
				</Modal.Header>
				<Modal.Body className='p-3'>
					<p className='fs--1 mb-2 d-flex justify-content-between'>
						<span>1 room x 1 night</span>
						<span>$172</span>
					</p>
					<p className='fs--1 mb-2 d-flex justify-content-between'>
						<span>Taxes and fees</span>
						<span>$29</span>
					</p>
					<p className='fs--1 m-0 fw-semi-bold d-flex justify-content-between'>
						<span>Total</span>
						<span>$201</span>
					</p>

					<Button
						onClick={(): void => setShow(false)}
						className='bg-primary border-0 mt-3 fs--1'
					>
						Reserve
					</Button>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default MHotelRoomCart

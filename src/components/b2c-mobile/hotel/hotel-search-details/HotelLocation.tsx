import {
	faBoxOpen,
	faCar,
	faLocationArrow,
	faPizzaSlice
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { ListGroup } from 'react-bootstrap'
import CustomCollapse from 'components/common/collapse/CustomCollapse'

const HotelLocation: FC = function HotelLocation() {
	return (
		<div id='Location'>
			{/* Location */}
			<b className='fw-bold fs-0'>About this area</b>
			<p className='fs--1 fw-semi-bold mt-3 mb-0'>New Delhi</p>
			<p className='fs--1 mt-2 mb-1'>
				Located in Aerocity neighborhood, Novotel New Delhi Aerocity Hotel is
				connected to a rail/subway station. Rashtrapati Bhavan and India Gate are
				notable landmarks, and travelers looking to shop may want to visit Worldmark
				and DLF Emporio Vasant Kunj. Dilli Haat and Delhi Zoo are also worth
				visiting. Spend some time exploring the area&apos;s activities, including
				outlet shopping.
			</p>
			<button
				type='button'
				className='bg-transparent border-0 fs--1 px-0 text-primary'
			>
				View travel guide
				<FontAwesomeIcon icon={faBoxOpen} className='ms-2 fs--2' />
			</button>

			<div className='row mt-2'>
				<div className='col-1 mt-2 pe-0'>
					<FontAwesomeIcon icon={faLocationArrow} />
				</div>
				<div className='col-11'>
					<CustomCollapse title="What's nearby" fontSize='13.33px'>
						<ListGroup as='ul' variant='flush' className='mt-n1 fw-normal'>
							<ListGroup.Item as='li' className='border-0 px-0 py-1 bg-transparent'>
								<p className='mb-0 fs--1'>Worldmark - 7 min walk</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>Fortis Hospital - 6 min drive</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>Dada Dev Mandir - 14 min drive</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>DLF Emporio Vasant Kunj - 19 min drive</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>DLF Promenade Vasant Kunj - 20 min drive</p>
							</ListGroup.Item>
						</ListGroup>
					</CustomCollapse>
				</div>
			</div>
			<div className='row mt-1'>
				<div className='col-1 mt-2 pe-0'>
					<FontAwesomeIcon icon={faCar} className='fs-1' />
				</div>
				<div className='col-11'>
					<CustomCollapse title='Getting around' fontSize='13.33px'>
						<ListGroup as='ul' variant='flush' className='mt-n1 fw-normal'>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>Delhi Aero City Station - 10 min walk</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>New Delhi Palam Station - 11 min drive</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>
									Indira Gandhi International Airport (DEL) - 11 min drive
								</p>
							</ListGroup.Item>
						</ListGroup>
					</CustomCollapse>
				</div>
			</div>
			<div className='row mt-1'>
				<div className='col-1 mt-2 pe-0'>
					<FontAwesomeIcon icon={faPizzaSlice} className='fs-1' />
				</div>
				<div className='col-11'>
					<CustomCollapse title='Restaurants' fontSize='13.33px'>
						<ListGroup as='ul' variant='flush' className='mt-n1 fw-normal'>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>Food Exchange — 1 min walk</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>Quoin — 1 min walk</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>Pluck — 3 min walk</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>Pling — 3 min walk</p>
							</ListGroup.Item>
							<ListGroup.Item
								as='li'
								className='border-0 d-flex px-0 py-1 bg-transparent'
							>
								<p className='mb-0 fs--1'>K3 — 4 min walk</p>
							</ListGroup.Item>
						</ListGroup>
					</CustomCollapse>
				</div>
			</div>
		</div>
	)
}
export default HotelLocation

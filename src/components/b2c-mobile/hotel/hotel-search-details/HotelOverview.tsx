import {
	faAtlas,
	faChevronRight,
	faClone,
	faFileAlt,
	faParking,
	faPaw,
	faSeedling,
	faSpa,
	faSwimmingPool,
	faWifi,
	faWind,
	faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import Rating from 'components/common/rating/Rating'
import Flex from 'components/common/utils/Flex'

const HotelOverview: FC = function HotelOverview() {
	return (
		<div id='Overview' className='mt-3'>
			{/* Overview  */}
			<b className='fw-bold fs-0'>Novotel New Delhi Aerocity</b>
			<p className='fs--1 pb-0 mb-0'>
				Asset 2,Aerocity Hospitality District,New Delhi 110037
			</p>
			<Rating rating={4} />
			<div className='text-primary fs--1 mt-2'>1550 reviews</div>
			<div className='mt-3'>
				<p className='fs--1 fw-medium mt-3 mb-2'>Popular amenities</p>
				<div className='row mb-1'>
					<div className='col-6 fs--1 py-1'>
						<div className='row'>
							<div className='col-2 pe-0'>
								<FontAwesomeIcon icon={faWifi} />
							</div>
							<div className='col-10 p-0'>
								<span className='ps-3'>Free wifi</span>
							</div>
						</div>
					</div>
					<div className='col-6 fs--1 py-1'>
						<div className='row'>
							<div className='col-2 pe-0'>
								<FontAwesomeIcon icon={faWind} />
							</div>
							<div className='col-10 p-0'>
								<span className='ps-3'>Air conditioning</span>
							</div>
						</div>
					</div>
					<div className='col-6 fs--1 py-1'>
						<div className='row'>
							<div className='col-2 pe-0'>
								<FontAwesomeIcon icon={faSpa} />
							</div>
							<div className='col-10 p-0'>
								<span className='ps-3'>Spa</span>
							</div>
						</div>
					</div>
					<div className='col-6 fs--1 py-1'>
						<div className='row'>
							<div className='col-2 pe-0'>
								<FontAwesomeIcon icon={faPaw} />
							</div>
							<div className='col-10 p-0'>
								<span className='ps-3'>Pet friendly</span>
							</div>
						</div>
					</div>
					<div className='col-6 fs--1 py-1'>
						<div className='row'>
							<div className='col-2 pe-0'>
								<FontAwesomeIcon icon={faParking} />
							</div>
							<div className='col-10 p-0'>
								<span className='ps-3'>Parking included</span>
							</div>
						</div>
					</div>
					<div className='col-6 fs--1 py-1'>
						<div className='row'>
							<div className='col-2 pe-0'>
								<FontAwesomeIcon icon={faSwimmingPool} />
							</div>
							<div className='col-10 p-0'>
								<span className='ps-3'>Pool</span>
							</div>
						</div>
					</div>
				</div>

				<button
					type='button'
					className='bg-transparent border-0 fs--1 text-primary px-0'
				>
					See all <FontAwesomeIcon icon={faChevronRight} className='ms-2 fs--2' />
				</button>
			</div>
			<div>
				<p className='fs--1 fw-medium mt-3 mb-2'>Cleaning and safety practices</p>
				<div className='row mb-1'>
					<div className='col-6 fs--1 py-1'>
						<div className='row'>
							<div className='col-2 pe-0'>
								<FontAwesomeIcon icon={faClone} />
							</div>
							<div className='col-10 p-0 ps-3'>
								<span>Cleaned with disinfectant</span>
							</div>
						</div>
					</div>
					<div className='col-6 fs--1 py-1'>
						<div className='row'>
							<div className='col-2 pe-0'>
								<FontAwesomeIcon icon={faSeedling} />
							</div>
							<div className='col-10 p-0 ps-3'>
								<span>Hand sanitizer provided</span>
							</div>
						</div>
					</div>
					<div className='col-6 fs--1 py-1'>
						<div className='row'>
							<div className='col-2 pe-0'>
								<FontAwesomeIcon icon={faFileAlt} />
							</div>
							<div className='col-10 p-0 ps-3'>
								<span>Contactless check-in</span>
							</div>
						</div>
					</div>
					<div className='col-6 fs--1 py-1'>
						<div className='row'>
							<div className='col-2 pe-0'>
								<FontAwesomeIcon icon={faAtlas} />
							</div>
							<div className='col-10 p-0 ps-3'>
								<span>Social distancing</span>
							</div>
						</div>
					</div>
				</div>
				<button
					type='button'
					className='bg-transparent border-0 fs--1 px-0 text-primary'
				>
					See all <FontAwesomeIcon icon={faChevronRight} className='ms-2 fs--2' />
				</button>
			</div>
			<div className='mt-4 mb-2 overflow-hidden border rounded'>
				<img
					width='400px'
					height='209px'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLS5p19OluIyGuYOTJAmkED0LNupcLV09GA&usqp=CAU'
					alt='hotel'
				/>
			</div>
			<p className='fs--1 pb-0 mb-1'>
				Asset 2,Aerocity Hospitality District,New Delhi 110037
			</p>
			<button
				type='button'
				className='bg-transparent border-0 fs--1 text-primary px-0'
			>
				View in a map
				<FontAwesomeIcon icon={faChevronRight} className='ms-1 fs--2' />
			</button>

			<div className='mt-4'>
				<p className='fs-1 fw-medium mt-3 mb-2'>Explore the area</p>
				<div>
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
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								size='sm'
								className='text-700 me-3'
							/>
							<span className='fs--1'>Delhi(DEL-Indira Gardhi Intl.)</span>
						</div>

						<span className='fs--1 text-end'>11 min drive</span>
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

						<span className='fs--1 text-end'>20 min drive</span>
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

						<span className='fs--1 text-end'>25 min drive</span>
					</Flex>
				</div>
			</div>
		</div>
	)
}
export default HotelOverview

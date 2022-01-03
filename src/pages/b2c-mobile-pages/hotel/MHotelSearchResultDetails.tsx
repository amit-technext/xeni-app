import React, { FC, useState } from 'react'
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'
import CarouselElasticSimple from '../../../components/common/carousel/CarouselElasticSimple'
import MobileContainer from '../../../container/b2c-mobile/MobileContainer'
import HotelRooms from '../../../components/b2c-mobile/hotel/hotel-search-details/HotelRooms'
import HotelOverview from '../../../components/b2c-mobile/hotel/hotel-search-details/HotelOverview'
import ScrollMenu from '../../../components/b2c-mobile/hotel/hotel-search-details/ScrollMenu'
import HotelProperty from '../../../components/b2c-mobile/hotel/hotel-search-details/HotelProperty'
import HotelAmenities from '../../../components/b2c-mobile/hotel/hotel-search-details/HotelAmenities'

import HotelLocation from '../../../components/b2c-mobile/hotel/hotel-search-details/HotelLocation'
import HotelCleaningAndSafety from '../../../components/b2c-mobile/hotel/hotel-search-details/HotelCleaningAndSafety'
import HotelPolicy from '../../../components/b2c-mobile/hotel/hotel-search-details/HotelPolicy'
import HotelReview from '../../../components/b2c-mobile/hotel/hotel-search-details/HotelReview'

const MHotelSearchResultDetails: FC = function MHotelSearchResultDetails() {
	const history = useHistory()

	const [optionSelect, setOptionSelect] = useState('Overview')
	const option = [
		'Overview',
		'Rooms',
		'Location',
		'Amenities',
		'Policies',
		'Reviews'
	]
	const callBackSelect = (select: string): void => {
		setOptionSelect(select)
	}

	return (
		<MobileContainer>
			<div className='d-flex justify-content-between px-3 pt-2'>
				<div
					role='button'
					tabIndex={0}
					onClick={(): void => history.goBack()}
					onKeyPress={(): void => history.goBack()}
					className='py-2 fs--1 text-primary'
				>
					<p className='mb-2'> &lt; See all properties</p>
				</div>

				<div className='py-2'>
					<FontAwesomeIcon icon={faHeart} className='me-2' />
					<FontAwesomeIcon icon={faShareAlt} />
				</div>
			</div>

			{/* picture */}
			<div className='position-relative'>
				<CarouselElasticSimple />
				<div
					className='position-absolute '
					style={{
						right: '2rem',
						bottom: '1rem'
					}}
				>
					<div
						className='text-white border-0 fs--1 px-2 py-1 border rounded'
						style={{
							background: 'rgba(0, 0, 0, 0.5)'
						}}
					>
						&#43;25 Photos
					</div>
				</div>
			</div>

			<div className='mt-1 me-3 ms-3'>
				<ScrollMenu
					option={option}
					optionSelect={optionSelect}
					callBackSelect={callBackSelect}
				/>
				<HotelOverview />
				<HotelRooms />
				<HotelLocation />
				<HotelProperty />
				<HotelCleaningAndSafety />
				<HotelAmenities />
				<HotelPolicy />
				<HotelReview />
			</div>
		</MobileContainer>
	)
}

export default MHotelSearchResultDetails

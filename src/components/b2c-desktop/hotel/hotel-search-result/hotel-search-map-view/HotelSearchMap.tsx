import React, { FC } from 'react'
import { Image } from 'react-bootstrap'
import image from '../../../../../assets/img/map.png'

const HotelSearchMap: FC = function HotelSearchMap() {
	return (
		<div className='sticky-top-60 mt-3 mt-lg-0'>
			<Image src={image} className='img-fluid' alt='map' />
		</div>
	)
}

export default HotelSearchMap

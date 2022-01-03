import React, { FC } from 'react'
import Menu from '../../../components/common/menu/Menu'
import { carouselData } from '../../../data/b2c-desktop/carouselData'
import MobileContainer from '../../../container/b2c-mobile/MobileContainer'
import CarouselWrapper from '../../../components/common/carousel/CarouselWrapper'
import MHotelBookingFormWidget from '../../../components/b2c-mobile/hotel/hotel-forms/MHotelBookingFormWidget'

const MHotelLandingPage: FC = function MHotelLandingPage() {
	return (
		<MobileContainer menu={<Menu onMobile />}>
			<MHotelBookingFormWidget />
			<CarouselWrapper carouselData={carouselData} />
		</MobileContainer>
	)
}

export default MHotelLandingPage

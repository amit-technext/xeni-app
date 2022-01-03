import React, { FC } from 'react'
import Menu from '../../../components/common/menu/Menu'
import { carouselData } from '../../../data/b2c-desktop/carouselData'
import CarouselWrapper from '../../../components/common/carousel/CarouselWrapper'
import MobileContainer from '../../../container/b2c-mobile/MobileContainer'
import MFlightBookingFormWidget from '../../../components/b2c-mobile/flight/form/MFlightBookingFormWidget'
import { passengers } from '../../../data/b2c-desktop/flightInfoData'

const MAirTravelLandingPage: FC = function MAirTravelLandingPage() {
	return (
		<MobileContainer menu={<Menu onMobile />}>
			<MFlightBookingFormWidget passengers={passengers} />
			<CarouselWrapper carouselData={carouselData} />
		</MobileContainer>
	)
}

export default MAirTravelLandingPage

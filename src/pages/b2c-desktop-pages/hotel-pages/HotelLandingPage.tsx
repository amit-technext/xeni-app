import React, { FC } from 'react'
import HotelBookingFormWidget from '../../../components/b2c-desktop/hotel/hotel-forms/HotelBookingFormWidget'
import { carouselData } from '../../../data/b2c-desktop/carouselData'
import LandingPageLayout from '../landing/LandingPageLayout'

const HotelLandingPage: FC = function HotelLandingPage() {
	return (
		<LandingPageLayout
			formWidgetComponent={<HotelBookingFormWidget />}
			carouselData={carouselData}
		/>
	)
}
export default HotelLandingPage

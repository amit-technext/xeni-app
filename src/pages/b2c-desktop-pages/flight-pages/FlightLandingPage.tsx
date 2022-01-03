import React, { FC } from 'react'
import { carouselData } from '../../../data/b2c-desktop/carouselData'
import FlightBookingFormWidget from '../../../components/b2c-desktop/flight/flight-forms/FlightBookingFormWidget'
import LandingPageLayout from '../landing/LandingPageLayout'

const FlightLandingPage: FC = function FlightLandingPage() {
	return (
		<LandingPageLayout
			carouselData={carouselData}
			formWidgetComponent={<FlightBookingFormWidget />}
		/>
	)
}

export default FlightLandingPage

import Menu from 'components/common/menu/Menu'
import React, { FC } from 'react'

import { carouselData } from 'data/b2c-desktop/carouselData'
import MobileContainer from 'container/b2c-mobile/MobileContainer'
import MCarsBookingFormWidget from 'components/b2c-mobile/car/form/MCarsBookingFormWidget'
import CarouselWarper from '../../../components/common/carousel/CarouselWrapper'

const MCarsLandingPage: FC = function MCarsLandingPage() {
	return (
		<MobileContainer menu={<Menu onMobile />}>
			<MCarsBookingFormWidget />
			<CarouselWarper carouselData={carouselData} />
		</MobileContainer>
	)
}

export default MCarsLandingPage

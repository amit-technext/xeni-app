import React, { FC, HTMLAttributes } from 'react'
import Menu from '../../../components/common/menu/Menu'
import CarouselWrapper from '../../../components/common/carousel/CarouselWrapper'
import { CarouselDataType } from '../../../type/CarouselDataType'

interface LandingPageProps extends HTMLAttributes<HTMLOrSVGElement> {
	formWidgetComponent: React.ReactNode
	carouselData: CarouselDataType[]
}

const LandingPageLayout: FC<LandingPageProps> = function LandingPageLayout({
	formWidgetComponent,
	carouselData
}: LandingPageProps) {
	return (
		<>
			<div className='bg-white pt-3 border-bottom'>
				<div className='container py-3'>
					<Menu onMobile={false} />
					{formWidgetComponent}
				</div>
			</div>
			<div className='py-3'>
				<div className='container'>
					<CarouselWrapper carouselData={carouselData} />
				</div>
			</div>
		</>
	)
}
export default LandingPageLayout

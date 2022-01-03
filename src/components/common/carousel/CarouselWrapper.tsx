import React, { FC, HTMLAttributes } from 'react'
import CarouselElastic from './CarouselElastic'
import { CarouselDataType } from '../../../type/CarouselDataType'

interface CarouselWrapperProps extends HTMLAttributes<HTMLOrSVGElement> {
	carouselData: CarouselDataType[]
}

const CarouselWrapper: FC<CarouselWrapperProps> = function CarouselWrapper({
	carouselData
}: CarouselWrapperProps) {
	return (
		<>
			<div className='pt-4 pb-4 d-flex flex-column flex-lg-row justify-content-between m-1'>
				<div>
					<p className='fw-semi-bold fs-1 fs-lg-2 text-900 mb-0'>
						Countries you can travel to right now
					</p>
					<p className='mb-0 fs--1 fs-lg-1 text-600 fw-medium'>
						Popular destinations open to visitors from your country
					</p>
				</div>
			</div>
			<div className='b2c-rc-slider'>
				<CarouselElastic carouselData={carouselData} />
			</div>
		</>
	)
}

export default CarouselWrapper

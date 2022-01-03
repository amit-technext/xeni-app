import React, { FC, HTMLAttributes, useRef } from 'react'
import Carousel from 'react-elastic-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { responsive } from 'data/b2c-desktop/responsiveScreenSize'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import CarouselItem from './CarouselItem'
import { CarouselDataType } from '../../../type/CarouselDataType'

interface CarouselElasticProps extends HTMLAttributes<HTMLOrSVGElement> {
	carouselData: CarouselDataType[]
}

const CarouselElastic: FC<CarouselElasticProps> = function CarouselElastic({
	carouselData
}: CarouselElasticProps) {
	const carousel = useRef(null)

	return (
		<>
			<Carousel
				preventDefaultTouchmoveEvent
				pagination={false}
				showArrows={false}
				itemPadding={[0, 6]}
				ref={carousel}
				itemsToShow={4}
				isRTL={false}
				outerSpacing={0}
				breakPoints={responsive}
			>
				{carouselData?.map((c, index) => (
					<div key={index.toString()} style={{ height: '100%', width: '100%' }}>
						<CarouselItem
							description={c.description}
							image={c.image}
							tag={c.tag}
							status={c.status}
							event={c.event}
						/>
					</div>
				))}
			</Carousel>
			{carouselData?.length && (
				<div className='d-flex justify-content-end mt-3 mb-2 me-2'>
					<button
						type='button'
						tabIndex={0}
						// @ts-ignore
						onKeyDown={(): void => carousel.current.slidePrev()}
						className='btn btn-falcon-primary btn-sm'
						// @ts-ignore
						onClick={(): void => carousel.current.slidePrev()}
					>
						<FontAwesomeIcon icon={faAngleLeft} />
					</button>
					<button
						type='button'
						tabIndex={0}
						// @ts-ignore
						onKeyDown={(): void => carousel.current.slideNext()}
						className='btn btn-falcon-primary ms-2 btn-sm'
						// @ts-ignore
						onClick={(): void => carousel.current.slideNext()}
					>
						<FontAwesomeIcon icon={faAngleRight} />
					</button>
				</div>
			)}
		</>
	)
}

export default CarouselElastic

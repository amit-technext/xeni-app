import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useRef } from 'react'
// @ts-ignore
import Carousel, { consts } from 'react-elastic-carousel'

import { carouselData } from '../../../data/b2c-desktop/carouselData'
import { responsive } from '../../../data/b2c-mobile/responsiveScreenSize'
import CarouselItemSimple from './CarouselItemSimple'

const ArrowLeft: FC = function ArrowLeft() {
	return <FontAwesomeIcon icon={faChevronLeft} />
}

const ArrowRight: FC = function ArrowRight() {
	return <FontAwesomeIcon icon={faChevronRight} />
}

const CarouselElasticSimple: FC = function CarouselElasticSimple() {
	const carousel = useRef(null)

	const myArrow = (data: any): React.ReactNode => {
		const { type, onClick, isEdge } = data
		const pointer = type === consts.PREV ? <ArrowLeft /> : <ArrowRight />
		return (
			<button
				tabIndex={0}
				type='button'
				onClick={onClick}
				disabled={isEdge}
				className={`rec-arrow ${
					type === consts.PREV ? 'rec-left-arrow' : 'rec-right-arrow'
				}`}
			>
				{pointer}
			</button>
		)
	}

	return (
		<div>
			<Carousel
				preventDefaultTouchmoveEvent
				pagination={false}
				itemsToScroll={1}
				itemsToShow={2}
				itemPadding={[0, 6]}
				ref={carousel}
				isRTL={false}
				outerSpacing={0}
				breakPoints={responsive}
				className='rec-custom-style'
				renderArrow={myArrow}
			>
				{carouselData.map((c, index) => (
					<div
						key={index.toString()}
						style={{ height: '100%', width: '100%' }}
						className=''
					>
						<CarouselItemSimple image={c.image} />
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default CarouselElasticSimple

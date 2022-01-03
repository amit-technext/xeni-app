import React, { FC, HTMLAttributes } from 'react'
import { Card } from 'react-bootstrap'

interface CarouselItemSimpleProps extends HTMLAttributes<HTMLOrSVGElement> {
	image: string
}

const CarouselItemSimple: FC<CarouselItemSimpleProps> =
	function CarouselItemSimple({ image }: CarouselItemSimpleProps) {
		return (
			<Card
				className='shadow-none'
				style={{ maxWidth: '100%', minHeight: '222px' }}
			>
				<img
					alt='ll'
					height='100%'
					width='100%'
					className='position-absolute'
					style={{ borderRadius: '10px', objectFit: 'cover' }}
					src={image}
				/>
			</Card>
		)
	}

export default CarouselItemSimple

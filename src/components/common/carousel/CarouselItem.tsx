import React, { HTMLAttributes, FC } from 'react'
import { Card } from 'react-bootstrap'

interface CarouselItemProps extends HTMLAttributes<HTMLOrSVGElement> {
	image: string
	status: string
	event: string
	description: string
	tag: string
}

const CarouselItem: FC<CarouselItemProps> = function CarouselItem({
	image,
	status,
	event,
	description,
	tag
}) {
	return (
		<Card
			className='shadow-none'
			style={{ maxWidth: '100%', minHeight: '311px' }}
		>
			<img
				alt='ll'
				height='100%'
				width='100%'
				className='position-absolute'
				style={{ borderRadius: '10px', objectFit: 'cover' }}
				src={image}
			/>
			<div
				className='position-absolute p-3 w-100 h-100'
				style={{
					borderRadius: '8px',
					background:
						'linear-gradient(183.59deg, rgba(0, 0, 0, 0) 45.33%, rgba(0, 0, 0, 0.99) 87.33%)'
				}}
			>
				<span
					className='px-3 py-1 text-white m-0 fw-normal fs--1'
					style={{
						width: 'max-content',
						background: 'rgba(0, 0, 0, 0.5)',
						boxShadow: '0px 2px 8px rgba(37, 163, 244, 0.2)',
						borderRadius: '65px'
					}}
				>
					{status}
				</span>
				<div style={{ width: '256px', marginTop: '9.2rem', color: '#fff' }}>
					<p className='mb-2 fw-semi-bold text-truncate fs-1 w-lg-80 w-75'>
						{event}
					</p>
					<p className='text-truncate fs--1 w-lg-80  w-75'>{description}</p>
					<span
						className='px-2 py-1 m-0 fw-semi-bold rounded-capsule'
						style={{
							width: 'max-content',
							fontSize: '11px',
							backgroundColor: 'rgba(0, 0, 0, 0.0)',
							color: '#fff',
							border: '1px solid #fff'
						}}
					>
						&#9733; {tag}
					</span>
				</div>
			</div>
		</Card>
	)
}

export default CarouselItem

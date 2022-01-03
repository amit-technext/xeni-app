import React, { FC, HTMLAttributes } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import FlightClassItem from './FlightClassItem'
import { SeatClassType } from '../../../../type/SeatClassType'

interface FlightSeatClassProps extends HTMLAttributes<HTMLOrSVGElement> {
	seatClass: SeatClassType[]
}

const FlightSeatClass: FC<FlightSeatClassProps> = function FlightSeatClass({
	seatClass
}) {
	const sliderSettings = {
		infinite: true,
		speed: 500,
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 475,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}

	return (
		<>
			<div className='pt-2'>
				<p className='fw-medium fs--1'>
					What is included in your fare? Fare and baggage fees apply to the entire
					trip.
					<Link to='/none'> See Baggage size and weight limit</Link>
				</p>
			</div>

			<div className='mb-4 FlightDescription'>
				<Slider {...sliderSettings}>
					{seatClass.map(item => (
						<FlightClassItem
							key={item.id}
							travelClassName={item.travelClassName}
							price={item.price}
							classData={item.data}
						/>
					))}
				</Slider>
			</div>
		</>
	)
}

export default FlightSeatClass

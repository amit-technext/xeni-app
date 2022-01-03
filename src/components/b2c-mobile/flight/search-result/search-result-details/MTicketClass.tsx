import Slider from 'react-slick'
import React, { FC, HTMLAttributes, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import MTicketClassDetailsCard from './MTicketClassDetailsCard'
import { TicketClassDetailsType } from '../../../../../type/FlightSearchResultDataType'

const sliderSettings = {
	infinite: true,
	speed: 500,
	autoplay: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
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

interface MTicketClassProps extends HTMLAttributes<HTMLOrSVGElement> {
	ticketClass: TicketClassDetailsType[]
}

const MTicketClass: FC<MTicketClassProps> = function MTicketClass({
	ticketClass
}) {
	const [tClass, setTClass] = useState(ticketClass?.[0].id)

	return (
		<>
			<ButtonGroup size='sm' className='mb-2 w-100'>
				{ticketClass?.map(tc => (
					<Button
						key={tc.id}
						variant={
							tClass === tc.id ? 'outline-primary' : 'outline-secondary text-black'
						}
						onClick={(): void => setTClass(tc.id)}
					>
						{tc.title}
					</Button>
				))}
			</ButtonGroup>

			{ticketClass?.map(tc => (
				<React.Fragment key={tc.id}>
					{tClass === tc.id && (
						<Slider {...sliderSettings}>
							{tc?.classType?.map(ticket => (
								<MTicketClassDetailsCard
									key={ticket.id}
									rootId={tc.id}
									id={ticket.id}
									travelClassName={ticket.title}
									price={ticket.fare}
									numberOfBag={ticket.numberOfBag}
									numberOfChecked={ticket.numberOfChecked}
									seatSelectStatus={ticket.seatSelectStatus}
								/>
							))}
						</Slider>
					)}
				</React.Fragment>
			))}
		</>
	)
}

export default MTicketClass

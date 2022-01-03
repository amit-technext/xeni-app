import React, { FC, HTMLAttributes } from 'react'
import { Card, ListGroup, Form } from 'react-bootstrap'
import { ClassDataType } from '../../../../type/SeatClassType'

interface FlightClassItemProps extends HTMLAttributes<HTMLOrSVGElement> {
	travelClassName: string
	price: string
	classData: ClassDataType[]
}

const FlightClassItem: FC<FlightClassItemProps> = function FlightClassSingle({
	travelClassName,
	price,
	classData
}: FlightClassItemProps) {
	return (
		<Card className='seatClass'>
			<Card.Header className='d-flex justify-content-between pb-0 py-3 px-3 border-bottom fw-semi-bold'>
				<Form.Check
					type='radio'
					id={`item-${Math.random()}`}
					label={travelClassName}
					name='radio'
				/>
				<span className='text-dark'>${price}</span>
			</Card.Header>
			<ListGroup className='mt-2 mb-3 fw-semi-bold ClassDetails' variant='flush'>
				{classData.map(item => (
					<ListGroup.Item className='border-0 d-flex'>
						<img className='me-3' src={item.icon} alt='Bag' height='17' width='15' />
						<span>{item.info}</span>
					</ListGroup.Item>
				))}
			</ListGroup>
		</Card>
	)
}

export default FlightClassItem

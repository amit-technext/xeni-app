import React, { FC, HTMLAttributes } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RadioSingle from 'components/common/input/RadioSingle'
import { SeatSelectStatusType } from '../../../../../type/FlightSearchResultDataType'
import longBag from '../../../../../assets/icon/Longbag.png'
import Bag from '../../../../../assets/icon/bag.png'

interface MTicketClassDetailsCardProps
	extends HTMLAttributes<HTMLOrSVGElement> {
	id: string
	rootId: string
	travelClassName: string
	price: number
	numberOfBag: number
	numberOfChecked: number
	seatSelectStatus: SeatSelectStatusType
}

const MTicketClassDetailsCard: FC<MTicketClassDetailsCardProps> =
	function MTicketClassDetailsCard({
		rootId,
		id,
		travelClassName,
		price,
		numberOfBag,
		numberOfChecked,
		seatSelectStatus
	}: MTicketClassDetailsCardProps) {
		return (
			<Card className='seatClass m-1 shadow-sm'>
				<Card.Header className='d-flex justify-content-between pb-0 p-3 border-bottom fw-bold '>
					{/* <Form.Check
						type='radio'
						id={`item-${Math.random()}`}
						label={travelClassName}
						name='radio'
					/>
					<span>${price}</span> */}
					<RadioSingle
						id={id}
						label={travelClassName}
						value={travelClassName}
						subLabel={`$ ${price}`}
						name={rootId}
						// eslint-disable-next-line no-console
						getResult={(ddd): void => console.log(ddd)}
						className='fw-bold'
						rootClassName='mb-2'
					/>
				</Card.Header>
				<ListGroup
					className='mt-2 mb-3 fw-medium text-black ClassDetails'
					variant='flush'
				>
					<ListGroup.Item className='border-0 d-flex'>
						<img className='me-2' src={Bag} alt='Bag' height='17' width='15' />
						<span>{numberOfBag} Carry-on bag</span>
					</ListGroup.Item>
					<ListGroup.Item className='border-0 d-flex'>
						<img className='me-2' src={longBag} alt='Bag' height='17' width='15' />
						<span>{numberOfChecked} Checked bags</span>
					</ListGroup.Item>
					<ListGroup.Item className='border-0 d-flex'>
						{/* <img
							className='me-2'
							src={seatSelectStatus?.icon}
							alt='Bag'
							height='17'
							width='17'
						/> */}
						<FontAwesomeIcon
							icon={seatSelectStatus?.icon}
							className='me-2'
							size='lg'
						/>
						<span>{seatSelectStatus?.text}</span>
					</ListGroup.Item>
				</ListGroup>
			</Card>
		)
	}

export default MTicketClassDetailsCard

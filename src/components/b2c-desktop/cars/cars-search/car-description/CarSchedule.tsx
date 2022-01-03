import CustomCollapse from 'components/common/collapse/CustomCollapse'
import Flex from 'components/common/utils/Flex'
import React, { FC } from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const CarSchedule: FC = function CarSchedule() {
	return (
		<Card className='px-3 py-2'>
			<CustomCollapse initialState title='Pick-up and Drop-off' fontSize='16px'>
				<Flex direction='column' className='fs--1 fw-normal'>
					<span>GREENWICH VILLAGE</span>
					<span>220 East 9th Street, NY, US, 10003</span>
					<span>Phone Number - +1 212-477-7180</span>
				</Flex>
				<ListGroup as='ul' variant='flush' className='mt-3 fs--1'>
					<ListGroup.Item
						as='li'
						className='border-0 d-flex px-0 justify-content-between align-items-center'
					>
						<span>Monday</span>
						<span>07:00 - 15:00</span>
					</ListGroup.Item>
					<ListGroup.Item
						as='li'
						className='border-0 d-flex px-0 justify-content-between align-items-center'
					>
						<span>Tuesday</span>
						<span>07:00 - 15:00</span>
					</ListGroup.Item>
					<ListGroup.Item
						as='li'
						className='border-0 d-flex px-0 justify-content-between align-items-center'
					>
						<span>Wednesday</span>
						<span>07:00 - 15:00</span>
					</ListGroup.Item>
					<ListGroup.Item
						as='li'
						className='border-0 d-flex px-0 justify-content-between align-items-center'
					>
						<span>Thursday</span>
						<span>07:00 - 15:00</span>
					</ListGroup.Item>
					<ListGroup.Item
						as='li'
						className='border-0 d-flex px-0 justify-content-between align-items-center'
					>
						<span>Friday</span>
						<span>07:00 - 15:00</span>
					</ListGroup.Item>
					<ListGroup.Item
						as='li'
						className='border-0 d-flex px-0 justify-content-between align-items-center'
					>
						<span>Saturday</span>
						<span>07:00 - 15:00</span>
					</ListGroup.Item>
					<ListGroup.Item
						as='li'
						className='border-0 d-flex px-0 justify-content-between align-items-center'
					>
						<span>Sunday</span>
						<span>07:00 - 15:00</span>
					</ListGroup.Item>
				</ListGroup>
			</CustomCollapse>
		</Card>
	)
}

export default CarSchedule

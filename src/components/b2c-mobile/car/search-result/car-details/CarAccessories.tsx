import React, { FC } from 'react'
import { Card, Form } from 'react-bootstrap'

const CarAccessories: FC = function CarAccessories() {
	return (
		<Card className='px-3 py-3 mb-3'>
			<p className='fs-0 fw-bold text-dark mb-1'>Accessories</p>
			<p className='fs--1 text-dark'>
				Accessories are available at additional cost, requests are subject to
				availability at the time of vehicle pickup.
			</p>

			<div className='d-flex align-items-center'>
				<Form.Check
					type='switch'
					id='defaultSwitch1'
					label='Infant Seat (0-1 year)'
					defaultChecked
				/>
			</div>
			<div className='d-flex align-items-center'>
				<Form.Check
					type='switch'
					id='defaultSwitch2'
					label='Child Seat (1-3 year)'
				/>
			</div>
			<div className='d-flex align-items-center'>
				<Form.Check
					type='switch'
					id='defaultSwitch3'
					label='Booster Seat (4-12 years)'
				/>
			</div>
		</Card>
	)
}

export default CarAccessories

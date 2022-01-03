import React, { FC, HTMLAttributes, ReactNode, useState } from 'react'
import { Collapse, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface CartCollapseProps extends HTMLAttributes<HTMLOrSVGElement> {
	children: ReactNode
	initialState: boolean
	departureAirport: string
	arrivalAirport: string
	departureDate: string
}

const CartCollapse: FC<CartCollapseProps> = function CartCollapse(props) {
	const {
		children,
		initialState,
		departureAirport,
		arrivalAirport,
		departureDate
	} = props
	const [open, setOpen] = useState(initialState)

	return (
		<div className='cartCollapse'>
			<div
				role='button'
				tabIndex={0}
				onClick={(): void => setOpen(!open)}
				onKeyPress={(): void => setOpen(!open)}
				aria-expanded={open}
				className='d-flex align-items-center justify-content-between px-3 py-1 pt-2 cursor-pointer pb-3 bg-200'
			>
				<div>
					<Form>
						<Form.Check
							onMouseUpCapture={(): void => setOpen(!open)}
							className='fw-bold lh-1'
							type='checkbox'
							// id={`item-${Math.random()}`}
							label={`${departureAirport} - ${arrivalAirport}`}
						/>
					</Form>

					<div className='fw-semi-bold fs--1 py-0 cartCollapseDate'>
						<span className='ms-3 ps-2'>One way</span>{' '}
						<span className='fw-medium'>{departureDate}</span>
					</div>
				</div>
				<span>
					{open ? (
						<FontAwesomeIcon
							icon='chevron-up'
							size='lg'
							className='bg-white border rounded-1 shadow-sm p-1 text-primary'
						/>
					) : (
						<FontAwesomeIcon
							icon='chevron-down'
							size='lg'
							className='bg-white border rounded-1 shadow-sm p-1 text-primary'
						/>
					)}
				</span>
			</div>
			<Collapse in={open}>
				<div id='example-collapse-text'>
					<div className='bg-white'>{children}</div>
				</div>
			</Collapse>
		</div>
	)
}

// CartCollapse.propTypes = {
// 	children: PropTypes.node.isRequired,
// 	initialState: PropTypes.bool,
// 	departureAirport: PropTypes.string,
// 	arrivalAirport: PropTypes.string,
// 	departureDate: PropTypes.string
// }

export default CartCollapse

import classNames from 'classnames'
import React, { FC, HTMLAttributes, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Airlines from '../../../../../assets/img/logos/planeIcon.svg'

// const Airlines = require('../../../../../assets/img/logos/planeIcon.svg')

interface FlightCollapseBaseProps extends HTMLAttributes<HTMLOrSVGElement> {
	flightState: string
	date: string
	travelDuration: string
	children: React.ReactNode
	initialState: boolean
	className?: string
}

const FlightCollapseBase: FC<FlightCollapseBaseProps> =
	function FlightCollapseBase({
		flightState,
		date,
		travelDuration,
		children,
		initialState,
		className
	}: FlightCollapseBaseProps) {
		const [open, setOpen] = useState<boolean>(initialState)

		return (
			<div className={classNames('fw-semi-bold', className)}>
				<div
					tabIndex={0}
					role='button'
					onKeyDown={(): void => setOpen(!open)}
					onClick={(): void => setOpen(!open)}
					aria-controls='example-collapse-text'
					aria-expanded={open}
					className='d-flex justify-content-between align-items-center px-md-3 py-3 px-2 border-bottom cursor-pointer baseCollapse'
				>
					<div className='collapseText py-2'>
						<span className='me-2 me-md-3 p-1 p-sm-2 border border-400 rounded-circle bg-white'>
							<img src={Airlines} alt='plane' height='22' width='22' />
						</span>
						<span className='text-sm text-wrap text-dark'>
							{flightState} - {date}
						</span>
					</div>
					<div className='collapseText collapseIcon'>
						<span className='me-1 me-md-3 text-dark'>{travelDuration}</span>
						<span>
							{open ? (
								<FontAwesomeIcon icon='chevron-up' className='ms-1' />
							) : (
								<FontAwesomeIcon icon='chevron-down' className='ms-1' />
							)}
						</span>
					</div>
				</div>
				<Collapse in={open}>
					<div>{children}</div>
				</Collapse>
			</div>
		)
	}
FlightCollapseBase.defaultProps = {
	className: ''
}
export default FlightCollapseBase

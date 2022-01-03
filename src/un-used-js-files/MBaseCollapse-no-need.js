import React, { FC, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Airlines from '../assets/img/logos/planeIcon.svg'

const MBaseCollapse: FC = function MBaseCollapse({
	flightState,
	date,
	travelDuration,
	children,
	initialState,
	className
}) {
	const [open, setOpen] = useState(initialState)
	return (
		<div className={classNames('fw-semi-bold', className)}>
			<div
				role='button'
				tabIndex={0}
				onClick={(): void => setOpen(!open)}
				onKeyPress={(): void => setOpen(!open)}
				aria-controls='example-collapse-text'
				aria-expanded={open}
				className='d-flex justify-content-between align-items-center px-md-3 py-3 px-2 border-bottom cursor-default baseCollapse'
			>
				<div className='collapseText py-2'>
					<span className='me-2 me-md-3 p-1 p-sm-2 border border-400 rounded-circle bg-white'>
						<img src={Airlines} alt='plane' height='21' />
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
MBaseCollapse.propTypes = {
	children: PropTypes.node.isRequired,
	initialState: PropTypes.bool,
	flightState: PropTypes.string,
	date: PropTypes.string,
	travelDuration: PropTypes.string,
	className: PropTypes.string
}
MBaseCollapse.defaultProps = {
	flightState: 'Flight state',
	date: 'date',
	travelDuration: 'duration',
	initialState: false,
	className: undefined
}

export default MBaseCollapse

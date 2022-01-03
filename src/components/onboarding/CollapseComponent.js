import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Collapse } from 'react-bootstrap'
import PropTypes from 'prop-types'

function CollapseComponent({ initialState, children, icon, title }) {
	const [open, setOpen] = useState(initialState)
	return (
		<div className='fw-semi-bold py-2'>
			<div
				onClick={() => setOpen(!open)}
				aria-expanded={open}
				className='d-flex justify-content-between cursor-default'
				style={{ color: '#344050', fontSize: '13px' }}
			>
				<div>
					{icon && (
						<span className='me-3'>
							<FontAwesomeIcon icon={icon} size='lg' />
						</span>
					)}
					<span>{title}</span>
				</div>
				<div>
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
				<div className='pt-2'>{children}</div>
			</Collapse>
		</div>
	)
}
CollapseComponent.propTypes = {
	children: PropTypes.node.isRequired,
	initialState: PropTypes.bool,
	icon: PropTypes.object,
	title: PropTypes.string
}
export default CollapseComponent

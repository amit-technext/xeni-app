import React, { useContext, useState } from 'react'
import { Card, useAccordionButton, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faArrowRight, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import ColorPicker from '../../themes/ColorPicker'
import FontPicker from '../../themes/FontPicker'
import AppContext from '../../context/Context'

function CustomToggle({ children, eventKey }) {
	const [open, setOpen] = useState(false)
	const decoratedOnClick = useAccordionButton(eventKey)
	return (
		<div
			onClick={() => {
				decoratedOnClick(eventKey)
				setOpen(value => !value)
			}}
			className='d-flex justify-content-between align-content-center'
		>
			<div>{children}</div>
			<div>
				<FontAwesomeIcon icon={faCaretUp} size='lg' rotation={open ? 180 : 0} />
			</div>
		</div>
	)
}
CustomToggle.propTypes = {
	children: PropTypes.node,
	eventKey: PropTypes.number
}

function CustomizeThemePage() {
	const {
		config: { fontFamily }
	} = useContext(AppContext)
	return (
		<div className='mx-3'>
			<Card>
				<Card.Body>
					<h5>Widget settings</h5>
					<Card.Text>Welcome to your very own theme settings panel</Card.Text>
					<Link>
						<span>
							Learn more
							<span className='mx-2'>
								<FontAwesomeIcon size='xs' icon={faArrowRight} />
							</span>
						</span>
					</Link>
				</Card.Body>
			</Card>
			<Card className='mt-3'>
				<Accordion defaultActiveKey='0'>
					<Card.Header className='border bg-100'>
						<CustomToggle eventKey='0'>
							<p className='cursor-pointer mb-0'>Change your color</p>
						</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body>
							<ColorPicker />
						</Card.Body>
					</Accordion.Collapse>
				</Accordion>
			</Card>
			<Card className='mt-3'>
				<Accordion defaultActiveKey='0'>
					<Card.Header className='border bg-100'>
						<CustomToggle eventKey='0'>
							<p className='cursor-pointer mb-0'>Change your theme font family</p>
						</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body>
							<FontPicker fonts={fontFamily} />
						</Card.Body>
					</Accordion.Collapse>
				</Accordion>
			</Card>
		</div>
	)
}

export default CustomizeThemePage

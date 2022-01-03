import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import Control from 'react-leaflet-control'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MapControl({ onZoomIn, onZoomOut, onReset }) {
	return (
		<Control position='topleft'>
			<div className='d-flex flex-column'>
				<Button size='sm' color='falcon-default' onClick={onZoomIn} title='Zoom in'>
					<FontAwesomeIcon icon='plus' />
				</Button>
				<Button
					size='sm'
					color='falcon-default'
					onClick={onReset}
					title='Reset map'
					className='my-1'
				>
					<FontAwesomeIcon icon='globe' />
				</Button>
				<Button
					size='sm'
					color='falcon-default'
					onClick={onZoomOut}
					title='Zoom out'
				>
					<FontAwesomeIcon icon='minus' />
				</Button>
			</div>
		</Control>
	)
}

MapControl.propTypes = {
	onZoomIn: PropTypes.func.isRequired,
	onZoomOut: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired
}

export default MapControl

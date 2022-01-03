/* eslint-disable react/prop-types */
import L from 'leaflet'
import React from 'react'
import PropTypes from 'prop-types'
import { Marker, Popup } from 'react-leaflet'
import { Button } from 'react-bootstrap'
import defaultProfilePicture from '../../assets/icon/map-marker-solid.svg'
import Rating from '../../components/common/rating/Rating'

function MemberMarker({ location }) {
	const Icon = new L.Icon({
		iconUrl: defaultProfilePicture,
		iconRetinaUrl: defaultProfilePicture,
		iconSize: [25, 25],
		iconAnchor: [18, 18],
		popupAnchor: [-5, -20],
		tooltipAnchor: [16, -28]
	})

	console.log(location)

	return (
		<Marker position={[location.geoCode.lat, location.geoCode.long]} icon={Icon}>
			<Popup>
				<div style={{ width: '250px' }}>
					<img
						src={location.heroImage}
						alt={location.name}
						style={{ height: '150px', width: '250px' }}
						className='objectFit'
					/>
					<div className='p-1'>
						<h5 className='fs-0 fw-bold text-900 mb-0 text-truncate'>
							{location.name}
						</h5>
						<div className='d-flex justify-content-between align-items-end'>
							<div>
								<Rating rating={location?.starRating} />

								<p className='my-1'>{location?.rate.baseRate}</p>
							</div>
							<Button size='sm'>Show Details</Button>
						</div>
					</div>
				</div>
			</Popup>
		</Marker>
	)
}

MemberMarker.propTypes = {
	context: PropTypes.object.isRequired,
	member: PropTypes.shape({
		user: PropTypes.object.isRequired
	})
}

export default MemberMarker

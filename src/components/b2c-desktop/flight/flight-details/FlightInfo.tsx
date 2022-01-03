import React, { FC, HTMLAttributes } from 'react'

interface FlightInfoProps extends HTMLAttributes<HTMLOrSVGElement> {
	Airlines: string
	Plane: string
	airlineCompany: string
	seatClass: string
	departureTime: string
	departureAirport: string
	destinationTime: string
	destinationAirport: string
	arrivalDate?: string
	totalTime: string
	flightType?: string
}

const FlightInfo: FC<FlightInfoProps> = function FlightInfo(props) {
	const {
		Airlines,
		Plane,
		airlineCompany,
		seatClass,
		departureTime,
		departureAirport,
		destinationTime,
		destinationAirport,
		arrivalDate,
		totalTime,
		flightType
	} = props

	return (
		<div className='px-3 pt-3 fw-normal flightSection'>
			<div className='d-flex justify-content-between text-800'>
				<div className='d-flex'>
					<div
						className='me-2 me-md-3 border border-400 rounded-circle bg-white d-flex align-items-center justify-content-center'
						style={{ height: '25px', width: '25px' }}
					>
						<img src={Airlines} alt='plane' className='img-fluid' />
					</div>

					<div className='mt-1 ms-0 ms-sm-1 fw-semi-bold fs--1'>
						<p>{airlineCompany}</p>
					</div>
				</div>
				<div className='fs--1 mt-1 fw-semi-bold'>{seatClass}</div>
			</div>

			<div className='d-flex'>
				<div className='ms-2 me-3 me-md-4 iconSection'>
					<div className='circlePoint' />
					<hr className='hr1' />
					<img src={Plane} alt='plane' height='15' />
					<hr className='hr2' />
					<div className='circlePoint2' />
				</div>
				<div className='fw-medium text-800'>
					<div className='d-flex mb-2 fs--1'>
						<div>
							<span className='fw-semi-bold text-dark'>{departureTime}</span>
							<span className='ms-4'>{departureAirport}</span>
						</div>
					</div>
					<div className='mb-2'>
						<span className='fs--2 me-4'>{totalTime}</span>
						{flightType != null && (
							<span className='fs--2 ms-2 px-2 fw-semi-bold bg-soft-danger text-danger rounded-pill'>
								{flightType}
							</span>
						)}
					</div>
					<div className='d-flex mt-2 fs--1 mb-3'>
						<div className='fw-semi-bold text-dark'>{destinationTime}</div>
						<div>
							<p className='ms-4 mb-0'>{destinationAirport}</p>
							{arrivalDate != null && <p className='ms-4'>{arrivalDate}</p>}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

FlightInfo.defaultProps = {
	arrivalDate: '',
	flightType: ''
}

export default FlightInfo

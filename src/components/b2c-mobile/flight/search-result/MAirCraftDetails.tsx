import React, { FC, HTMLAttributes } from 'react'
import { FlightInfoMobileType } from '../../../../type/FlightSearchResultDataType'

const lists = [1, 2, 3, 4]

interface MAirCraftDetailsProps extends HTMLAttributes<HTMLOrSVGElement> {
	aircraftInfo: FlightInfoMobileType
}

const MAirCraftDetails: FC<MAirCraftDetailsProps> = function MAirCraftDetails({
	aircraftInfo
}: MAirCraftDetailsProps) {
	return (
		<div className='row flex-nowrap align-items-center pt-2'>
			<div className='col-auto pe-2'>
				<img
					className='rounded-circle border'
					height={28}
					width={28}
					src={aircraftInfo.logo}
					alt='Where is this'
				/>
			</div>
			<div className='col-auto ps-0'>
				<p className='fw-semi-bold mb-0 text-dark'>
					{aircraftInfo.arrivalDetails.time}
				</p>
				<p className='fs--2 text-700 text-end mb-0'>
					{aircraftInfo.arrivalDetails.airport.shortCode}
				</p>
			</div>
			<div className='col position-relative px-0 mb-2'>
				<div className='hr-line d-flex justify-content-evenly px-2'>
					{lists.map(item => (
						<span
							key={item}
							className='z-index-2 fs-1 border border-1 border-700 bg-white'
							style={{ height: '6px', width: '6px' }}
						/>
					))}

					<p className='m-0 pt-2 position-absolute fs--2 fw-medium text-800 top-50 text-nowrap text-center'>
						{aircraftInfo.duration}
					</p>
				</div>
			</div>
			<div className='col-auto pe-0'>
				<p className='fw-semi-bold text-dark mb-0'>
					{aircraftInfo.departDetails.time}
					<span className='fs--2 fw-light text-900 ms-1'>+2</span>
				</p>
				<p className='fs--2 text-700 text-start mb-0'>
					{aircraftInfo.departDetails.airport.shortCode}
				</p>
			</div>
		</div>
	)
}

export default MAirCraftDetails

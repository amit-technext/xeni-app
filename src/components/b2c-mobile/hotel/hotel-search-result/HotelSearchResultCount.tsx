import React, { FC, useState } from 'react'
import BasicDropdown from '../../../common/utils/BasicDropdown'

const shortByItems = ['Lowest', 'Highest', 'Average']

const HotelSearchResultCount: FC = function HotelSearchResultCount() {
	const [shortBy, setShortBy] = useState('')

	return (
		<div className='d-flex justify-content-between align-items-center py-3'>
			<p className='mb-0 fs--1 text-black'>
				<span className='fw-bold '>1500</span> of{' '}
				<span className='fw-bold text-primary'>7500 properties</span>
			</p>

			<div className='fs--1 d-flex align-items-center'>
				<span className='me-1'>Sorted by</span>
				<BasicDropdown
					options={shortByItems}
					selected={shortBy}
					setSelected={setShortBy}
					className='fw-bold text-1100'
				/>
			</div>
		</div>
	)
}

export default HotelSearchResultCount

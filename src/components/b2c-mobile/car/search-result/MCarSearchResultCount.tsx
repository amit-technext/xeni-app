import React, { FC, useState } from 'react'
import MBasicDropdown from 'components/b2c-mobile/ui/MBasicDropdown'

const shortByItems = ['Cheapest', 'Highest', 'Average']

const MCarSearchResultCount: FC = function MCarSearchResultCount() {
	const [shortBy, setShortBy] = useState('')

	return (
		<div className='d-flex justify-content-between align-items-center py-3'>
			<p className='mb-0 fs--1 text-black'>
				<span className='fw-bold '>Results: </span>
				<span className='fw-bold text-primary'>56</span>
			</p>

			<div className='fs--1 d-flex align-items-center'>
				<span className='me-1'>Sorted by</span>
				<MBasicDropdown
					options={shortByItems}
					selected={shortBy}
					setSelected={setShortBy}
					className='fw-bold text-1100'
				/>
			</div>
		</div>
	)
}

export default MCarSearchResultCount

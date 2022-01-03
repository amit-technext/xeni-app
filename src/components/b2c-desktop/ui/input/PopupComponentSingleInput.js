import { Form } from 'react-bootstrap'
import PropTypes, { object } from 'prop-types'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
// import Cancel from './../../../../assets/icon/cancel.svg';
// import Location from './../../../../assets/icon/location1.svg';
import { Flight, Location, Times } from 'assets/icons'
import Flex from '../../../common/utils/Flex'

function PopupComponentSingleInput(props) {
	const {
		setSelected,
		setPopup,
		placeHolder,
		setIsActive,
		setToggleClass,
		countryData
	} = props

	const [searchItem, setSearchItem] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const handleChange = e => {
		setSearchItem(e.target.value)
	}

	useEffect(() => {
		const results = countryData.filter(
			data =>
				data.country?.toLowerCase().includes(searchItem.toLowerCase()) ||
				data.airport?.toLowerCase().includes(searchItem.toLowerCase()) ||
				data.location?.toLowerCase().includes(searchItem.toLowerCase()) ||
				data.countryShortCode?.toLowerCase().includes(searchItem.toLowerCase())
		)
		setSearchResults(results)
	}, [searchItem])

	return (
		<div className='flightSearch rounded overflow-auto scrollbar'>
			<div className='d-flex justify-content-between px-4 py-3'>
				<div className='d-flex'>
					<div className='me-3 text-1100'>
						<Flight height='1.4rem' width='1.4rem' />
					</div>
					<Form.Control
						type='text'
						value={searchItem}
						onChange={handleChange}
						placeholder={placeHolder}
						className='border-0 textBox'
						ref={inputElement => {
							// constructs a new function on each render
							if (inputElement) {
								inputElement.focus()
							}
						}}
					/>
				</div>
				<div>
					<button
						onClick={() => {
							setToggleClass('closed')
							setPopup(false)
						}}
						className='border rounded bg-100 h-100 text-black bg-hover shadow-sm d-flex align-items-center'
					>
						{/* <img src={Cancel} alt="Cancel" height="10" width="14" /> */}
						<Times />
					</button>
				</div>
			</div>
			<div>
				{searchResults?.map((item, index) => (
					<div
						key={nanoid()}
						onClick={() => {
							setSelected(item)
							setToggleClass('closed')
							setPopup(false)
							setIsActive(true)
						}}
						className='d-flex justify-content-between cursor-pointer py-2 px-4 hover-bg-200'
					>
						<Flex alignItems='center' className='gap-3'>
							<div>
								{/* <img src={Location} alt="location" height="24" /> */}
								<Location height='1.8rem' width='1.8rem' />
							</div>
							<div>
								<p className='m-0 text-900 fw-medium fs-0'>{item.airport}</p>
								<p className='m-0 text-700 fw-normal fs--1'>{item.country}</p>
							</div>
						</Flex>
						<p className='m-0'>{item.countryShortCode}</p>
					</div>
				))}
			</div>
		</div>
	)
}

PopupComponentSingleInput.propTypes = {
	searchData: PropTypes.arrayOf(object),
	countryData: PropTypes.arrayOf(object),
	setSelected: PropTypes.func,
	setPopup: PropTypes.func,
	placeHolder: PropTypes.string,
	setIsActive: PropTypes.func,
	setToggleClass: PropTypes.func
}

export default PopupComponentSingleInput

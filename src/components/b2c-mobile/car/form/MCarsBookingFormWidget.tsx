import React, { FC, useState } from 'react'
import BasicDropdownMobile from 'components/common/utils/mobile/BasicDropdownMobile'
import MCarsBookingForm from './MCarsBookingForm'
import { FormDataType } from '../../../../type/formData'

const locations = ['United States', 'United Kingdom']
const dropOff = ['Same drop-off', 'Different drop-off']
const ageData = ['18-25', '26-35', '36-45', '46-55', '56-65']

const formObj: FormDataType = {
	to: { country: '', countryShortCode: '', place: '', location: '' },
	from: { country: '', countryShortCode: '', place: '', location: '' },
	date: {}
}

const MCarsBookingFormWidget: FC = function MCarsBookingFormWidget() {
	const [location, setLocation] = useState('United States')
	const [drop, setDrop] = useState('Different drop-off')
	const [age, setAge] = useState('26-35')
	const [formData, setFormData] = useState([formObj])

	return (
		<>
			<div className='d-flex flex-wrap align-items-between mb-2 ms-1 pe-2'>
				<div className='py-1 pe-2'>
					<BasicDropdownMobile
						options={locations}
						setSelected={setLocation}
						selected={location}
						additionalTitle='Country of Residence'
					/>
				</div>
				<div className='py-1 pe-2'>
					<BasicDropdownMobile
						options={dropOff}
						setSelected={setDrop}
						selected={drop}
						additionalTitle='Drop off'
					/>
				</div>
				<div className='py-1 pe-2'>
					<BasicDropdownMobile
						additionalTitle='Driver age'
						options={ageData}
						setSelected={setAge}
						selected={age}
					/>
				</div>
			</div>
			<MCarsBookingForm
				formData={formData}
				setFormData={setFormData}
				drop={drop}
				index={0}
				// searchData={searchData}
			/>
		</>
	)
}

export default MCarsBookingFormWidget

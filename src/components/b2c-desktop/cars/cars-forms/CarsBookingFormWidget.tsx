import { Link } from 'react-router-dom'
import React, { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BasicDropdown from 'components/common/utils/BasicDropdown'
import CarsSearchForm from './CarsSearchForm'
import { FormDataType } from '../../../../type/formData'

const locations = ['United States', 'United Kingdom']
const dropOff = ['Different drop-off', 'Same drop-off']
const formObj: FormDataType = {
	id: '',
	to: { country: '', countryShortCode: '', place: '', location: '' },
	from: { country: '', countryShortCode: '', place: '', location: '' },
	date: {}
}
const ageData = ['18-25', '26-35', '36-45', '46-55', '56-65']

const CarsBookingFormWidget: FC = function CarsBookingFormWidget() {
	const [location, setLocation] = useState(locations[0])
	const [drop, setDrop] = useState(dropOff[0])
	const [age, setAge] = useState('18')
	const [formData, setFormData] = useState<FormDataType[]>([formObj])
	const searchData = {
		formData
	}

	return (
		<>
			<div className='d-flex flex-column flex-lg-row justify-content-center mt-4 mb-1'>
				<div className='d-flex justify-content-center gap-4'>
					<div>
						<BasicDropdown
							options={locations}
							setSelected={(e): void => {
								setLocation(e)
							}}
							selected={location}
						/>
					</div>
					<div>
						<BasicDropdown
							options={dropOff}
							setSelected={(e): void => {
								setDrop(e)
							}}
							selected={drop}
						/>
					</div>
					<div className='d-flex'>
						<div className='fs--1 pt-0 pb-1 mx-2'> Driver age:</div>
						<div className='align-self-center'>
							<BasicDropdown
								options={ageData}
								setSelected={(e): void => {
									setAge(e)
								}}
								selected={age}
							/>
						</div>
					</div>
				</div>
			</div>

			<CarsSearchForm
				formData={formData}
				setFormData={setFormData}
				drop={drop}
				searchData={searchData}
			/>

			<div className='p-1 mb-3 w-100 d-block d-md-none'>
				<Link
					to='/cars/search'
					className='btn bg-primary h-100 w-100 w-md-auto py-2'
				>
					<FontAwesomeIcon className='text-white' icon='search' />
				</Link>
			</div>
		</>
	)
}

export default CarsBookingFormWidget

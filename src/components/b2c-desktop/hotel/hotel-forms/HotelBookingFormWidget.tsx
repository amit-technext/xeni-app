/* eslint-disable no-console */
import { Link } from 'react-router-dom'
import React, { FC, useState } from 'react'
import { useAppSelector } from 'hooks/useReduxState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormDataType } from 'type/formData'
import Flex from '../../../common/utils/Flex'
import Radio from '../../../common/input/Radio'
import HotelSearchForm from './HotelSearchForm'

const formObj: FormDataType = {
	id: '',
	to: { country: '', countryShortCode: '', place: '', location: '' },
	from: { country: '', countryShortCode: '', place: '', location: '' },
	date: {}
}

const HotelBookingFormWidget: FC = function HotelBookingFormWidget() {
	const { hotelTypes } = useAppSelector(state => state.context)

	const [formData] = useState<FormDataType>(formObj)

	const [hotelType, setHotelType] = useState('')
	console.log(`Hotel Type ${hotelType}`)

	return (
		<>
			<div className='d-flex flex-column flex-lg-row justify-content-center mt-4 mb-1'>
				<Flex justifyContent='center'>
					<Radio
						horizontal
						getResult={(data): void => setHotelType(data)}
						defaultCheck='hotel'
						options={hotelTypes}
					/>
				</Flex>
			</div>

			<HotelSearchForm
				searchData={formData}
				// setFormData={setFormData}
				// onRemove={() => handleRemove(0)}
				// searchData={searchData}
			/>
			<div className='p-1 mb-3 w-100 d-block d-md-none'>
				<Link
					to='/b2c/hotels/search'
					className='btn bg-primary h-100 w-100 w-md-auto py-2'
				>
					<FontAwesomeIcon className='text-white' icon='search' />
				</Link>
			</div>
		</>
	)
}

export default HotelBookingFormWidget

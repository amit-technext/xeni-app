import React, { FC, useState } from 'react'
import { FormDataType } from 'type/formData'
import MHotelSearchForm from './MHotelSearchForm'
import BasicDropdownMobile from '../../../common/utils/mobile/BasicDropdownMobile'

const formObj: FormDataType = {
	to: { country: '', countryShortCode: '', place: '', location: '' },
	from: { country: '', countryShortCode: '', place: '', location: '' },
	date: {}
}
const hotelOption = ['Hotel', 'Villas & Homes', 'Compounds']

const MHotelBookingFormWidget: FC = function MHotelBookingFormWidget() {
	const [formData, setFormData] = useState<FormDataType[]>([formObj])
	const [location, setLocation] = useState(hotelOption[0])

	return (
		<>
			<div className='d-flex justify-content-start ms-1 pb-2 pe-1'>
				<div className='p-1 ps-0'>
					<BasicDropdownMobile
						options={hotelOption}
						setSelected={setLocation}
						selected={location}
						additionalTitle='Type'
					/>
				</div>
			</div>

			<MHotelSearchForm
				formData={formData}
				setFormData={setFormData}
				// onRemove={() => handleRemove(0)}
				// searchData={searchData}
			/>
		</>
	)
}

export default MHotelBookingFormWidget

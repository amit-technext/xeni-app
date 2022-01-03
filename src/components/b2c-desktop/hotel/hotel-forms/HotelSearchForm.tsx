import { addDays } from 'date-fns'
import React, { FC, HTMLAttributes, useState } from 'react'
import { Range } from 'react-date-range'
import { Location } from '../../../../assets/icons'
import { guests } from '../../../../data/b2c-desktop/hotelInfoData'
import { hotelSearchData } from '../../../../data/b2c-desktop/formData'
import BaseFormSingleInput from '../../ui/input/search-input-forms/BaseFormSingleInput'
import GuestAndRoomDropdown from '../../../common/drop-down/GuestAndRoomDropdown'
import { SearchButton } from '../../../common/buttons/SearchButton'
import DatePickerFormElement from '../../../common/date-picker/DatePickerFormElement'
import { FlightSearchDataType, FormDataType } from '../../../../type/formData'

interface HotelSearchProps extends HTMLAttributes<HTMLOrSVGElement> {
	searchData: FormDataType
}

const HotelSearchForm: FC<HotelSearchProps> = function HotelSearchForm(props) {
	const { searchData } = props
	const [guest, setGuest] = useState(guests)
	const [selectFrom, setSelectFrom] = useState<FlightSearchDataType>({
		country: '',
		countryShortCode: '',
		place: '',
		location: ''
	})
	const [rangeDate, setRangeDate] = useState<Range[]>([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection'
		}
	])
	const [singleDate, setSingleDate] = useState<Date>(new Date())

	return (
		<div className='d-flex justify-content-between flex-column flex-md-row mb-3'>
			<div className='m-1 ms-0 w-auto w-md-100'>
				<BaseFormSingleInput
					HandleIcon={Location}
					suggestedData={hotelSearchData}
					popPosition='position-absolute-form-popup-lr'
					destinationType='Going to'
					selectedPlace={selectFrom}
					setSelectedPlace={setSelectFrom}
				/>
			</div>

			<div className='ms-0 ms-md-1 m-1 w-auto w-md-100 bg-hover'>
				<DatePickerFormElement
					startDateName='Check in'
					endDateName='Check out'
					rangeDate={rangeDate}
					setRangeDate={setRangeDate}
					IsRange
					setSingleDate={setSingleDate}
					singleDate={singleDate}
					Mobile={false}
					withFixedSelection={false}
					formHeight='55px'
				/>
			</div>

			<GuestAndRoomDropdown guest={guest} setGuest={setGuest} />
			<SearchButton
				path='/hotels/search'
				searchData={searchData}
				onClick={(): void => {}}
			/>
		</div>
	)
}

export default HotelSearchForm

import React, { FC, HTMLAttributes, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { addDays } from 'date-fns'
import { FlightSearchDataType, FormDataType } from 'type/formData'
import { Range } from 'react-date-range'
import { Location } from '../../../../assets/icons'
import { guests } from '../../../../data/b2c-desktop/hotelInfoData'
import MGuestAndRoomDropdown from '../../../common/drop-down/MGuestAndRoomDropdown'
import { MSearchButton } from '../../../common/buttons/SearchButton'

import DatePickerFormElement from '../../../common/date-picker/DatePickerFormElement'
import { hotelSearchData } from '../../../../data/b2c-mobile/formData'
import MInputSearchFrom from '../../form/MInputSearchFrom'
import { Guests } from '../../../../type/HotelInfoType'

interface MHotelSearchProps extends HTMLAttributes<HTMLOrSVGElement> {
	searchData: FormDataType
	formData: FormDataType[]
	index?: number
	setFormData: React.Dispatch<React.SetStateAction<FormDataType[]>>
}

const MHotelSearchForm: FC<MHotelSearchProps> = function MHotelSearchForm(
	props
) {
	const { index = 0, formData, setFormData, searchData } = props
	const { pathname } = useLocation()

	const [selectTo] = useState<FlightSearchDataType>({
		country: '',
		countryShortCode: '',
		place: '',
		location: ''
	})
	const [guest, setGuest] = useState<Guests[]>(guests)
	const [selectFrom, setSelectFrom] = useState<FlightSearchDataType>({
		country: '',
		countryShortCode: '',
		place: '',
		location: ''
	})
	const [singleDate, setSingleDate] = useState<Date>(new Date())
	const [rangeDate, setRangeDate] = useState<Range[]>([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection'
		}
	])

	useEffect(() => {
		const updatedFormData = {
			...formData[index],
			to: selectTo,
			from: selectFrom
		}

		const newFormData = formData.map((item, ind) =>
			index === ind ? updatedFormData : item
		)

		setFormData(newFormData)
	}, [selectFrom, selectTo])

	return (
		<div className='d-flex justify-content-between flex-column flex-row mb-3'>
			<div className='m-1 w-auto w-100'>
				<MInputSearchFrom
					Icon={Location}
					searchData={hotelSearchData}
					destinationType='Going to'
					selectedCountry={formData[index].from}
					setSelectedCountry={setSelectFrom}
				/>
			</div>

			<div className='m-1 w-auto w-100 bg-hover'>
				<DatePickerFormElement
					startDateName='Check in'
					endDateName='Check out'
					rangeDate={rangeDate}
					setRangeDate={setRangeDate}
					IsRange
					setSingleDate={setSingleDate}
					singleDate={singleDate}
					Mobile
					formHeight='48px'
					withFixedSelection={false}
				/>
			</div>

			<MGuestAndRoomDropdown guest={guest} setGuest={setGuest} />
			<MSearchButton
				searchData={searchData}
				path={pathname.concat('/search')}
				onClick={(): void => {}}
			/>
		</div>
	)
}
MHotelSearchForm.defaultProps = {
	index: undefined
}
export default MHotelSearchForm

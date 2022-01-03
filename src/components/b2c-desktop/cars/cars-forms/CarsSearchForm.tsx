import React, { useState, useEffect, FC, HTMLAttributes } from 'react'
import DatePicker from 'react-datepicker'
import { Location } from 'assets/icons'
import { SearchButton } from 'components/common/buttons/SearchButton'
import { addDays } from 'date-fns'
import { FlightSearchDataType, FormDataType } from 'type/formData'
import { Range } from 'react-date-range'
import DatePickerFormElement from '../../../common/date-picker/DatePickerFormElement'
import BaseFormSingleInput from '../../ui/input/search-input-forms/BaseFormSingleInput'
import { carSearchData } from '../../../../data/b2c-desktop/carsData'

interface CarsSearchFormProps extends HTMLAttributes<HTMLOrSVGElement> {
	drop: string
	formData: FormDataType[]
	setFormData: React.Dispatch<React.SetStateAction<FormDataType[]>>
	searchData: any
}

const data: FlightSearchDataType = {
	country: '',
	countryShortCode: '',
	place: '',
	location: ''
}

const CarsSearchForm: FC<CarsSearchFormProps> = function CarsSearchForm(props) {
	const { drop, formData, setFormData, searchData } = props

	const [selectFrom, setSelectFrom] = useState<FlightSearchDataType>(data)
	const [selectTo, setSelectTo] = useState<FlightSearchDataType>(data)
	const [singleDate, setSingleDate] = useState<Date>(new Date())
	const [startDate, setStartDate] = useState(new Date())
	const [ok, setOk] = useState(false)
	const [rangeDate, setRangeDate] = useState<Range[]>([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection'
		}
	])

	useEffect(() => {
		formData[0].from = selectFrom
		formData[0].to = selectFrom
		formData[0].date = startDate
		setFormData(formData)
	}, [selectFrom, selectTo, startDate, ok, setOk])

	return (
		<div className='d-flex justify-content-center flex-column flex-lg-row mb-3'>
			<div className='m-1 ms-0 w-lg-50 w-100'>
				<BaseFormSingleInput
					HandleIcon={Location}
					suggestedData={carSearchData}
					popPosition='position-absolute-form-popup-lr'
					destinationType='Pick Up'
					selectedPlace={selectFrom}
					setSelectedPlace={setSelectFrom}
				/>
			</div>
			<div className='ms-0 ms-md-1 m-1 w-lg-50 w-100'>
				<BaseFormSingleInput
					HandleIcon={Location}
					suggestedData={carSearchData}
					popPosition='position-absolute-form-popup-lr'
					destinationType={
						drop === 'Different drop-off' ? 'Drop off' : 'Same place drop off'
					}
					selectedPlace={selectTo}
					setSelectedPlace={setSelectTo}
				/>
			</div>
			<div className='ms-0 ms-md-1 m-1 d-flex flex-sm-row flex-column'>
				<div className='hover-bg-200 px-0 me-2 d-flex border border-300 dateAndTime align-items-center'>
					<div className='me-1'>
						<DatePickerFormElement
							singleDateName='Start'
							noFormVisuals
							rangeDate={rangeDate}
							setRangeDate={setRangeDate}
							IsRange={false}
							setSingleDate={setSingleDate}
							singleDate={singleDate}
							Mobile={false}
						/>
					</div>
					<div className='lineBar mt-0 text-600 px-3'>|</div>
					<div className='datePickerBox'>
						<DatePicker
							className={`time ${ok ? 'text-dark' : 'text-600'} cursor-pointer px-1`}
							selected={startDate}
							onChange={(date: Date): void => {
								setStartDate(date)
								setOk(true)
							}}
							showTimeSelect
							showTimeSelectOnly
							timeIntervals={15}
							timeCaption='Time'
							dateFormat='h:mm aa'
						/>
					</div>
				</div>
				<div className='hover-bg-200 px-0 d-flex align-items-center border border-300 dateAndTime'>
					<div className='me-1'>
						<DatePickerFormElement
							singleDateName='End'
							noFormVisuals
							rangeDate={rangeDate}
							setRangeDate={setRangeDate}
							IsRange={false}
							setSingleDate={setSingleDate}
							singleDate={singleDate}
							Mobile={false}
						/>
					</div>
					<div className='lineBar mt-0 text-600 px-3'>|</div>
					<div className='datePickerBox'>
						<DatePicker
							className={`time ${ok ? 'text-dark' : 'text-600'} cursor-pointer px-1`}
							selected={startDate}
							onChange={(date: Date): void => {
								setStartDate(date)
								setOk(true)
							}}
							showTimeSelect
							showTimeSelectOnly
							timeIntervals={15}
							timeCaption='Time'
							dateFormat='h:mm aa'
						/>
					</div>
				</div>
			</div>
			<SearchButton
				searchData={searchData}
				path='/cars/search'
				onClick={(): void => {}}
			/>
		</div>
	)
}

export default CarsSearchForm

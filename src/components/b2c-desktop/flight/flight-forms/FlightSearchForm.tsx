import { Button } from 'react-bootstrap'
import React, { FC, useState } from 'react'
import { addDays } from 'date-fns'
import { Range } from 'react-date-range'
import { Times, Flight, FlightArrival } from '../../../../assets/icons'
import { flightSearchData } from '../../../../data/b2c-desktop/formData'
import { SearchButton } from '../../../common/buttons/SearchButton'
import BaseFormSingleInput from '../../ui/input/search-input-forms/BaseFormSingleInput'
import DatePickerFormElement from '../../../common/date-picker/DatePickerFormElement'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useReduxState'
import { setSearchTripType } from '../../../../features/context/contextSlice'
import { FlightSearchDataType, FormDataType } from '../../../../type/formData'
import { ObjectType } from '../../../../type/objectType'
import arrow from '../../../../assets/icon/arrow-lr.svg'

interface FlightSearchFormProps extends React.HTMLAttributes<HTMLOrSVGElement> {
	routeType: string
	index?: number
	formData: FormDataType[]
	setFormData: React.Dispatch<React.SetStateAction<FormDataType[]>>
	onRemove: () => void
	searchData: object
}
const data: FlightSearchDataType = {
	country: '',
	location: '',
	place: '',
	countryShortCode: ''
}

const FlightSearchForm: FC<FlightSearchFormProps> = function FlightSearchForm(
	props
) {
	const {
		formData,
		setFormData,
		onRemove,
		searchData,
		routeType,
		index = 1
	} = props

	const { tripType } = useAppSelector(state => state.context)
	const dispatch = useAppDispatch()
	const [selectFrom, setSelectFrom] = useState<FlightSearchDataType>(data)
	const [selectTo, setSelectTo] = useState<FlightSearchDataType>(data)

	const handleSwap = (): void => {
		const updatedData = {
			...formData[index],
			from: formData[index].to,
			to: formData[index].from
		}
		const updatedFormData = formData.map((FData, ind) =>
			index === ind ? updatedData : FData
		)
		setFormData(updatedFormData)
	}

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
					HandleIcon={Flight}
					suggestedData={flightSearchData}
					popPosition='position-absolute-form-popup-lr'
					destinationType='From'
					selectedPlace={selectFrom}
					setSelectedPlace={setSelectFrom}
				/>
			</div>
			{!(routeType === 'Multi-City') && (
				<div className='ms-0 ms-md-1 m-1'>
					<Button
						type='button'
						onClick={handleSwap}
						className='border border-300 h-100 w-100 w-md-auto bg-white'
					>
						<img src={arrow} alt='icon' width={18} />
					</Button>
				</div>
			)}
			<div className='ms-0 ms-md-1 m-1 w-auto w-md-100'>
				<BaseFormSingleInput
					HandleIcon={FlightArrival}
					suggestedData={flightSearchData}
					popPosition='position-absolute-form-popup-lr'
					destinationType='To'
					selectedPlace={selectTo}
					setSelectedPlace={setSelectTo}
				/>
			</div>
			<div className='ms-0 ms-md-1 m-1 w-auto w-md-100'>
				{routeType === 'Return' ? (
					<DatePickerFormElement
						startDateName='Depart'
						endDateName='Arrival'
						rangeDate={rangeDate}
						setRangeDate={setRangeDate}
						IsRange
						setSingleDate={setSingleDate}
						singleDate={singleDate}
						Mobile={false}
						withFixedSelection={false}
						formHeight='55px'
					/>
				) : (
					<DatePickerFormElement
						startDateName='Depart'
						endDateName='Arrival'
						rangeDate={rangeDate}
						setRangeDate={setRangeDate}
						IsRange
						setSingleDate={setSingleDate}
						singleDate={singleDate}
						Mobile={false}
						withFixedSelection={false}
						formHeight='55px'
					/>
				)}
			</div>
			<div className='d-flex w-100 w-md-auto'>
				{routeType === 'Multi-City' && !(index === 0) ? (
					<div className='m-1 me-0 w-100 w-md-auto'>
						<button
							type='button'
							onClick={onRemove}
							className='btn btn-falcon-danger h-100 w-100 w-md-auto'
						>
							<Times height='1.6rem' />
						</button>
					</div>
				) : (
					<SearchButton
						path='/flight/search'
						searchData={searchData}
						onClick={(): ObjectType => dispatch(setSearchTripType(tripType))}
					/>
				)}
			</div>
		</div>
	)
}

FlightSearchForm.defaultProps = {
	index: 1
}

export default FlightSearchForm

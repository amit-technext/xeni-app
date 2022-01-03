import React, { useState, useEffect, FC, HTMLAttributes } from 'react'
import DatePicker from 'react-datepicker'
import { addDays } from 'date-fns'
import { FlightSearchDataType, FormDataType } from 'type/formData'
import { Range } from 'react-date-range'
import { MSearchButton } from 'components/common/buttons/SearchButton'
import { carSearchData } from '../../../../data/b2c-desktop/formData'
import { Location } from '../../../../assets/icons'
import DatePickerFormElement from '../../../common/date-picker/DatePickerFormElement'
import MInputSearchFrom from '../../form/MInputSearchFrom'

interface CarsSearchFormProps extends HTMLAttributes<HTMLOrSVGElement> {
	drop: string
	formData: FormDataType[]
	setFormData: React.Dispatch<React.SetStateAction<FormDataType[]>>
	index: number
}

const MCarsSearchForm: FC<CarsSearchFormProps> = function MCarsSearchForm(
	props
) {
	const { drop, formData, setFormData, index = 0 } = props

	const [selectFrom, setSelectFrom] = useState<FlightSearchDataType>({
		country: '',
		countryShortCode: '',
		place: '',
		location: ''
	})
	const [selectTo, setSelectTo] = useState<FlightSearchDataType>({
		country: '',
		countryShortCode: '',
		place: '',
		location: ''
	})

	const [startDate, setStartDate] = useState(new Date())
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

	const [rangeDate, setRangeDate] = useState<Range[]>([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection'
		}
	])
	const [singleDate, setSingleDate] = useState<Date>(new Date())

	return (
		<div className='d-flex justify-content-center flex-column mb-3'>
			<div className='m-1'>
				<MInputSearchFrom
					Icon={Location}
					searchData={carSearchData}
					destinationType='Pick Up'
					selectedCountry={formData[index].from}
					setSelectedCountry={setSelectFrom}
				/>
			</div>
			<div className='m-1'>
				<MInputSearchFrom
					Icon={Location}
					searchData={carSearchData}
					destinationType={
						drop === 'Different drop-off' ? 'Drop off' : 'Same place drop off'
					}
					selectedCountry={formData[index].to}
					setSelectedCountry={setSelectTo}
				/>
			</div>
			<div className='m-1 d-flex flex-column'>
				<div
					className='bg-100 px-0 d-flex border border-300 dateAndTime align-items-center mb-2'
					style={{ height: '48px' }}
				>
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
					<div className='datePickerBox b2c-m-car'>
						<DatePicker
							className='time text-dark fw-regular cursor-pointer px-1'
							selected={startDate}
							onChange={(date: Date): void => setStartDate(date)}
							showTimeSelect
							showTimeSelectOnly
							timeIntervals={15}
							timeCaption='Time'
							dateFormat='h:mm aa'
						/>
					</div>
				</div>
				<div
					className='bg-100 px-0 d-flex border border-300 dateAndTime align-items-center'
					style={{ height: '48px' }}
				>
					<div className='me-1'>
						<DatePickerFormElement
							singleDateName='Start'
							noFormVisuals
							rangeDate={rangeDate}
							setRangeDate={setRangeDate}
							IsRange={false}
							setSingleDate={setSingleDate}
							singleDate={singleDate}
							Mobile
						/>
					</div>
					<div className='lineBar mt-0 text-600 px-3'>|</div>
					<div className='datePickerBox b2c-m-car'>
						<DatePicker
							className='time text-dark fw-medium cursor-pointer px-1'
							selected={startDate}
							onChange={(date: Date): void => setStartDate(date)}
							showTimeSelect
							showTimeSelectOnly
							timeIntervals={15}
							timeCaption='Time'
							dateFormat='h:mm aa'
						/>
					</div>
				</div>
			</div>
			<MSearchButton
				searchData={[]}
				path='/cars/search'
				onClick={(): void => {}}
			/>
		</div>
	)
}

export default MCarsSearchForm

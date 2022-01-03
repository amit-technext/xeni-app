import { addDays } from 'date-fns'
import React, { useEffect, useState, FC, SetStateAction } from 'react'
import { Range } from 'react-date-range'
import {
	Times,
	ExchangeAltHorizontal,
	Flight,
	FlightArrival
} from '../../../../assets/icons'
import { MSearchButton } from '../../../common/buttons/SearchButton'
import DatePickerFormElement from '../../../common/date-picker/DatePickerFormElement'
import MInputSearchFrom from '../../form/MInputSearchFrom'
import { flightSearchData } from '../../../../data/b2c-mobile/formData'
import {
	FlightSearchDataType,
	FormDataType,
	SearchDataType
} from '../../../../type/formData'
import { useAppDispatch } from '../../../../hooks/useReduxState'
import { setShowSearchPanel } from '../../../../features/context/contextSlice'

interface MFlightBookingFormProps
	extends React.HTMLAttributes<HTMLOrSVGElement> {
	routeType: string
	index: number
	formData: FormDataType[]
	setFormData: React.Dispatch<SetStateAction<FormDataType[]>>
	onRemove: () => void
	searchData: SearchDataType
}

const MFlightBookingForm: FC<MFlightBookingFormProps> =
	function MFlightBookingForm({
		routeType,
		index = 0,
		formData,
		setFormData,
		onRemove,
		searchData
	}) {
		const dispatch = useAppDispatch()
		const [rangeDate, setRangeDate] = useState<Range[]>([
			{
				startDate: new Date(),
				endDate: addDays(new Date(), 7),
				key: 'selection'
			}
		])
		const [singleDate, setSingleDate] = useState<Date>(new Date())

		const [selectFrom, setSelectFrom] = useState<FlightSearchDataType>({
			country: '',
			countryShortCode: '',
			location: '',
			place: ''
		})
		const [selectTo, setSelectTo] = useState<FlightSearchDataType>({
			country: '',
			countryShortCode: '',
			location: '',
			place: ''
		})

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

		const handleSwap = (): void => {
			const updatedData = {
				...formData[index],
				from: formData[index].to,
				to: formData[index].from
			}
			const updatedFormData = formData.map((data, ind) =>
				index === ind ? updatedData : data
			)

			setFormData(updatedFormData)
		}
		return (
			<div className='d-flex justify-content-between position-relative flex-column mb-3'>
				<div className='m-1'>
					<MInputSearchFrom
						Icon={Flight}
						searchData={flightSearchData}
						destinationType='From'
						selectedCountry={formData[index].from}
						setSelectedCountry={setSelectFrom}
					/>
				</div>
				{!(routeType === 'Multi-City') && (
					<div
						className='m-1 position-absolute z-index-1'
						style={{ top: '14%', left: '87%' }}
					>
						<button
							type='button'
							tabIndex={0}
							onKeyDown={handleSwap}
							onClick={handleSwap}
							className='border border-300 d-flex align-items-center justify-content-center text-900 bg-white p-2 rounded-3'
						>
							<ExchangeAltHorizontal />
						</button>
					</div>
				)}
				<div className='mx-1 mt-1'>
					<MInputSearchFrom
						Icon={FlightArrival}
						searchData={flightSearchData}
						destinationType='To'
						selectedCountry={formData[index].to}
						setSelectedCountry={setSelectTo}
					/>
				</div>
				<div className='mx-1 mb-1 mt-2'>
					<DatePickerFormElement
						startDateName='Depart'
						endDateName='Arrival'
						rangeDate={rangeDate}
						setRangeDate={setRangeDate}
						IsRange={routeType === 'Return'}
						setSingleDate={setSingleDate}
						singleDate={singleDate}
						formHeight='48px'
						Mobile
						withFixedSelection={false}
					/>
				</div>
				<div className='d-flex w-100 w-md-auto'>
					{routeType === 'Multi-City' && !(index === 0) ? (
						<div className='mx-1 mt-2 w-100 d-flex justify-content-end'>
							<button
								type='button'
								onKeyDown={onRemove}
								tabIndex={0}
								onClick={onRemove}
								className='btn btn-outline-danger btn-sm'
							>
								<Times className='me-2' height='1.6rem' />
								<span>Remove</span>
							</button>
						</div>
					) : (
						routeType !== 'Multi-City' && (
							<MSearchButton
								searchData={searchData}
								path='/flight/search'
								onClick={(): any => dispatch(setShowSearchPanel(false))}
							/>
						)
					)}
				</div>
			</div>
		)
	}

export default MFlightBookingForm

import { Button } from 'react-bootstrap'
import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flex from '../../../common/utils/Flex'
import FlightSearchForm from './FlightSearchForm'
import BasicDropdown from '../../../common/utils/BasicDropdown'
import PassengerDropdown from '../../../common/utils/PassengerDropdown'
import { passengers } from '../../../../data/b2c-desktop/flightInfoData'
import Radio from '../../../common/input/Radio'
import { PlusRegular } from '../../../../assets/icons'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useReduxState'
import { setTripType } from '../../../../features/context/contextSlice'
import { FormDataType } from '../../../../type/formData'
import { PassengerType } from '../../../../type/PassengerType'

const routeTypes: string[] = ['One Way', 'Return', 'Multi-City']
const flightTypes: string[] = [
	'Economy',
	'Premium Economy',
	'Business',
	'First'
]

const FlightBookingFormWidget: FC = function FlightBookingFormWidget() {
	const { tripType, aircraftType } = useAppSelector(state => state.context)
	const [flightOn, setFlightOn] = useState('')
	const [routeType, setRouteType] = useState(tripType)
	const [flightType, setSeatType] = useState('Economy')
	const [passenger, setPassenger] = useState<PassengerType[]>(passengers)
	const [formData, setFormData] = useState<FormDataType[]>([
		{
			id: '',
			to: { country: '', countryShortCode: '', location: '', place: '' },
			from: { country: '', countryShortCode: '', location: '', place: '' },
			date: {}
		}
	])
	const dispatch = useAppDispatch()
	const searchData = {
		flightOn,
		routeType,
		flightType,
		passenger,
		formData
	}
	const handleRemove = (index: number): void => {
		const newFormData = formData.filter((item, ind) => ind !== index)
		setFormData(newFormData)
	}

	return (
		<>
			<div className='d-flex flex-column flex-lg-row justify-content-between mt-4 mb-1'>
				<Flex justifyContent='center' className='gap-2'>
					<div>
						<BasicDropdown
							options={routeTypes}
							setSelected={(e): void => {
								setRouteType(e)
								dispatch(setTripType(e as string))
							}}
							selected={routeType}
						/>
					</div>
					<div>
						<PassengerDropdown passenger={passenger} setPassenger={setPassenger} />
					</div>
					<div>
						<BasicDropdown
							options={flightTypes}
							selected={flightType}
							setSelected={setSeatType}
						/>
					</div>
				</Flex>
				<Flex justifyContent='center'>
					<Radio
						options={aircraftType}
						horizontal
						getResult={setFlightOn}
						defaultCheck='commercial'
					/>
				</Flex>
			</div>

			{routeType === 'Multi-City' ? (
				formData.map((_, index) => (
					<FlightSearchForm
						key={_.id}
						formData={formData}
						setFormData={setFormData}
						index={index}
						onRemove={(): void => handleRemove(index)}
						routeType={routeType}
						searchData={searchData}
					/>
				))
			) : (
				<FlightSearchForm
					formData={formData}
					setFormData={setFormData}
					onRemove={(): void => handleRemove(0)}
					routeType={routeType}
					searchData={searchData}
				/>
			)}

			<div className='p-1 mb-3 w-100 w-md-auto d-block d-md-none'>
				<Link
					to='/b2c/flight/search'
					className='btn bg-primary h-100 w-100 w-md-auto py-2'
				>
					<FontAwesomeIcon className='text-white' icon='search' />
				</Link>
			</div>
			<div className='d-flex justify-content-end'>
				{routeType === 'Multi-City' && formData.length < 6 && (
					<Button
						className='p-0 mb-2 mt-n2'
						onClick={(): void =>
							setFormData(prev =>
								prev.length < 6
									? [
											...prev,
											{
												...{
													id: '',
													to: {
														country: '',
														countryShortCode: '',
														location: '',
														place: ''
													},
													from: {
														country: '',
														countryShortCode: '',
														location: '',
														place: ''
													},
													date: {}
												}
											}
									  ]
									: [...prev]
							)
						}
						variant='link'
					>
						<PlusRegular className='me-2' />
						Add another flight
					</Button>
				)}
			</div>
		</>
	)
}

export default FlightBookingFormWidget

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import React, { FC, HTMLAttributes, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MFlightBookingForm from './MFlightBookingForm'
import BasicDropdownMobile from '../../../common/utils/mobile/BasicDropdownMobile'
import PassengerDropdownMobile from '../../../common/utils/mobile/PassengerDropdownMobile'
import Flex from '../../../common/utils/Flex'
import { useAppDispatch } from '../../../../hooks/useReduxState'
import { setShowSearchPanel } from '../../../../features/context/contextSlice'
import { FormDataType } from '../../../../type/formData'
import { PassengerType } from '../../../../type/PassengerType'

const routeTypes = ['One Way', 'Return', 'Multi-City']
const planeTypes = ['Commercial Flight', 'Private Charter', 'Helicopters']
const flightTypes = ['Economy', 'Premium Economy', 'Business', 'First']

interface MFlightBookingFormWidgetProps
	extends HTMLAttributes<HTMLOrSVGElement> {
	passengers: PassengerType[]
}

const MFlightBookingFormWidget: FC<MFlightBookingFormWidgetProps> =
	function MFlightBookingFormWidget({
		passengers
	}: MFlightBookingFormWidgetProps) {
		const dispatch = useAppDispatch()
		const [formData, setFormData] = useState<FormDataType[]>([
			{
				id: '0',
				to: { country: '', countryShortCode: '', place: '', location: '' },
				from: { country: '', countryShortCode: '', place: '', location: '' },
				date: {}
			}
		])
		const [passenger, setPassenger] = useState(passengers)
		const [routeType, setFormType] = useState('One Way')
		const [planeType, setPlaneType] = useState('Commercial Flight')
		const [flightType, setSeatType] = useState('Economy')

		const searchData = {
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
				<Flex
					justifyContent='between'
					alignContent='center'
					alignItems='center'
					className='mb-1 mx-1'
				>
					<Flex wrap='wrap' alignItems='center' alignContent='center'>
						<div className='py-1 pe-2'>
							<BasicDropdownMobile
								options={routeTypes}
								setSelected={setFormType}
								selected={routeType}
								additionalTitle='Flight Type'
							/>
						</div>
						<div className='py-1 pe-2'>
							<PassengerDropdownMobile
								passenger={passenger}
								setPassenger={setPassenger}
								additionalTitle='Passengers'
							/>
						</div>
						<div className='py-1 pe-2'>
							<BasicDropdownMobile
								options={flightTypes}
								selected={flightType}
								setSelected={setSeatType}
								additionalTitle='Class'
							/>
						</div>
						<div className='py-1 pe-2'>
							<BasicDropdownMobile
								options={planeTypes}
								setSelected={setPlaneType}
								selected={planeType}
								additionalTitle='Aircraft'
							/>
						</div>
					</Flex>
				</Flex>
				{routeType === 'Multi-City' ? (
					formData.map((_, index) => (
						<MFlightBookingForm
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
					<MFlightBookingForm
						formData={formData}
						setFormData={setFormData}
						onRemove={(): void => handleRemove(0)}
						routeType={routeType}
						index={0}
						searchData={searchData}
					/>
				)}
				{routeType === 'Multi-City' && formData.length < 6 && (
					<div className='justify-content-end'>
						<Button
							onClick={(): void =>
								setFormData(prev =>
									prev.length < 6
										? [
												...prev,
												{
													...{
														id: '0',
														to: {
															country: '',
															countryShortCode: '',
															place: '',
															location: ''
														},
														from: {
															country: '',
															countryShortCode: '',
															place: '',
															location: ''
														},
														date: {}
													}
												}
										  ]
										: [...prev]
								)
							}
							variant='outline-primary'
							size='sm'
							className='text-nowrap m-1 mb-3'
						>
							Add more flight
						</Button>
					</div>
				)}
				{routeType === 'Multi-City' && formData.length < 6 && (
					<div
						role='button'
						onKeyDown={(): any => dispatch(setShowSearchPanel(false))}
						tabIndex={0}
						className='m-1 w-100'
						onClick={(): any => dispatch(setShowSearchPanel(false))}
					>
						<Link
							to={{ pathname: '/flight/search', state: { searchData } }}
							className='btn bg-primary h-100 text-100 w-100'
						>
							<FontAwesomeIcon icon='search' />
						</Link>
					</div>
				)}
			</>
		)
	}

export default MFlightBookingFormWidget

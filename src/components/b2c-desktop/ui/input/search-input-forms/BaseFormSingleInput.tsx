import classNames from 'classnames'
import React, { FC, HTMLAttributes, useRef, useState } from 'react'
import useClickAway from '../../../../../hooks/useClickAway'
import PopupComponentSingleInput from './PopupComponentSingleInput'
import { FlightSearchDataType } from '../../../../../type/formData'
import { Times } from '../../../../../assets/icons'

interface BaseFormSingleInputProps extends HTMLAttributes<HTMLOrSVGElement> {
	suggestedData: FlightSearchDataType[]
	destinationType: string
	popPosition: string
	selectedPlace: FlightSearchDataType
	setSelectedPlace: React.Dispatch<React.SetStateAction<FlightSearchDataType>>
	HandleIcon: React.FunctionComponent<any>
}

const BaseFormSingleInput: FC<BaseFormSingleInputProps> =
	function BaseFormSingleInput({
		setSelectedPlace,
		selectedPlace,
		destinationType,
		suggestedData,
		HandleIcon,
		popPosition
	}) {
		const selectRef = useRef(null)

		const [popup, setPopup] = useState<boolean>(false)
		const [isActive, setIsActive] = useState<boolean>(false)
		const [toggleClass, setToggleClass] = useState<string>('')

		useClickAway(selectRef, () => {
			setPopup(false)
			setToggleClass('closed')
		})
		const handleClick = (): void => {
			if (selectedPlace.country === '') {
				if (!popup) {
					setPopup(value => !value)
					setToggleClass('open')
				}
			}
		}
		const handleSelection = (): void => {
			setSelectedPlace({
				place: '',
				country: '',
				location: '',
				countryShortCode: ''
			})
			setIsActive(false)
		}

		return (
			<div
				role='button'
				tabIndex={0}
				onKeyDown={handleClick}
				ref={selectRef}
				onClick={handleClick}
				className={classNames(
					'hover-bg-200 border d-flex rounded position-relative align-items-center  destination-input cursor-pointer',
					{
						'border-primary': isActive,
						'border-300': !isActive
					}
				)}
				style={{ height: 55 }}
			>
				<span className='align-self-center ms-3'>
					<HandleIcon height='1.25rem' width='1.25rem' className='text-600' />
				</span>
				{selectedPlace.country !== '' ? (
					<p
						className='p-1 fw-semi-bold text-nowrap text-dark border rounded ms-1 my-2'
						style={{ fontSize: '0.8em' }}
					>
						{selectedPlace.countryShortCode !== ''
							? `${selectedPlace.country}(${selectedPlace.countryShortCode})`
							: selectedPlace.place}
						<span
							role='button'
							tabIndex={0}
							onKeyDown={handleSelection}
							onClick={handleSelection}
						>
							<Times className='ms-2 mb-1 text-600' />
						</span>
					</p>
				) : (
					<p
						className='p-1 fw-semi-bold text-nowrap text-dark ms-1 my-2'
						style={{ fontSize: '0.8em' }}
					>
						<span className='text-600'>{destinationType}</span>
					</p>
				)}

				<div
					style={{
						maxHeight: '450px',
						minHeight: '300px',
						minWidth: '400px',
						marginTop: '-3px',
						marginLeft: '-1px'
					}}
					className={`card start-0 top-0 ${popPosition} ${toggleClass} w-100`}
				>
					<PopupComponentSingleInput
						setPopup={setPopup}
						HandleIcon={HandleIcon}
						suggestedData={suggestedData}
						setSelected={setSelectedPlace}
						placeHolder={destinationType}
						setIsActive={setIsActive}
						setToggleClass={setToggleClass}
					/>
				</div>
			</div>
		)
	}
BaseFormSingleInput.defaultProps = {}

export default BaseFormSingleInput

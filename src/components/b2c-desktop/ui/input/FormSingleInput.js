import classNames from 'classnames'
import useClickAway from 'hooks/useClickAway'
import React, { useRef, useState } from 'react'
import PropTypes, { object } from 'prop-types'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PopupFormSingleInput from './PopupFormSingleInput'

function FormSingleInput(props) {
	const {
		countryData,
		destinationType,
		popPosition,
		selectedCountry = {},
		setSelectedCountry,
		HandleIcon
	} = props

	const selectRef = useRef(null)

	const [popup, setPopup] = useState(false)
	const [isActive, setIsActive] = useState(false)
	const [toggleClass, setToggleClass] = useState('close')

	useClickAway(selectRef, () => {
		setPopup(false)
		setToggleClass('closed')
	})

	return (
		<div
			ref={selectRef}
			onClick={() => {
				if (Object.keys(selectedCountry).length === 0) {
					if (!popup) {
						setPopup(value => !value)
						setToggleClass('open')
					}
				}
			}}
			className={classNames(
				'hover-bg-100 border d-flex rounded position-relative destination-input cursor-pointer',
				{
					'border-primary': isActive,
					'border-300': !isActive
				}
			)}
			style={{ height: 45 }}
		>
			<span className='align-self-center ms-2 pb-1'>
				<HandleIcon height='1.6rem' width='1.6rem' />
			</span>
			{Object.keys(selectedCountry).length > 0 ? (
				<p
					className='p-1 fw-semi-bold text-nowrap text-dark  ms-1 my-2 me-4 overflow-hidden text-truncate'
					style={{ fontSize: '0.8em', width: '340px' }}
				>
					{selectedCountry?.location}
					{/* {`${selectedCountry.country} (${selectedCountry.countryShortCode})`} */}
					<span
						onClick={() => {
							setSelectedCountry({})
							setIsActive(false)
						}}
						className='position-absolute cRight-10'
					>
						<FontAwesomeIcon
							className='me-1 ms-1 text-600 cursor-pointer'
							icon={faTimes}
						/>
					</span>
				</p>
			) : (
				<p
					className='p-1 fw-semi-bold text-nowrap text-dark ms-1 my-2'
					style={{ fontSize: '0.8em' }}
				>
					<span className='text-600'>{`${destinationType}`}</span>
				</p>
			)}

			<div
				style={{ height: '325px' }}
				className={`card ${popPosition} ${toggleClass} start-0 top-0 overflow-y-scroll w-100`}
			>
				<PopupFormSingleInput
					HandleIcon={HandleIcon}
					setPopup={setPopup}
					countryData={countryData}
					setSelected={setSelectedCountry}
					placeHolder={destinationType}
					setIsActive={setIsActive}
					setToggleClass={setToggleClass}
				/>
			</div>
		</div>
	)
}

FormSingleInput.propTypes = {
	popPosition: PropTypes.oneOf([
		'position-absolute-form-popup-rl',
		'position-absolute-form-popup-lr'
	]),
	countryData: PropTypes.arrayOf(object),
	destinationType: PropTypes.string,
	selectedCountry: PropTypes.object,
	setSelectedCountry: PropTypes.func,
	HandleIcon: PropTypes.any
}

FormSingleInput.defaultProps = {
	popPosition: 'position-absolute-form-popup-rl',
	countryData: [],
	destinationType: 'departure'
}

export default FormSingleInput

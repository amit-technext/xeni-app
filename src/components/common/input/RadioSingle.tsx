/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react'

interface RadioSingleProps extends React.HTMLAttributes<HTMLOrSVGElement> {
	id: string
	horizontal?: boolean
	label: string
	name?: string
	value: string | number
	subLabel: string
	defaultCheck?: string
	getResult: (data: any) => void
	rootClassName?: string
	className?: string
}

const RadioSingle: FC<RadioSingleProps> = function RadioSingle(props) {
	const {
		id,
		name,
		horizontal,
		label,
		value,
		subLabel,
		defaultCheck,
		getResult,
		rootClassName,
		className
	} = props
	return (
		<label
			className={`radio-custom ${!horizontal ? 'ms-0' : 'ms-4'} ${
				subLabel ? 'w-100' : ''
			} ${rootClassName || ''} `}
		>
			<input
				type='radio'
				name={name}
				id={id}
				onClick={(): void => getResult(value)}
				defaultChecked={value === defaultCheck}
			/>
			<span className='c-check-Mark' />
			<label
				htmlFor={id}
				className={`d-flex justify-content-between ${className || ''}`}
			>
				<span>{label}</span>
				{subLabel ? <span>{subLabel}</span> : null}
			</label>
		</label>
	)
}

RadioSingle.defaultProps = {
	horizontal: false,
	defaultCheck: undefined,
	name: 'radio',
	rootClassName: '',
	className: ''
}

export default RadioSingle

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react'
import { RadioOptionType } from '../../../type/commonType'

interface RadioProps extends React.HTMLAttributes<HTMLOrSVGElement> {
	horizontal?: boolean
	options: RadioOptionType[]
	defaultCheck: string
	getResult: (data: any) => void
}

const Radio: FC<RadioProps> = function Radio(props) {
	const { horizontal, options, defaultCheck, getResult } = props

	const func = (obj: any): any => 'active' in obj

	return (
		<div
			className={`d-flex ${
				horizontal
					? 'flex-row align-items-center align-content-center'
					: 'flex-column'
			}`}
		>
			{options?.map(option => (
				<React.Fragment key={option.id}>
					{func(option) ? (
						option?.active && (
							<label className={`radio-custom ${!horizontal ? 'ms-0' : 'ms-4'}`}>
								<input
									type='radio'
									name='radio'
									id={option.id}
									onClick={(): any => getResult(option.value)}
									defaultChecked={option.value === defaultCheck}
								/>
								<span className='c-check-Mark' />
								<label htmlFor={option.id}>{option.label}</label>
							</label>
						)
					) : (
						<label
							className={`radio-custom ${!horizontal ? 'ms-0' : 'ms-4'} ${
								option.subLabel ? 'w-100' : ''
							}`}
						>
							<input
								type='radio'
								name='radio'
								id={option.id}
								onClick={(): void => getResult(option.value)}
								defaultChecked={option.value === defaultCheck}
							/>
							<span className='c-check-Mark' />
							<label htmlFor={option.id} className='d-flex justify-content-between'>
								<span>{option.label}</span>
								{option.subLabel ? <span>{option.subLabel}</span> : null}
							</label>
						</label>
					)}
				</React.Fragment>
			))}
		</div>
	)
}

Radio.defaultProps = {
	horizontal: false
}

export default Radio

import React, { FC, HTMLAttributes } from 'react'
import { Form } from 'react-bootstrap'

type Option = {
	id: string | number
	value: string | number
	title: string | number
}

interface SelectCustomProps extends HTMLAttributes<HTMLOrSVGElement> {
	gerResult: (value: any) => void
	options: Array<Option>
	selected: string | number
	size?: 'sm' | 'lg' | undefined
	className: string
	hr?: boolean
	hrMb?: boolean
}

const SelectCustom: FC<SelectCustomProps> = function SelectCustom(props) {
	const { options, gerResult, selected, hr, hrMb, size, className } = props
	return (
		<>
			<Form.Select
				size={size}
				className={`${className || ''} mb-3 cursor-pointer`}
				onChange={(e): void => gerResult(e.target.value)}
				defaultValue={selected}
			>
				{options?.map(option => (
					<option
						key={option.id}
						value={option.value}
						// selected={option.value === selected}
					>
						{option.title}
					</option>
				))}
			</Form.Select>
			{hr ? <hr className={!hrMb ? 'mb-0' : ''} /> : null}
		</>
	)
}

SelectCustom.defaultProps = {
	hr: false,
	hrMb: true,
	size: undefined
}

export default SelectCustom

import { Form } from 'react-bootstrap'
import React, { useState, useEffect, FC } from 'react'

type OptionType = {
	id: string
	title: string
	value: string
	count?: string | number
}

interface CheckboxProps {
	options: OptionType[]
	selectedResult: (value: Array<string>) => void
	onChange: (value: any) => void
	hr?: boolean
	hrMb?: boolean
}

const Checkbox: FC<CheckboxProps> = function Checkbox(props) {
	const { options, hr, hrMb, onChange, selectedResult } = props

	const [selectedItems, setSelectedItems] = useState<Array<string>>([])

	const setRecommendedHandler = (data: string): void => {
		const preData: Array<string> = [...selectedItems]
		const checkDataIsAlreadySelected = preData.findIndex(item => item === data)
		if (checkDataIsAlreadySelected === -1) {
			setSelectedItems([...preData, data])
		} else {
			preData.splice(checkDataIsAlreadySelected, 1)
			setSelectedItems([...preData])
		}
	}

	useEffect(() => {
		selectedResult(selectedItems)
	}, [selectedItems])

	const checked = (id: string): undefined | boolean =>
		selectedItems.some(el => el === id)

	const checkDisable = (): boolean => false

	return (
		<Form>
			{options?.map(option => (
				<Form.Check
					bsPrefix='form-check custom-checkbox'
					key={option.id}
					type='checkbox'
					label={
						option.count ? (
							<>
								<span>{option.title}</span>
								<span>{option.count}</span>
							</>
						) : (
							option.title
						)
					}
					id={option.id}
					checked={checked(option.value)}
					onChange={
						onChange
							? (): void => onChange(onChange)
							: (): void => setRecommendedHandler(option.value)
					}
					disabled={checkDisable()}
				/>
			))}

			{hr ? <hr className={!hrMb ? 'mb-0' : ''} /> : null}
		</Form>
	)
}

Checkbox.defaultProps = {
	hr: true,
	hrMb: true
}

export default Checkbox

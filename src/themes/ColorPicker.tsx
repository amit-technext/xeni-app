import React, { FC, useState } from 'react'
import { CirclePicker, ColorChangeHandler } from 'react-color'
import { useAppDispatch } from '../hooks/useReduxState'
import { setPrimaryColor } from '../features/context/contextSlice'
import { setStyleProperty } from '../helpers/htmlElementManager'

const ColorPicker: FC = function ColorPicker() {
	const dispatch = useAppDispatch()
	const [pColor, setPColor] = useState('')
	const handlePrimaryColorChange: ColorChangeHandler = (color: {
		hex: string
	}) => {
		setPColor(color.hex)
		setPColor((state: string) => {
			dispatch(setPrimaryColor(state))
			setStyleProperty('--falcon-primary', state)
			return state
		})
	}

	return (
		<CirclePicker color={pColor} onChangeComplete={handlePrimaryColorChange} />
	)
}

export default ColorPicker

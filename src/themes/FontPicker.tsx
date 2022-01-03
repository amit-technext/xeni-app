import React, { FC } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../hooks/useReduxState'
import { setUserFontFamily } from '../features/context/contextSlice'
import { setStyleProperty } from '../helpers/htmlElementManager'

interface FontProps extends React.HTMLAttributes<HTMLOrSVGElement> {
	fonts?: string[]
}
const FontPicker: FC<FontProps> = function FontPicker({ fonts }) {
	const dispatch = useAppDispatch()
	const userFontFamily = useAppSelector(state => state.context.userFontFamily)
	function setFont(value: string): void {
		dispatch(setUserFontFamily(value))
		setStyleProperty('--dynamic-font-family', value)
	}

	return (
		<Dropdown>
			<Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
				{userFontFamily}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{fonts?.map(value => (
					<Dropdown.Item key={value} id={value} onClick={() => setFont(value)}>
						{value}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	)
}

FontPicker.defaultProps = {
	fonts: []
}

export default FontPicker

import { CustomCheckBoxProps } from 'interface/IInputCommon'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'

const CustomCheckBox: FC<CustomCheckBoxProps> = function CustomCheckBox(props) {
	const { type, id, label, name, disable, change, check } = props
	return (
		<Form.Check
			type={type}
			id={id}
			label={label}
			name={name}
			defaultChecked={check}
			disabled={!disable}
			onChange={(): void =>
				name === 'aircraft' || name === 'airports' || name === 'cabin'
					? change(label, !check)
					: change(label, !check)
			}
		/>
	)
}

export default CustomCheckBox

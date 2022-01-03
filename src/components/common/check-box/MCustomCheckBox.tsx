import React, { FC } from 'react'
import { Form } from 'react-bootstrap'
import { CustomCheckBoxProps } from '../../../interface/IInputCommon'

const MCustomCheckBox: FC<CustomCheckBoxProps> = function MCustomCheckBox(
	props
) {
	const { type, id, label, name, disable, change, check } = props
	return (
		<Form.Check
			type={type}
			id={id}
			label={label}
			name={name}
			defaultChecked={check}
			disabled={!disable}
			onClick={(): void =>
				name === 'aircraft' || name === 'airports' || name === 'cabin'
					? change(!check)
					: change(label)
			}
		/>
	)
}

export default MCustomCheckBox

import React, { FC, HTMLAttributes, ReactNode, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface CustomCollapseProps extends HTMLAttributes<HTMLOrSVGElement> {
	children: ReactNode
	initialState: boolean
	icon: IconProp
	title: string
	fontSize?: string | number
}

const CustomCollapse: FC<CustomCollapseProps> = function CustomCollapse(props) {
	const { initialState, children, icon, title, fontSize } = props
	const [open, setOpen] = useState(initialState)

	return (
		<div className='fw-semi-bold py-2'>
			<div
				role='button'
				tabIndex={0}
				onClick={(): void => setOpen(!open)}
				onKeyPress={(): void => setOpen(!open)}
				aria-expanded={open}
				className='d-flex justify-content-between cursor-pointer fw-semi-bold'
				style={{ fontSize }}
			>
				{icon && (
					<span className='me-3'>
						<FontAwesomeIcon icon={icon} />
					</span>
				)}
				<span>{title}</span>

				<span>
					{open ? (
						<FontAwesomeIcon icon='chevron-up' className='ms-1' />
					) : (
						<FontAwesomeIcon icon='chevron-down' className='ms-1' />
					)}
				</span>
			</div>
			<Collapse in={open}>
				<div className='pt-2'>{children}</div>
			</Collapse>
		</div>
	)
}

CustomCollapse.defaultProps = {
	fontSize: 'fs--1'
}
export default CustomCollapse

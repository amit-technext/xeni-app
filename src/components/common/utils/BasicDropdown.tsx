import classNames from 'classnames'
import { Card } from 'react-bootstrap'
import React, { useState, useRef, FC } from 'react'
import useClickAway from 'hooks/useClickAway'

interface BasicDropdownProps
	extends React.HtmlHTMLAttributes<HTMLOrSVGElement> {
	options: string[]
	selected: string
	setSelected: React.Dispatch<React.SetStateAction<string>>
	popPosition?: string
	className?: string
	border?: boolean
}
const BasicDropdown: FC<BasicDropdownProps> = function BasicDropdown({
	options,
	selected,
	setSelected,
	popPosition,
	className,
	border
}: BasicDropdownProps) {
	const selectRef = useRef(null)
	const [show, setShow] = useState(false)

	useClickAway(selectRef, () => {
		setShow(false)
	})
	return (
		<div
			ref={selectRef}
			className={classNames(
				'd-flex flex-column position-relative cursor-pointer',
				{ 'border rounded-3 border-primary': border }
			)}
		>
			<div
				onKeyDown={(): void => setShow(true)}
				tabIndex={0}
				role='button'
				className='d-flex justify-content-center py-0'
				onClick={(): void => setShow(true)}
			>
				<p
					className={`${
						className || ''
					} text-nowrap text-primary fs--1 fw-medium text-center mb-0 me-2`}
				>
					{selected || options[0]}
				</p>
				<span className='text-dark dropdown-indicator ms-3 mb-1' />
			</div>
			{show ? (
				<Card
					className={classNames('fs--1 text-700 fw-semi-bold ms-n1', popPosition)}
					style={{ width: '190px' }}
				>
					{options.map((item, index) => (
						<div
							onKeyDown={(): void => {
								setSelected(item)
								setShow(false)
							}}
							tabIndex={index}
							role='button'
							onClick={(): void => {
								setSelected(item)
								setShow(false)
							}}
							key={item}
							className={
								item === selected
									? 'bg-200 rounded-2 py-2'
									: 'hover-bg-200 rounded-2 py-2'
							}
						>
							<p className='mb-0 text-left ms-2 rounded text-nowrap px-2 py-1'>{item}</p>
						</div>
					))}
				</Card>
			) : (
				<span />
			)}
		</div>
	)
}

BasicDropdown.defaultProps = {
	border: false,
	popPosition: 'position-absolute-basic-dropdown-lr',
	className: ''
}

export default BasicDropdown

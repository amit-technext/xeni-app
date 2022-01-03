import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Card } from 'react-bootstrap'
import React, { FC, useState, useRef } from 'react'
import useClickAway from 'hooks/useClickAway'

const MBasicDropdown: FC = function MBasicDropdown(props) {
	const { options, selected, setSelected, popPosition, className, border } =
		props
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
				role='button'
				tabIndex={0}
				className='d-flex justify-content-center py-0'
				onClick={(): void => setShow(true)}
				onKeyPress={(): void => setShow(true)}
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
					style={{ width: '160px' }}
				>
					{options.map((item, index) => (
						<div
							role='button'
							tabIndex={0}
							onClick={(): void => {
								setSelected(item)
								setShow(false)
							}}
							onKeyPress={(): void => {
								setSelected(item)
								setShow(false)
							}}
							key={index.toString()}
							className={
								item === selected
									? 'bg-200 rounded-2 py-2'
									: 'hover-bg-200 rounded-2 py-2'
							}
						>
							<p className='mb-0 text-left ms-2 rounded text-nowrap px-2 py-1'>
								{item}
							</p>
						</div>
					))}
				</Card>
			) : (
				<span />
			)}
		</div>
	)
}

MBasicDropdown.propTypes = {
	options: [].isRequired,
	selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	setSelected: PropTypes.func,
	popPosition: PropTypes.oneOf([
		'position-absolute-basic-dropdown-lr-mbl',
		'position-absolute-basic-dropdown-rl'
	]),
	className: PropTypes.string,
	border: PropTypes.bool
}
MBasicDropdown.defaultProps = {
	setSelected: undefined,
	border: false,
	popPosition: 'position-absolute-basic-dropdown-lr-mbl',
	className: undefined
}

export default MBasicDropdown

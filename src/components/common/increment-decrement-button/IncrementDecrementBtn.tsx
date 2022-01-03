import React, { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

interface IncrementDecrementBtnProps extends HTMLAttributes<HTMLOrSVGElement> {
	decrement: () => void
	increment: () => void
	btnSize?: number
	iconSize?: SizeProp
	width?: string
}

const IncrementDecrementBtn: FC<IncrementDecrementBtnProps> =
	function IncrementDecrementBtn(props) {
		const { decrement, increment, btnSize, iconSize, width } = props

		return (
			<div
				className='ms-4 fw-semi-bold fs--1 d-flex justify-content-between align-items-center text-center'
				style={{ width }}
			>
				<button
					type='button'
					onClick={decrement}
					style={{
						height: btnSize,
						width: btnSize
					}}
					className='btn btn-falcon-primary px-1 py-0 me-2 d-flex align-items-center justify-content-center'
				>
					<FontAwesomeIcon icon={faMinus} size={iconSize} />
				</button>
				<span>{0}</span>
				<button
					type='button'
					onClick={increment}
					style={{
						height: btnSize,
						width: btnSize
					}}
					className='btn btn-falcon-primary px-1 py-0 ms-2 d-flex align-items-center justify-content-center'
				>
					<FontAwesomeIcon icon={faPlus} size={iconSize} />
				</button>
			</div>
		)
	}

IncrementDecrementBtn.defaultProps = {
	iconSize: 'sm',
	btnSize: 26,
	width: '85px'
}

// IncrementDecrementBtn.propTypes = {
// 	decrement: PropTypes.func,
// 	increment: PropTypes.func,
// 	btnSize: PropTypes.number,
// 	iconSize: PropTypes.string,
// 	width: PropTypes.string
// }

export default IncrementDecrementBtn

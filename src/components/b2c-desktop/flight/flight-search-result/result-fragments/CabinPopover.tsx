import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

interface CabinPopoverProps extends HTMLAttributes<HTMLOrSVGElement> {
	cabinFeature: string[]
	currency: string
	totalPrice: number
	cabinClass: string
}

const CabinPopover: FC<CabinPopoverProps> = function CabinPopover(props) {
	const { cabinFeature, currency, totalPrice, cabinClass } = props

	return (
		<>
			{cabinClass ? (
				<div
					className={classNames('d-flex align-items-center px-3 py-2', {
						'border-bottom': cabinClass
					})}
				>
					<p className='mb-0 fw-bold me-2 text-dark'>{`${currency} ${totalPrice}`}</p>
					<p className='mb-0 fs--1 fw-semi-bold text-dark'>{cabinClass}</p>
				</div>
			) : (
				'not'
			)}
			<div className='px-3 py-2 text-dark pb-3'>
				{cabinFeature?.map(item => (
					<div key={item}>
						<span className='fs--1 p-0'>{item}</span>
					</div>
				))}
			</div>
		</>
	)
}

export default CabinPopover

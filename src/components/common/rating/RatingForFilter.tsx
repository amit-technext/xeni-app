import React, { FC, HTMLAttributes } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

interface RatingForFilterProps extends HTMLAttributes<HTMLOrSVGElement> {
	getSelectedResult: (data: number) => void
	selected: number
	hr?: boolean
	hrMb?: boolean
}

const RatingForFilter: FC<RatingForFilterProps> = function RatingForFilter(
	props
) {
	const { selected = 0, getSelectedResult, hr, hrMb } = props
	const stars = [0, 2, 3, 4, 5]

	return (
		<>
			<div className='d-flex align-items-center'>
				{stars?.map(star => {
					const condition = selected === star || selected < star

					return (
						<div
							role='button'
							tabIndex={0}
							key={star}
							onClick={(): void => getSelectedResult(star)}
							onKeyPress={(): void => getSelectedResult(star)}
							className='position-relative w-fit cursor-pointer me-2 last-me-0'
						>
							<FontAwesomeIcon
								icon={condition ? faStar : faStarRegular}
								size='2x'
								className={`${condition ? 'text-900' : 'text-400'}`}
							/>
							<p
								className={`${
									condition ? 'text-white' : 'text-black'
								} position-absolute top-50 start-50 translate-middle fw-medium fs--2 mb-0`}
							>
								{star === 0 ? `${star}+` : star}
							</p>
						</div>
					)
				})}
			</div>
			{hr ? <hr className={!hrMb ? 'mb-0' : ''} /> : null}
		</>
	)
}

RatingForFilter.defaultProps = {
	hr: false,
	hrMb: true
}

export default RatingForFilter

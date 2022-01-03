import React, { FC, HTMLAttributes } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface RatingProps extends HTMLAttributes<HTMLOrSVGElement> {
	rating: number
}

const Rating: FC<RatingProps> = function Rating(props) {
	const { rating } = props
	let ratingData
	if (rating < 0) {
		ratingData = 0
	} else if (rating >= 5) {
		ratingData = 5
	} else {
		ratingData = rating
	}

	const fixRatingToRoundNumber = Math.round(ratingData)
	const totalRating = 5
	const ratingDiv = []

	for (let i = 0; i < fixRatingToRoundNumber; i += 1) {
		ratingDiv.push(
			<div key={`${i}star`}>
				<FontAwesomeIcon icon={faStar} size='xs' className='text-warning mr-5px ' />
			</div>
		)
	}

	for (let z = 0; z < totalRating - fixRatingToRoundNumber; z += 1) {
		ratingDiv.push(
			<div key={`${z}emptyStar`}>
				<FontAwesomeIcon
					icon={faStar}
					size='xs'
					className='text-secondary mr-5px '
				/>
			</div>
		)
	}

	return <div className='d-flex'>{ratingDiv}</div>
}

export default Rating

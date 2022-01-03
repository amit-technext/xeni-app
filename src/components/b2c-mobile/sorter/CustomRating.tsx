import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface CustomRatingType extends React.HTMLAttributes<HTMLOrSVGElement> {
	star: number
	setData: (data: number) => void
	setStar: (data: number) => void
}
const CustomRating: FC<CustomRatingType> = function CustomRating(props) {
	const { star, setStar, setData } = props
	return (
		<div className='d-flex justify-content-center mt-0 pt-0 mb-5'>
			{Array.from({ length: star }, (_, i) => i + 1).map(item => (
				<FontAwesomeIcon
					key={item}
					onClick={(): void => {
						setStar(item)
						setData(item)
					}}
					icon={faStar}
					size='xs'
					className='text-warning mr-5 ms-2 fs-4'
				/>
			))}
			{Array.from({ length: 5 - star }, (_, i) => i + 1).map(item => (
				<FontAwesomeIcon
					key={item}
					onClick={(): void => {
						setStar(star + item)
						setData(item)
					}}
					icon={faStar}
					size='xs'
					className='text-secondary mr-5 ms-2  fs-4'
				/>
			))}
		</div>
	)
}
export default CustomRating

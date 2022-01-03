// import PropTypes from 'prop-types'
import React, { FC } from 'react'
import { ISortingInputData } from 'type/carsType'
import CustomCheckBox from '../../common/check-box/CustomCheckBox'

interface SortingInputDataProps {
	data: ISortingInputData[]
	name: string
	setData: (d: string) => void
}

const SortingInputData: FC<SortingInputDataProps> = function SortingInputData(
	props
) {
	const { data, name, setData } = props
	// console.log(data)

	return (
		<div className='w-100'>
			{data.map((item, index) => (
				<div
					key={index.toString()}
					className='d-flex justify-content-between w-100'
				>
					<CustomCheckBox
						type={item.type as 'checkbox'}
						id={item.id}
						label={item.value}
						name={name}
						check={item.select as boolean}
						disable={item.disable}
						change={(d): void => {
							setData(d)
						}}
					/>
					<label htmlFor={item.id}>{item.price}</label>
				</div>
			))}
		</div>
	)
}
export default SortingInputData

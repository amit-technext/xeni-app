import React, { FC } from 'react'
import Slider, { Range } from 'rc-slider'

interface sliderComponentType {
	isRange: boolean
	min: number
	max: number
	def: number[]
	onChange: (valueArr: number[]) => void
	step: number
}
const SliderComponent: FC<sliderComponentType> = function SliderComponent(
	props
) {
	const { isRange, min, max, def, onChange, step } = props

	return (
		<div className='my-1 py-1 rc-slider-color'>
			{isRange ? (
				<Range
					step={step}
					min={min}
					max={max}
					defaultValue={def}
					onChange={(value): void => onChange(value)}
				/>
			) : (
				''
				// <Slider
				// 	min={min}
				// 	max={max}
				// 	defaultValue={def[0]}
				// 	onChange={(e: number): void => onChange([], e)}
				// />
			)}
		</div>
	)
}

export default SliderComponent

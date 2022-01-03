import React, { FC } from 'react'
import SliderComponent from '../../common/utils/SliderComponent'

interface MTimeSliderType extends React.HTMLAttributes<HTMLOrSVGElement> {
	weekDays: string | string[]
	sliderValue: number[]
	onChange: (e: any) => void
	timeOrDuration: 'time' | 'duration' | 'money'
	min: number
	max: number
	initial: number[]
	step: number
}
const MTimeSlider: FC<MTimeSliderType> = function MTimeSlider(props) {
	const {
		weekDays,
		sliderValue,
		onChange,
		timeOrDuration,
		min,
		max,
		initial,
		step
	} = props

	const isNaN = (a: number): void | boolean => {
		if (a == null) return false
		return true
	}
	return (
		<>
			{timeOrDuration === 'time' ? (
				<div>
					<span className='me-1 text-black fs--1'>{weekDays[0].slice(0, 3)}</span>
					{isNaN(sliderValue[0]) ? (
						<span className='me-2 text-black fs--1'>
							{timeOrDuration === 'time'
								? '1 : 00 Pm - 3:00 Pm'
								: '20: 00 Hr - 40: 30 Hr'}
						</span>
					) : (
						<span className='text-black fs--1'>
							{sliderValue[0] % 1 !== 0
								? (sliderValue[0] - 0.2).toFixed(2)
								: sliderValue[0].toFixed(2)}{' '}
							{timeOrDuration === 'time' ? 'Am' : 'Hr'} -
							{sliderValue[1] % 1 !== 0
								? (sliderValue[1] - 0.2).toFixed(2)
								: sliderValue[1].toFixed(2)}{' '}
							{timeOrDuration === 'time' ? 'Pm' : 'Hr'}
						</span>
					)}
				</div>
			) : (
				<div>
					<span className='me-2 text-black fs--1'>
						{sliderValue[0]}
						{weekDays}
					</span>
					{/* )} */}
					{'- '}
					<span className='me-2 text-black fs--1'>
						{sliderValue[1]}
						{weekDays}
					</span>
					{/* )} */}
				</div>
			)}
			<SliderComponent
				step={step}
				min={min}
				max={max}
				def={initial}
				isRange
				onChange={onChange}
			/>
		</>
	)
}

export default MTimeSlider

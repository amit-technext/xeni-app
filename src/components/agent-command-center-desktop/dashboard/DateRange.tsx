/* eslint-disable no-console */
import React, { FC, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { Button } from 'react-bootstrap'
import { addDays } from 'date-fns'
import { Range } from 'react-date-range'
import DatePickerFormElement from '../../common/date-picker/DatePickerFormElement'

interface DateRangeProps {
	date: []
	month: string
}

const DateRange: FC<DateRangeProps> = function DateRange({ date, month }) {
	// const [startDate, setStartDate] = useState(null);
	// const [Date, setDate] = useState(1);
	// console.log('Date :', Date);
	const settings = {
		className: 'center',
		infinite: true,
		slidesToShow: 5,
		speed: 500,
		// initialSlide: Date.date,
		swipeToSlide: true,
		focusOnSelect: true,
		draggable: true
		// beforeChange: (current, next) => {
		//   setDate(next + 1);
		// }
	}
	useEffect(() => {}, [Date])
	const [rangeDate, setRangeDate] = useState<Range[]>([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection'
		}
	])
	const [singleDate, setSingleDate] = useState<Date>(new Date())
	console.log(rangeDate)

	return (
		<div className='card'>
			<div>
				<h5 className='ms-5 fs-2 mt-3 mb-2'>Date Range</h5>
				<div>
					<div className='mx-5'>
						<Slider {...settings} className=''>
							{date.map((item, index) => (
								<div className='d-flex card py-2 px-0' key={index.toString()}>
									<h6 className='text-center mb-0 fs-0 pt-1' onChange={(): void => {}}>
										{item}
									</h6>
									<h6 className='text-center text-800'>{month}</h6>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
			<div className=' mx-6 my-3'>
				<DatePickerFormElement
					rangeDate={rangeDate}
					setRangeDate={setRangeDate}
					IsRange
					setSingleDate={setSingleDate}
					singleDate={singleDate}
					Mobile={false}
					withFixedSelection={false}
				/>
			</div>

			<div className='d-flex justify-content-center mb-3'>
				<Button variant='falcon-primary'>Apply</Button>
			</div>
		</div>
	)
}

export default DateRange

import React, { FC, HTMLAttributes, SetStateAction } from 'react'
import {
	DateRangePicker,
	DateRange,
	Calendar,
	RangeKeyDict,
	Range
} from 'react-date-range'

interface DatePickerProps extends HTMLAttributes<HTMLOrSVGElement> {
	withFixedSelection?: boolean
	isRange?: boolean
	isMobile?: boolean
	rangeDate: Range[]
	setRangeDate: React.Dispatch<SetStateAction<Range[]>>
	singleDate: Date
	setSingleDate: React.Dispatch<SetStateAction<Date>>
}

const DatePicker: FC<DatePickerProps> = function DatePicker({
	withFixedSelection,
	isRange,
	isMobile,
	rangeDate,
	setRangeDate,
	singleDate,
	setSingleDate
}: DatePickerProps) {
	console.log(new Date())
	if (isMobile) {
		return (
			<div>
				{isRange ? (
					<DateRange
						scroll={{ enabled: true, monthHeight: 250 }}
						months={1}
						direction='vertical'
						// showMonthArrow
						// minDate={new Date()}
						fixedHeight
						// editableDateInputs
						onChange={(item: RangeKeyDict): void => setRangeDate([item.selection])}
						// moveRangeOnFirstSelection
						ranges={rangeDate}
						showDateDisplay={false}
					/>
				) : (
					<Calendar
						direction='vertical'
						minDate={new Date()}
						fixedHeight
						onChange={(item: ((prevState: Date) => Date) | Date): void =>
							setSingleDate(item)
						}
						date={singleDate}
					/>
				)}
			</div>
		)
	}
	if (isRange) {
		return (
			<div>
				{withFixedSelection ? (
					<DateRangePicker
						minDate={new Date()}
						fixedHeight
						onChange={(item: RangeKeyDict): void => setRangeDate([item.selection])}
						moveRangeOnFirstSelection={false}
						months={2}
						ranges={rangeDate}
						direction='horizontal'
						showDateDisplay={false}
					/>
				) : (
					<DateRange
						minDate={new Date()}
						fixedHeight
						onChange={(item: RangeKeyDict): void => setRangeDate([item.selection])}
						moveRangeOnFirstSelection={false}
						months={2}
						ranges={rangeDate}
						direction='horizontal'
						showDateDisplay={false}
					/>
				)}
			</div>
		)
	}
	return (
		<div>
			<Calendar
				minDate={new Date()}
				fixedHeight
				onChange={(item: ((prevState: Date) => Date) | Date): void =>
					setSingleDate(item)
				}
				date={singleDate}
			/>
		</div>
	)
}
DatePicker.defaultProps = {
	isRange: undefined,
	isMobile: undefined,
	withFixedSelection: undefined
}

export default DatePicker

import classNames from 'classnames'
import { Button, CloseButton, Modal } from 'react-bootstrap'
import React, {
	Dispatch,
	FC,
	HTMLAttributes,
	SetStateAction,
	useState
} from 'react'
import moment from 'moment'
import { Range } from 'react-date-range'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import DatePicker from './DatePicker'
import { CalendarLight } from '../../../assets/icons'

interface DatePickerFormElementProps extends HTMLAttributes<HTMLOrSVGElement> {
	Mobile: boolean
	IsRange: boolean
	rangeDate: Range[]
	setRangeDate: Dispatch<SetStateAction<Range[]>>
	singleDate: Date
	setSingleDate: Dispatch<SetStateAction<Date>>
	withFixedSelection?: boolean
	singleDateName?: string
	startDateName?: string
	endDateName?: string
	noFormVisuals?: boolean
	formHeight?: string
	icon?: React.ReactNode | IconProp
}

const DatePickerFormElement: FC<DatePickerFormElementProps> =
	function DatePickerFormElement({
		Mobile,
		IsRange,
		rangeDate,
		setRangeDate,
		singleDate,
		setSingleDate,
		withFixedSelection,
		singleDateName,
		startDateName,
		endDateName,
		noFormVisuals,
		formHeight,
		icon
	}: DatePickerFormElementProps) {
		const [isActive, setIsActive] = useState(false)
		const [fullscreen, setFullscreen] = useState<
			true | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down' | undefined
		>(undefined)
		const [show, setShow] = useState(false)

		const handleShow = (
			breakPoint: React.SetStateAction<
				| true
				| 'sm-down'
				| 'md-down'
				| 'lg-down'
				| 'xl-down'
				| 'xxl-down'
				| undefined
			>
		): void => {
			setFullscreen(breakPoint)
			setShow(true)
		}
		return (
			<>
				<div
					role='button'
					tabIndex={0}
					onKeyDown={(): void => handleShow('md-down')}
					onClick={(): void => handleShow('md-down')}
					className={classNames('d-flex align-items-center cursor-pointer', {
						'bg-100': Mobile,
						'border-primary': isActive,
						// 'hover-bg-200': !IsRange,
						'border border-300 rounded': !noFormVisuals
					})}
					style={!noFormVisuals ? { height: formHeight } : { height: 30 }}
				>
					<span className='align-self-center mx-1'>
						{icon ? (
							<FontAwesomeIcon className='ms-2' icon={icon as IconProp} />
						) : (
							<CalendarLight className='text-800 ms-1' />
						)}
					</span>
					{IsRange ? (
						<div
							className='py-2 fw-regular fs--1 text-nowrap text-dark my-2'
							style={{ fontSize: '0.8em' }}
						>
							<span
								className={`border-end border-700 pe-3 ${
									rangeDate.length > 0 ? 'fw-regular text-dark' : ''
								}`}
							>
								{moment(rangeDate[0].startDate).format('Do MMM YY')}
							</span>
							<span
								className={`ps-3 ${rangeDate.length > 0 ? 'fw-regular text-dark' : ''}`}
							>
								{moment(rangeDate[0].endDate).format('Do MMM YY')}
							</span>
						</div>
					) : (
						<div
							className='p-0 fw-regular text-nowrap text-600 my-2 ms-1'
							style={{ fontSize: '0.8em' }}
						>
							{singleDate ? (
								<p
									className={`mb-0 ${
										rangeDate.length > 0 ? 'fw-regular fs--1 text-dark' : ''
									}`}
								>
									{`${moment(singleDate).format('Do MMM  YY')}`}
								</p>
							) : (
								singleDateName
							)}
						</div>
					)}
				</div>
				<Modal
					size={IsRange && !Mobile ? 'xl' : 'lg'}
					show={show}
					fullscreen={fullscreen}
					onHide={(): void => {
						setShow(false)
						setIsActive(true)
					}}
				>
					<Modal.Header>
						<Modal.Title>
							<p className='mb-0 text-dark fs--1 fw-semi-bold'>
								{!IsRange &&
									`${singleDateName}:
               ${moment(singleDate).format('Do MMM  YY')}`}
								{IsRange &&
									`${startDateName}: ${moment(rangeDate[0].startDate).format(
										'MMM Do YY'
									)} - `}
								{IsRange &&
									`${endDateName}:
            ${moment(rangeDate[0].endDate).format('Do MMM  YY')}`}
							</p>
						</Modal.Title>
						<CloseButton
							className='btn btn-circle btn-sm transition-base p-0'
							onClick={(): void => {
								setShow(false)
								setIsActive(true)
							}}
						/>
					</Modal.Header>
					<Modal.Body className='bg-white'>
						<div className='d-flex align-items-center justify-content-center'>
							<DatePicker
								withFixedSelection={withFixedSelection}
								isMobile={Mobile}
								isRange={IsRange}
								rangeDate={rangeDate}
								setRangeDate={setRangeDate}
								singleDate={singleDate}
								setSingleDate={setSingleDate}
							/>
						</div>
						<div
							className={`d-flex ${
								Mobile ? 'justify-content-end mt-3' : 'justify-content-center mt-3'
							}`}
						>
							<Button
								className={Mobile ? 'w-50' : ''}
								onClick={(): void => {
									setShow(false)
									setIsActive(true)
								}}
							>
								Done
							</Button>
						</div>
					</Modal.Body>
				</Modal>
			</>
		)
	}

DatePickerFormElement.defaultProps = {
	withFixedSelection: true,
	singleDateName: 'Date',
	startDateName: 'Start Date',
	endDateName: 'End Date',
	noFormVisuals: false,
	icon: faCalendarDay,
	formHeight: undefined
}
export default DatePickerFormElement

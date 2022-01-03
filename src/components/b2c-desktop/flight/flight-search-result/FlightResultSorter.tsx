import React, { FC, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faInfoCircle,
	faLuggageCart,
	faShoppingBag
} from '@fortawesome/free-solid-svg-icons'
import Flex from '../../../common/utils/Flex'
import TimeSlider from '../../../common/range-slider/TimeSlider'
import CustomCollapse from '../../../common/collapse/CustomCollapse'

import Checkbox from '../../../common/check-box/Checkbox'
import {
	airportsFilter,
	stopsFilter,
	airportsAbuDhabiFilter,
	airportsLondonFilter
} from '../../../../data/b2c-desktop/flightShortFilterData'
import IncrementDecrementBtn from '../../../common/increment-decrement-button/IncrementDecrementBtn'

const FlightResultSorter: FC = function FlightResultSorter() {
	const [sliderValue, setSliderValue] = useState([])
	const [isLanding, setIsLanding] = useState('take-off')
	const [, setIsSelectAll] = useState(false)

	const [, setStops] = useState<Array<string>>([])
	const [, setAirports] = useState<Array<string>>([])
	const [, setAbuDhabi] = useState<Array<string>>([])
	const [, setLondon] = useState<Array<string>>([])

	const getWeekDays = (locale: string | string[]): string[] =>
		[...Array(7).keys()].map(v =>
			new Date(Date.UTC(1970, 0, 6 + v)).toLocaleDateString(locale, {
				weekday: 'long'
			})
		)

	const decrementSeatCount = (): void => undefined

	const incrementSeatCount = (): void => undefined

	return (
		<div className='d-flex flex-column text-nowrap'>
			<p className='fw-medium text-dark fs--1 mb-3'>
				<span className='fw-bold me-1'>99</span>of
				<span className='text-primary cursor-pointer fw-bold ms-1'>
					143 flights
				</span>
			</p>

			<div>
				<h6 className='fw-semi-bold fs-0'>Stops</h6>
				<Checkbox
					options={stopsFilter}
					selectedResult={setStops}
					onChange={(): void => {}}
				/>
			</div>

			<div className='mb-2'>
				<h6 className='fw-semi-bold fs-0'>Airports</h6>
				<Checkbox
					options={airportsFilter}
					selectedResult={setAirports}
					hr={false}
					onChange={(): void => {}}
				/>
			</div>
			<div className='mb-2'>
				<h6 className='fw-semi-bold fs-0'>Abu Dhabi</h6>
				<Checkbox
					options={airportsAbuDhabiFilter}
					selectedResult={setAbuDhabi}
					hr={false}
					onChange={(): void => {}}
				/>
			</div>

			<div>
				<h6 className='fw-semi-bold fs-0'>London</h6>
				<Checkbox
					options={airportsLondonFilter}
					selectedResult={setLondon}
					onChange={(): void => {}}
				/>
			</div>

			<div>
				<h6 className='fw-semi-bold fs-0'>
					Fee assistant
					<FontAwesomeIcon
						className='text-primary ms-2'
						icon={faInfoCircle}
						size='sm'
					/>
				</h6>

				<div className='fs--1 fw-medium d-flex justify-content-between mb-2'>
					<div className='d-flex'>
						<div style={{ width: '20px' }}>
							<FontAwesomeIcon className='me-1' icon={faShoppingBag} size='lg' />
						</div>
						<span className='ms-2'>Carry-on bag</span>
					</div>
					<IncrementDecrementBtn
						decrement={decrementSeatCount}
						increment={incrementSeatCount}
						btnSize={20}
						iconSize='xs'
					/>
				</div>

				<div className='fs--1 fw-medium d-flex justify-content-between'>
					<div className='d-flex'>
						<div style={{ width: '20px' }}>
							<FontAwesomeIcon icon={faLuggageCart} className='me-1' size='lg' />{' '}
						</div>
						<span className='ms-2'>Checked bag</span>
					</div>

					<IncrementDecrementBtn
						decrement={decrementSeatCount}
						increment={incrementSeatCount}
						btnSize={20}
						iconSize='xs'
					/>
				</div>
			</div>
			<hr className='mb-0' />

			<CustomCollapse title='Flexible options' initialState>
				<Checkbox
					options={airportsAbuDhabiFilter}
					selectedResult={setAbuDhabi}
					hrMb={false}
					onChange={(): void => {}}
				/>
			</CustomCollapse>

			<div className='mt-2'>
				<div className='d-flex justify-content-between mb-2'>
					<p className='fw-semi-bold fs-0 mb-0'>Times</p>
					<Button bsPrefix='btn p-0 box-shadow-none link-primary fs--1'>
						Reset
					</Button>
				</div>
				<ButtonGroup bsPrefix='btn-group w-100 h-38px'>
					<Button
						className='fs--1 box-shadow-none'
						onClick={(): void => setIsLanding('take-off')}
						variant={
							isLanding === 'take-off'
								? ' bg-primary text-white'
								: 'outline-secondary hover-bg-100 text-1100'
						}
					>
						Take-off
					</Button>
					<Button
						className='fs--1 box-shadow-none'
						onClick={(): void => setIsLanding('landing')}
						variant={
							isLanding === 'landing'
								? ' bg-primary text-white'
								: 'outline-secondary hover-bg-100 text-1100'
						}
					>
						Landing
					</Button>
				</ButtonGroup>
				{isLanding === 'take-off' ? (
					<div>
						<div className='mb-4'>
							<p className='mb-1 mt-2 text-800 fs--1 text-medium'>Take off from ZYL</p>
							<TimeSlider
								min={1}
								max={12}
								timeOrDuration='time'
								step={0.5}
								initial={[3, 7]}
								weekDays={getWeekDays('en-US')}
								sliderValue={sliderValue}
								onChange={(e): void => setSliderValue(e)}
							/>
						</div>
						<div>
							<p className='mb-1 mt-2 text-800 fs--1 text-medium'>Take off from NYC</p>
							<TimeSlider
								min={1}
								max={12}
								timeOrDuration='time'
								step={0.5}
								initial={[3, 7]}
								weekDays={getWeekDays('en-US')}
								sliderValue={sliderValue}
								onChange={(e): void => setSliderValue(e)}
							/>
						</div>
						<hr />
					</div>
				) : (
					<div>
						<div className='mb-4'>
							<p className='mb-1 mt-2 text-900 fs--1 text-medium'>
								Take Landing at ZYL
							</p>
							<TimeSlider
								min={1}
								max={12}
								timeOrDuration='time'
								step={0.5}
								initial={[3, 7]}
								weekDays={getWeekDays('en-US')}
								sliderValue={sliderValue}
								onChange={(e): void => setSliderValue(e)}
							/>
						</div>
						<div>
							<p className='mb-1 mt-2 text-900 fs--1 text-medium'>Landing at NYC</p>
							<TimeSlider
								min={1}
								max={12}
								timeOrDuration='time'
								step={0.5}
								initial={[3, 7]}
								weekDays={getWeekDays('en-US')}
								sliderValue={sliderValue}
								onChange={(e): void => setSliderValue(e)}
							/>
						</div>
						<hr />
					</div>
				)}
			</div>

			<div>
				<h6 className='fw-semi-bold fs-0'>Airlines</h6>
				<Flex className='mb-2'>
					<Button
						onClick={(): void => setIsSelectAll(true)}
						bsPrefix='btn p-0 box-shadow-none link-primary fs--1'
					>
						Select All
					</Button>
					<Button
						onClick={(): void => setIsSelectAll(false)}
						bsPrefix='btn p-0 box-shadow-none link-primary fs--1 ms-4'
					>
						Clear All
					</Button>
				</Flex>
				<Checkbox
					options={airportsLondonFilter}
					selectedResult={setLondon}
					onChange={(): void => {}}
				/>
			</div>

			<div>
				<h6 className='fw-semi-bold fs-0'>Duration</h6>
				<div className='mb-4'>
					<p className='mb-1 fs--1 mt-2 text-800 text-medium'>Flight leg</p>
					<TimeSlider
						min={10}
						max={50}
						step={1}
						initial={[3, 30]}
						timeOrDuration='duration'
						weekDays={getWeekDays('en-US')}
						sliderValue={sliderValue}
						onChange={(e): void => setSliderValue(e)}
					/>
				</div>
				<div>
					<p className='mb-1 fs--1 mt-2 text-800 text-medium'>Layover</p>
					<TimeSlider
						min={10}
						max={50}
						step={1}
						initial={[3, 30]}
						timeOrDuration='duration'
						weekDays={getWeekDays('en-US')}
						sliderValue={sliderValue}
						onChange={(e): void => setSliderValue(e)}
					/>
				</div>
			</div>
			<CustomCollapse title='Price'>
				<p>Content coming soon</p>
			</CustomCollapse>
		</div>
	)
}

export default FlightResultSorter

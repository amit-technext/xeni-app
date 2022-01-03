import React, { FC, HTMLAttributes, useEffect, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import classNames from 'classnames'
import MCustomCheckBox from '../../common/check-box/MCustomCheckBox'
import MTimeSlider from './MTimeSlider'
import MobileContainer from '../../../container/b2c-mobile/MobileContainer'
import { SortingDataType } from '../../../type/SortingDataType'

interface MFlightSearchResultSorterProps
	extends HTMLAttributes<HTMLOrSVGElement> {
	sortType: string
	callbackSort: () => void
	sortingData: SortingDataType
}

interface SortingDataProps extends HTMLAttributes<HTMLOrSVGElement> {
	sortingData: SortingDataType
	sortType: string
	selectAll: boolean
	show: boolean
}

const Cabin: FC<SortingDataProps> = function Cabin({
	sortingData,
	sortType,
	selectAll,
	show
}) {
	// eslint-disable-next-line no-console
	return (
		<div>
			{sortingData?.cabin.map((item, index) => (
				<ListGroup.Item key={item.type} className='d-flex justify-content-between'>
					<MCustomCheckBox
						type={item.type}
						id={index.toString()}
						label={item.value}
						name={sortType}
						check={selectAll}
						disable={item.disable}
						change={(): void => {}}
					/>
					<h6 className='mt-1 fs-0'>
						{item.amount} {item.currency}
					</h6>
				</ListGroup.Item>
			))}
		</div>
	)
}

const Aircraft: FC<SortingDataProps> = function Aircraft({
	sortingData,
	sortType,
	selectAll,
	show
}) {
	return (
		<div>
			{show &&
				sortingData.aircraft.map((item, index) => (
					<ListGroup.Item key={item.name}>
						<MCustomCheckBox
							type={item.type}
							id={index.toString()}
							label={
								<div>
									<img alt='h' src={item.img} style={{ width: '20px' }} /> {item.name}
								</div>
							}
							name={sortType}
							check={selectAll}
							disable={item.disable}
							change={(): string => ''}
						/>
					</ListGroup.Item>
				))}
		</div>
	)
}

const AirPort: FC<SortingDataProps> = function AirPort({
	sortingData,
	sortType,
	selectAll,
	show
}) {
	return (
		<div>
			{sortingData?.airports.map((item, index) => (
				<ListGroup.Item
					key={item.type}
					className='d-flex justify-content-between text-nowrap'
				>
					<MCustomCheckBox
						type={item.type}
						id={index.toString()}
						label={
							<p
								className={classNames('mb-0', {
									'w-75 text-truncate': item.destinations.length > 25
								})}
							>
								{item.destinations}
							</p>
						}
						name={sortType}
						check={selectAll}
						disable={item.disable}
						change={(): void => {}}
					/>
					<h6 className='mt-1 fs-0'>
						{item.amount} {item.currency}
					</h6>
				</ListGroup.Item>
			))}
		</div>
	)
}

const MFlightSearchResultSorter: FC<MFlightSearchResultSorterProps> =
	function MFlightSearchResultSorter({
		sortType,
		callbackSort,
		sortingData
	}: MFlightSearchResultSorterProps) {
		const [, setData] = useState('Best')
		const [selectAll, setSelectAll] = useState(false)
		const [show, setShow] = useState(true)
		const getWeekDays = (locale: string[]): string[] =>
			[...Array(7).keys()].map(v =>
				new Date(Date.UTC(1970, 0, 6 + v)).toLocaleDateString(locale, {
					weekday: 'long'
				})
			)
		const [sliderValue, setSliderValue] = useState<number[]>([])

		useEffect(() => {}, [Aircraft, show, AirPort, Cabin])

		return (
			<MobileContainer>
				{/* Sort */}
				{sortType === 'Sort' &&
					sortingData.sort.map((item, index) => (
						<div key={item.type}>
							<MCustomCheckBox
								type={item.type}
								id={index.toString()}
								label={item.value}
								name={sortType}
								check={!index}
								disable={item.disable}
								change={(d): void => setData(d)}
							/>
						</div>
					))}
				{/* Stop */}
				{sortType === 'Stops' &&
					sortingData.stops.map(stopData => (
						<div key={stopData.label}>
							{/* {console.log(stopData.label)} */}
							<h5 className='fs-0 text-800'>{stopData.label}</h5>
							{stopData.box.map(boxData => (
								// console.log('BoxData : ', boxData);
								<div key={boxData.type} className='d-flex justify-content-between'>
									<MCustomCheckBox
										type={boxData.type}
										id={boxData.type}
										label={boxData.value}
										name={stopData.label}
										check
										disable={boxData.disable}
										change={(): void => {}}
									/>
									<h6 className={`mt-2 pb-1 ${!boxData.disable && 'text-500'}`}>
										tk {boxData.amount}
									</h6>
								</div>
							))}
						</div>
					))}
				{/* Times */}
				{sortType === 'Times' && (
					<div>
						{sortingData.times.map(timesData => (
							<div key={timesData.label}>
								<h6 className='fs-0'>{timesData.label}</h6>
								{timesData.info.map(times => (
									<div key={times.place}>
										<div className='d-flex justify-content-between'>
											<h6 className='text-700 fs--1'>
												{`${times.place} `}{' '}
												<b className='fw-black fs--1'>{times.country}</b>
											</h6>
											<h6 className='text-700 fs--1'>
												{times.currency}-{times.amount}
											</h6>
										</div>
										<div>
											<MTimeSlider
												min={1}
												max={12}
												timeOrDuration='time'
												step={0.5}
												initial={[times.timeStart, times.timeEnd]}
												weekDays={getWeekDays(['en-US'])}
												sliderValue={sliderValue}
												onChange={(e): void => setSliderValue(e)}
											/>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				)}
				{/* Fee assistant */}
				{sortType === 'Fees' && (
					<div>
						<h5>{sortingData.fee.label}</h5>
						<h6 className='fs--1 mt-1'>{sortingData.fee.about}</h6>
						<div className='mt-2'>
							{sortingData.fee.info.map(item => (
								<div key={item.type}>
									<MCustomCheckBox
										type={item.type}
										id={item.type}
										label={item.bankName}
										name={sortType}
										check={false}
										disable={item.disable}
										change={(): void => {}}
									/>
								</div>
							))}
						</div>
					</div>
				)}
				{/* cabin */}
				{sortType === 'Cabin' && (
					<div>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<MCustomCheckBox
									type='checkbox'
									id='1'
									label='Select All'
									name={sortType}
									check={selectAll}
									disable
									change={(d): void => setSelectAll(d)}
								/>
							</ListGroup.Item>
							<Cabin
								show={false}
								sortType={sortType}
								sortingData={sortingData}
								selectAll={selectAll}
							/>
						</ListGroup>
					</div>
				)}
				{sortType === 'Aircraft' && (
					<div>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<MCustomCheckBox
									type='checkbox'
									id='1'
									label='Select All'
									name={sortType}
									check={selectAll}
									disable
									change={(d): void => setSelectAll(d)}
								/>
							</ListGroup.Item>
						</ListGroup>
						<div className='d-flex justify-content-between'>
							<h5>Show Alliances</h5>
							<MCustomCheckBox
								type='switch'
								id='1'
								label='Select All'
								name={sortType}
								check={show}
								disable
								change={(d): void => setShow(d)}
							/>
						</div>
						<ListGroup variant='flush'>
							<Aircraft
								show={false}
								selectAll={selectAll}
								sortType={sortType}
								sortingData={sortingData}
							/>
						</ListGroup>
					</div>
				)}
				{/* airport */}
				{sortType === 'Airports' && (
					<div>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<MCustomCheckBox
									type='checkbox'
									id='1'
									label='Select All'
									name={sortType}
									check={selectAll}
									disable
									change={(d): void => setSelectAll(d)}
								/>
							</ListGroup.Item>
							<AirPort
								show={false}
								selectAll={selectAll}
								sortType={sortType}
								sortingData={sortingData}
							/>
						</ListGroup>
					</div>
				)}
				{/* price */}
				{sortType === 'Price' && (
					<div>
						{sortingData.price.map(item => (
							<div key={item.steps}>
								<div>
									<h5> {item.perPerson}</h5>
								</div>
								<div className='d-flex '>
									Average price is {item.currency}:<b>{item.averagePrice}</b>
								</div>
								<div className='mb-3'>
									<MTimeSlider
										min={item.min}
										max={item.max}
										timeOrDuration='money'
										step={item.steps}
										initial={item.range}
										weekDays={item.currency}
										sliderValue={sliderValue}
										onChange={(e): void => setSliderValue(e)}
									/>
								</div>
							</div>
						))}
					</div>
				)}
				{/* duration */}
				{sortType === 'Duration' &&
					sortingData.duration.map(item => (
						<div key={item.label} className='mb-3'>
							<h5 className='fs-1 mb-2'>{item.label}</h5>
							<h6>Flight leg</h6>
							<MTimeSlider
								min={item.min}
								max={item.max}
								timeOrDuration='money'
								step={item.steps}
								initial={item.flightLeg}
								weekDays='h'
								sliderValue={sliderValue}
								onChange={(e): void => setSliderValue(e)}
							/>
							<h6>Stop Over</h6>
							<MTimeSlider
								min={item.min}
								max={item.max}
								timeOrDuration='money'
								step={item.steps}
								initial={item.stopOver}
								weekDays='h'
								sliderValue={sliderValue}
								onChange={(e): void => setSliderValue(e)}
							/>
							<hr />
						</div>
					))}
				{/* Quality */}

				{sortType === 'Quality' && (
					<ListGroup variant='flush'>
						{sortingData.quality.map((item, index) => (
							<ListGroup.Item key={item.type}>
								<MCustomCheckBox
									type={item.type}
									id={index.toString()}
									label={item.value}
									name={sortType}
									check={false}
									disable={item.disable}
									change={(): void => {}}
								/>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
				<div className='d-flex justify-content-center'>
					<Button onClick={(): void => callbackSort()}>Done</Button>
				</div>
			</MobileContainer>
		)
	}

export default MFlightSearchResultSorter

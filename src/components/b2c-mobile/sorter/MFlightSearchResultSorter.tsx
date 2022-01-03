import React, { FC, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import Radio from 'components/common/input/Radio'
import MCustomCheckBox from '../../common/check-box/MCustomCheckBox'
import MTimeSlider from './MTimeSlider'
import MobileContainer from '../../../container/b2c-mobile/MobileContainer'
import sortingData from '../../../data/b2c-mobile/sortingData'

interface MFlightSearchResultSorterProps
	extends React.HTMLAttributes<HTMLOrSVGElement> {
	sortType: string
	// callbackSort: (data: string) => void
}

const MFlightSearchResultSorter: FC<MFlightSearchResultSorterProps> =
	function MFlightSearchResultSorter(props) {
		const { sortType } = props
		const [, setData] = useState('Best')
		const [selectAll, setSelectAll] = useState(false)
		const [show, setShow] = useState(true)

		const getWeekDays = (locale: string): string[] =>
			[...Array(7).keys()].map(v =>
				new Date(Date.UTC(1970, 0, 6 + v)).toLocaleDateString(locale, {
					weekday: 'long'
				})
			)

		const [sliderValue, setSliderValue] = useState<number[]>([])

		return (
			<MobileContainer>
				{/* Sort */}
				{
					sortType === 'Sort' && (
						<Radio
							horizontal={false}
							options={sortingData.sort}
							defaultCheck='Best'
							getResult={(d): void => setData(d)}
						/>
					)
					// sortingData.sort.map((item, index) => (
					// 	<div key={index.toString()}>
					// 		<MCustomCheckBox
					// 			type={item.type}
					// 			id={index.toString()}
					// 			label={item.value}
					// 			name={sortType}
					// 			check={!index}
					// 			disable={item.disable}
					// 			change={(d): void => setData(d)}
					// 		/>
					// 	</div>
					// )
					// )
				}
				{/* Stop */}
				{sortType === 'Stops' &&
					sortingData.stops.map((stopData, index) => (
						<div key={index.toString()}>
							<h5 className='fs-0 text-800'>{stopData.label}</h5>
							{stopData.box.map((boxData, i) => (
								<div key={i.toString()} className='d-flex justify-content-between'>
									<MCustomCheckBox
										type={boxData.type}
										id={i.toString()}
										label={boxData.value}
										name={stopData.label}
										check={!i}
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
						{sortingData.times.map((timesData, index) => (
							<div key={index.toString()}>
								<h6 className='fs-0'>{timesData.label}</h6>
								{timesData.info.map((times, i) => (
									<div key={i.toString()}>
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
												weekDays={getWeekDays('en-US')}
												sliderValue={sliderValue}
												onChange={(e: number[]): void => setSliderValue(e)}
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
							{sortingData.fee.info.map((item, index) => (
								<div key={index.toString()}>
									<MCustomCheckBox
										type={item.type}
										id={index.toString()}
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
							{/* <Cabin /> */}
						</ListGroup>
					</div>
				)}
				{/* aircraft */}
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
						</ListGroup>
					</div>
				)}
				{/* price */}
				{sortType === 'Price' && (
					<div>
						{sortingData.price.map((item, index) => (
							<div key={index.toString()}>
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
					sortingData.duration.map((item, index) => (
						<div key={index.toString()} className='mb-3'>
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
							<ListGroup.Item key={index.toString()}>
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
				{/* <div className='d-flex justify-content-center'>
					<Button onClick={(): void => callbackSort(data)}>Done</Button>
				</div> */}
			</MobileContainer>
		)
	}

export default MFlightSearchResultSorter

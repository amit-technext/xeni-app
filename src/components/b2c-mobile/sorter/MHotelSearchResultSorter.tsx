/* eslint-disable no-console */
import React, { FC, useEffect, useState } from 'react'
import { Form, ListGroup } from 'react-bootstrap'
import {
	faHeart,
	faSearch,
	faStar,
	faTrophy
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { nanoid } from 'nanoid'
import RatingForFilter from '../../common/rating/RatingForFilter'
import MTimeSlider from './MTimeSlider'
import CustomChecksBox from '../../common/check-box/CustomCheckBox'
import sortingData from '../../../data/b2c-mobile/sortingData'
import Radio from '../../common/input/Radio'
import CustomRating from './CustomRating'
import Discount from './Discount'

interface MHotelSearchResultSorterProps {
	sortType: string
}

const MHotelSearchResultSorter: FC<MHotelSearchResultSorterProps> =
	function MHotelSearchResultSorter(props) {
		const { sortType } = props
		const [hotelClass, setHotelClass] = useState(5)
		const [, setData] = useState<any>('Best')
		const [selectAllPromo, setSelectAllPromo] = useState<boolean>(false)
		const [show] = useState<boolean>(true)
		const [discountData, setDiscountData] = useState(sortingData.offer.discounts)
		const [promoData, setPromoData] = useState(sortingData.offer.promos)
		const [healthAndSafety, setHealthAndSafety] = useState(true)
		const [sliderValue] = useState<number[]>(sortingData.hotelPrice[0].range)
		const [closeToSearch, setCloseToSearch] = useState<string>('')
		const [selectAllDiscount, setSelectAllDiscount] = useState(false)
		useEffect(() => {}, [show])
		const [star, setStar] = useState(1)
		const [cssIndex, setCssIndex] = useState('All')
		const [changeOneTime, setChangeOneTime] = useState(true)

		return (
			<div>
				{/* hotel price */}
				{sortType === 'Price' && (
					<div className='mb-3'>
						{sortingData.hotelPrice.map((item, index) => (
							<div key={nanoid() + index.toString()}>
								<div className='mb-3'>
									<MTimeSlider
										min={item.min}
										max={item.max}
										timeOrDuration='money'
										step={item.steps}
										initial={item.range}
										weekDays={item.currency}
										sliderValue={sliderValue}
										onChange={(valueArr): void => {
											console.log(sliderValue, valueArr)
										}}
									/>
								</div>
							</div>
						))}
					</div>
				)}
				{sortType === 'Offers' && (
					<div>
						<Discount
							data={discountData}
							setData={setDiscountData}
							selectAll={selectAllDiscount}
							setSelectAll={setSelectAllDiscount}
						/>
						<Discount
							data={promoData}
							setData={setPromoData}
							selectAll={selectAllPromo}
							setSelectAll={setSelectAllPromo}
						/>
					</div>
				)}
				{sortType === 'Chain Name' &&
					sortingData.hotelChainName.map(item => (
						<CustomChecksBox
							key={item.id}
							type={item.type}
							id={item.id}
							label={item.value}
							name={sortType}
							check={item.select}
							disable={item.disable}
							change={(d): void => {
								setData(d)
								console.log('sort data', d)
							}}
						/>
					))}
				{sortType === 'Accommodation Type' &&
					sortingData.HotelAccommodationType.map(item => (
						<CustomChecksBox
							key={item.id}
							type={item.type}
							id={item.id}
							label={item.value}
							name={sortType}
							check={item.select}
							disable={item.disable}
							change={(d): void => {
								setData(d)
								console.log('sort data', d)
							}}
						/>
					))}
				{sortType === 'Customer reviews' && (
					<CustomRating star={star} setStar={setStar} setData={setData} />
				)}
				{sortType === 'Establishment profile' &&
					sortingData.EstablishmentProfile.map((item, index) => (
						<div
							key={index.toString()}
							className='d-flex justify-content-between w-100'
						>
							<CustomChecksBox
								type={item.type}
								id={item.id}
								label={item.value}
								name='Establishment profile'
								check={item.select}
								disable={item.disable}
								change={(d): void => {
									setData(d)
									console.log('sort data', d)
								}}
							/>
							{/* <label htmlFor={item.id}>{item.price}</label> */}
						</div>
					))}
				{sortType === 'Close to' && (
					<>
						<div className='mb-3 d-flex border px-3 py-1 rounded-1'>
							<div className='pt-0.5 pe-2'>
								<FontAwesomeIcon icon={faSearch} />
							</div>
							<div>
								<input
									className='w-100 border-0 outline-none'
									placeholder='Street, airport ...'
									onChange={(e): void => {
										setCloseToSearch(e.target.value)
									}}
								/>
							</div>
						</div>
						<div>
							{sortingData.closeTo.map(
								(item, index) =>
									item.match(closeToSearch) != null && (
										<div
											onKeyDown={(): void => {
												setChangeOneTime(false)
												setData(item)
												setCssIndex(item)
											}}
											tabIndex={0}
											role='button'
											className={`mb-1 py-2 px-1 mx-2 hover-bg-200 rounded-3 ${
												(cssIndex === item || (changeOneTime && index === 0)) &&
												closeToSearch === '' &&
												'bg-200'
											}`}
											key={index.toString()}
											onClick={(): void => {
												setChangeOneTime(false)
												setData(item)
												setCssIndex(item)
											}}
										>
											{item}
										</div>
									)
							)}
						</div>
					</>
				)}
				{sortType === 'Zone' &&
					sortingData.hotelZone.map(item => (
						<div key={item.id}>
							<div
								onKeyDown={(): void => {
									setData(item.lable)
									setCssIndex(item.lable)
								}}
								tabIndex={0}
								role='button'
								className={`btn w-100 text-start mb-1 fw-semi-bold py-2 px-2 mx-2 hover-bg-200 rounded-3 ${
									cssIndex === item.lable && 'bg-200'
								}`}
								onClick={(): void => {
									setData(item.lable)
									setCssIndex(item.lable)
								}}
							>
								{item.lable}
							</div>
							{item.subList && (
								// <SubListItem listTitle={item.lable} list={item.subListItems} />
								<div className='ms-4'>
									{item.subListItems.map((itemData, i) => (
										<div
											onKeyDown={(): void => {
												setData(itemData)
												setCssIndex(itemData)
											}}
											tabIndex={0}
											role='button'
											key={i.toString()}
											className={`btn w-100 text-start py-1 mx-2 my-1 px-2 hover-bg-200 rounded-3
                      ${cssIndex === item.lable && 'text-success'}
                         ${cssIndex === itemData && 'bg-200 text-success'}`}
											onClick={(): void => {
												setData(itemData)
												setCssIndex(itemData)
											}}
										>
											{itemData}
										</div>
									))}
								</div>
							)}
						</div>
					))}
				{sortType === 'Health and safety' && (
					<div className='row'>
						<div className='col-10 pe-0'>
							<p className='fs--1'>
								Only show stays with enhanced health and safety measures
							</p>
						</div>
						<div className='col-2'>
							<CustomChecksBox
								type='switch'
								id='1'
								label=''
								name='H&S'
								check={healthAndSafety}
								disable
								change={(d, b): void => {
									setHealthAndSafety(b)
									console.log('offer : ', d, b)
								}}
							/>
						</div>
					</div>
				)}
				{sortType === 'Cancellation fees' &&
					sortingData.cancellationFee.map(item => (
						<CustomChecksBox
							key={item.id}
							type={item.type}
							id={item.id}
							label={item.value}
							name='CancellationFees'
							check={item.select}
							disable={item.disable}
							change={(d, b): void => {
								setData(b)
							}}
						/>
					))}
				{sortType === 'Board' &&
					sortingData.hotelBoard.map(item => (
						<div key={item.id}>
							<CustomChecksBox
								type={item.type}
								id={item.id}
								label={item.value}
								name='Board'
								check={item.select}
								disable={item.disable}
								change={(d, b): void => {
									setData(b)
								}}
							/>
						</div>
					))}
				{sortType === 'Top Hotels' && (
					<div>
						<Form.Check
							type='checkbox'
							id='f1'
							label={
								<>
									&nbsp;
									<FontAwesomeIcon icon={faTrophy} />
									&nbsp; Only Top Hotels
								</>
							}
							name='Favorites'
							defaultChecked={false}
							disabled={false}
							onClick={(): void => setData('Favorites')}
						/>
					</div>
				)}
				{sortType === 'Favorites' && (
					<div>
						<Form.Check
							type='checkbox'
							id='f1'
							label={
								<>
									&nbsp;
									<FontAwesomeIcon icon={faHeart} />
									&nbsp; Only Faborites
								</>
							}
							name='Favorites'
							defaultChecked={false}
							disabled={false}
							onClick={(): void => setData('Favorites')}
						/>
					</div>
				)}

				{/* hotel price */}
				{sortType === 'Category' && (
					<div className='d-flex justify-content-center mt-0 pt-0 mb-5'>
						{Array.from({ length: star }, (_, i) => i + 1).map(item => (
							<FontAwesomeIcon
								key={item}
								onClick={(): void => {
									setStar(item)
									setData(item.toString())
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
									setData(item.toString())
								}}
								icon={faStar}
								size='xs'
								className='text-secondary mr-5 ms-2  fs-4'
							/>
						))}
					</div>
				)}

				{/* recommanded filters */}
				{sortType === 'Recommanded filters' &&
					sortingData.recommendedFilters.map((item, index) => (
						<div key={nanoid() + index.toString()}>
							<CustomChecksBox
								type={item.type}
								id={index.toString()}
								label={item.value}
								name={sortType}
								check={!index}
								disable={item.disable}
								// change={d => setData(d)}
								change={(d): void => {
									setData(d)
									// console.log('sort data', d)
								}}
							/>
						</div>
					))}
				{/* Sort */}
				{sortType === 'Sort' && (
					<Radio
						horizontal={false}
						options={sortingData.hotelSort}
						defaultCheck='Best'
						getResult={(d): void => setData(d)}
					/>
				)}
				{/* freebies */}
				{sortType === 'Freebies' && (
					<ListGroup variant='flush'>
						{sortingData.freebies.map((item, index) => (
							<ListGroup.Item
								key={nanoid() + index.toString()}
								className='d-flex justify-content-between pb-0 pt-2 mt-1'
							>
								<CustomChecksBox
									type={item.type}
									id={index.toString()}
									label={item.value}
									name={sortType}
									check={item.select as boolean}
									disable={item.disable}
									// change={d => setData(d)}
									change={(): void => {}}
								/>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
				{/* Amenities */}
				{sortType === 'Amenities' && (
					<ListGroup variant='flush'>
						{sortingData.hotelAmenities.map((item, index) => (
							<ListGroup.Item
								key={nanoid() + index.toString()}
								className='d-flex justify-content-between mt-2'
							>
								<CustomChecksBox
									type={item.type}
									id={item.id}
									label={item.value}
									name='Board'
									check={item.select}
									disable={item.disable}
									change={(d, b): void => {
										setData(b)
									}}
								/>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}

				{/* Hotel Name  */}
				{sortType === 'Hotel Name' && (
					<div className='mb-3 d-flex border px-3 py-1 rounded-1'>
						<div className='pt-0.5 pe-2'>
							<FontAwesomeIcon icon={faSearch} />
						</div>
						<div>
							<input
								className='w-100 border-0 outline-none'
								placeholder=' Hotel Name'
							/>
						</div>
					</div>
				)}
				{/* hotel class */}
				{sortType === 'Hotel class' && (
					<div>
						<RatingForFilter
							selected={hotelClass}
							getSelectedResult={setHotelClass}
							hr
						/>
					</div>
				)}
				{/* Stop */}
				{sortType === 'stops' &&
					sortingData.stops.map((stopData, index) => (
						<div key={nanoid() + index.toString()}>
							{/* {console.log(stopData.label)} */}
							<h5 className='fs-0 text-800'>{stopData.label}</h5>
							{stopData.box.map((boxData, i) => (
								// console.log('BoxData : ', boxData);
								<div
									key={nanoid() + i.toString()}
									className='d-flex justify-content-between'
								>
									<CustomChecksBox
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

				{/* Fee assistant */}
				{sortType === 'fees' && (
					<div>
						<h5>{sortingData.fee.label}</h5>
						<h6 className='fs--1 mt-1'>{sortingData.fee.about}</h6>
						<div className='mt-2'>
							{sortingData.fee.info.map((item, index) => (
								<div key={nanoid() + index.toString()}>
									<CustomChecksBox
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

				{/* Quality */}

				{sortType === 'quality' && (
					<ListGroup variant='flush'>
						{sortingData.quality.map((item, index) => (
							<ListGroup.Item key={nanoid() + index.toString()}>
								<CustomChecksBox
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
				{/* <div className='d-flex justify-content-center mt-2'>
					<Button className='w-100' onClick={(): any => callbackSort(data)}>
						Done
					</Button>
				</div> */}
			</div>
		)
		// return <div>{sortType === 'best' ? <div>I am best</div> : 'something'}</div>;
	}

export default MHotelSearchResultSorter

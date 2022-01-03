import React, { FC, useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import {
	amenitiesFilter,
	freebiesFilter,
	hotelPriceBase,
	recommendedFilter
} from 'data/b2c-desktop/hotelShortFilterData'
import { useAppDispatch } from 'hooks/useReduxState'
import { setHotelMapView } from 'features/context/contextSlice'
import RatingForFilter from 'components/common/rating/RatingForFilter'
import Checkbox from '../../../common/check-box/Checkbox'
import SelectCustom from '../../../common/select/SelectCustom'
import PriceSlider from '../../../common/range-slider/PriceSlider'
import CustomCollapse from '../../../common/collapse/CustomCollapse'
import hotelMap from '../../../../assets/img/hotel/hotel-map.png'

const HotelResultSorter: FC = function HotelResultSorter() {
	const dispatch = useAppDispatch()

	const [sliderValue, setSliderValue] = useState<Array<string>>([])
	const [, setRecommended] = useState<Array<string>>([])
	const [, setFreebies] = useState<Array<string>>([])
	const [, setAmenities] = useState<Array<string>>([])
	const [hotelClass, setHotelClass] = useState(5)
	const [selectedPriceBase, setSelectedPriceBase] =
		useState('night_base_price_2')

	return (
		<div className='d-flex flex-column text-nowrap'>
			<div className='rounded-3 overflow-hidden position-relative mb-3'>
				<img src={hotelMap} alt='map' className='img-fluid' />
				<Button
					variant='dark'
					className='position-absolute top-50 start-50 translate-middle'
					onClick={(): any => dispatch(setHotelMapView(true))}
				>
					Go to map
				</Button>
			</div>
			{/* <hr /> */}
			<CustomCollapse title='Recommended filters' initialState>
				<Checkbox
					options={recommendedFilter}
					selectedResult={setRecommended}
					hrMb={false}
					onChange={(): void => {}}
				/>
			</CustomCollapse>

			<CustomCollapse title='Hotel class' initialState>
				<RatingForFilter
					selected={hotelClass}
					getSelectedResult={setHotelClass}
					hr
					hrMb={false}
				/>
			</CustomCollapse>

			<CustomCollapse title='Price' initialState>
				<PriceSlider
					min={0}
					max={1000}
					step={1}
					initial={[100, 750]}
					sliderValue={sliderValue}
					onChange={(e): void => setSliderValue(e)}
				/>
				<SelectCustom
					options={hotelPriceBase}
					gerResult={setSelectedPriceBase}
					selected={selectedPriceBase}
					className='mt-3 fs--1 h-38px bg-transparent'
					hrMb={false}
				/>
			</CustomCollapse>

			<CustomCollapse title='Freebies' initialState>
				<Checkbox
					options={freebiesFilter}
					selectedResult={setFreebies}
					hrMb={false}
					onChange={(): void => {}}
				/>
			</CustomCollapse>
			<CustomCollapse title='Health and safety' initialState>
				<div className='d-flex'>
					<p className='fs--1 fw-normal' style={{ whiteSpace: 'break-spaces' }}>
						Only show stays with enhanced health and safety measures
					</p>

					<Form.Check
						type='switch'
						bsSwitchPrefix='form-switch custom-form-switch ps-0'
						id='custom-switch'
					/>
				</div>
				<hr className='my-0' />
			</CustomCollapse>

			<CustomCollapse title='Property name' initialState>
				<InputGroup className='mb-3'>
					<InputGroup.Text className='bg-100 border-end-0 border-200'>
						<FontAwesomeIcon icon={faSearch} size='sm' />
					</InputGroup.Text>
					<FormControl
						placeholder='Property name'
						className='border-start-0 shadow-none fs--1 border-200 px-3 bg-transparent h-38px'
					/>
				</InputGroup>
				<hr className='mb-0' />
			</CustomCollapse>

			<CustomCollapse title='Amenities'>
				<Checkbox
					hr={false}
					options={amenitiesFilter}
					selectedResult={setAmenities}
					onChange={(): void => {}}
				/>
			</CustomCollapse>
		</div>
	)
}

export default HotelResultSorter

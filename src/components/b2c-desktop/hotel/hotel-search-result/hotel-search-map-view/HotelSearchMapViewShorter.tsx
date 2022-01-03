import { Button, Card } from 'react-bootstrap'
import React, { FC, useState } from 'react'
import { useAppDispatch } from 'hooks/useReduxState'
import { setHotelMapView } from 'features/context/contextSlice'
import RatingForFilter from 'components/common/rating/RatingForFilter'
import Flex from '../../../../common/utils/Flex'
import SelectCustom from '../../../../common/select/SelectCustom'
import hotelMap from '../../../../../assets/img/hotel/hotel-map.png'
import PriceSlider from '../../../../common/range-slider/PriceSlider'
import { moreFilterOnMapView } from '../../../../../data/b2c-desktop/hotelShortFilterData'
import {
	CalenderCross,
	CoffeeCup,
	P,
	PlainRounded,
	WiFi
} from '../../../../../assets/icons'

const filterButtons = [
	{ id: 1, icon: CalenderCross, value: 'test' },
	{ id: 12, icon: CoffeeCup, value: 'test' },
	{ id: 11, icon: PlainRounded, value: 'test' },
	{ id: 13, icon: WiFi, value: 'test' },
	{ id: 14, icon: P, value: 'test' }
]

const HotelSearchMapViewShorter: FC = function HotelSearchMapViewShorter() {
	const dispatch = useAppDispatch()

	const [hotelClass, setHotelClass] = useState<number>(5)
	const [sliderValue, setSliderValue] = useState<[]>([])
	const [selectedPriceBase, setSelectedPriceBase] = useState<string>('')

	return (
		<Card className='p-3 flex-lg-row mt-3 justify-content-between align-items-center'>
			<div className='rounded-3 overflow-hidden position-relative mb-3 mb-lg-0'>
				<img
					src={hotelMap}
					alt='map'
					className='img-fluid'
					style={{ height: '80px', width: '235px' }}
				/>
				<Button
					variant='dark'
					className='position-absolute top-50 start-50 translate-middle w-fit'
					onClick={(): any => dispatch(setHotelMapView(false))}
				>
					Back to list
				</Button>
			</div>

			<div className='w-fit mb-3 mb-lg-0'>
				<p className='fs-0 fw-semi-bold text-800 mb-2'>Hotel class</p>
				<RatingForFilter
					selected={hotelClass}
					getSelectedResult={setHotelClass}
					hr={false}
				/>
			</div>

			<div style={{ width: '199px' }} className='mb-3 mb-lg-0'>
				<p className='fs-0 fw-semi-bold text-800 mb-2'>Price</p>
				<PriceSlider
					min={0}
					max={1000}
					step={1}
					initial={[100, 750]}
					sliderValue={sliderValue}
					onChange={(e): void => setSliderValue(e)}
				/>
			</div>
			<div className='w-fit mb-3 mb-lg-0'>
				<p className='fs-0 fw-semi-bold text-800 mb-2'>Freebies</p>
				<Flex>
					{filterButtons?.map(item => (
						<div
							key={item.id}
							className='rounded-3 hotelSearchMapShortButton me-2 last-me-0'
						>
							<item.icon />
						</div>
					))}
				</Flex>
			</div>

			<div className='w-fit'>
				<SelectCustom
					options={moreFilterOnMapView}
					gerResult={setSelectedPriceBase}
					selected={selectedPriceBase}
					className='mt-3 fs--1 h-38px bg-transparent'
					hr={false}
				/>
			</div>
		</Card>
	)
}

export default HotelSearchMapViewShorter

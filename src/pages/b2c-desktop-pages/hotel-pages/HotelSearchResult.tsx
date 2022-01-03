import React, { FC, useEffect, useState } from 'react'
import hotelSearchResult from 'data/b2c-desktop/hotelSearchData'
import { useAppSelector } from 'hooks/useReduxState'
import { IHotelSearchProps } from 'interface/IHotelProps'
import HotelCompare from '../../../components/b2c-desktop/hotel/hotel-compare/HotelCompare'
import DesktopResultSearchLayout from '../../../container/b2c-desktop/DesktopResultSearchLayout'
import HotelBookingFormWidget from '../../../components/b2c-desktop/hotel/hotel-forms/HotelBookingFormWidget'
import { removeSelectedHotelHandler } from '../../../services/hotel/hotelCompareFunctions'
import HotelSearchResultGenerator from '../../../components/b2c-desktop/hotel/hotel-search-result/HotelSearchResultGenerator'
import HotelSearchMapViewGenerator from '../../../components/b2c-desktop/hotel/hotel-search-result/hotel-search-map-view/HotelSearchMapViewGenerator'

const HotelSearchResult: FC = function HotelSearchResult() {
	const { hotelMapView } = useAppSelector(state => state.context)

	const dayCount = 9
	const [selectedHotel, setSelectedHotel] = useState<IHotelSearchProps[]>([])

	// add a class for padding bottom on footer when hotel compare is available
	useEffect(() => {
		const footer = document?.getElementsByTagName('footer')
		if (selectedHotel?.length > 0) {
			footer[0]?.classList?.add('footerPBIfCompare')
		} else {
			footer[0]?.classList?.remove('footerPBIfCompare')
		}
	}, [selectedHotel])

	return (
		<>
			{hotelMapView ? (
				<HotelSearchMapViewGenerator
					hotelSearchResult={hotelSearchResult}
					selectedHotel={selectedHotel}
					setSelectedHotel={setSelectedHotel}
					dayCount={dayCount}
				/>
			) : (
				<DesktopResultSearchLayout
					searchWidget={<HotelBookingFormWidget />}
					searchResult={
						<HotelSearchResultGenerator
							hotelSearchResult={hotelSearchResult}
							selectedHotel={selectedHotel}
							setSelectedHotel={setSelectedHotel}
							dayCount={dayCount}
						/>
					}
				/>
			)}

			<HotelCompare
				selectedHotels={selectedHotel}
				dayCount={dayCount}
				removeHotel={(id): void =>
					removeSelectedHotelHandler(id, selectedHotel, setSelectedHotel)
				}
			/>
		</>
	)
}

export default HotelSearchResult

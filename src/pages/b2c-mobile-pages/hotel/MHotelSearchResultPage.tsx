import React, { FC } from 'react'
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons'
import MobileContainer from 'container/b2c-mobile/MobileContainer'
import MSortingMenu from 'components/b2c-mobile/sorter/MSortingMenu'
import HotelSearchResultCard from 'components/b2c-mobile/hotel/hotel-search-result/HotelSearchResultCard'
import hotelSearchResult from 'data/b2c-desktop/hotelSearchData'
import MCart from 'components/b2c-mobile/cart/MCart'

const MHotelSearchResult: FC = function MHotelSearchResult() {
	const sortingOptions = [
		{ type: 'Sort', icon: faSortAmountDown },
		{ type: 'Favorites' },
		{ type: 'Hotel Name' },
		{ type: 'Board' },
		{ type: 'Category' },
		{ type: 'Map' },
		{ type: 'Price' },
		{ type: 'Cancellation fees' },
		{ type: 'Health and safety' },
		{ type: 'Amenities' },
		{ type: 'Top Hotels' },
		{ type: 'Offers' },
		{ type: 'Zone' },
		{ type: 'Close to' },
		{ type: 'Establishment profile' },
		{ type: 'Customer reviews' },
		{ type: 'Accommodation Type' },
		{ type: 'Chain Name' }
	]

	return (
		<MobileContainer
			menu={<MSortingMenu sortingOptions={sortingOptions} module='Hotel' />}
			bodyBg='bg-100'
		>
			<HotelSearchResultCard searchResult={hotelSearchResult} />
			<MCart />
		</MobileContainer>
	)
}

export default MHotelSearchResult

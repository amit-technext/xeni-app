import React, { FC } from 'react'
import flightResultData from 'data/b2c-mobile/flightSearchData'
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons'
import MSortingMenu from '../../../components/b2c-mobile/sorter/MSortingMenu'
import MFlightSearchResult from '../../../components/b2c-mobile/flight/search-result/MFlightSearchResult'
import MobileContainer from '../../../container/b2c-mobile/MobileContainer'
import MCart from '../../../components/b2c-mobile/cart/MCart'
import { SortType } from '../../../type/Sort'

const sortingOptions: SortType[] = [
	{ type: 'Sort', icon: faSortAmountDown },
	{ type: 'Stops' },
	{ type: 'Times' },
	{ type: 'Duration' },
	{ type: 'Quality' },
	{ type: 'Price' },
	{ type: 'Airports' },
	{ type: 'Cabin' },
	{ type: 'Aircraft' },
	{ type: 'Fees' }
]

const MAirTravelSearchResultPage: FC = function MAirTravelSearchResultPage() {
	return (
		<MobileContainer
			menu={<MSortingMenu sortingOptions={sortingOptions} module='Flight' />}
		>
			{flightResultData.map(item => (
				<MFlightSearchResult key={item.id} flightResultDataMap={item} />
			))}
			<MCart />
		</MobileContainer>
	)
}

export default MAirTravelSearchResultPage

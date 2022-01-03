import React, { FC } from 'react'
import MobileContainer from 'container/b2c-mobile/MobileContainer'
import MCarSearchResult from 'components/b2c-mobile/car/search-result/MCarSearchResult'
import cars from 'data/b2c-desktop/SearchCarData'
import MSortingMenu from 'components/b2c-mobile/sorter/MSortingMenu'
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons'
import MCart from 'components/b2c-mobile/cart/MCart'

const MCarSearchResultPage: FC = function MCarSearchResultPage() {
	const sortingOptions = [
		{ type: 'Sort', icon: faSortAmountDown },
		{ type: 'Car type' },
		{ type: 'Capacity' },
		{ type: 'Policies' },
		{ type: 'Rental agency' },
		{ type: 'Total price' },
		{ type: 'Car Features' }
	]
	return (
		<MobileContainer
			menu={<MSortingMenu sortingOptions={sortingOptions} module='Cars' />}
		>
			<MCarSearchResult searchResult={cars} />
			<MCart />
		</MobileContainer>
	)
}

export default MCarSearchResultPage

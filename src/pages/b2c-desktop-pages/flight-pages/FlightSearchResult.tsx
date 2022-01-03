import React, { FC, HTMLAttributes } from 'react'
import { multiCity } from 'data/b2c-desktop/searchResultData'
import DesktopResultSearchLayout from '../../../container/b2c-desktop/DesktopResultSearchLayout'
import FlightBookingFormWidget from '../../../components/b2c-desktop/flight/flight-forms/FlightBookingFormWidget'
import FlightSearchResultGenerator from '../../../components/b2c-desktop/flight/flight-search-result/FlightSearchResultGenerator'

const FlightSearchResult: FC<HTMLAttributes<HTMLOrSVGElement>> =
	function FlightSearchResult() {
		return (
			<DesktopResultSearchLayout
				searchWidget={<FlightBookingFormWidget />}
				searchResult={<FlightSearchResultGenerator flightData={multiCity} />}
			/>
		)
	}

export default FlightSearchResult

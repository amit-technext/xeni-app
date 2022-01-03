import React, { FC, HTMLAttributes } from 'react'
import { StopsOverViewType } from '../../../../../type/FlightSearchResultDataType'

interface MStopsOverViewProps extends HTMLAttributes<HTMLOrSVGElement> {
	overView: StopsOverViewType
}

const MStopsOverView: FC<MStopsOverViewProps> = function MStopsOverView({
	overView
}: MStopsOverViewProps) {
	return (
		<div className='py-2 mt-3'>
			<h5 className='text-black mb-0'>{overView?.fromToDestination}</h5>
			<span className='text-900 fs--1'>
				{`${overView?.day}, ${overView?.date}`}
			</span>{' '}
			<span className='text-700 fs--1'>
				{overView?.stops} Stop &bull; {overView?.time} h
			</span>
		</div>
	)
}

export default MStopsOverView

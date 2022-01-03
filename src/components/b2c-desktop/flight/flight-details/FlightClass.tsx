import React, { FC, HTMLAttributes } from 'react'
import LightTab from '../../tabs/light-tab/LightTab'
import { LightTabType } from '../../../../type/TabType'

interface FlightClassProps extends HTMLAttributes<HTMLOrSVGElement> {
	tabData: LightTabType[]
}

const FlightClass: FC<FlightClassProps> = function FlightClass({ tabData }) {
	return (
		<div className='px-4 pt-3'>
			<LightTab tab={tabData} />
		</div>
	)
}

export default FlightClass

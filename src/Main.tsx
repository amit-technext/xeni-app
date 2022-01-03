import React, { FC } from 'react'
import { getColor, getItemFromStore } from './helpers/utils'
import useToggleStyle from './hooks/useToggleStyle'
import { useAppDispatch, useAppSelector } from './hooks/useReduxState'
import { setStyleProperty } from './helpers/htmlElementManager'
import { setAppName, setHotelMapView } from './features/context/contextSlice'

const Main: FC = function Main({ children }) {
	const { isRTL, isDark } = useAppSelector(state => state.context)
	const dispatch = useAppDispatch()
	const { isLoaded } = useToggleStyle(isRTL, isDark)

	setStyleProperty(
		'--falcon-primary',
		getItemFromStore('primaryColor', '') as string
	)
	setStyleProperty(
		'--dynamic-font-family',
		getItemFromStore('userFontFamily', '') as string
	)
	dispatch(setAppName(getItemFromStore('appName', 'default') as string))
	dispatch(setHotelMapView(getItemFromStore('hotelMapView', false) as boolean))
	// configState.searchTrip = 'One Way';
	if (!isLoaded) {
		return (
			<div
				style={{
					position: 'fixed',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					backgroundColor: isDark ? getColor('dark') : getColor('light')
				}}
			/>
		)
	}
	return <div>{children}</div>
}

export default Main

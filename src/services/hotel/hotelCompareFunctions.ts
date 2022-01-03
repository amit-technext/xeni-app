import { IHotelSearchProps } from 'interface/IHotelProps'
import React from 'react'

// select hotel for add to compare
const selectHotelForCompareHandler = (
	hotel: IHotelSearchProps,
	selectedHotel: IHotelSearchProps[],
	setSelectedHotel: React.Dispatch<React.SetStateAction<IHotelSearchProps[]>>
): void => {
	const preSelectedHotel = [...selectedHotel]
	if (preSelectedHotel?.length < 3) {
		setSelectedHotel([...preSelectedHotel, hotel])
	}
}

// remove selected hotel from compare
const removeSelectedHotelHandler = (
	id: string,
	selectedHotel: IHotelSearchProps[],
	setSelectedHotel: React.Dispatch<React.SetStateAction<IHotelSearchProps[]>>
): void => {

	const preSelectedHotel = [...selectedHotel]
	const findIndexOfHotel = preSelectedHotel.findIndex(item => item.id === id)
	preSelectedHotel.splice(findIndexOfHotel, 1)
	setSelectedHotel(preSelectedHotel)
}

export { selectHotelForCompareHandler, removeSelectedHotelHandler }

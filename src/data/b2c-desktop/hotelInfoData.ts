import { Guests, HotelTypeData } from '../../type/HotelInfoType'

export const hotelTypeData: HotelTypeData[] = [
	{ id: '1', label: 'Hotel', value: 'hotel' },
	{ id: '2', label: 'Villas & Homes', value: 'village_homes' },
	{ id: '3', label: 'Campgrounds', value: 'campgrounds' }
]

export const guests: Guests[] = [
	{ id: '1', age: 8, type: 'Room', count: 1, childGuests: [] },
	{ id: '2', age: 8, type: 'Adults', count: 1, childGuests: [] },
	{ id: '3', age: 8, type: 'Children', count: 0, childGuests: [] }
]

import { PassengerType } from './PassengerType'

export type FormDataType = {
	id?: string
	to: FlightSearchDataType
	from: FlightSearchDataType
	date: object
}
export type SuggestionType = {
	id?: string
	country: string
	shortCode: string
	place: string
	location: string
}

export type SearchDataType = {
	routeType: string
	flightType: string
	passenger: PassengerType[]
	formData: FormDataType[]
}
export type FlightSearchDataType = {
	country: string
	countryShortCode: string
	place: string
	location: string
}

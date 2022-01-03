import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

export type FlightData = {
	id?: string | number
	isChecked: boolean
	logo1: string
	logo2: string
	logo: string
	departureTime: string
	arrivalTime: string
	departureCountry: string
	arrivalCountry: string
	stopsCount: number
	stops: string[]
	journeyDuration: string
	codeShare?: boolean
	cabinAndExtra: CabinAndExtraType
}

export type FlightDataMobileType = {
	id?: string
	priceTag: string[]
	airlines: string[]
	price: number
	currency: string
	isFavorite: boolean
	flightInfo: FlightInfoMobileType[]
	flightDetailsInfo: FlightDetailsInfoType
}
export type FlightInfoMobileType = {
	id?: string
	layOver: string
	flightType: string
	classType: string
	airlineLogo: string
	airline: string
	bodyType: string
	stops: number
	duration: string
	logo: string
	airCraftFeatures: AirCraftFeaturesType[]
	departDetails: DADetailsType
	arrivalDetails: DADetailsType
}
export type FlightDetailsInfoType = {
	airport: DetailedAirPort[]
	travelDuration: DurationType
	airlinePolicy: string
	flightTicketClassDetails: FlightTicketClassDetailsType[]
}
export type FlightTicketClassDetailsType = {
	id: string
	type: string
	condition: string
	ticketClass: TicketClassDetailsType[]
	flightOverViewDetails: FlightOverViewDetailsType[]
}
export type FlightOverViewDetailsType = {
	id: string
	stopsOverView: StopsOverViewType
	flightOverViewData: flightOverViewDataType[]
}
export type flightOverViewDataType = {
	id: string
	flightProviderName: string
	flightImage: string
	flightName: string
	flightFromData: {
		from: string
		time: string
		date: string
		city: string
	}
	flightToData: {
		from: string
		time: string
		date: string
		city: string
	}
	approximateTime: string
	specifications: SpecificationType[]
}
export type SpecificationType = {
	id: string
	icon: IconDefinition
	text: string
}
export type StopsOverViewType = {
	fromToDestination: string
	day: string
	date: string
	time: number
	stops: number
}
export type TicketClassDetailsType = {
	id: string
	title: string
	classType: classType[]
}
export type classType = {
	id: string
	fare: number
	title: string
	numberOfBag: number
	numberOfChecked: number
	seatSelectStatus: SeatSelectStatusType
}
export type SeatSelectStatusType = { icon: IconDefinition; text: string }
export type DurationType = {
	month: string
	duration: string
	traveler: number
}
export type DetailedAirPort = {
	id: string
	from: string
	to: string
	airline: string
}
export type AirCraftFeaturesType = {
	icon: IconDefinition
	airCraft: string
}
export type DADetailsType = {
	time: string
	date: string
	airport: AirportType
}
export type AirportType = {
	name: string
	shortCode: string
}
export type CabinAndExtraType = {
	totalPrice: number
	currency: string
	cabinClass: string
	list: string[]
}

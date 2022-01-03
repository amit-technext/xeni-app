import { RadioOptionType } from "./commonType";

export interface SortingDataType {
	recommendedFilters: CommonSrotOptions[]
	hotelPrice: HotelPrice[]
	amenities: CommonSrotOptions[]
	freebies: CommonSrotOptions[]
	sort: RadioOptionType[]
	stops: Stop[]
	times: Time[]
	fee: Fee
	aircraft: Aircraft[]
	price: Price[]
	airports: Airport[]
	duration: Duration[]
	quality: CommonSrotOptions[]
	cabin: Cabin[]
	hotelSort: hotelSort[]
	offer: offer
	hotelBoard: hotelBoard[]
	cancellationFee: cancellationFee[]
	hotelAmenities: hotelAmenities[]
	hotelZone: hotelZone[]
	closeTo: string[]
	EstablishmentProfile: EstablishmentProfile[]
	HotelAccommodationType: HotelAccommodationType[]
	hotelChainName: hotelChainName[]
}
export interface hotelChainName {
	id: string
	type: 'checkbox' | 'radio' | 'switch'
	value: string
	disable: boolean
	select: boolean
}
export interface HotelAccommodationType {
	id: string
	type: 'checkbox' | 'radio' | 'switch'
	value: string
	disable: boolean
	select: boolean
}
export interface EstablishmentProfile {
	id: string
	type: 'checkbox' | 'radio' | 'switch'
	value: string
	disable: boolean
	select: boolean
}
export interface hotelZone {
	id: string
	lable: string
	subList: boolean
	subListItems: string[]
}
export interface hotelAmenities {
	id: string
	type: 'checkbox' | 'radio' | 'switch'
	value: string
	disable: boolean
	select: boolean
}
export interface hotelBoard {
	id: string
	type: 'checkbox' | 'radio' | 'switch'
	value: string
	disable: boolean
	select: boolean
}
export interface cancellationFee {
	id: string
	type: 'checkbox' | 'radio' | 'switch'
	value: string
	disable: boolean
	select: boolean
}
export interface offer {
	discounts: offers[]
	promos: offers[]
}
export interface offers {
	id: string
	type: 'checkbox' | 'radio' | 'switch'
	value: string
	disable: boolean
	select: boolean
}
export interface hotelSort {
	id: string
	active: boolean
	value: string
	label: string
}
export interface Aircraft {
	name: string
	type: CheckOrRadio
	img: string
	disable: boolean
}

// eslint-disable-next-line no-shadow
export enum CheckOrRadio {
	Checkbox = 'checkbox',
	Radio = 'radio'
}

export interface Airport {
	type: CheckOrRadio
	destinations: string
	amount: number
	disable: string
	currency: string
}

export interface CommonSrotOptions {
	type: CheckOrRadio
	value: string
	disable: boolean
	select?: boolean
	amenit?: number
	amount?: string
}

export interface Cabin {
	type: CheckOrRadio
	value: string
	disable: boolean
	amount: number
	currency: string
}

export interface Duration {
	label: string
	flightLeg: number[]
	stopOver: number[]
	min: number
	max: number
	steps: number
	time?: string
}

export interface Fee {
	label: string
	about: string
	info: FeeInfo[]
}

export interface FeeInfo {
	bankName: string
	type: CheckOrRadio
	disable: boolean
}

export interface HotelPrice {
	currency: string
	range: number[]
	min: number
	max: number
	steps: number
}

export interface Price {
	perPerson: string
	averagePrice: number
	currency: string
	range: number[]
	min: number
	max: number
	steps: number
}

export interface Stop {
	label: string
	box: CommonSrotOptions[]
}

export interface Time {
	label: string
	info: TimeInfo[]
}

export interface TimeInfo {
	place: string
	country: string
	amount: string
	timeStart: number
	timeEnd: number
	currency: string
}

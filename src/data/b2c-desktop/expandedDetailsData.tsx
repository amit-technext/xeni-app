import React, { FC } from 'react'
import FlightSeatClass from 'components/b2c-desktop/flight/flight-details/FlightSeatClass'
import {
	DepartEconomyClass,
	DepartBusinessClass,
	DepartFirstClass,
	returnEconomyClass,
	returnBusinessClass,
	returnFirstClass
} from './seatClassData'

const DepartEconomyClassSeat: FC = function DepartEconomyClassSeat() {
	return <FlightSeatClass seatClass={DepartEconomyClass} />
}
const DepartBusinessClassSeat: FC = function DepartBusinessClassSeat() {
	return <FlightSeatClass seatClass={DepartBusinessClass} />
}
const DepartFirstClassSeat: FC = function DepartFirstClassSeat() {
	return <FlightSeatClass seatClass={DepartFirstClass} />
}

const ReturnEconomyClassSeat: FC = function ReturnEconomyClassSeat() {
	return <FlightSeatClass seatClass={returnEconomyClass} />
}
const ReturnBusinessClassSeat: FC = function ReturnBusinessClassSeat() {
	return <FlightSeatClass seatClass={returnBusinessClass} />
}
const ReturnFirstClassSeat: FC = function ReturnFirstClassSeat() {
	return <FlightSeatClass seatClass={returnFirstClass} />
}
export const departTab = [
	{
		title: 'Economy',
		component: <DepartEconomyClassSeat />
	},
	{
		title: 'Business',
		component: <DepartBusinessClassSeat />
	},
	{
		title: 'First Class',
		component: <DepartFirstClassSeat />
	}
]

export const returnTab = [
	{
		title: 'Economy',
		component: <ReturnEconomyClassSeat />
	},
	{
		title: 'Business',
		component: <ReturnBusinessClassSeat />
	},
	{
		title: 'First Class',
		component: <ReturnFirstClassSeat />
	}
]

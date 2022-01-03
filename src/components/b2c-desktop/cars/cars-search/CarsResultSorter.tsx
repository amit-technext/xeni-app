import React, { FC, useState } from 'react'
import {
	passengerFilter,
	bagsFilter,
	policyFilter,
	carTypeFilter,
	rentalAgencyFilter,
	totalPriceFilter,
	carFeaturesFilter
} from 'data/b2c-desktop/carShortFilterData'
import Checkbox from '../../../common/check-box/Checkbox'
import CustomCollapse from '../../../common/collapse/CustomCollapse'

const CarResultSorter: FC = function CarResultSorter() {
	const [capacity, setCapacity] = useState<Array<string>>([])
	const [policy, setPolicy] = useState<Array<string>>([])
	const [carType, setCarType] = useState<Array<string>>([])
	const [rentalAgency, setRentalAgency] = useState<Array<string>>([])
	const [totalPrice, setTotalPrice] = useState<Array<string>>([])
	const [feature, setFeature] = useState<Array<string>>([])

	// eslint-disable-next-line no-console
	console.log(capacity, policy, carType, rentalAgency, totalPrice, feature)

	return (
		<div className='d-flex flex-column text-nowrap mt-n2'>
			<CustomCollapse title='Capacity' initialState>
				<p className='fw-normal fs--1 mb-2'>Passengers</p>
				<Checkbox
					options={passengerFilter}
					selectedResult={setCapacity}
					onChange={(): void => {}}
					hr={false}
				/>
				<p className='fw-normal fs--1 mb-2 mt-3'>Bags</p>
				<Checkbox
					options={bagsFilter}
					selectedResult={setCapacity}
					hrMb={false}
					onChange={(): void => {}}
				/>
			</CustomCollapse>
			<CustomCollapse title='Policies' initialState>
				<Checkbox
					options={policyFilter}
					selectedResult={setPolicy}
					hrMb={false}
					onChange={(): void => {}}
				/>
			</CustomCollapse>
			<CustomCollapse title='Car type' initialState>
				<Checkbox
					options={carTypeFilter}
					selectedResult={setCarType}
					hrMb={false}
					onChange={(): void => {}}
				/>
			</CustomCollapse>
			<CustomCollapse title='Rental agency' initialState>
				<Checkbox
					options={rentalAgencyFilter}
					selectedResult={setRentalAgency}
					hrMb={false}
					onChange={(): void => {}}
				/>
			</CustomCollapse>
			<CustomCollapse title='Total price' initialState>
				<Checkbox
					options={totalPriceFilter}
					selectedResult={setTotalPrice}
					hrMb={false}
					onChange={(): void => {}}
				/>
			</CustomCollapse>
			<CustomCollapse title='Car Features' initialState>
				<Checkbox
					options={carFeaturesFilter}
					selectedResult={setFeature}
					hr={false}
					onChange={(): void => {}}
				/>
			</CustomCollapse>
		</div>
	)
}

export default CarResultSorter

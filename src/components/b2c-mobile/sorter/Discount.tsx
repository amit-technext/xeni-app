import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { offers } from '../../../type/SortingDataType'
import sortingData from '../../../data/b2c-mobile/sortingData'

interface DiscountType extends React.HTMLAttributes<HTMLOrSVGElement> {
	data: offers[]
	setData: (d: offers[]) => void
	selectAll: boolean
	setSelectAll: (b: boolean) => void
}
function Discount(props: DiscountType) {
	const { data, setData, selectAll, setSelectAll } = props
	const selectAllData = (promoData: offers[]): void => {
		const newData = promoData.map(item =>
			item.select
				? { ...item, select: !selectAll }
				: { ...item, select: !selectAll }
		)
		setSelectAll(!selectAll)
		setData(newData)
	}
	function selectIndividual(promoData: offers[], index: string): void {
		const newData = promoData.map(item =>
			item.id === index
				? { ...item, select: !item.select }
				: { ...item, select: item.select }
		)
		console.log('individual :', newData)
		setData(newData)
	}
	return (
		<div>
			<div className='d-flex justify-content-between'>
				<p className='fw-semi-bold'>Promos</p>
				<Form.Check
					type='switch'
					id='dis'
					label='Select All'
					name='discountSelect'
					checked={selectAll}
					disabled={false}
					onChange={() => selectAllData(data)}
				/>
			</div>
			{data.map(item => (
				<div key={item.id}>
					<Form.Check
						type='checkbox'
						id={item.id}
						label={item.value}
						name='disc'
						checked={item.select}
						disabled={!item.disable}
						onChange={() => selectIndividual(data, item.id)}
					/>
				</div>
			))}
		</div>
	)
}

export default Discount

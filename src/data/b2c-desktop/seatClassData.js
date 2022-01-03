import noselected from '../../assets/icon/noselected.svg'
import Dollar from '../../assets/icon/dollar.svg'
import selected from '../../assets/icon/selected.svg'
import CarryBag from '../../assets/icon/carry.svg'
const data = [
	{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
	{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
	{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
]
export const DepartEconomyClass = [
	{
		travelClassName: 'Basic Economy',
		price: '69',
		numberOfBag: '1',
		numberOfChecked: '0',
		selectStatus: 'No seat selection',
		statusIcon: noselected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'Economy',
		price: '599',
		numberOfBag: '2',
		numberOfChecked: '2',
		selectStatus: 'Seat selection with fee',
		statusIcon: Dollar,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'Economy Plus',
		price: '499',
		numberOfBag: '3',
		numberOfChecked: '1',
		selectStatus: 'Seat selection',
		statusIcon: selected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'Economy Plus',
		price: '399',
		numberOfBag: '1',
		numberOfChecked: '2',
		selectStatus: 'Seat selection',
		statusIcon: selected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	}
]

export const DepartBusinessClass = [
	{
		travelClassName: 'Basic Business',
		price: '29',
		numberOfBag: '12',
		numberOfChecked: '1',
		selectStatus: 'No seat selection',
		statusIcon: noselected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'Business',
		price: '339',
		numberOfBag: '11',
		numberOfChecked: '11',
		selectStatus: 'Seat selection with fee',
		statusIcon: Dollar,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'Business Plus',
		price: '939',
		numberOfBag: '3',
		numberOfChecked: '1',
		selectStatus: 'Seat selection',
		statusIcon: selected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	}
]

export const DepartFirstClass = [
	{
		travelClassName: 'Basic First',
		price: '599',
		numberOfBag: '1',
		numberOfChecked: '0',
		selectStatus: 'No seat selection',
		statusIcon: noselected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'First',
		price: '99',
		numberOfBag: '1',
		numberOfChecked: '1',
		selectStatus: 'Seat selection with fee',
		statusIcon: Dollar,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'First Plus',
		price: '99',
		numberOfBag: '1',
		numberOfChecked: '2',
		selectStatus: 'Seat selection',
		statusIcon: selected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'First Plus',
		price: '99',
		numberOfBag: '1',
		numberOfChecked: '2',
		selectStatus: 'Seat selection',
		statusIcon: selected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	}
]

export const returnEconomyClass = [
	{
		travelClassName: 'Basic Economy',
		price: '169',
		numberOfBag: '3',
		numberOfChecked: '0',
		selectStatus: 'No seat selection',
		statusIcon: noselected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'Economy',
		price: '599',
		numberOfBag: '5',
		numberOfChecked: '5',
		selectStatus: 'Seat selection with fee',
		statusIcon: Dollar,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'Economy Plus',
		price: '499',
		numberOfBag: '3',
		numberOfChecked: '1',
		selectStatus: 'Seat selection',
		statusIcon: selected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'Economy Plus',
		price: '399',
		numberOfBag: '1',
		numberOfChecked: '2',
		selectStatus: 'Seat selection',
		statusIcon: selected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	}
]

export const returnBusinessClass = [
	{
		travelClassName: 'Basic Business',
		price: '199',
		numberOfBag: '5',
		numberOfChecked: '2',
		selectStatus: 'No seat selection',
		statusIcon: noselected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'Business',
		price: '99',
		numberOfBag: '1',
		numberOfChecked: '1',
		selectStatus: 'Seat selection with fee',
		statusIcon: Dollar,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'Business Plus',
		price: '939',
		numberOfBag: '3',
		numberOfChecked: '1',
		selectStatus: 'Seat selection',
		statusIcon: selected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	}
]

export const returnFirstClass = [
	{
		travelClassName: 'Basic First',
		price: '599',
		numberOfBag: '1',
		numberOfChecked: '0',
		selectStatus: 'No seat selection',
		statusIcon: noselected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'First',
		price: '99',
		numberOfBag: '1',
		numberOfChecked: '1',
		selectStatus: 'Seat selection with fee',
		statusIcon: Dollar,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'First Plus',
		price: '99',
		numberOfBag: '1',
		numberOfChecked: '2',
		selectStatus: 'Seat selection',
		statusIcon: selected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	},
	{
		travelClassName: 'First Plus',
		price: '99',
		numberOfBag: '1',
		numberOfChecked: '2',
		selectStatus: 'Seat selection',
		statusIcon: selected,
		data: [
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' },
			{ icon: CarryBag, info: '1 Carry on bag', price: '172' }
		]
	}
]

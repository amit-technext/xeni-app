import { CheckOrRadio, SortingDataType } from '../../type/SortingDataType'

const sortingData: SortingDataType = {
	hotelChainName: [
		{
			id: 'c1',
			type: 'checkbox',
			value: 'Magnuson Hotels',
			disable: true,
			select: false
		},
		{
			id: 'c2',
			type: 'checkbox',
			value: 'THE PENINSULA',
			disable: true,
			select: false
		},
		{
			id: 'c3',
			type: 'checkbox',
			value: 'MILLENNIUM & COPTHORNE HOTELS',
			disable: true,
			select: false
		},
		{
			id: 'c4',
			type: 'checkbox',
			value: 'ARLO',
			disable: true,
			select: false
		},
		{
			id: 'c5',
			type: 'checkbox',
			value: '1 Hotels',
			disable: true,
			select: false
		},
		{
			id: 'c6',
			type: 'checkbox',
			value: 'OMNI HOTELS',
			disable: true,
			select: false
		}
	],
	HotelAccommodationType: [
		{
			id: 'a1',
			type: 'checkbox',
			value: 'Guest house',
			disable: true,
			select: false
		},
		{
			id: 'a2',
			type: 'checkbox',
			value: 'Aparthotel',
			disable: true,
			select: false
		},
		{
			id: 'a3',
			type: 'checkbox',
			value: 'Hotel',
			disable: true,
			select: false
		},
		{
			id: 'a4',
			type: 'checkbox',
			value: 'Hostel',
			disable: true,
			select: false
		}
	],
	EstablishmentProfile: [
		{
			id: 'e1',
			type: 'checkbox',
			value: 'Green Hotel',
			disable: true,
			select: false
		},
		{
			id: 'e2',
			type: 'checkbox',
			value: 'Beach hotels',
			disable: true,
			select: false
		},
		{
			id: 'e3',
			type: 'checkbox',
			value: 'Business hotels',
			disable: true,
			select: true
		},
		{
			id: 'e4',
			type: 'checkbox',
			value: 'Design',
			disable: true,
			select: false
		},
		{
			id: 'e5',
			type: 'checkbox',
			value: 'Family hotels',
			disable: true,
			select: true
		},
		{
			id: 'e6',
			type: 'checkbox',
			value: 'Golf hotels',
			disable: true,
			select: true
		},
		{
			id: 'e7',
			type: 'checkbox',
			value: 'Hotels with charm',
			disable: true,
			select: false
		}
	],
	closeTo: [
		'All attractions',
		'Bryant Park,Midtown West',
		'Carnegie Hall,Midtown West',
		'Central Park, Midtown West',
		'Chinatown,Saho/Tribeca/Chinatown',
		'City Hall,Saho/Tribeca/Chinatown',
		'City center ,Midtown West'
	],
	hotelZone: [
		{
			id: 'z1',
			lable: 'All',
			subList: false,
			subListItems: []
		},
		{
			id: 'z2',
			lable: 'New York City-NY',
			subList: true,
			subListItems: [
				'Brooklyn',
				'Downtown New York',
				'Long island City',
				'Midtown East',
				'Delhi-Ny'
			]
		},
		{
			id: 'z3',
			lable: 'Greenwich Village - Chelsea',
			subList: true,
			subListItems: ['Greenwich Village / Chelsea']
		}
	],
	hotelAmenities: [
		{
			id: 'a1',
			type: 'checkbox',
			value: '24-hour reception',
			disable: true,
			select: true
			// amenit: 43
		},
		{
			id: 'a2',
			type: 'checkbox',
			value: 'Adapted for disabled',
			disable: true,
			select: false
			// amenit: 43
		},
		{
			id: 'a3',
			type: 'checkbox',
			value: 'Air-conditioned',
			disable: true,
			select: false
			// amenit: 4
		},
		{
			id: 'a4',
			type: 'checkbox',
			value: 'Bathroom',
			disable: true,
			select: true
			// amenit: 433
		},
		{
			id: 'a5',
			type: 'checkbox',
			value: 'Connecting rooms',
			disable: true,
			select: false
			// amenit: 431
		},
		{
			id: 'a6',
			type: 'checkbox',
			value: 'Fireplace',
			disable: true,
			select: false
			// amenit: 23
		},
		{
			id: 'a7',
			type: 'checkbox',
			value: 'Games Room',
			disable: true,
			select: false
			// amenit: 23
		},
		{
			id: 'a8',
			type: 'checkbox',
			value: 'Gym',
			disable: false,
			select: false
			// amenit: 23
		},
		{
			id: 'a9',
			type: 'checkbox',
			value: 'Heating',
			disable: true,
			select: false
			// amenit: 23
		},
		{
			id: 'a10',
			type: 'checkbox',
			value: 'Hot Tub',
			disable: true,
			select: false
			// amenit: 23
		},
		{
			id: 'a11',
			type: 'checkbox',
			value: 'Internet',
			disable: true,
			select: false
			// amenit: 23
		},
		{
			id: 'a12',
			type: 'checkbox',
			value: 'Parking',
			disable: false,
			select: false
			// amenit: 23
		},
		{
			id: 'a13',
			type: 'checkbox',
			value: 'Private pool',
			disable: true,
			select: false
			// amenit: 23
		},
		{
			id: 'a14',
			type: 'checkbox',
			value: 'Restaurant',
			disable: true,
			select: false
			// amenit: 23
		},
		{
			id: 'a15',
			type: 'checkbox',
			value: 'Shower',
			disable: true,
			select: false
			// amenit: 23
		},
		{
			id: 'a16',
			type: 'checkbox',
			value: 'Spa',
			disable: true,
			select: false
			// amenit: 23
		},
		{
			id: 'a17',
			type: 'checkbox',
			value: 'Swimming Pool',
			disable: true,
			select: false
			// amenit: 23
		},
		{
			id: 'a18',
			type: 'checkbox',
			value: 'TV',
			disable: true,
			select: false
			// amenit: 23
		}
	],
	cancellationFee: [
		{
			id: 'c1',
			type: 'checkbox',
			value: 'Free cencellation',
			disable: true,
			select: true
		},
		{
			id: 'c2',
			type: 'checkbox',
			value: 'Partial cancellation fees',
			disable: true,
			select: false
		},
		{
			id: 'c3',
			type: 'checkbox',
			value: 'Cancellation fees not available',
			disable: true,
			select: false
		},
		{
			id: 'c4',
			type: 'checkbox',
			value: 'Non refundable',
			disable: true,
			select: true
		}
	],
	hotelBoard: [
		{
			id: 'b1',
			type: CheckOrRadio.Checkbox,
			value: 'Incl. breakfast',
			disable: true,
			select: false
		},
		{
			id: 'b2',
			type: CheckOrRadio.Checkbox,
			value: 'Room only (hotels)',
			disable: true,
			select: true
		},
		{
			id: 'b3',
			type: CheckOrRadio.Checkbox,
			value: 'Incl. continental breakfast',
			disable: true,
			select: false
		},
		{
			id: 'b4',
			type: CheckOrRadio.Checkbox,
			value: 'Self catering (apartments)',
			disable: true,
			select: true
		}
	],
	recommendedFilters: [
		{
			type: CheckOrRadio.Checkbox,
			value: 'Free breakfast',
			disable: true
		}
	],
	hotelPrice: [
		{
			currency: ' $',
			range: [57000, 200000],
			min: 40000,
			max: 400000,
			steps: 1000
		}
	],
	amenities: [
		{
			type: CheckOrRadio.Checkbox,
			value: '24hr font desk',
			disable: true,
			select: true,
			amenit: 43
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Adults only',
			disable: true,
			select: false,
			amenit: 43
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Air-conditioned',
			disable: true,
			select: false,
			amenit: 4
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Airport shuttle',
			disable: true,
			select: true,
			amenit: 433
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Business center',
			disable: true,
			select: false,
			amenit: 431
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Casino',
			disable: true,
			select: false,
			amenit: 23
		}
	],
	freebies: [
		{
			type: CheckOrRadio.Checkbox,
			value: 'Free breakfast',
			disable: true,
			select: true
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Free parking',
			disable: true,
			select: false
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Free Internet',
			disable: true,
			select: false
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Free cancellation',
			disable: true,
			select: true
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Free airport shuttle',
			disable: true,
			select: false
		}
	],
	hotelSort: [
		{
			id: '1',
			active: true,
			value: 'Best',
			label: 'Best'
		},
		{
			id: '2',
			active: true,
			value: 'Cheapest',
			label: 'Cheapest'
		}
	],
	offer: {
		discounts: [
			{
				id: 'd1',
				type: 'checkbox',
				value: 'Long Stay discount',
				disable: true,
				select: false
			},
			{
				id: 'd2',
				type: 'checkbox',
				value: 'Exclusive discount',
				disable: true,
				select: false
			}
		],
		promos: [
			{
				id: 'p1',
				type: 'checkbox',
				value: 'Non refundable',
				disable: true,
				select: false
			},
			{
				id: 'p2',
				type: 'checkbox',
				value: 'Black Friday',
				disable: true,
				select: true
			},
			{
				id: 'p3',
				type: 'checkbox',
				value: 'Special deal!',
				disable: true,
				select: false
			},
			{
				id: 'p4',
				type: 'checkbox',
				value: '20% Special Discount',
				disable: true,
				select: false
			},
			{
				id: 'p5',
				type: 'checkbox',
				value: 'Breakfast offer',
				disable: true,
				select: false
			},
			{
				id: 'p6',
				type: 'checkbox',
				value: '25% Special Discount',
				disable: true,
				select: false
			}
		]
	},

	// id: string
	// label: string
	// value: string | number
	// subLabel?: string
	// active?: boolean
	sort: [
		{
			id: 'fs1',
			label: 'Best',
			// type: CheckOrRadio.Radio,
			value: 'Best',
			active: true
		},
		{
			id: 'fs2',
			label: 'Cheapest',
			// type: CheckOrRadio.Radio,
			value: 'Cheapest',
			active: true
		},
		{
			id: 'fs3',
			label: 'Quickest',
			// type: CheckOrRadio.Radio,
			value: 'Quickest',
			active: true
		},
		{
			id: 'fs4',
			label: 'Earliest',
			// type: CheckOrRadio.Radio,
			value: 'Earliest',
			active: true
		}
	],
	stops: [
		{
			label: 'General',
			box: [
				{
					type: CheckOrRadio.Radio,
					value: 'Any',
					disable: true,
					amount: '39234'
				},
				{
					type: CheckOrRadio.Radio,
					value: 'Direct',
					disable: false,
					amount: '39234'
				},
				{
					type: CheckOrRadio.Radio,
					value: '1 stop',
					disable: true,
					amount: '39234'
				}
			]
		},
		{
			label: 'Take-off from USA',
			box: [
				{
					type: CheckOrRadio.Radio,
					value: 'Any',
					disable: true,
					amount: '39234'
				},
				{
					type: CheckOrRadio.Radio,
					value: 'Direct',
					disable: false,
					amount: '39234'
				},
				{
					type: CheckOrRadio.Radio,
					value: '1 stop',
					disable: true,
					amount: '39234'
				}
			]
		},
		{
			label: 'Take-off from East Coast,North America',
			box: [
				{
					type: CheckOrRadio.Radio,
					value: 'Any',
					disable: true,
					amount: '39234'
				},
				{
					type: CheckOrRadio.Radio,
					value: 'Direct',
					disable: true,
					amount: '39234'
				},
				{
					type: CheckOrRadio.Radio,
					value: '1 stop',
					disable: true,
					amount: '39234'
				}
			]
		}
	],
	times: [
		{
			label: 'Departure times',
			info: [
				{
					place: 'Take of from ',
					country: 'USA',
					amount: '31000',
					timeStart: 5,
					timeEnd: 9,
					currency: 'tk'
				},
				{
					place: 'Take of from ',
					country: 'East Coast,North America',
					amount: '31000',
					timeStart: 5,
					timeEnd: 10,
					currency: 'tk'
				}
			]
		},
		{
			label: 'Arrival times',
			info: [
				{
					place: 'LandingPage at ',
					country: 'East Coast,North America',
					amount: '313200',
					timeStart: 4,
					timeEnd: 9,
					currency: 'tk'
				},
				{
					place: 'Take of from ',
					country: 'USA',
					amount: '43000',
					timeStart: 3,
					timeEnd: 12,
					currency: 'tk'
				}
			]
		}
	],
	fee: {
		label: 'Payment Fees',
		about:
			'Prices will be displayed including the fee for the cheapest payment method selected. Some providers may not support all payment methods.',
		info: [
			{
				bankName: 'American Express',
				type: CheckOrRadio.Checkbox,
				disable: true
			},
			{
				bankName: 'Net Banking',
				type: CheckOrRadio.Checkbox,
				disable: true
			},
			{
				bankName: 'Diners Club',
				type: CheckOrRadio.Checkbox,
				disable: true
			},
			{
				bankName: 'MasterCard Credit',
				type: CheckOrRadio.Checkbox,
				disable: true
			},
			{
				bankName: 'MasterCard Debit',
				type: CheckOrRadio.Checkbox,
				disable: false
			},
			{
				bankName: 'Mobile Wallet',
				type: CheckOrRadio.Checkbox,
				disable: true
			},
			{
				bankName: 'RuPay',
				type: CheckOrRadio.Checkbox,
				disable: true
			}
		]
	},
	aircraft: [
		{
			name: 'oneworld',
			type: CheckOrRadio.Checkbox,
			img: 'https://www.kayak.co.in/rimg/provider-logos/airlines/v/AV.png?crop=false&width=108&height=92&fallback=default2.png&_v=4b0e0000efbc54f535fc6b466987c6b0',
			disable: true
		},
		{
			name: 'Alaska Airlines',
			type: CheckOrRadio.Checkbox,
			img: 'https://www.kayak.co.in/rimg/provider-logos/airlines/v/F9.png?crop=false&width=108&height=92&fallback=default2.png&_v=e8753b81046d83a76e6d2b5cee6dcfb2',
			disable: true
		},
		{
			name: 'Star Alliance',
			type: CheckOrRadio.Checkbox,
			img: 'https://www.kayak.co.in/rimg/provider-logos/airlines/v/AV.png?crop=false&width=108&height=92&fallback=default2.png&_v=4b0e0000efbc54f535fc6b466987c6b0',
			disable: true
		},
		{
			name: 'Avianca',
			type: CheckOrRadio.Checkbox,
			img: 'https://www.kayak.co.in/rimg/provider-logos/airlines/v/F9.png?crop=false&width=108&height=92&fallback=default2.png&_v=e8753b81046d83a76e6d2b5cee6dcfb2',
			disable: true
		},
		{
			name: 'Copa Airlines',
			type: CheckOrRadio.Checkbox,
			img: 'https://www.kayak.co.in/rimg/provider-logos/airlines/v/AV.png?crop=false&width=108&height=92&fallback=default2.png&_v=4b0e0000efbc54f535fc6b466987c6b0',
			disable: true
		}
	],
	price: [
		{
			perPerson: 'Per person + taxes & fees',
			averagePrice: 78432,
			currency: 'tk',
			range: [57000, 200000],
			min: 40000,
			max: 400000,
			steps: 1000
		},
		{
			perPerson: 'Total + taxes & fees',
			averagePrice: 78432,
			currency: 'tk',
			range: [79000, 200000],
			min: 40000,
			max: 400000,
			steps: 2000
		}
	],
	airports: [
		{
			type: CheckOrRadio.Checkbox,
			destinations: 'ATL Atlanta Hartsfield-Jackson',
			amount: 39418,
			disable: 'false',
			currency: 'tk'
		},
		{
			type: CheckOrRadio.Checkbox,
			destinations: 'BOS Boston Logan Intl',
			amount: 39418,
			disable: 'true',
			currency: 'tk'
		},
		{
			type: CheckOrRadio.Checkbox,
			destinations: 'MIA Miami',
			amount: 39418,
			disable: 'true',
			currency: 'tk'
		}
	],
	duration: [
		{
			label: 'Take-off from USA',
			flightLeg: [7, 15],
			stopOver: [4, 10],
			min: 1,
			max: 50,
			steps: 1,
			time: 'h'
		},
		{
			label: 'Take-off from BOS',
			flightLeg: [7, 15],
			stopOver: [4, 10],
			min: 1,
			max: 50,
			steps: 2
		}
	],
	quality: [
		{
			type: CheckOrRadio.Checkbox,
			value: '27 longer flights',
			disable: true
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Red-eye flight',
			disable: true
		}
	],
	cabin: [
		{
			type: CheckOrRadio.Checkbox,
			value: 'Basic Economy',
			disable: true,
			amount: 35000,
			currency: 'tk'
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Economy',
			disable: true,
			amount: 50000,
			currency: 'tk'
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Premium',
			disable: true,
			amount: 115000,
			currency: 'tk'
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Business',
			disable: true,
			amount: 45000,
			currency: 'tk'
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'First',
			disable: true,
			amount: 95000,
			currency: 'tk'
		},
		{
			type: CheckOrRadio.Checkbox,
			value: 'Mixed',
			disable: true,
			amount: 75000,
			currency: 'tk'
		}
	]
}
export default sortingData

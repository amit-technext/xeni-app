import {
	faChair,
	faChargingStation,
	faMoon,
	faUtensilSpoon
} from '@fortawesome/free-solid-svg-icons'
import {
	faAirbnb,
	faNode,
	faNodeJs,
	faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { FlightDataMobileType } from '../../type/FlightSearchResultDataType'

const flightResultData: FlightDataMobileType[] = [
	{
		id: 'first',
		priceTag: ['Quickest', 'Cheapest'],
		airlines: ['Frontier', 'Spirit Airlines', 'SATENA'],
		price: 190.0,
		currency: '$',
		isFavorite: false,

		flightInfo: [
			{
				id: 'flight-1',
				layOver: 'Long layover',
				flightType: 'Overnight flight',
				classType: 'Basic Economy 2',
				airlineLogo: 'url',
				airline: 'British Airways 184',
				bodyType: 'Wide Body',
				stops: 3,
				duration: '39h 45m',
				logo:
					'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab',
				airCraftFeatures: [
					{
						icon: faUtensilSpoon,
						airCraft: 'Boaing 777'
					},
					{
						icon: faUtensilSpoon,
						airCraft: 'Boaing 777'
					},
					{
						icon: faUtensilSpoon,
						airCraft: 'Boaing 777'
					},
					{
						icon: faUtensilSpoon,
						airCraft: 'Boaing 777'
					},
					{
						icon: faUtensilSpoon,
						airCraft: 'Boaing 777'
					}
				],
				departDetails: {
					time: '18:55',
					date: 'Sat, Dec 18',
					airport: { name: 'Newark', shortCode: 'EWR' }
				},
				arrivalDetails: {
					time: '6:50',
					date: 'Sat, Dec 19',
					airport: { name: 'London Heathrow', shortCode: 'LHR' }
				}
			}
		],
		flightDetailsInfo: {
			airport: [
				{
					id: 'air1',
					from: 'JFK',
					to: 'LHR',
					airline:
						'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab'
				},
				{
					id: 'air2',
					from: 'STN',
					to: 'EWR',
					airline:
						'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab'
				}
			],
			travelDuration: { month: 'NOV', duration: '12 - 14', traveler: 1 },
			airlinePolicy:
				"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			flightTicketClassDetails: [
				{
					id: 'FD10034',
					type: 'Depart',
					condition: '',
					ticketClass: [
						{
							id: 'economy',
							title: 'Economy',
							classType: [
								{
									id: 'BE100',
									fare: 69,
									title: 'Basic Economy 3',
									numberOfBag: 1,
									numberOfChecked: 0,
									seatSelectStatus: { icon: faNode, text: 'No seat selection' }
								},
								{
									id: 'BE200',
									fare: 169,
									title: 'Economy Plus',
									numberOfBag: 2,
									numberOfChecked: 1,
									seatSelectStatus: { icon: faNodeJs, text: 'Seat selection' }
								},
								{
									id: 'BE300',
									fare: 269,
									title: 'Economy Max Plus',
									numberOfBag: 3,
									numberOfChecked: 2,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								}
							]
						},
						{
							id: 'business',
							title: 'Business',
							classType: [
								{
									id: 'BB100',
									fare: 369,
									title: 'Basic Business',
									numberOfBag: 4,
									numberOfChecked: 3,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								},
								{
									id: 'BB200',
									fare: 469,
									title: 'Business Plus',
									numberOfBag: 5,
									numberOfChecked: 4,
									seatSelectStatus: { icon: faNodeJs, text: 'Seat selection' }
								},
								{
									id: 'BB300',
									fare: 569,
									title: 'Business Max Plus',
									numberOfBag: 6,
									numberOfChecked: 5,
									seatSelectStatus: { icon: faNodeJs, text: 'No seat selection' }
								}
							]
						},
						{
							id: 'first',
							title: 'First',
							classType: [
								{
									id: 'FB100',
									fare: 769,
									title: 'Basic First',
									numberOfBag: 10,
									numberOfChecked: 11,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								},
								{
									id: 'FB200',
									fare: 869,
									title: 'First Plus',
									numberOfBag: 11,
									numberOfChecked: 12,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								},
								{
									id: 'FB300',
									fare: 1069,
									title: 'First Max Plus',
									numberOfBag: 12,
									numberOfChecked: 13,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								}
							]
						}
					],
					flightOverViewDetails: [
						{
							id: 'FOD1001',
							stopsOverView: {
								fromToDestination: 'JFK - LHR',
								day: 'Friday',
								date: 'Nov 12',
								time: 12,
								stops: 1
							},
							flightOverViewData: [
								{
									id: 'FOVDD',
									flightProviderName: 'Johan Kennedy Inti',
									flightImage:
										'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab',
									flightName: 'Finn air 5654',
									flightFromData: {
										from: 'JFK',
										time: '12:15 AM',
										date: 'Monday, Nov 12',
										city: 'New York, NY'
									},
									flightToData: {
										from: 'LHR',
										time: '01:15 PM',
										date: 'Monday, Nov 12',
										city: 'Madrid, Spain'
									},
									approximateTime: '2h 25m',
									specifications: [
										{ id: 'fs1', icon: faAirbnb, text: 'Airbus A330-900neo' },
										{
											id: 'fs2',
											icon: faMoon,
											text: 'Overnight flight (red eye)'
										},
										{ id: 'fs3', icon: faChair, text: '31" Sear pitch' },
										{
											id: 'fs4',
											icon: faChargingStation,
											text: 'Power & USB outlets'
										},
										{
											id: 'fs5',
											icon: faYoutube,
											text: 'Setback on-demand video'
										},
										{ id: 'fs6', icon: faUtensilSpoon, text: 'Meals provided' }
									]
								},
								{
									id: 'FOVD2',
									flightProviderName: 'Johan Kennedy Inti',
									flightImage:
										'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab',
									flightName: 'Finn air 5654',
									flightFromData: {
										from: 'JFK',
										time: '12:15 AM',
										date: 'Monday, Nov 12',
										city: 'New York, NY'
									},
									flightToData: {
										from: 'LHR',
										time: '01:15 PM',
										date: 'Monday, Nov 12',
										city: 'Madrid, Spain'
									},
									approximateTime: '2h 25m',
									specifications: [
										{ id: 'fs1', icon: faAirbnb, text: 'Airbus A330-900neo' },
										{
											id: 'fs2',
											icon: faMoon,
											text: 'Overnight flight (red eye)'
										},
										{ id: 'fs3', icon: faChair, text: '31" Sear pitch' },
										{
											id: 'fs4',
											icon: faChargingStation,
											text: 'Power & USB outlets'
										},
										{
											id: 'fs5',
											icon: faYoutube,
											text: 'Setback on-demand video'
										},
										{ id: 'fs6', icon: faUtensilSpoon, text: 'Meals provided' }
									]
								}
							]
						}
					]
				},
				{
					id: 'FD1100',
					type: 'Return',
					condition:
						'$(USD) per ticket, incl. taxes & fees, 1 carry-on bag 0 checked bags',
					ticketClass: [
						{
							id: 'economy',
							title: 'Economy',
							classType: [
								{
									id: 'BE100',
									fare: 69,
									title: 'Basic Economy 4',
									numberOfBag: 1,
									numberOfChecked: 0,
									seatSelectStatus: { icon: faNodeJs, text: 'No seat selection' }
								},
								{
									id: 'BE200',
									fare: 169,
									title: 'Economy Plus',
									numberOfBag: 2,
									numberOfChecked: 1,
									seatSelectStatus: { icon: faNodeJs, text: 'Seat selection' }
								},
								{
									id: 'BE300',
									fare: 269,
									title: 'Economy Max Plus',
									numberOfBag: 3,
									numberOfChecked: 2,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								}
							]
						},
						{
							id: 'business',
							title: 'Business',
							classType: [
								{
									id: 'BB100',
									fare: 369,
									title: 'Basic Business',
									numberOfBag: 4,
									numberOfChecked: 3,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								},
								{
									id: 'BB200',
									fare: 469,
									title: 'Business Plus',
									numberOfBag: 5,
									numberOfChecked: 4,
									seatSelectStatus: { icon: faNodeJs, text: 'Seat selection' }
								},
								{
									id: 'BB300',
									fare: 569,
									title: 'Business Max Plus',
									numberOfBag: 6,
									numberOfChecked: 5,
									seatSelectStatus: { icon: faNodeJs, text: 'No seat selection' }
								}
							]
						},
						{
							id: 'first',
							title: 'First',
							classType: [
								{
									id: 'FB100',
									fare: 769,
									title: 'Basic First',
									numberOfBag: 10,
									numberOfChecked: 11,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								},
								{
									id: 'FB200',
									fare: 869,
									title: 'First Plus',
									numberOfBag: 11,
									numberOfChecked: 12,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								},
								{
									id: 'FB300',
									fare: 1069,
									title: 'First Max Plus',
									numberOfBag: 12,
									numberOfChecked: 13,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								}
							]
						}
					],
					flightOverViewDetails: [
						{
							id: 'FOD1001',
							stopsOverView: {
								fromToDestination: 'JFK - LHR',
								day: 'Friday',
								date: 'Nov 12',
								time: 12,
								stops: 1
							},
							flightOverViewData: [
								{
									id: 'FOVD1',
									flightProviderName: 'Johan Kennedy Inti',
									flightImage:
										'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab',
									flightName: 'Finn air 5654',
									flightFromData: {
										from: 'JFK',
										time: '12:15 AM',
										date: 'Monday, Nov 12',
										city: 'New York, NY'
									},
									flightToData: {
										from: 'LHR',
										time: '01:15 PM',
										date: 'Monday, Nov 12',
										city: 'Madrid, Spain'
									},
									approximateTime: '2h 25m',
									specifications: [
										{ id: 'fs1', icon: faAirbnb, text: 'Airbus A330-900neo' },
										{
											id: 'fs2',
											icon: faMoon,
											text: 'Overnight flight (red eye)'
										},
										{ id: 'fs3', icon: faChair, text: '31" Sear pitch' },
										{
											id: 'fs4',
											icon: faChargingStation,
											text: 'Power & USB outlets'
										},
										{
											id: 'fs5',
											icon: faYoutube,
											text: 'Setback on-demand video'
										},
										{ id: 'fs6', icon: faUtensilSpoon, text: 'Meals provided' }
									]
								},
								{
									id: 'FOVD2',
									flightProviderName: 'Johan Kennedy Inti',
									flightImage:
										'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab',
									flightName: 'Finn air 5654',
									flightFromData: {
										from: 'JFK',
										time: '12:15 AM',
										date: 'Monday, Nov 12',
										city: 'New York, NY'
									},
									flightToData: {
										from: 'LHR',
										time: '01:15 PM',
										date: 'Monday, Nov 12',
										city: 'Madrid, Spain'
									},
									approximateTime: '2h 25m',
									specifications: [
										{ id: 'fs1', icon: faAirbnb, text: 'Airbus A330-900neo' },
										{
											id: 'fs2',
											icon: faMoon,
											text: 'Overnight flight (red eye)'
										},
										{ id: 'fs3', icon: faChair, text: '31" Sear pitch' },
										{
											id: 'fs4',
											icon: faChargingStation,
											text: 'Power & USB outlets'
										},
										{
											id: 'fs5',
											icon: faYoutube,
											text: 'Setback on-demand video'
										},
										{ id: 'fs6', icon: faUtensilSpoon, text: 'Meals provided' }
									]
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'second',
		priceTag: ['Quickest', 'Cheapest'],
		airlines: ['Frontier', 'Spirit Airlines'],
		price: 200.0,
		currency: '$',
		isFavorite: false,

		flightInfo: [
			{
				id: 'flight-1',
				layOver: 'Long layover',
				flightType: 'Overnight flight',
				classType: 'Basic Economy 5',
				airlineLogo: 'url',
				airline: 'British Airways 184',
				bodyType: 'Wide Body',
				stops: 3,
				duration: '39h 45m',
				logo:
					'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab',
				airCraftFeatures: [
					{
						icon: faNodeJs,
						airCraft: 'Boaing 777'
					},
					{
						icon: faNodeJs,
						airCraft: 'Boaing 777'
					},
					{
						icon: faNodeJs,
						airCraft: 'Boaing 777'
					},
					{
						icon: faNodeJs,
						airCraft: 'Boaing 777'
					},
					{
						icon: faNodeJs,
						airCraft: 'Boaing 777'
					}
				],
				departDetails: {
					time: '18:55',
					date: 'Sat, Dec 18',
					airport: { name: 'Newark', shortCode: 'EWR' }
				},
				arrivalDetails: {
					time: '6:50',
					date: 'Sat, Dec 19',
					airport: { name: 'London Heathrow', shortCode: 'LHR' }
				}
			}
		],
		flightDetailsInfo: {
			airport: [
				{
					id: 'air1',
					from: 'JFK',
					to: 'LHR',
					airline:
						'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab'
				},
				{
					id: 'air2',
					from: 'STN',
					to: 'EWR',
					airline:
						'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab'
				}
			],
			travelDuration: { month: 'NOV', duration: '12 - 14', traveler: 1 },
			airlinePolicy:
				"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			flightTicketClassDetails: [
				{
					id: 'FD1002',
					type: 'Depart',
					condition:
						'$(USD) per ticket, incl. taxes & fees, 1 carry-on bag 0 checked bags',
					ticketClass: [
						{
							id: 'economy',
							title: 'Economy',
							classType: [
								{
									id: 'BE100',
									fare: 169,
									title: 'Basic Economy 1',
									numberOfBag: 1,
									numberOfChecked: 0,
									seatSelectStatus: { icon: faNodeJs, text: 'No seat selection' }
								},
								{
									id: 'BE200',
									fare: 1169,
									title: 'Economy Plus',
									numberOfBag: 2,
									numberOfChecked: 1,
									seatSelectStatus: { icon: faNodeJs, text: 'Seat selection' }
								},
								{
									id: 'BE300',
									fare: 1269,
									title: 'Economy Max Plus',
									numberOfBag: 3,
									numberOfChecked: 2,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								}
							]
						},
						{
							id: 'business',
							title: 'Business',
							classType: [
								{
									id: 'BB100',
									fare: 1369,
									title: 'Basic Business',
									numberOfBag: 4,
									numberOfChecked: 3,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								},
								{
									id: 'BB200',
									fare: 1469,
									title: 'Business Plus',
									numberOfBag: 5,
									numberOfChecked: 4,
									seatSelectStatus: { icon: faNodeJs, text: 'Seat selection' }
								},
								{
									id: 'BB300',
									fare: 1569,
									title: 'Business Max Plus',
									numberOfBag: 6,
									numberOfChecked: 5,
									seatSelectStatus: { icon: faNodeJs, text: 'No seat selection' }
								}
							]
						},
						{
							id: 'first',
							title: 'First',
							classType: [
								{
									id: 'FB100',
									fare: 1769,
									title: 'Basic First',
									numberOfBag: 10,
									numberOfChecked: 11,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								},
								{
									id: 'FB200',
									fare: 1869,
									title: 'First Plus',
									numberOfBag: 11,
									numberOfChecked: 12,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								},
								{
									id: 'FB300',
									fare: 1069,
									title: 'First Max Plus',
									numberOfBag: 12,
									numberOfChecked: 13,
									seatSelectStatus: {
										icon: faNodeJs,
										text: 'Seat selection with fee'
									}
								}
							]
						}
					],
					flightOverViewDetails: [
						{
							id: 'FOD1001',
							stopsOverView: {
								fromToDestination: 'JFK - LHR',
								day: 'Friday',
								date: 'Nov 12',
								time: 12,
								stops: 1
							},
							flightOverViewData: [
								{
									id: 'FOVD001',
									flightProviderName: 'Johan Kennedy Inti',
									flightImage:
										'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab',
									flightName: 'Finn air 5654',
									flightFromData: {
										from: 'JFK',
										time: '12:15 AM',
										date: 'Monday, Nov 12',
										city: 'New York, NY'
									},
									flightToData: {
										from: 'LHR',
										time: '01:15 PM',
										date: 'Monday, Nov 12',
										city: 'Madrid, Spain'
									},
									approximateTime: '2h 25m',
									specifications: [
										{ id: 'fs1', icon: faAirbnb, text: 'Airbus A330-900neo' },
										{
											id: 'fs2',
											icon: faMoon,
											text: 'Overnight flight (red eye)'
										},
										{ id: 'fs3', icon: faChair, text: '31" Sear pitch' },
										{
											id: 'fs4',
											icon: faChargingStation,
											text: 'Power & USB outlets'
										},
										{
											id: 'fs5',
											icon: faYoutube,
											text: 'Setback on-demand video'
										},
										{ id: 'fs6', icon: faUtensilSpoon, text: 'Meals provided' }
									]
								},
								{
									id: 'FOVD002',
									flightProviderName: 'Johan Kennedy Inti',
									flightImage:
										'https://content.r9cdn.net/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab',
									flightName: 'Finn air 5654',
									flightFromData: {
										from: 'JFK',
										time: '12:15 AM',
										date: 'Monday, Nov 12',
										city: 'New York, NY'
									},
									flightToData: {
										from: 'LHR',
										time: '01:15 PM',
										date: 'Monday, Nov 12',
										city: 'Madrid, Spain'
									},
									approximateTime: '2h 25m',
									specifications: [
										{ id: 'fs1', icon: faAirbnb, text: 'Airbus A330-900neo' },
										{
											id: 'fs2',
											icon: faMoon,
											text: 'Overnight flight (red eye)'
										},
										{ id: 'fs3', icon: faChair, text: '31" Sear pitch' },
										{
											id: 'fs4',
											icon: faChargingStation,
											text: 'Power & USB outlets'
										},
										{
											id: 'fs5',
											icon: faYoutube,
											text: 'Setback on-demand video'
										},
										{ id: 'fs6', icon: faUtensilSpoon, text: 'Meals provided' }
									]
								}
							]
						}
					]
				}
			]
		}
	}
]

export default flightResultData

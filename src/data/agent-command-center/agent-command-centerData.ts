import {
	faArchive,
	faCar,
	faHotel,
	faObjectGroup,
	faPlaneDeparture,
	faShip
} from '@fortawesome/free-solid-svg-icons'
import team1 from '../../assets/img/team/1.jpg'
import team2 from '../../assets/img/team/2.jpg'
import team3 from '../../assets/img/team/3.jpg'
import team4 from '../../assets/img/team/4.jpg'
import team5 from '../../assets/img/team/5.jpg'
import team6 from '../../assets/img/team/6.jpg'

export const rating = [
	{
		id: 'r1',
		name: 'Total Bookings',
		value: '$ 55.21k',
		percentage: '13.6'
	},
	{
		id: 'r2',
		name: 'Upcomming Trips',
		value: '33',
		percentage: '-13.6'
	},
	{
		id: 'r3',
		name: 'No. of Transactions',
		value: '122',
		percentage: '-13.6'
	},
	{
		id: 'r4',
		name: 'Conversion Ratio',
		value: '53.5%',
		percentage: '13.6'
	}
]
export const users = {
	newUsers: 3,
	userData: [
		{
			id: 1,
			name: 'Emma Watson',
			avatar: {
				src: team1,
				size: '2xl',
				status: 'online'
			},
			notification: 2,
			role: 'Admin'
		},
		{
			id: 2,
			name: 'Antony Hopkins',
			avatar: {
				src: team2,
				size: '2xl',
				status: 'online'
			},
			notification: 0,
			role: 'Moderator'
		},
		{
			id: 3,
			name: 'Anna Karinina',
			avatar: {
				src: team3,
				size: '2xl',
				status: 'away'
			},
			notification: 2,
			role: 'Editor'
		},
		{
			id: 4,
			name: 'John Lee',
			avatar: {
				src: team4,
				size: '2xl',
				status: 'offline'
			},
			notification: 0,
			role: 'Admin'
		},
		{
			id: 5,
			name: 'Rowen Atkinson',
			avatar: {
				src: team5,
				size: '2xl',
				status: 'offline'
			},
			notification: 1,
			role: 'Editor'
		},
		{
			id: 6,
			name: 'Isaac Hempstead',
			avatar: {
				src: team6,
				size: '2xl',
				status: 'offline'
			},
			notification: 0,
			role: 'Moderator'
		}
	]
}
export const profileInfo = {
	column: [
		{
			item: 'New Leads',
			notification: '4 new leads'
		},
		{
			item: 'Today',
			notification: null
		},
		{
			item: 'This Week',
			notification: null
		}
	],
	row: [
		{
			id: 1,
			name: 'Emma Watson',
			avatar: {
				src: team1,
				size: '2xl',
				status: 'online'
			},
			status: 'Pending',
			role: 'CMR DashboardPage design',
			Date: 'Sep 21',
			time: '1h:52m'
		},
		{
			id: 2,
			name: 'Emma Watson',
			avatar: {
				src: team6,
				size: '2xl',
				status: 'offline'
			},
			status: 'Responded',
			role: 'CMR DashboardPage design',
			Date: 'Sep 21',
			time: '1h:52m'
		},
		{
			id: 3,
			name: 'Emma Watson',
			avatar: {
				src: team3,
				size: '2xl',
				status: 'away'
			},
			status: 'Declined',
			role: 'CMR DashboardPage design',
			Date: 'Sep 21',
			time: '1h:52m'
		},
		{
			id: 4,
			name: 'Emma Watson',
			avatar: {
				src: team1,
				size: '2xl',
				status: 'online'
			},
			status: 'Failed',
			role: 'CMR DashboardPage design',
			Date: 'Sep 21',
			time: '1h:52m'
		},
		{
			id: 5,
			name: 'Emma Watson',
			avatar: {
				src: team3,
				size: '2xl',
				status: 'away'
			},
			status: 'Pending',
			role: 'CMR DashboardPage design',
			Date: 'Sep 21',
			time: '1h:52m'
		}
	]
}
export const yourTeam = {
	column: [
		{
			item: 'Agent',
			notification: null
		},
		{
			item: 'Proposals Sent',
			notification: null
		},
		{
			item: 'Sales Closed',
			notification: null
		}
	],
	row: [
		{
			id: 1,
			name: '',
			avatar: {
				src: team1,
				size: '2xl',
				status: 'online'
			},
			status: null,
			proposalSend: 40,
			role: '',
			Date: null,
			sales: 23,
			time: ''
		},
		{
			id: 2,
			name: '',
			avatar: {
				src: team6,
				size: '2xl',
				status: 'offline'
			},
			status: null,
			proposalSend: 28,
			role: '',
			Date: null,
			sales: 23,
			time: ''
		},
		{
			id: 3,
			name: '',
			avatar: {
				src: team3,
				size: '2xl',
				status: 'away'
			},
			status: null,
			proposalSend: 44,
			role: '',
			Date: null,
			sales: 23,
			time: ''
		},
		{
			id: 4,
			name: '',
			avatar: {
				src: team1,
				size: '2xl',
				status: 'online'
			},
			status: null,
			proposalSend: 14,
			role: '',
			Date: null,
			sales: 23,
			time: ''
		},
		{
			id: 5,
			name: '',
			avatar: {
				src: team3,
				size: '2xl',
				status: 'away'
			},
			status: null,
			proposalSend: 22,
			role: '',
			Date: null,
			sales: 23,
			time: ''
		}
	]
}
const markUp = [
	{
		lebal: 'Air Travels',
		icon: faPlaneDeparture,
		inputType: 'print',
		children: [
			{
				type: 'Flight',
				percent: '08%'
			},
			{
				type: 'private Jets',
				percent: 'Default'
			},
			{
				type: 'Helicopters',
				percent: 'Default'
			}
		]
		// type1: 'Flight',
		// percent1: '08%',
		// type2: 'private Jets',
		// percent2: 'Default',
		// type3: 'Helicopters',
		// percent3: 'Default'
	},
	{
		lebal: 'Hotels',
		icon: faHotel,
		inputType: 'print',
		children: [
			{
				type: 'Hotels',
				percent: '08%'
			},
			{
				type: 'Villas $ Homes',
				percent: 'Default'
			},
			{
				type: 'RV Rentals',
				percent: 'Default'
			}
		]
		// type1: 'Hotels',
		// percent1: '08%',
		// type2: 'Villas $ Homes',
		// percent2: 'Default',
		// type3: 'Campgrounds',
		// percent3: 'Default'
	},
	{
		lebal: 'Cars',
		icon: faCar,
		inputType: 'print',
		children: [
			{
				type: 'Cars',
				percent: '08%'
			},
			{
				type: 'Transfers',
				percent: 'Default'
			},
			{
				type: 'RV Rentals',
				percent: 'Default'
			}
		]
		// type1: 'Cars',
		// percent1: '08%',
		// type2: 'Transfers',
		// percent2: 'Default',
		// type3: 'RV Rentals',
		// percent3: 'Default'
	},
	{
		lebal: 'Sea Safaris',
		icon: faShip,
		inputType: 'print',
		children: [
			{
				type: 'Cruise',
				percent: '08%'
			},
			{
				type: 'Yachts',
				percent: 'Default'
			},
			{
				type: 'Boats',
				percent: 'Default'
			}
		]
		// type1: 'Cruise',
		// percent1: '08%',
		// type2: 'Yachts',
		// percent2: 'Default',
		// type3: 'Boats',
		// percent3: 'Default'
	},
	{
		lebal: 'Activities',
		icon: faArchive,
		inputType: 'print',
		children: [
			{
				type: 'Guided Tours',
				percent: '08%'
			},
			{
				type: 'Event Tickets',
				percent: 'Default'
			},
			{
				type: 'Restaurants',
				percent: 'Default'
			}
		]
	},
	{
		lebal: 'Group Tours',
		icon: faObjectGroup,
		inputType: 'print',
		children: [
			{
				type: 'Safari & Holiday Packages',
				percent: 'default'
			}
		]
	}
]
const markUpInput = [
	{
		lebal: 'Air Travels',
		icon: faPlaneDeparture,
		inputType: 'input',
		children: [
			{
				type: 'Flight',
				percent: '08%'
			},
			{
				type: 'private Jets',
				percent: ''
			},
			{
				type: 'Helicopters',
				percent: ''
			}
		]
		// type1: 'Flight',
		// percent1: '08%',
		// type2: 'private Jets',
		// percent2: 'Default',
		// type3: 'Helicopters',
		// percent3: 'Default'
	},
	{
		lebal: 'Hotels',
		icon: faHotel,
		inputType: 'input',
		children: [
			{
				type: 'Hotels',
				percent: '08%'
			},
			{
				type: 'Villas $ Homes',
				percent: ''
			},
			{
				type: 'RV Rentals',
				percent: ''
			}
		]
		// type1: 'Hotels',
		// percent1: '08%',
		// type2: 'Villas $ Homes',
		// percent2: 'Default',
		// type3: 'Campgrounds',
		// percent3: 'Default'
	},
	{
		lebal: 'Cars',
		icon: faCar,
		inputType: 'input',
		children: [
			{
				type: 'Cars',
				percent: '08%'
			},
			{
				type: 'Transfers',
				percent: ''
			},
			{
				type: 'RV Rentals',
				percent: ''
			}
		]
		// type1: 'Cars',
		// percent1: '08%',
		// type2: 'Transfers',
		// percent2: 'Default',
		// type3: 'RV Rentals',
		// percent3: 'Default'
	},
	{
		lebal: 'Sea Safaris',
		icon: faShip,
		inputType: 'input',
		children: [
			{
				type: 'Cruise',
				percent: '08%'
			},
			{
				type: 'Yachts',
				percent: ''
			},
			{
				type: 'Boats',
				percent: ''
			}
		]
		// type1: 'Cruise',
		// percent1: '08%',
		// type2: 'Yachts',
		// percent2: 'Default',
		// type3: 'Boats',
		// percent3: 'Default'
	},
	{
		lebal: 'Activities',
		icon: faArchive,
		inputType: 'input',
		children: [
			{
				type: 'Guided Tours',
				percent: '08%'
			},
			{
				type: 'Event Tickets',
				percent: ''
			},
			{
				type: 'Restaurants',
				percent: ''
			}
		]
	},
	{
		lebal: 'Group Tours',
		icon: faObjectGroup,
		inputType: 'input',
		children: [
			{
				type: 'Safari & Holiday Packages',
				percent: '08%'
			}
		]
	}
]
export const changeSubsriptionPlan = [
	{
		src: 'https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg',
		name: 'Paypal'
	},
	{
		src: 'https://cdn.onlinewebfonts.com/svg/img_458283.png',
		name: 'Bank Account'
	},
	{
		src: 'https://external-content.duckduckgo.com/ip3/help.venmo.com.ico',
		name: 'Venmo'
	},
	{
		src: 'https://external-content.duckduckgo.com/ip3/bitcoin.org.ico',
		name: 'Bitcoin'
	},
	{
		src: '',
		name: 'H-Bar Wallet'
	},
	{
		src: '',
		name: 'Xennies Wallet'
	}
]

export default [
	rating,
	users,
	profileInfo,
	markUp,
	yourTeam,
	markUpInput,
	changeSubsriptionPlan
]

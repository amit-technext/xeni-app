import {
	faUserAlt,
	faSimCard,
	faShoppingBag
} from '@fortawesome/free-solid-svg-icons'
import logo1 from '../../assets/img/logos/logo1.png'
import logo2 from '../../assets/img/logos/logo2.png'
import logo3 from '../../assets/img/logos/logo3.png'
import image1 from '../../assets/img/car/car1.png'
import image2 from '../../assets/img/car/car2.png'
import image3 from '../../assets/img/car/car3.png'

const cars = [
	{
		id: 'car1',
		title: 'F Chevrolet Malibu',
		carImage: image1,
		carCompany: 'Avis',
		companyLogo: logo1,
		pickTime: '11:00 PM',
		pickLocation: 'GREENWICH VILLAGE',
		dropTime: '02:47 PM',
		dropLocation: 'GREENWICH VILLAGE',
		carSeatClass: 'Intermediate',
		fare: 253,
		fareFor: '7 days',
		conditions: [
			{
				itemName: 'adult passengers',
				icon: faUserAlt,
				itemCount: 5
			},
			{
				itemName: 'bags',
				icon: faShoppingBag,
				itemCount: 4
			},
			{
				itemName: 'doors',
				icon: faSimCard,
				itemCount: 4
			}
		]
	},
	{
		id: 'car2',
		title: 'C Mazda 3 4 Door',
		carImage: image2,
		carCompany: 'Alamo',
		companyLogo: logo2,
		pickTime: '10:00 PM',
		pickLocation: 'GREENWICH VILLAGE',
		dropTime: '11:47 PM',
		dropLocation: 'GREENWICH VILLAGE',
		carSeatClass: 'Economy',
		fare: 461.52,
		fareFor: '3 days',
		conditions: [
			{
				itemName: 'adult passengers',
				icon: faUserAlt,
				itemCount: 2
			},
			{
				itemName: 'bags',
				icon: faShoppingBag,
				itemCount: 4
			},
			{
				itemName: 'doors',
				icon: faSimCard,
				itemCount: 2
			}
		]
	},
	{
		id: 'car3',
		title: 'Volkswagen Jetty',
		carImage: image3,
		carCompany: 'Hertz',
		companyLogo: logo3,
		pickTime: '11:00 PM',
		pickLocation: 'GREENWICH VILLAGE',
		dropTime: '02:47 PM',
		dropLocation: 'GREENWICH VILLAGE',
		carSeatClass: 'Compact',
		fare: 453,
		fareFor: '2 days',
		conditions: [
			{
				itemName: 'adult passengers',
				icon: faUserAlt,
				itemCount: 6
			},
			{
				itemName: 'bags',
				icon: faShoppingBag,
				itemCount: 5
			},
			{
				itemName: 'doors',
				icon: faSimCard,
				itemCount: 2
			}
		]
	}
]

export default cars

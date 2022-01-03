import React, { FC } from 'react'
import Flex from '../utils/Flex'

import {
	FlightIcon,
	Sea,
	Car,
	GroupTravels,
	BedEmptySolid,
	FootballBallSolid
} from '../../../assets/icons'

import { ObjectType } from '../../../type/objectType'

const Icons: ObjectType = {
	flight: <FlightIcon height='1.6rem' width='1.6rem' />,
	hotel: <BedEmptySolid height='1.6rem' width='1.6rem' />,
	car: <Car height='1.6rem' width='1.6rem' />,
	activities: <FootballBallSolid height='1.6rem' width='1.6rem' />,
	group: <GroupTravels height='1.6rem' width='1.6rem' />,
	sea: <Sea height='1.6rem' width='1.6rem' />
}

interface MenuTitle2Props {
	title: string
	icon: string
	onMobile?: boolean
}

const MenuTitle2: FC<MenuTitle2Props> = function MenuTitle2(props) {
	const { title, icon, onMobile } = props
	// console.log(icon);

	return (
		<Flex
			direction={onMobile ? 'row' : 'column'}
			alignItems='center'
			justifyContent='center'
			className='cursor-pointer'
		>
			<span
				className={onMobile ? 'menu-icon-mobile me-2' : 'd-none d-md-block mb-2'}
			>
				{Icons[icon!]}
			</span>
			<div>
				<p
					className={`text-nowrap text-dark fs--1 m-0 fw-normal ${
						onMobile ? 'pt-1' : ''
					}`}
				>
					{title}
				</p>
			</div>
		</Flex>
	)
}

MenuTitle2.defaultProps = {
	onMobile: false
}

export default MenuTitle2

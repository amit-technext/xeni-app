import React, { FC } from 'react'
import Flex from '../utils/Flex'
import {
	Flight,
	Sea,
	Car,
	GroupTravels,
	BedEmptySolid,
	FootballBallSolid
} from '../../../assets/icons'
import { ObjectType } from '../../../type/objectType'

const Icons: ObjectType = {
	flight: <Flight height='1.6rem' width='1.6rem' />,
	hotel: <BedEmptySolid height='1.6rem' width='1.6rem' />,
	car: <Car height='1.6rem' width='1.6rem' />,
	activities: <FootballBallSolid height='1.6rem' width='1.6rem' />,
	group: <GroupTravels height='1.6rem' width='1.6rem' />,
	sea: <Sea height='1.6rem' width='1.6rem' />
}

interface IMenu extends React.HTMLAttributes<HTMLOrSVGElement> {
	title?: string
	icon?: string
	image?: string
	showIcons?: boolean
}

const MenuTitle: FC<IMenu> = function MenuTitle({
	icon,
	image,
	showIcons,
	title
}) {
	// @ts-ignore
	return (
		<Flex
			direction='column'
			alignItems='center'
			justifyContent='center'
			className='cursor-pointer'
		>
			{showIcons && (
				<span className='d-none d-md-block mb-2'>
					{image ? (
						<img width={23.33} height={18.66} src={image} alt={title} />
					) : (
						Icons[icon!]
					)}
				</span>
			)}
			<div>
				<p className='text-nowrap fs--1 m-0  fw-medium'>{title}</p>
			</div>
		</Flex>
	)
}
MenuTitle.defaultProps = {
	title: '',
	icon: '',
	image: '',
	showIcons: true
}
export default MenuTitle

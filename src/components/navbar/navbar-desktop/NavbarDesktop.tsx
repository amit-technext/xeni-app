import React, { FC } from 'react'
import Flex from '../../common/utils/Flex'
import Logo from '../../common/utils/Logo'
import xeniLand from '../../../assets/brand-icons/brand-main.svg'
import ProfileDropdown from '../top/ProfileDropdown'
import ThemeControl from '../theme-control/ThemeControl'
import CartNotification from '../top/CartNotification'
import WishListNotification from '../top/WishListNotification'

const NavbarDesktop: FC = function NavbarDesktop() {
	return (
		<Flex
			justifyContent='between'
			alignItems='center'
			className='bg-100 px-lg-5 px-3 border-bottom sticky-top'
		>
			<Logo
				width={100}
				height={36}
				logo={xeniLand}
				at='none'
				alt='Logo'
				className=''
			/>
			<div className='d-flex my-1 c-mb--2'>
				<ThemeControl />
				<WishListNotification />
				<CartNotification />
				<ProfileDropdown />
			</div>
		</Flex>
	)
}

export default NavbarDesktop

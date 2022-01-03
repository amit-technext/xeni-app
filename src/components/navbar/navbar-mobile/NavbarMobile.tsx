import React, { FC } from 'react'
import Flex from '../../common/utils/Flex'
import Logo from '../../common/utils/Logo'
import ProfileDropdown from '../top/ProfileDropdown'
// import ThemeControl from '../theme-control/ThemeControl'
import xeniLandM from '../../../assets/brand-icons/xeni-logo.png'
import MSearchedCriteria from '../../b2c-mobile/search-criteria/MSearchedCriteria'
// import WishListNotification from '../top/WishListNotification'
import ToggleButton from '../vertical/ToggleButton'
import CartNotification from '../top/CartNotification'

const NavbarMobile: FC = function NavbarMobile() {
	return (
		<Flex
			justifyContent='between'
			alignItems='center'
			className='bg-white border-bottom position-relative'
		>
			<div className='d-flex align-items-center'>
				<ToggleButton />
				<Logo width={26} logo={xeniLandM} at='none' />
				<MSearchedCriteria />
			</div>
			<div className='d-flex my-1 c-mb--2 me-2'>
				{/* <ThemeControl /> */}
				{/* <WishListNotification /> */}
				<CartNotification />
				<ProfileDropdown />
			</div>
		</Flex>
	)
}

export default NavbarMobile

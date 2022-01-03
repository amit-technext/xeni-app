import React, { FC } from 'react'
import NavbarDesktop from '../navbar-desktop/NavbarDesktop'
import NavbarMobile from '../navbar-mobile/NavbarMobile'
import { useAppSelector } from '../../../hooks/useReduxState'

const TopNavBar: FC = function TopNavBar() {
	const { appName } = useAppSelector(state => state.context)

	return appName === 'b2c_mobile' ? <NavbarMobile /> : <NavbarDesktop />
}

export default TopNavBar

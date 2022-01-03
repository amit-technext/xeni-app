import React, { useContext } from 'react'
import { Navbar } from 'react-bootstrap'
import classNames from 'classnames'
import AppContext from 'context/Context'
import { navbarBreakPoint, topNavbarBreakpoint } from 'config'
import { useAppSelector } from 'hooks/useReduxState'
import TopNavRightSideNavItem from './TopNavRightSideNavItem'
import Logo from '../../../common/utils/Logo'

function NavbarTop() {
	// const {
	//   config: { showBurgerMenu, navbarPosition, navbarCollapsed },
	//   setConfig
	// } = useContext(AppContext);

	const { showBurgerMenu, navbarPosition, navbarCollapsed } = useAppSelector(
		state => state.context
	)

	const handleBurgerMenu = () => {
		// navbarPosition === 'top' && setConfig('navbarCollapsed', !navbarCollapsed)
		// ;(navbarPosition === 'vertical' || navbarPosition === 'combo') &&
		// 	setConfig('showBurgerMenu', !showBurgerMenu)
		console.log('ok')
	}
	return (
		<Navbar
			className='bg-white fs--1 navbar-top border-bottom'
			expand={
				navbarPosition === 'top' || navbarPosition === 'combo'
					? topNavbarBreakpoint
					: true
			}
		>
			<Navbar.Toggle
				className={classNames('toggle-icon-wrapper', {
					'd-lg-none': navbarPosition === 'top',
					[`d-${navbarBreakPoint}-none`]:
						navbarPosition === 'vertical' || navbarPosition === 'combo'
				})}
				as='div'
			>
				<span
					className='navbar-toggler-humburger-icon bg-hover d-flex flex-center'
					onClick={handleBurgerMenu}
					id='burgerMenu'
				>
					<span className='navbar-toggle-icon'>
						<span className='toggle-line' />
					</span>
				</span>
			</Navbar.Toggle>
			<Logo width={120} />

			<TopNavRightSideNavItem />
		</Navbar>
	)
}

export default NavbarTop

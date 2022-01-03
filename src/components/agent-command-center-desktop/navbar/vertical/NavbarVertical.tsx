import React, { FC, useEffect } from 'react'
import classNames from 'classnames'
import { Nav, Navbar, Row, Col, Button } from 'react-bootstrap'
import { navbarBreakPoint, topNavbarBreakpoint } from 'config'
import { capitalize } from 'helpers/utils'
import NavbarVerticalMenu from './NavbarVerticalMenu'
import ToggleButton from './ToggleButton'
import useWindowSize from '../../../../hooks/useWindowSize'
import profileImage from '../../../../assets/img/generic/2.jpg'
import Flex from '../../../common/utils/Flex'
import Avatar from '../../../common/utils/Avatar'
import routes from '../../../../container/agent-command-center/routes'
import { useAppSelector } from '../../../../hooks/useReduxState'

const NavbarVertical: FC = function NavbarVertical() {
	const {
		navbarPosition,
		navbarStyle,
		isNavbarVerticalCollapsed,
		showBurgerMenu
	} = useAppSelector(state => state.context)

	const HTMLClassList = document.getElementsByTagName('html')[0].classList

	useEffect(() => {
		if (isNavbarVerticalCollapsed) {
			HTMLClassList.add('navbar-vertical-collapsed')
		}
		return (): void => {
			HTMLClassList.remove('navbar-vertical-collapsed-hover')
		}
	}, [isNavbarVerticalCollapsed, HTMLClassList])

	// Control mouseEnter event
	let time: NodeJS.Timeout | null = null
	const handleMouseEnter = (): void => {
		if (isNavbarVerticalCollapsed) {
			time = setTimeout(() => {
				HTMLClassList.add('navbar-vertical-collapsed-hover')
			}, 100)
		}
	}
	const handleMouseLeave = (): void => {
		if (time) {
			clearTimeout(time)
		}
		HTMLClassList.remove('navbar-vertical-collapsed-hover')
	}

	const navbarLabel = (label: string): JSX.Element => (
		<Row className='mt-3 mb-2 navbar-vertical-label-wrapper'>
			<Col xs='auto' className='navbar-vertical-label navbar-vertical-label'>
				{label}
			</Col>
			<Col className='ps-0'>
				<hr className='mb-0 navbar-vertical-divider' />
			</Col>
		</Row>
	)
	const [width] = useWindowSize()
	return (
		<Navbar
			expand={navbarBreakPoint}
			style={{
				marginRight: '10px'
			}}
			className={classNames('navbar-vertical  mx-2', {
				[`navbar-${navbarStyle}`]: navbarStyle !== 'transparent'
			})}
			variant='light'
		>
			<Navbar.Collapse
				in={showBurgerMenu}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='navbar-vertical-content scrollbar bg-white w-auto'>
					{width < 1200 ? (
						<span />
					) : (
						<Flex alignItems='center pt-2 mt-1' style={{ paddingBottom: '7px' }}>
							<ToggleButton />
						</Flex>
					)}
					<hr
						hidden={width < 1200}
						className='navbar-vertical-hr my-2'
						style={{ width: '90%' }}
					/>
					<Button className='d-flex align-items-center pt-2 overflow-visible hover-text-decoration-none'>
						<span
							style={
								!isNavbarVerticalCollapsed
									? { marginLeft: '0px' }
									: { marginLeft: '-7px' }
							}
						>
							<Avatar src={profileImage} />
						</span>
						{!isNavbarVerticalCollapsed && (
							<div>
								<div className='d-flex flex-column' style={{ marginBottom: '8px' }}>
									<span
										// hidden={showName}
										className='ms-2 text-dark fw-semi-bold text-nowrap'
										style={{ fontSize: '14px' }}
									>
										Amanda Victor
									</span>
									<span className='ms-2 text-700' style={{ fontSize: '13px' }}>
										Credit <strong>$2031.00</strong>
									</span>
								</div>
							</div>
						)}
					</Button>
					<hr className='navbar-vertical-hr my-2' style={{ width: '90%' }} />
					<Nav
						className='flex-column text-nowrap pt-2'
						as='ul'
						style={{ minWidth: '1.5rem' }}
					>
						{routes.map(route => (
							<div key={route.label} style={{ margin: '0px 12px 12px 0px' }}>
								{!route.labelDisable && navbarLabel(capitalize(route.label))}
								<NavbarVerticalMenu routes={route.children} />
							</div>
						))}
					</Nav>

					{navbarPosition === 'combo' && (
						<div className={`d-${topNavbarBreakpoint}-none`}>
							<div className='navbar-vertical-divider'>
								<hr className='navbar-vertical-hr my-2' />
							</div>
						</div>
					)}
				</div>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavbarVertical

import { Nav, Tab } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState, Fragment, FC } from 'react'
import { useAppSelector } from 'hooks/useReduxState'
import MenuTitle2 from './MenuTitle2'

type TapTypes = {
	id: number
	title: string
	icon: string
	href: string
	active: boolean
}

interface MenuProps extends React.HTMLAttributes<HTMLOrSVGElement> {
	onMobile: boolean
	// eslint-disable-next-line react/require-default-props
	tab?: TapTypes[]
}

const Menu: FC<MenuProps> = function Menu(props) {
	const { tab, onMobile = false } = props

	const { navItems } = useAppSelector(state => state.context)

	const [tabs, setTabs] = useState<TapTypes[]>()
	useEffect(() => setTabs(tab || navItems), [tab, navItems])

	const location = useLocation()
	const pathName = location?.pathname?.split('/')
	const newGeneratedPathName = pathName.slice(0, 2).join('/')

	return (
		<div>
			{tabs ? (
				<Tab.Container
					defaultActiveKey={
						location.pathname !== '/' ? newGeneratedPathName : tabs[0].href
					}
				>
					<Nav
						className={`nav-tabs rounded-lg-bottom border-0 bg-white mb-1 overflow-auto scrollbar-hr-none flex-nowrap ${
							!onMobile ? 'mt-1' : ''
						}`}
					>
						{tabs?.map(tabElement => (
							<Fragment key={tabElement.href}>
								{tabElement.active && (
									<Nav.Item className={`flex-1 chart-tab ${onMobile ? 'mb--1' : ''}`}>
										<Nav.Link
											to={tabElement.href}
											className={`mb-0 outline-none ${onMobile ? 'mobile-nav-link' : ''}`}
											eventKey={tabElement.href}
											as={Link}
										>
											<MenuTitle2
												title={tabElement.title}
												icon={tabElement.icon}
												onMobile={onMobile}
											/>
										</Nav.Link>
									</Nav.Item>
								)}
							</Fragment>
						))}
					</Nav>
				</Tab.Container>
			) : (
				<div>Please Provide data.</div>
			)}
		</div>
	)
}

export default Menu

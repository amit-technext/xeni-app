import React, { FC, useEffect } from 'react'
import { Switch, useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import MainRoutes from './MainRoutes'
import Footer from '../components/footer/Footer'
// import TopNavBar from 'components/navbar/top/TopNavBar';

const MainLayout: FC = function MainLayout() {
	const { hash } = useLocation()

	useEffect(() => {
		setTimeout(() => {
			if (hash) {
				const id = hash.replace('#', '')
				const element = document.getElementById(id)
				if (element) {
					element.scrollIntoView({ block: 'start', behavior: 'smooth' })
				}
			}
		}, 0)
	}, [])
	//
	// useEffect(() => {
	//   window.scrollTo(0, 0);
	// }, [pathname]);

	return (
		<Container fluid className='bg-100 px-0'>
			{/* <NavbarVertical /> */}
			<div className='content pb-0'>
				{/* <TopNavBar /> */}
				<Switch>
					<MainRoutes />
				</Switch>
				<Footer />
			</div>
		</Container>
	)
}

export default MainLayout

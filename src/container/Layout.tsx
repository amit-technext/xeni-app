// @ts-ignore
import is from 'is_js'
import { toast, ToastContainer } from 'react-toastify'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import React, { useEffect, lazy, Suspense, FC } from 'react'
import SignUpPage from 'pages/onboarding-pages/SignUpPage'
import { CloseButton } from '../components/common/utils/Toast'
import ResultExpandedDetails from '../pages/b2c-desktop-pages/flight-pages/ResultExpandedDetails'
import MFormOnOffCanvas from '../components/b2c-mobile/flight/form/MFormOnOffCanvas'
import XeniLoadingPage from '../components/common/loading-page/LoadingPage'
import SingleHotelDescription from '../pages/b2c-desktop-pages/hotel-pages/SingleHotelDescription'
import LoginFlowPage from '../pages/onboarding-pages/LoginFlowPage'
import CompanyInformationPage from '../pages/onboarding-pages/CompanyInformationPage'
import PaymentDetailsPage from '../pages/onboarding-pages/PaymentDetailsPage'
import PricingPage from '../pages/onboarding-pages/PricingPage'
import WebSiteCustomizationPage from '../pages/onboarding-pages/WebSiteCustomizationPage'
import LandingPreviewPage from '../pages/onboarding-pages/LandingPreviewPage'
import LandingPage from '../pages/onboarding-pages/LandingPage'
import MHotelSearchResultDetails from '../pages/b2c-mobile-pages/hotel/MHotelSearchResultDetails'
import CarSearchResult from '../pages/b2c-desktop-pages/car-pages/CarSearchResult'
import SingleCarDescription from '../components/b2c-desktop/cars/cars-search/SingleCarDescription'
import Dashboard from '../pages/agent-command-center-pages/Dashboard'
import Login from '../pages/agent-command-center-pages/Login'
import SettingPage from '../pages/agent-command-center-pages/SettingPage'
import CustomizeThemePage from '../pages/agent-command-center-pages/CustomizeThemePage'
import NavbarVertical from '../components/agent-command-center-desktop/navbar/vertical/NavbarVertical'
import NavbarTop from '../components/agent-command-center-desktop/navbar/top/NavbarTop'
import SuperAdminRoute from './super-admin-desktop/SuperAdminRoute'
import MobileLoginPage from '../pages/b2c-mobile-pages/MobileLoginPage'
import MobileSignUpPage from '../pages/b2c-mobile-pages/MobileSignUpPage'
import MCarsLandingPage from '../pages/b2c-mobile-pages/car/MCarsLandingPage'
import MCarSearchResultDetails from '../pages/b2c-mobile-pages/car/MCarSearchResultDetails'
import MCarSearchResultPage from '../pages/b2c-mobile-pages/car/MCarSearchResultPage'
import { useAppSelector } from '../hooks/useReduxState'

const MainLayout = lazy(() => import('./MainLayout'))

const TopNavBar = lazy(() => import('../components/navbar/top/TopNavBar'))
const Footer = lazy(() => import('../components/footer/Footer'))
const ErrorLayout = lazy(() => import('./ErrorLayout'))
const DemoLists = lazy(() => import('../pages/demo'))
const SiteCustomization = lazy(() => import('../pages/SiteCustomization'))

const SettingsPanel = lazy(
	() => import('../components/settings-panel/SettingsPanel')
)

const FlightLandingPage = lazy(
	() => import('../pages/b2c-desktop-pages/flight-pages/FlightLandingPage')
)
const HotelLandingPage = lazy(
	() => import('../pages/b2c-desktop-pages/hotel-pages/HotelLandingPage')
)
const CarLandingPage = lazy(
	() => import('../pages/b2c-desktop-pages/car-pages/CarLandingPage')
)
const FlightSearchResult = lazy(
	() => import('../pages/b2c-desktop-pages/flight-pages/FlightSearchResult')
)
const HotelSearchResult = lazy(
	() => import('../pages/b2c-desktop-pages/hotel-pages/HotelSearchResult')
)

const HotelLandingPageMobile = lazy(
	() => import('../pages/b2c-mobile-pages/hotel/MHotelLandingPage')
)
const MAirTravelSearchResultPage = lazy(
	() => import('../pages/b2c-mobile-pages/flight/MAirTravelSearchResultPage')
)
const MAirTravelLandingPage = lazy(
	() => import('../pages/b2c-mobile-pages/flight/MAirTravelLandingPage')
)
const MHotelSearchResult = lazy(
	() => import('../pages/b2c-mobile-pages/hotel/MHotelSearchResultPage')
)

const B2CDesktopRoute: FC = function B2CDesktopRoute() {
	return (
		<Switch>
			<Route exact path='/flight'>
				<FlightLandingPage />
			</Route>
			<Route exact path='/flight/search'>
				<FlightSearchResult />
			</Route>
			<Route exact path='/flight/search-details'>
				<ResultExpandedDetails />
			</Route>
			<Redirect exact from='/' to='/flight' />
			<Route exact path='/hotels'>
				<HotelLandingPage />
			</Route>
			<Route exact path='/hotels/search'>
				<HotelSearchResult />
			</Route>
			<Route exact path='/hotels/result-details'>
				<SingleHotelDescription />
			</Route>
			<Route exact path='/cars'>
				<CarLandingPage />
			</Route>
			<Route exact path='/cars/search'>
				<CarSearchResult />
			</Route>
			<Route exact path='/cars/result-details'>
				<SingleCarDescription />
			</Route>
			<Route exact path='/customize'>
				<SiteCustomization />
			</Route>
			<Redirect to='/errors/404' />
		</Switch>
	)
}

const B2CMobileRoute: FC = function B2CMobileRoute() {
	return (
		<Switch>
			<Route path='/m-login' exact component={MobileLoginPage} />
			<Route path='/m-register' exact component={MobileSignUpPage} />
			<Route exact path='/flight'>
				<MAirTravelLandingPage />
			</Route>
			<Redirect exact from='/' to='/flight' />
			<Route exact path='/flight/search'>
				<MAirTravelSearchResultPage />
			</Route>
			<Route exact path='/hotels'>
				<HotelLandingPageMobile />
			</Route>
			<Route exact path='/hotels/search'>
				<MHotelSearchResult />
			</Route>
			<Route exact path='/hotels/search-details/:hotelId'>
				<MHotelSearchResultDetails />
			</Route>
			<Route exact path='/cars'>
				<MCarsLandingPage />
			</Route>
			<Route exact path='/cars/search'>
				<MCarSearchResultPage />
			</Route>
			<Route exact path='/cars/result-details'>
				<MCarSearchResultDetails />
			</Route>
			<Route exact path='/customize'>
				<SiteCustomization />
			</Route>
			<Redirect to='/errors/404' />
		</Switch>
	)
}

const OnBoardingRoute: FC = function OnBoardingRoute() {
	return (
		<Switch>
			<Route exact path='/'>
				<LandingPage />
			</Route>
			<Route path='/signup' exact component={SignUpPage} />
			<Route path='/login' exact component={LoginFlowPage} />
			<Route path='/payment-details' exact component={PaymentDetailsPage} />
			<Route
				path='/company-information'
				exact
				component={CompanyInformationPage}
			/>
			<Route
				path='/customize-website'
				exact
				component={WebSiteCustomizationPage}
			/>
			<Route path='/pricing' exact component={PricingPage} />
			<Route path='/landing-preview' exact component={LandingPreviewPage} />
			<Route path='/xeniapp' exact component={LandingPage} />
			<Redirect to='/errors/404' />
		</Switch>
	)
}

const AgentCommandCenterRoute: FC = function AgentCommandCenterRoute() {
	const { pathname } = useLocation()
	return (
		<div className='container-fluid pe-0 bg-white'>
			{!(pathname === '/' || pathname === '/demo-list') && <NavbarVertical />}
			<div className='content bg-100'>
				<NavbarTop />
				<div className='mt-2 px-3'>
					<Switch>
						<Route path='/' exact component={Login} />
						<Route exact path='/dashboard' component={Dashboard} />
						<Route path='/settings' exact component={SettingPage} />
						<Route path='/theme' exact component={CustomizeThemePage} />
						<Redirect to='/errors/404' />
					</Switch>
					<div className='mt-4'>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	)
}

const DefaultRoute: FC = function DefaultRoute() {
	return (
		<Switch>
			<Route exact path='/'>
				<DemoLists />
			</Route>
			<Route exact path='/customize'>
				<SiteCustomization />
			</Route>

			<Redirect to='/errors/404' />
		</Switch>
	)
}
const Layout: FC = function Layout() {
	const { pathname } = useLocation()
	const HTMLClassList = document.getElementsByTagName('html')[0].classList
	const { appName } = useAppSelector(state => state.context)

	useEffect(() => {
		if (is.windows()) {
			HTMLClassList.add('windows')
		}
		if (is.chrome()) {
			HTMLClassList.add('chrome')
		}
		if (is.firefox()) {
			HTMLClassList.add('firefox')
		}
	}, [HTMLClassList])

	let renderApp
	if (appName === 'b2c_app') {
		renderApp = <B2CDesktopRoute />
	} else if (appName === 'b2c_mobile') {
		renderApp = <B2CMobileRoute />
	} else if (appName === 'onboarding') {
		renderApp = <OnBoardingRoute />
	} else if (appName === 'ag_command_center') {
		renderApp = <AgentCommandCenterRoute />
	} else if (appName === 'super_admin') {
		renderApp = <SuperAdminRoute />
	} else {
		renderApp = <DefaultRoute />
	}

	return (
		<Suspense fallback={<XeniLoadingPage />}>
			{appName === 'ag_command_center' || appName === 'super_admin'
				? null
				: pathname !== '/signup' && pathname !== '/login' && <TopNavBar />}

			<Switch>
				<Route path='/errors' component={ErrorLayout} />

				{renderApp}
				{/* {appName === 'b2c_app' ? (
					<B2CDesktopRoute />
				) : appName === 'b2c_mobile' ? (
					<B2CMobileRoute />
				) : appName === 'onboarding' ? (
					<OnBoardingRoute />
				) : appName === 'ag_command_center' ? (
					<AgentCommandCenterRoute />
				) : appName === 'super_admin' ? (
					<SuperAdminRoute />
				) : (
					<DefaultRoute />
				)} */}
				<Route component={MainLayout} />
				<Redirect to='/errors/404' />
			</Switch>
			{/* <Footer /> */}
			{appName === 'ag_command_center' || appName === 'super_admin'
				? null
				: pathname !== '/signup' && pathname !== '/login' && <Footer />}
			<SettingsPanel />
			<MFormOnOffCanvas />
			<ToastContainer
				closeButton={CloseButton}
				closeOnClick
				position={toast.POSITION.TOP_RIGHT}
			/>
		</Suspense>
	)
}

export default Layout

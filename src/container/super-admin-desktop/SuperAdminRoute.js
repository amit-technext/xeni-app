import React from 'react'
import CorPage from 'pages/super-admin-desktop-pages/CorPage'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import PCCAccessPage from 'pages/super-admin-desktop-pages/PCCAcessPage'
import PCCTenantPage from 'pages/super-admin-desktop-pages/PCCTenantPage'
import UploadCorPage from 'pages/super-admin-desktop-pages/UploadCorPage'
import UsageRestrictionPage from 'pages/super-admin-desktop-pages/UsageRestrictionPage'
import VolumeRestrictionPage from 'pages/super-admin-desktop-pages/VolumeRestrictionPage'
import TopNavBar from 'components/onboarding/TopNavBar'
import NavbarVertical from 'components/navbar/vertical/NavbarVertical'
import DemoLists from '../../pages/demo'
import PCCPage from '../../pages/super-admin-desktop-pages/PCCPage'
import LimitPage from '../../pages/super-admin-desktop-pages/LimitPage'
import SALoginPage from '../../pages/super-admin-desktop-pages/SALoginPage'
import DashboardPage from '../../pages/super-admin-desktop-pages/DashboardPage'
// import NavbarTop from '../../components/super-admin-desktop/navbar-no-need/top/NavbarTop';
import MarkUpRulePage from '../../pages/super-admin-desktop-pages/MarkUpRulePage'
import RestrictionPage from '../../pages/super-admin-desktop-pages/RestrictionPage'
import AssigenmentPage from '../../pages/super-admin-desktop-pages/AssigenmentPage'
import ProfileTablePage from '../../pages/super-admin-desktop-pages/ProfileTablePage'
import routes from './routes'
// import NavbarVertical from '../../components/super-admin-desktop/navbar-no-need/vertical/NavbarVertical'

function SuperAdminRoute() {
	const { pathname } = useLocation()
	return (
		<div className='container-fluid'>
			{!(pathname === '/' || pathname === '/demo-list') && (
				<NavbarVertical routes={routes} />
			)}
			<div className='content'>
				<TopNavBar />
				<div className='mt-2'>
					<Switch>
						<Route path='/' exact component={SALoginPage} />
						{/* DashboardPage */}
						<Route path='/sa-dashboard' exact component={DashboardPage} />
						{/* Content Management Pages */}
						<Route path='/flightadmin/profile' exact component={ProfileTablePage} />
						<Route path='/flightadmin/markuprules' exact component={MarkUpRulePage} />
						<Route
							path='/flightadmin/restrictions'
							exact
							component={RestrictionPage}
						/>
						<Route path='/flightadmin/pccs' exact component={PCCPage} />
						<Route
							path='/flightadmin/assigenments'
							exact
							component={AssigenmentPage}
						/>
						<Route path='/flightadmin/limits' exact component={LimitPage} />
						{/* Security */}
						<Route
							path='/flightadmin/volumerestrictions'
							exact
							component={VolumeRestrictionPage}
						/>
						<Route
							path='/flightadmin/usagerestrictions'
							exact
							component={UsageRestrictionPage}
						/>
						<Route path='/flightadmin/pccaccess' exact component={PCCAccessPage} />
						<Route path='/flightadmin/pcctenants' exact component={PCCTenantPage} />
						{/* /!* Cors pages *!/ */}
						<Route path='/flightadmin/cor' exact component={CorPage} />
						<Route path='/flightadmin/uploadcors' exact component={UploadCorPage} />
						<Route path='/demo-list' exact component={DemoLists} />
						<Redirect to='/errors/404' />
					</Switch>
				</div>
			</div>
		</div>
	)
}
export default SuperAdminRoute

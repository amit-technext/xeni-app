/* eslint-disable react/prop-types */
import Demo from 'pages/demo'
import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import Test from '../pages/test';
// import routes from 'routes/routes';
// import { flatRoutes } from 'helpers/utils';

// const inActiveRoutes = flatRoutes(routes).filter(route => !route.active);

// const EmailRoutes = ({ match: { url } }) => (
//   <EmailProvider>
//     <Switch>
//       <Route path={`${url}/email-detail`} exact component={EmailDetail} />
//       <Route path={`${url}/inbox`} exact component={Inbox} />
//       <Route path={`${url}/compose`} exact component={Compose} />
//       {/*Redirect*/}
//       <Redirect to="/errors/404" />
//     </Switch>
//   </EmailProvider>
// );
const MainRoutes: FC = function MainRoutes() {
	return (
		<Switch>
			<Route path='/' exact component={Demo} />;
			<Redirect to='/errors/404' />
		</Switch>
	)
}
export default MainRoutes

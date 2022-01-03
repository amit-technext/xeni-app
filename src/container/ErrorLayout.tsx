import React, { FC, HTMLAttributes } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Redirect, Route, Switch } from 'react-router-dom'
import Error404 from '../components/errors/Error404'
import Error500 from '../components/errors/Error500'
import Logo from '../components/common/utils/Logo'
import Section from '../components/common/utils/Section'

interface ErrorLayoutProps extends HTMLAttributes<HTMLOrSVGElement> {
	match: { url: string }
}

const ErrorLayout: FC<ErrorLayoutProps> = function ErrorLayout({
	match
}: ErrorLayoutProps) {
	const { url } = match
	return (
		<Section className='py-0'>
			<Row className='flex-center min-vh-100 py-6'>
				<Col sm={11} md={9} lg={7} xl={6} className='col-xxl-5'>
					<Logo logo='' />
					<Switch>
						<Route path={`${url}/404`} component={Error404} />
						<Route path={`${url}/500`} component={Error500} />
						<Redirect to={`${url}/404`} />
					</Switch>
				</Col>
			</Row>
		</Section>
	)
}

export default ErrorLayout

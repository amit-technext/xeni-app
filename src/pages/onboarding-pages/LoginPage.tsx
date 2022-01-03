import React, { FC } from 'react'
import { Card, Container } from 'react-bootstrap'
import LoginForm from '../../components/auth/Login'

const LoginPage: FC = function LoginPage() {
	return (
		<Container>
			<div className='w-90 w-md-60 w-xl-50 mx-auto my-10'>
				<Card>
					<Card.Header className='bg-200'>
						<Card.Title>XeniApp Flow</Card.Title>
					</Card.Header>
					<Card.Body>
						<LoginForm path='/' />
					</Card.Body>
				</Card>
			</div>
		</Container>
	)
}

export default LoginPage

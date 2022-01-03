import React, { FC } from 'react'
import { Card } from 'react-bootstrap'
import Divider from '../../components/common/utils/Divider'
import LoginFrom from '../../components/auth/Login'
// import LoginFrom from '../../components/agent-command-center-desktop/form-no-need/LoginForm'

const Login: FC = function Login() {
	return (
		<div className='d-flex justify-content-center align-items-center '>
			<Card className='w-xxl-30 w-xl-40 w-sm-50 mx-auto my-8'>
				<Card.Body>
					<Divider className='mb-4'>
						<h5>Agent Command Center</h5>
					</Divider>
					<LoginFrom path='dashboard' />
				</Card.Body>
			</Card>
		</div>
	)
}

export default Login

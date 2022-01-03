import React, { FC } from 'react'
import { Card } from 'react-bootstrap'
// import Divider from '../../common/Divider'
// import LoginForm from '../components/auth/LoginForm'

const Login: FC = function Login() {
	return (
		<div className='d-flex justify-content-center align-items-center '>
			<Card className='w-xxl-30 w-xl-40 w-sm-50 mx-auto my-8'>
				<Card.Body>
					{/* <Divider className='mb-4'> */}
					<h5>B2C desktop App</h5>
					{/* </Divider>
					<LoginForm /> */}
				</Card.Body>
			</Card>
		</div>
	)
}

export default Login

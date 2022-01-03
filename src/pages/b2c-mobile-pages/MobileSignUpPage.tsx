import React, { FC } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Flex from '../../components/common/utils/Flex'
import MobileSignUp from '../../components/auth/MobileSignUp'

const MobileSignUpPage: FC = function Login() {
	return (
		<div className='d-flex justify-content-center align-items-center '>
			<Card className='w-xxl-30 w-xl-40 w-sm-50 mx-auto my-sm-8 my-4 shadow-sm'>
				<Card.Body>
					<Flex justifyContent='between' alignItems='center' className='mb-2'>
						<h5>Register</h5>
						<p className='fs--1 text-600 mb-0'>
							Have an account? <Link to='/m-login'>Login</Link>
						</p>
					</Flex>
					<MobileSignUp path='flight' />
				</Card.Body>
			</Card>
		</div>
	)
}

export default MobileSignUpPage

import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Form, Row, Col } from 'react-bootstrap'
// import SocialAuthButtons from './SocialAuthButtons'
// import Divider from 'components/common/utils/Divider'

interface LoginProps {
	hasLabel?: boolean
	path: string
}

const MobileLogin: FC<LoginProps> = function MobileLogin(props) {
	const { hasLabel, path } = props
	const history = useHistory()
	// State
	const [formData, setFormData] = useState({
		email: 'customer@gmail.com',
		password: '2342342342423423423',
		remember: false
	})

	// Handler
	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		history.push(`/${path}`)
		toast.success(`Logged in as ${formData.email}`)
	}

	const handleFieldChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setFormData({
			...formData,
			remember: e.target.checked
		})
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mb-3'>
				{hasLabel && <Form.Label>Email address</Form.Label>}
				<Form.Control
					placeholder={!hasLabel ? 'Email address' : ''}
					value={formData.email}
					name='email'
					onChange={handleFieldChange}
					type='email'
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				{hasLabel && <Form.Label>Password</Form.Label>}
				<Form.Control
					placeholder={!hasLabel ? 'Password' : ''}
					value={formData.password}
					name='password'
					onChange={handleFieldChange}
					type='password'
				/>
			</Form.Group>

			<Row className='justify-content-between align-items-center'>
				<Col xs='auto'>
					<Form.Check type='checkbox' id='rememberMe'>
						<Form.Check.Input
							type='checkbox'
							name='remember'
							checked={formData.remember}
							onChange={onChangeHandler}
						/>
						<Form.Check.Label className=' mb-0'>Remember Me</Form.Check.Label>
					</Form.Check>
				</Col>

				<Col xs='auto'>
					<Link className='fs--1 mb-0' to='#!'>
						Forget Password?
					</Link>
				</Col>
			</Row>

			<Form.Group>
				<Button
					type='submit'
					color='primary'
					className='mt-3 w-100'
					disabled={!formData.email || !formData.password}
				>
					Log in
				</Button>
			</Form.Group>

			{/* <Divider className='mt-4'>or log in with</Divider> */}

			{/* <SocialAuthButtons /> */}
		</Form>
	)
}

MobileLogin.defaultProps = {
	hasLabel: false
}

export default MobileLogin

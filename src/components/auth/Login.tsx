import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Form, Row, Col } from 'react-bootstrap'

interface LoginProps {
	layout?: string
	hasLabel?: boolean
	path: string
}

const Login: FC<LoginProps> = function Login(props) {
	const { hasLabel, layout, path } = props
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
							onChange={(e): void =>
								setFormData({
									...formData,
									remember: e.target.checked
								})
							}
						/>
						<Form.Check.Label className='ms-2 mb-0'>Remember Me</Form.Check.Label>
					</Form.Check>
				</Col>

				<Col xs='auto'>
					<Link
						className='fs--1 mb-0'
						to={`/authentication/${layout}/forgot-password`}
					>
						Forget Password?
					</Link>
				</Col>
			</Row>

			<Form.Group>
				<Button
					type='submit'
					color='primary'
					className='mt-2 w-100'
					disabled={!formData.email || !formData.password}
				>
					Log in
				</Button>
			</Form.Group>
		</Form>
	)
}

Login.defaultProps = {
	layout: 'simple',
	hasLabel: false
}

export default Login

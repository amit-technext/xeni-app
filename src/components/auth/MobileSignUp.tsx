/* eslint-disable no-console */
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Form, Row, Col } from 'react-bootstrap'
// import Divider from '../common/utils/Divider'
// import SocialAuthButtons from './SocialAuthButtons'

interface LoginProps {
	hasLabel?: boolean
	path: string
	layout?: string
}

const MobileSignUp: FC<LoginProps> = function MobileSignUp(props) {
	const { hasLabel, layout, path } = props
	const history = useHistory()

	console.log(layout)

	// State
	const [formData, setFormData] = useState({
		name: 'Jhon Doe',
		email: 'customer@gmail.com',
		password: '12345678',
		confirmPassword: '12345678',
		isAccepted: false
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

	const onAcceptChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setFormData({
			...formData,
			isAccepted: e.target.checked
		})
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mb-3'>
				{hasLabel && <Form.Label>Name</Form.Label>}
				<Form.Control
					placeholder={!hasLabel ? 'Name' : ''}
					value={formData.name}
					name='name'
					onChange={handleFieldChange}
					type='text'
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				{hasLabel && <Form.Label>Email address</Form.Label>}
				<Form.Control
					placeholder={!hasLabel ? 'Email address' : ''}
					value={formData.email}
					name='email'
					onChange={handleFieldChange}
					type='text'
				/>
			</Form.Group>

			<Row className='g-2 mb-3'>
				<Form.Group as={Col} sm={6} className='mb-2'>
					{hasLabel && <Form.Label>Password</Form.Label>}
					<Form.Control
						placeholder={!hasLabel ? 'Password' : ''}
						value={formData.password}
						name='password'
						onChange={handleFieldChange}
						type='password'
					/>
				</Form.Group>
				<Form.Group as={Col} sm={6}>
					{hasLabel && <Form.Label>Confirm Password</Form.Label>}
					<Form.Control
						placeholder={!hasLabel ? 'Confirm Password' : ''}
						value={formData.confirmPassword}
						name='confirmPassword'
						onChange={handleFieldChange}
						type='password'
					/>
				</Form.Group>
			</Row>

			<Form.Group className='mb-3'>
				<Form.Check type='checkbox' id='acceptCheckbox' className='form-check'>
					<Form.Check.Input
						type='checkbox'
						name='isAccepted'
						checked={formData.isAccepted}
						onChange={onAcceptChangeHandler}
					/>
					<Form.Check.Label className='form-label'>
						I accept the <Link to='#!'>terms</Link> and{' '}
						<Link to='#!'>privacy policy</Link>
					</Form.Check.Label>
				</Form.Check>
			</Form.Group>

			<Form.Group className='mb-4'>
				<Button
					className='w-100'
					type='submit'
					disabled={
						!formData.name ||
						!formData.email ||
						!formData.password ||
						!formData.confirmPassword ||
						!formData.isAccepted
					}
				>
					Register
				</Button>
			</Form.Group>
			{/* <Divider className=''>or register with</Divider> */}

			{/* <SocialAuthButtons /> */}
		</Form>
	)
}

MobileSignUp.defaultProps = {
	layout: 'simple',
	hasLabel: false
}

export default MobileSignUp

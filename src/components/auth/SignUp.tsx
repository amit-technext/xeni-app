import React, { FC } from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import slider1 from '../../assets/img/slider/plane.png'
import Logo from '../../assets/img/slider/logo.svg'
import Flex from '../common/utils/Flex'

export const sliders = [
	{
		id: '1',
		image: slider1,
		title: 'Welcome to Xeniapp',
		shortDesc: 'The one stop shop for travel industry professionals'
	},
	{
		id: '2',
		image: slider1,
		title: 'Welcome to Xeniapp',
		shortDesc: 'The one stop shop for travel industry professionals'
	},
	{
		id: '3',
		image: slider1,
		title: 'Welcome to Xeniapp',
		shortDesc: 'The one stop shop for travel industry professionals'
	}
]

const SignUp: FC = function SignUp() {
	return (
		<Row
			className='SignupPage w-100 position-relative p-0 m-0'
			style={{ height: '100vh' }}
		>
			<Col xs={12} lg={8} className='p-0 m-0'>
				<Carousel>
					{sliders?.map(slider => (
						<Carousel.Item key={slider.id} interval={3000}>
							<img className='w-100 SliderImg' src={slider.image} alt='First slide' />
							<Carousel.Caption>
								<p className='text-white fs-1 fs-sm-1 fs-md-1 fs-xl-3 fw-bold'>
									{slider.title}
								</p>
								<p className='fs--1'>{slider.shortDesc}</p>
							</Carousel.Caption>
						</Carousel.Item>
					))}
				</Carousel>
			</Col>
			<Col xs={12} lg={4} className='p-0 m-0 d-none d-lg-flex'>
				<div className='w-100 w-md-30 ps-3 mt-3 d-none d-md-block'>
					<img src={Logo} alt='First slide' height='40' />
				</div>
			</Col>
			<div>
				<Card className='signup-card position-absolute p-2 p-xxl-3'>
					<Card.Body>
						<Flex alignItems='center' justifyContent='between' className='mb-2 row'>
							<p className='col-auto fs-1 fs-sm-2 text-black fw-semi-bold mb-0 me-0 me-xxl-5'>
								Sign up
							</p>
							<span className='col-auto fs--2 fs-sm--1 mb-0 text-700 fw-semi-bold'>
								Already have account?
								<Link to='/login' className='ms-2 fw-bold text-decoration-none'>
									Log in
								</Link>
							</span>
						</Flex>
						<Form className='w-100'>
							<Form.Group className='mb-3' controlId='formBasicEmail'>
								<Form.Label>Email address</Form.Label>
								<Form.Control type='email' />
							</Form.Group>

							<Form.Group className='mb-3' controlId='formBasicPassword'>
								<Form.Label className='d-flex justify-content-between'>
									Password
									<Link
										to='/signup'
										className='ms-2 fs--2 fs-md--1 text-decoration-none'
									>
										Forgot Password?
									</Link>
								</Form.Label>
								<Form.Control type='password' />
							</Form.Group>
							<Form.Group className='mb-3' controlId='formBasicCheckbox'>
								<Form.Check type='checkbox' label='Remember me' />
							</Form.Group>
							<Link to='/pricing'>
								<Button className='w-100 bg-primary border-0' variant='primary'>
									Sign up
								</Button>
							</Link>
						</Form>
					</Card.Body>
				</Card>
			</div>
		</Row>
	)
}

export default SignUp

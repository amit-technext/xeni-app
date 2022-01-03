import React, { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useReduxState'
import { setAppName } from '../features/context/contextSlice'

const DemoLists: FC = function DemoLists() {
	const history = useHistory()
	const dispatch = useAppDispatch()
	// no change

	return (
		<div className='w-xxl-70 w-xl-90 mx-auto mt-7 mb-8'>
			<div className='row justify-content-center mx-3'>
				{/* <div className="col-lg-4 col-md-6 col-sm-12 "> */}
				<Card className='col-lg-4 col-8 w-xxl-25 w-md-30 m-3 d-flex justify-content-between '>
					{/* <Card.Img src={generic1} variant="top" /> */}
					<div className='mt-3 px-3'>
						<h5 className='text-1000 fw-bold mt-2'> Agent Command Center Mobile </h5>
						<p> Coming soon ... </p>
					</div>
					<div className='pb-3'>
						<div className='d-flex justify-content-center'>
							<Button
								onClick={(): void => {
									dispatch(setAppName('default'))
									history.push('/')
								}}
								color='primary'
								size='sm'
							>
								AGC Mobile view
							</Button>
						</div>
					</div>
				</Card>
				{/* </div> */}
				{/* <div className="col-lg-4 col-md-6 col-sm-12"> */}
				<Card className='col-lg-4 col-8 w-xxl-25 w-md-30 m-3 d-flex justify-content-between '>
					<div className='mt-3 px-3'>
						<h5 className='text-1000 fw-bold mt-2'> B2C App </h5>
						<p>
							{' '}
							Search, compare, book your desired flight tickets, hotels, cars, and
							other activities from B2C App.{' '}
						</p>
					</div>
					<div className='pb-3'>
						<div className='d-flex justify-content-center'>
							<Button
								onClick={(): void => {
									dispatch(setAppName('b2c_app'))
									history.push('/')
								}}
								color='primary'
								size='sm'
							>
								B2C App
							</Button>
						</div>
					</div>
				</Card>
				{/* </div> */}
				{/* <div className=""> */}
				<Card className='col-lg-4 col-8 w-xxl-25 w-md-30 m-3 d-flex justify-content-between '>
					<div className='mt-3 px-3'>
						<h5 className='text-1000 fw-bold mt-2'> Super Admin App </h5>
						<p>
							Get full access to manage the different sites, including adding,
							deleting, and editing all pages and modules from Super Admin App.
						</p>
					</div>
					<div className='pb-3'>
						<div className='d-flex justify-content-center'>
							<Button
								onClick={(): void => {
									dispatch(setAppName('super_admin'))
									history.push('/')
								}}
								color='primary'
								size='sm'
							>
								Super Admin App
							</Button>
						</div>
					</div>
				</Card>
				{/* </div> */}
				{/* <div className="col-lg-3 col-md-6 col-sm-12"> */}
				<Card className='col-lg-4 col-8 w-xxl-25 w-md-30 m-3 d-flex justify-content-between '>
					<div className='mt-3 px-3'>
						<h5 className='text-1000 fw-bold mt-2'> Agent Command Center </h5>
						<p>
							Find all modules, including an overview needed for an agent from Agent
							Command Center.
						</p>
					</div>
					<div className='pb-3'>
						<div className='d-flex justify-content-center'>
							<Button
								onClick={(): void => {
									dispatch(setAppName('ag_command_center'))
									history.push('/')
								}}
								color='primary'
								size='sm'
							>
								Command Center
							</Button>
						</div>
					</div>
				</Card>
				{/* </div> */}
				{/* <div className="col-lg-3 col-md-6 col-sm-12"> */}
				<Card className='col-lg-4 col-8 w-xxl-25 w-md-30 m-3 d-flex justify-content-between '>
					<div className='mt-3 px-3'>
						<h5 className='text-1000 fw-bold mt-2'> XeniApp Flow </h5>
						<p>
							Manage Xeni App, including Itineraries, commissions, operations,
							campaigns, customers from Xeni App Flow.
						</p>
					</div>
					<div className='pb-3'>
						<div className='d-flex justify-content-center'>
							<Button
								onClick={(): void => {
									dispatch(setAppName('onboarding'))
									history.push('/')
								}}
								color='primary'
								size='sm'
							>
								XeniApp Flow
							</Button>
						</div>
					</div>
				</Card>
				{/* </div> */}
				{/* <div className="col-lg-3 col-md-6 col-sm-12"> */}
				<Card className='col-lg-4 col-8 w-xxl-25 w-md-30 m-3 d-flex justify-content-between '>
					<div className='mt-3'>
						<h5 className='text-1000 fw-bold mt-2'> B2C Mobile View </h5>
						<p>
							View an alternate version of the website on smartphones or similar mobile
							devices from B2C Mobile View.
						</p>
					</div>
					<div className='pb-3'>
						<div className='d-flex justify-content-center'>
							<Button
								onClick={(): void => {
									dispatch(setAppName('b2c_mobile'))
									history.push('/m-login')
								}}
								color='primary'
								size='sm'
							>
								Mobile View
							</Button>
						</div>
					</div>
				</Card>
			</div>
		</div>
	)
}

export default DemoLists

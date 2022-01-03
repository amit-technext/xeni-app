import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Breadcrumb, Card, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DashboardData from '../../data/super-admin-desktop/dashboardData'
import Flex from '../../components/common/utils/Flex'
import SoftBadge from '../../components/common/utils/SoftBadge'

function DashboardPage() {
	const statisticsData = DashboardData[0].children
	const time = DashboardData[1].children
	return (
		<Flex direction='column' className='mx-4'>
			<Card>
				<Card.Body>
					<Flex justifyContent='between'>
						<div className='mt-2'>
							<Breadcrumb>
								<Breadcrumb.Item href='#' active>
									Home
								</Breadcrumb.Item>
								<Breadcrumb.Item href='/flightadmin/dashboard'>
									dashboard
								</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div className=''>
							<Button variant='outline-primary'>Back to Dashboard</Button>
						</div>
					</Flex>
				</Card.Body>
			</Card>
			<Card className='mt-2 mb-3'>
				<Card.Body>
					<h3 className='text-primary'>
						Good {time.when},{time.name}
					</h3>
					<div className='fw-semi-bold text-500 fs-1'>
						<p>Here's what happening with your statistics today</p>
					</div>
					<div>
						<h4>Statistic</h4>
						<Row>
							{statisticsData.map((item, index) => (
								<Card
									className='mx-3 col-3 my-3'
									style={{ width: '18rem' }}
									key={index}
								>
									<Card.Body>
										<Card.Title>
											<Flex
												justifyContent='center'
												alignItems='center'
												className='rounded-circle bg-soft-primary p-2'
												style={{ width: '2.5rem', height: '2.5rem' }}
											>
												<FontAwesomeIcon
													icon={item.icon}
													className={`text-${
														item.title === 'Complain' ? 'danger' : 'primary'
													} fs-1`}
												/>
											</Flex>
										</Card.Title>
										<Card.Text className='mt-3'>
											<div className='fw-bolder'>{item.title} </div>
											<div className='d-flex row-directions'>
												<h6 className='fs-3 mt-2'>{item.number}</h6>
												<div>
													<SoftBadge
														pill
														bg={item.percentage >= 0 ? 'success' : 'danger'}
														className='me-2 mt-3 ms-2 '
													>
														{item.percentage >= 0 ? '+' : ''}
														{item.percentage}%
													</SoftBadge>
												</div>
											</div>
										</Card.Text>
									</Card.Body>
								</Card>
							))}
						</Row>
					</div>
					<div className='mt-4'>
						<h4>Total Amount</h4>
					</div>
					<div className='card w-75 '>
						<Flex justifyContent='between' className='my-3 mx-3'>
							<h6 className='text-900'>
								<b>Overview</b>
							</h6>
							<Link to='#' style={{ textDecoration: 'none' }}>
								<b>View all {'>'} </b>
							</Link>
						</Flex>
						<Row>
							{statisticsData.map((item, index) =>
								index < 6 ? (
									<div
										className='col-3 m-1 p-3 d-flex align-items-center ms-7'
										key={index}
									>
										<Flex
											justifyContent='center'
											alignItems='center'
											className='rounded-circle bg-soft-primary p-2'
											style={{ width: '2.5rem', height: '2.5rem' }}
										>
											<FontAwesomeIcon
												icon={item.icon}
												className={`text-${
													item.title === 'Complain' ? 'danger' : 'primary'
												} fs-1`}
											/>
										</Flex>
										<div className='d-block ms-3 '>
											<h6 className='text-700'>{item.title}</h6>
											<h4>$ {item.totalAmount}</h4>
										</div>
									</div>
								) : (
									''
								)
							)}
						</Row>
					</div>
				</Card.Body>
			</Card>
		</Flex>
	)
}

export default DashboardPage

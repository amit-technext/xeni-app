/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { data } from '../../data/onboarding/PricingData'
import CollapseComponent from '../../components/onboarding/CollapseComponent'
import Flex from '../../components/common/utils/Flex'

const PricingPage: FC = function PricingPage() {
	return (
		<div className='mt-3 mt-sm-6'>
			<Flex direction='column' alignItems='center' className='text-center pb-4'>
				<div>
					<p className='fs-1 text-black fw-bold'>
						One booking engine for everything
					</p>
				</div>
				<div className='w-90 w-sm-80 w-md-70'>
					<p>
						Your Xeniapp login grants you access to a full portfolio of bookable
						travel. Book everything from villas to cruises to private jet travel and
						much more, at the best prices on the market.
					</p>
				</div>
			</Flex>
			<Container>
				<div className='card mb-3'>
					<div className='card-body pt-4 px-3 px-sm-5'>
						<Row className='g-0'>
							<Col xs={12} className='mb-3'>
								<Row className='justify-content-center justify-content-sm-between'>
									<Col sm='auto' className=' text-center'>
										<h5 className='d-inline-block'>Billed Annually</h5>
										<span className='badge badge-soft-success rounded-pill ms-2'>
											Save 25%
										</span>
									</Col>
									<Col sm='auto' className='d-flex justify-content-center mt-1 mt-sm-0'>
										<label className='form-check-label me-2'>Monthly</label>
										<Form.Check type='switch' id='defaultSwitch1' defaultChecked />
										<label className='form-check-label align-top'>Yearly</label>
									</Col>
								</Row>
							</Col>
							<Col lg={4} className='border-top'>
								<div className='h-100'>
									<div className='text-center p-4'>
										<h3 className='fw-normal my-0'>{data.single.class}</h3>
										<p className='mt-3 fs--1'>{data.single.message}</p>
										<h2 className='fw-medium my-4'>
											{' '}
											<sup className='fw-normal fs-2 me-1'>&#x24;</sup>
											{data.single.amount}
											<small className='fs--1 text-700'>/ {data.single.duration}</small>
										</h2>
										<Link className='btn btn-outline-primary' to={data.single.action_url}>
											{data.single.action_text}
										</Link>
									</div>
									<hr className='border-bottom-0 m-0' />
									<div className='text-black fw-semi-bold ms-5 pt-3'>
										{data.single.highlight_message}
									</div>
									<hr />
									<div className='text-start px-sm-4 py-0'>
										{data.single.information?.map((title, index) => (
											<CollapseComponent
												key={index.toString()}
												title={title.collapse_title}
												icon={title.icon}
												initialState
											>
												<ul className='list-unstyled mt-0'>
													{title.list?.map((item, ind) => (
														<li
															key={ind.toString()}
															className='d-flex align-items-center py-1 fs--1 fw-normal'
														>
															<FontAwesomeIcon className='me-3 text-success' icon={faCheck} />
															<span>{item}</span>
														</li>
													))}
												</ul>
												<hr className='mb-0' />
											</CollapseComponent>
										))}
									</div>
								</div>
							</Col>
							<Col lg={4} className='bg-200 border-top dark__bg-1000 px-4 px-lg-0'>
								<div className='h-100'>
									<div className='text-center p-4'>
										<h3 className='fw-normal my-0'>{data.standard.class}</h3>
										<p className='mt-3 fs--1'>{data.standard.message}</p>
										<h2 className='fw-medium my-4'>
											{' '}
											<sup className='fw-normal fs-2 me-1'>&#x24;</sup>
											{data.standard.amount}
											<small className='fs--1 text-700'>/ {data.standard.duration}</small>
										</h2>
										<Link
											className='btn btn-outline-primary bg-primary text-white'
											to={data.standard.action_url}
										>
											{data.standard.action_text}
										</Link>
									</div>
									<hr className='border-bottom-0 m-0' />
									<div className='text-black fw-semi-bold ms-5 pt-3'>
										{data.standard.highlight_message}
									</div>
									<hr />
									<div className='text-start px-sm-4 py-0'>
										{data.standard.information?.map((title, index) => (
											<CollapseComponent
												key={index.toString()}
												title={title.collapse_title}
												icon={title.icon}
												initialState
											>
												<ul className='list-unstyled mt-0'>
													{title.list?.map((item, ind) => (
														<li
															key={ind.toString()}
															className='d-flex align-items-center py-1 fs--1 fw-normal'
														>
															<FontAwesomeIcon className='me-3 text-success' icon={faCheck} />
															<span>{item}</span>
														</li>
													))}
												</ul>
												<hr className='mb-0' />
											</CollapseComponent>
										))}
									</div>
								</div>
							</Col>
							<Col lg={4} className='border-top'>
								<div className='h-100'>
									<div className='text-center p-4'>
										<h3 className='fw-normal my-0'>{data.premium.class}</h3>
										<p className='mt-3 fs--1'>{data.premium.message}</p>
										<h2 className='fw-medium my-4'>
											{' '}
											<sup className='fw-normal fs-2 me-1'>&#x24;</sup>
											{data.premium.amount}
											<small className='fs--1 text-700'>/ {data.premium.duration}</small>
										</h2>
										<Link
											className='btn btn-outline-primary'
											to={data.premium.action_url}
										>
											{data.premium.action_text}
										</Link>
									</div>
									<hr className='border-bottom-0 m-0' />
									<div className='text-black fw-semi-bold ms-5 pt-3'>
										{data.premium.highlight_message}
									</div>
									<hr />
									<div className='text-start px-sm-4 py-0'>
										{data.premium.information?.map((title, index) => (
											<CollapseComponent
												key={index.toString()}
												title={title.collapse_title}
												icon={title.icon}
												initialState
											>
												<ul className='list-unstyled mt-0'>
													{title.list?.map((item, ind) => (
														<li
															key={ind.toString()}
															className='d-flex align-items-center py-1 fs--1 fw-normal'
														>
															<FontAwesomeIcon className='me-3 text-success' icon={faCheck} />
															<span>{item}</span>
														</li>
													))}
												</ul>
												<hr className='mb-0' />
											</CollapseComponent>
										))}
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default PricingPage

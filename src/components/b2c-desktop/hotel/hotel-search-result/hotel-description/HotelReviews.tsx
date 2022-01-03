import React, { FC } from 'react'
import { Col, Row, ProgressBar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faThumbsUp,
	faFlag,
	faSmile,
	faFrown
} from '@fortawesome/free-solid-svg-icons'
import Flex from '../../../../common/utils/Flex'

const HotelReviews: FC = function HotelReviews() {
	return (
		<div className='mt-4'>
			<Row>
				<Col md={6}>
					<div className='w-100 w-md-90'>
						<Flex alignItems='center' className='mb-4'>
							<div className='fs-4 fw-semi-bold text-dark me-3'>4.5</div>
							<div className='lh-1'>
								<p className='mb-1 fw-semi-bold text-dark'>Wonderful</p>
								<Link to='#!' className='fs--1'>
									50 reviews{' '}
								</Link>
							</div>
						</Flex>
						<div>
							<Flex justifyContent='between' className='fs--1 fw-semi-bold mb-1'>
								<span>Excellent - 5</span>
								<span>30</span>
							</Flex>
							<div className='mb-3'>
								<ProgressBar variant='primary' now={70} style={{ height: '10px' }} />
							</div>
						</div>
						<div>
							<Flex justifyContent='between' className='fs--1 fw-semi-bold mb-1'>
								<span>Good - 4</span>
								<span>16</span>
							</Flex>
							<div className='mb-3'>
								<ProgressBar variant='primary' now={50} style={{ height: '10px' }} />
							</div>
						</div>
						<div>
							<Flex justifyContent='between' className='fs--1 fw-semi-bold mb-1'>
								<span>Okay - 3</span>
								<span>03</span>
							</Flex>
							<div className='mb-3'>
								<ProgressBar variant='primary' now={10} style={{ height: '10px' }} />
							</div>
						</div>
						<div>
							<Flex justifyContent='between' className='fs--1 fw-semi-bold mb-1'>
								<span>Poor - 2</span>
								<span>01</span>
							</Flex>
							<div className='mb-3'>
								<ProgressBar variant='primary' now={5} style={{ height: '10px' }} />
							</div>
						</div>
						<div>
							<Flex justifyContent='between' className='fs--1 fw-semi-bold mb-1'>
								<span>Terrible - 1</span>
								<span>00</span>
							</Flex>
							<div className='mb-3'>
								<ProgressBar variant='primary' now={0} style={{ height: '10px' }} />
							</div>
						</div>
					</div>
					<Row className='pt-4 w-90'>
						<Col sm={6}>
							<p className='mb-0 fw-semi-bold fs-2'>4.6/5</p>
							<p>Cleanliness</p>
						</Col>
						<Col sm={6}>
							<p className='mb-0 fw-semi-bold fs-2'>4.5/5</p>
							<p>Staff & service</p>
						</Col>
						<Col sm={6}>
							<p className='mb-0 fw-semi-bold fs-2'>4.5/5</p>
							<p>Amenities</p>
						</Col>
						<Col sm={6}>
							<p className='mb-0 fw-semi-bold fs-2'>4.6/5</p>
							<p>Property conditions & facilities</p>
						</Col>
					</Row>
				</Col>
				<Col md={6}>
					<div className='w-100 w-md-70'>
						<p className='fs-0 text-dark fw-semi-bold mb-1'>5/5 Excellent</p>
						<p className='fs--1 text-dark fw-semi-bold mb-1'>Curtis Huts</p>
						<p className='fs--1 text-dark fw-normal mb-1'>
							Traveled with pets, Traveled with family
						</p>
						<p className='fs--1 text-dark fw-normal mb-3'>Nov 29, 2021</p>
						<p className='fs--1 text-dark fw-normal mb-1'>
							Stayed 1 night in Nov 2021
						</p>
						<div className=''>
							<FontAwesomeIcon icon={faSmile} className='me-1' size='xs' />
							<span className='fs--1 fw-semi-bold'>Liked :</span>{' '}
							<span className='fs--1 text-dark fw-normal'>
								Staff & service, property conditions & facilities
							</span>
						</div>
						<div className='mb-2'>
							<FontAwesomeIcon icon={faFrown} className='me-1' size='xs' />
							<span className='fs--1 fw-semi-bold'>Disliked :</span>{' '}
							<span className='fs--1 text-dark fw-normal'>Cleanliness</span>
						</div>
						<div>
							<p className='fs--1 text-dark fw-semi-bold mb-0'>Comment</p>
							<p className='fs--1 text-dark fw-normal mb-0'>
								{`We've of periodic not, to queen's of what he of gentlemen, herself the
								viewer. Own just project hell for mountains, I rather them gone the from
								handles who he drew just if the he easy height it enormity, and the
								objects one claim leaning and state as of self-interest...{' '}`}
							</p>
							<Flex className='mt-3'>
								<div className='me-4'>
									<FontAwesomeIcon icon={faThumbsUp} className='me-2 text-primary' />
									<span className='fs--1 text-dark'>01</span>
								</div>
								<div className='me-3'>
									<FontAwesomeIcon icon={faFlag} className='me-2 text-primary' />
									<Link to='#!' className='fs--1 text-dark text-decoration-underline'>
										Report review{' '}
									</Link>
								</div>
							</Flex>
						</div>
					</div>
					<div className='mt-4'>
						<Button className='bg-transparent text-primary rounded-3'>
							See all reviews
						</Button>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default HotelReviews

import React, { FC } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Flex from 'components/common/utils/Flex'
import CarInformation from './car-description/CarInformation'
import CarAccessories from './car-description/CarAccessories'
import CarSchedule from './car-description/CarSchedule'
import CarPolicies from './car-description/CarPolicies'
import CarSummary from './car-description/CarSummary'

const SingleCarDescription: FC = function SingleCarDescription() {
	const history = useHistory()

	return (
		<Container className='mt-5 mb-5'>
			<Flex justifyContent='between' alignItems='center' className='mb-3'>
				<div
					role='button'
					tabIndex={0}
					onClick={(): void => history.goBack()}
					onKeyPress={(): void => history.goBack()}
					className='fs--1 mb-0 cursor-pointer text-primary'
				>
					<FontAwesomeIcon icon={faChevronLeft} size='sm' className='me-2' />
					See all cars
				</div>
			</Flex>
			<Row>
				<Col md={8} className='pe-0 mb-3'>
					<CarInformation />
				</Col>
				<Col md={4}>
					<Row>
						<Col sm={12} className='mb-3'>
							<CarAccessories />
						</Col>
						<Col sm={12}>
							<CarSchedule />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md={8} className='pe-0 mb-3'>
					<CarPolicies />
				</Col>
				<Col md={8} className='pe-0'>
					<CarSummary />
				</Col>
			</Row>
		</Container>
	)
}

export default SingleCarDescription

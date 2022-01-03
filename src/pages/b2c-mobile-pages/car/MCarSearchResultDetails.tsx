import MobileContainer from 'container/b2c-mobile/MobileContainer'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarInformation from '../../../components/b2c-mobile/car/search-result/car-details/CarInformation'
import CarAccessories from '../../../components/b2c-mobile/car/search-result/car-details/CarAccessories'
import CarSchedule from '../../../components/b2c-mobile/car/search-result/car-details/CarSchedule'
import CarPolicies from '../../../components/b2c-mobile/car/search-result/car-details/CarPolicies'
import CarSummary from '../../../components/b2c-mobile/car/search-result/car-details/CarSummary'

const MCarSearchResultDetails: FC = function MCarSearchResultDetails() {
	const history = useHistory()

	return (
		<MobileContainer>
			<div className='mb-3'>
				<div
					role='button'
					tabIndex={0}
					onClick={(): void => history.goBack()}
					onKeyPress={(): void => history.goBack()}
					className='fs--1 mb-0 pt-3 cursor-pointer text-primary'
				>
					<FontAwesomeIcon icon={faChevronLeft} size='sm' className='me-2' />
					See all cars
				</div>
			</div>
			<CarInformation />
			<CarAccessories />
			<CarSchedule />
			<CarPolicies />
			<CarSummary />
		</MobileContainer>
	)
}

export default MCarSearchResultDetails

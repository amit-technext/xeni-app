import React, { FC } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import CarSearchResult from './CarSearchResult'
import CarsResultSorter from './CarsResultSorter'
import cars from '../../../../data/b2c-desktop/SearchCarData'
import CarSearchResultCount from './CarSearchResultCount'

const CarsSearchResultGenerator: FC = function CarsSearchResultGenerator() {
	return (
		<Row>
			<Col lg={4}>
				<Card>
					<Card.Body>
						<CarsResultSorter />
					</Card.Body>
				</Card>
			</Col>
			<Col lg={8} className='px-0'>
				<CarSearchResultCount />
				<CarSearchResult searchResult={cars} />
			</Col>
		</Row>
	)
}

export default CarsSearchResultGenerator

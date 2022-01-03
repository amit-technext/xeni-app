import React, { FC, HTMLAttributes } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import FlightSearchResult from './FlightSearchResult'
import FlightResultSorter from './FlightResultSorter'
import FlightPriceSorter from './FlightPriceSorter'
import { useAppSelector } from '../../../../hooks/useReduxState'
import { FlightData } from '../../../../type/FlightSearchResultDataType'

interface FlightSearchResultGeneratorProps
	extends HTMLAttributes<HTMLOrSVGElement> {
	flightData: FlightData[]
}

const FlightSearchResultGenerator: FC<FlightSearchResultGeneratorProps> =
	function FlightSearchResultGenerator(props) {
		const { flightData } = props

		const { tripType } = useAppSelector(state => state.context)
		const searchArray = [1, 2, 3]

		return (
			<Row>
				<Col lg={4}>
					<Card>
						<Card.Body>
							<FlightResultSorter />
						</Card.Body>
					</Card>
				</Col>
				<Col lg={8} className='px-0'>
					<FlightPriceSorter />
					<div className='bg-100 rounded-3 mb-4'>
						<div className='d-flex fs--1 fw-semi-bold text-uppercase text-primary cursor-pointer ms-3'>
							<div className='bg-soft-primary px-3 py-1 rounded-top-lg'>VS26</div>
							<div className='ps-2 py-1'>Show code-share options</div>
						</div>
						<div className='bg-soft-primary p-2 rounded-3'>
							{searchArray.map(item => (
								<div key={item} className='mb-3 last-mb-0'>
									<FlightSearchResult
										searchData={
											// eslint-disable-next-line no-nested-ternary
											tripType === 'One Way'
												? flightData.slice(0, 1)
												: tripType === 'Return'
												? flightData.slice(0, 2)
												: flightData
										}
									/>
								</div>
							))}
						</div>
					</div>
				</Col>
			</Row>
		)
	}

export default FlightSearchResultGenerator

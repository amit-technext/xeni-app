import React, { FC, useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import {
	HotelSearchResultGeneratorProps,
	IHotelSearchProps
} from 'interface/IHotelProps'
import HotelSearchResult from './HotelSearchResult'
import HotelResultSorter from './HotelResultSorters'
import { selectHotelForCompareHandler } from '../../../../services/hotel/hotelCompareFunctions'
import HotelSearchResultCount from '../../../b2c-mobile/hotel/hotel-search-result/HotelSearchResultCount'

const HotelSearchResultGenerator: FC<HotelSearchResultGeneratorProps> =
	function HotelSearchResultGenerator(props) {
		const { hotelSearchResult, selectedHotel, setSelectedHotel, dayCount } = props

		const [isLoading, setLoading] = useState(false)

		useEffect(() => {
			if (isLoading) {
				setTimeout(() => {
					setLoading(false)
				}, 2000)
			}
		}, [isLoading])

		const handleClick = (): void => setLoading(true)

		const addHotelToCompare = (hotel: IHotelSearchProps): void => {
			selectHotelForCompareHandler(hotel, selectedHotel, setSelectedHotel)
		}

		const checkIsInCompare = (id: string): boolean =>
			selectedHotel.some((el: any): boolean => el.id === id)

		return (
			<Row>
				<Col lg={4}>
					<Card>
						<Card.Body>
							<HotelResultSorter />
						</Card.Body>
					</Card>
				</Col>

				<Col lg={8} className='px-0'>
					<HotelSearchResultCount />

					{hotelSearchResult.map((hotel: IHotelSearchProps) => (
						<HotelSearchResult
							key={hotel.id}
							hotelData={hotel}
							dayCount={dayCount}
							addedToCompare={checkIsInCompare(hotel.id)}
							addToCompare={(): void => addHotelToCompare(hotel)}
						/>
					))}

					<Button
						disabled={isLoading}
						onClick={!isLoading ? handleClick : (): void => {}}
						bsPrefix='btn bg-primary text-100 fs-1 fw-semi-bold py-3 w-100 mt-4'
					>
						{isLoading ? 'Searching for mor results ...' : 'Show more result'}
					</Button>
				</Col>
			</Row>
		)
	}

export default HotelSearchResultGenerator

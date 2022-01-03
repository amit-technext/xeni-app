import React, { FC, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {
	HotelSearchResultGeneratorProps,
	IHotelSearchProps
} from 'interface/IHotelProps'
import HotelSearchMap from './HotelSearchMap'
import HotelSearchMapCartItem from './HotelSearchMapCartItem'
import HotelSearchMapViewShorter from './HotelSearchMapViewShorter'
import { selectHotelForCompareHandler } from '../../../../../services/hotel/hotelCompareFunctions'
import HotelBookingFormWidget from '../../hotel-forms/HotelBookingFormWidget'
import Menu from '../../../../common/menu/Menu'

const HotelSearchMapViewGenerator: FC<HotelSearchResultGeneratorProps> =
	function HotelSearchMapViewGenerator(props) {
		const { hotelSearchResult, selectedHotel, setSelectedHotel, dayCount } = props

		const checkIsInCompare = (id: string): boolean =>
			selectedHotel?.some(el => el.id === id)

		const addHotelToCompare = (hotel: IHotelSearchProps): void => {
			selectHotelForCompareHandler(hotel, selectedHotel, setSelectedHotel)
		}

		const [isLoading, setLoading] = useState(false)

		useEffect(() => {
			if (isLoading) {
				setTimeout(() => {
					setLoading(false)
				}, 2000)
			}
		}, [isLoading])

		const handleClick = (): void => setLoading(true)

		return (
			<>
				<div className='border-bottom bg-white pt-3'>
					<Container>
						<Menu onMobile={false} />
						<HotelBookingFormWidget />
					</Container>
				</div>
				<Container>
					<Row>
						<Col>
							<HotelSearchMapViewShorter />
						</Col>
					</Row>
				</Container>
				<Container className='pb-6'>
					<Row className='mt-4'>
						<Col lg={4}>
							{hotelSearchResult?.map(hotel => (
								<HotelSearchMapCartItem
									key={hotel?.id}
									hotelData={hotel}
									dayCount={dayCount}
									addedToCompare={checkIsInCompare(hotel?.id)}
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

						<Col lg={8}>
							<HotelSearchMap />
						</Col>
					</Row>
				</Container>
			</>
		)
	}

export default HotelSearchMapViewGenerator

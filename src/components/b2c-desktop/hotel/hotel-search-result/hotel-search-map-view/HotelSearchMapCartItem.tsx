import { Link } from 'react-router-dom'
import { Card, Image, Button } from 'react-bootstrap'
import React, { FC, useEffect, useState } from 'react'
import { useAppSelector } from 'hooks/useReduxState'
import { IHotelSearchProps } from 'interface/IHotelProps'
import Flex from '../../../../common/utils/Flex'
import Rating from '../../../../common/rating/Rating'
import { PlusSquareSolid, MapMarkerAltSolid } from '../../../../../assets/icons'

interface HotelSearchResultProps {
	hotelData: IHotelSearchProps
	dayCount: number
	addToCompare: () => void
	addedToCompare: boolean
}

const HotelSearchMapCartItem: FC<HotelSearchResultProps> =
	function HotelSearchMapCartItem(props) {
		const { hotelData, dayCount, addToCompare, addedToCompare } = props

		const { currency } = useAppSelector(state => state.context)

		const [isLoading, setLoading] = useState(false)

		useEffect(() => {
			if (isLoading) {
				setTimeout(() => {
					setLoading(false)
				}, 2000)
			}
		}, [isLoading])

		const handleClick = (): void => setLoading(true)

		const test = false

		return (
			<Card className='p-3 mb-3 last-mb-0'>
				<div className='pb-3'>
					<Image
						src={hotelData?.heroImage}
						alt='hotel'
						style={{ height: '160px' }}
						className='w-100 objectFit'
					/>
				</div>

				<Flex justifyContent='between'>
					<Flex
						direction='column'
						justifyContent='between'
						style={{ maxWidth: '220px' }}
						className='w-70'
					>
						<div className='text-start'>
							<p className='fs-1 fw-bold text-900 mb-0 text-truncate'>
								<Link to='/hotels/result-details' className='text-900'>
									{hotelData?.name}
								</Link>
							</p>
							<p className='mb-2 fs--1 text-900 text-truncate'>
								{hotelData?.contact?.address?.line1}
							</p>
							<Rating rating={hotelData?.starRating} />
						</div>

						<div className='text-start'>
							<div
								tabIndex={0}
								role='button'
								onKeyPress={!addedToCompare ? addToCompare : (): void => {}}
								onClick={!addedToCompare ? addToCompare : (): void => {}}
								className={`mb-2  fw-semi-bold fs--1 w-fit ${
									addedToCompare
										? 'cursor-not-allowed text-primary'
										: 'cursor-pointer text-900'
								}`}
							>
								<PlusSquareSolid
									className={`${addedToCompare ? 'text-primary' : 'text-600'} me-2 fs-1`}
								/>
								{addedToCompare ? 'Added' : 'Add to compare'}
							</div>
							<p className='mb-0 fw-semi-bold fs--1 cursor-pointer w-fit text-900'>
								<MapMarkerAltSolid
									className={`${test ? 'text-primary' : 'text-600'} me-2 fs-1`}
								/>
								Show on map
							</p>
						</div>
					</Flex>

					<Flex direction='column' justifyContent='between' alignItems='end'>
						<div className='text-end mb-3'>
							<p className='fs-1 fw-bold text-900 mb-1'>
								{currency} {(+hotelData.rate.baseRate / dayCount).toFixed(2)}
							</p>
							<p className='fs--1 d-block text-900 mb-0'>Cost per night</p>
							<p className='fs--1 d-block text-900 mb-0'>
								Total price {currency} {hotelData?.rate?.totalRate}
							</p>
							<p className='fs--1 d-block text-900 mb-0'>Inclusive taxes and fees</p>
						</div>
						<Button
							bsPrefix='btn bg-primary text-100 fs-0 fw-semi-bold px-4'
							disabled={isLoading}
							onClick={!isLoading ? handleClick : (): void => {}}
						>
							{isLoading ? 'Selecting…' : 'Select'}
						</Button>
					</Flex>
				</Flex>
			</Card>
		)
	}

export default HotelSearchMapCartItem

import { Link, useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import React, { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from 'hooks/useReduxState'
import { IHotelSearchProps } from 'interface/IHotelProps'
import Rating from 'components/common/rating/Rating'

interface HotelSearchResultProps extends HTMLAttributes<HTMLOrSVGElement> {
	hotelData: IHotelSearchProps
	dayCount: number
	addToCompare: () => void
	addedToCompare: boolean
}

const HotelSearchResult: FC<HotelSearchResultProps> =
	function HotelSearchResult(props: HotelSearchResultProps) {
		const { hotelData, dayCount, addToCompare, addedToCompare } = props

		const history = useHistory()

		const { currency } = useAppSelector(state => state.context)

		return (
			<div className='card mb-2 SearchResult p-3 flex-row'>
				<div className='hotelListImg rounded-3 overflow-hidden'>
					<img
						src={hotelData.heroImage}
						alt='hotel img'
						className='img-fluid h-100 objectFit '
					/>
				</div>
				<div className='d-flex justify-content-between flex-fill ps-3'>
					<div className='d-flex flex-column justify-content-between'>
						<div>
							<p className='fs-1 fw-bold text-900 mb-0 w-300px text-truncate'>
								<Link to='/hotels/result-details' className='text-900'>
									{hotelData?.name}
								</Link>
							</p>
							<p className='mb-2 fs--1 text-900 text-truncate'>
								{hotelData?.contact?.address?.line1}
							</p>
							<Rating rating={hotelData?.starRating} />
						</div>

						<div className='d-flex'>
							<div
								tabIndex={0}
								role='button'
								onKeyPress={!addedToCompare ? addToCompare : (): void => {}}
								onClick={!addedToCompare ? addToCompare : (): void => {}}
								className={`mb-0  fw-bold  fs--1 me-3 pe-3 border-end border-600 ${
									addedToCompare
										? 'cursor-not-allowed text-primary'
										: 'cursor-pointer text-900'
								}`}
							>
								<FontAwesomeIcon
									icon={faPlusSquare}
									size='lg'
									className={`${addedToCompare ? 'text-primary' : 'text-600'} me-2`}
								/>
								{addedToCompare ? 'Added' : 'Add to compare'}
							</div>
							<p className='mb-0 cursor-pointer fw-bold text-900 fs--1'>
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									size='lg'
									className='text-600 me-2'
								/>
								Show on map
							</p>
						</div>
					</div>
					<div className=' d-flex flex-column justify-content-between align-items-end'>
						<div className='text-end'>
							<p className='fs-1 fw-bold text-900 mb-1'>
								{currency} {(+hotelData.rate.baseRate / dayCount).toFixed(2)}
							</p>
							<span className='fs--1 d-block text-900'>Cost per night</span>
							<span className='fs--1 d-block text-900'>
								Total price {currency} {hotelData?.rate?.totalRate}
							</span>
							<span className='fs--1 d-block text-900'>Inclusive taxes and fees</span>
						</div>

						<Button
							bsPrefix='btn bg-primary text-100 fs-0 fw-semi-bold px-4'
							onClick={(): void => {
								history.push('/hotels/result-details')
							}}
						>
							Details
						</Button>
					</div>
				</div>
			</div>
		)
	}

export default HotelSearchResult

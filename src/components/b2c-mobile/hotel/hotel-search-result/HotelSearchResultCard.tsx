import classNames from 'classnames'
import { nanoid } from 'nanoid'
import { Button } from 'react-bootstrap'
import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAppSelector } from 'hooks/useReduxState'
import { IHotelSearchProps } from 'interface/IHotelProps'
import { MapMarkerAltRegular, PlusSquareRegular } from 'assets/icons'
import HotelSelectedForCompare from 'components/b2c-desktop/hotel/hotel-compare/HotelSelectedForCompare'
import HotelCompareOffCanvas from '../hotel-compare/HotelCompareOffCanvas'
import Flex from '../../../common/utils/Flex'
import Rating from '../../../common/rating/Rating'

interface HotelSearchResultCardProps
	extends React.HTMLAttributes<HTMLOrSVGElement> {
	searchResult: IHotelSearchProps[]
}

const HotelSearchResultCard: FC<HotelSearchResultCardProps> =
	function HotelSearchResultCart(props) {
		const { searchResult } = props
		const history = useHistory()
		// console.log(location)

		const [isLoading, setLoading] = useState<boolean>(false)
		const [compareHotel, setCompareHotel] = useState<IHotelSearchProps[]>([])
		const [openCompare, setOpenCompare] = useState<boolean>(false)
		const [dayCount] = useState(3)
		const [Id, setId] = useState('')

		const { currency } = useAppSelector(state => state.context)

		// add a class for padding bottom on footer when hotel compare is available
		useEffect(() => {
			const footer = document?.getElementsByTagName('footer')
			if (compareHotel?.length > 0) {
				footer[0]?.classList?.add('footerPBIfCompare')
			} else {
				footer[0]?.classList?.remove('footerPBIfCompare')
			}
		}, [compareHotel])

		const handleClick = (id: string): void => {
			setId(id)
			const currentPath = history.location.pathname
			history.push(`${currentPath}-details/${id}`)
		}

		const closeCompare = (action: boolean): void => {
			setOpenCompare(action)
		}

		const removeCompareItemHandler = (id: string): void => {
			setCompareHotel(compareHotel.filter(item => item.id !== id))
		}

		const setCompareHotelHandler = (hotelData: IHotelSearchProps): void => {
			if (compareHotel?.length < 3) {
				setCompareHotel([...compareHotel, hotelData])
			}
		}

		const checkIsInCompare = (id: string): boolean =>
			compareHotel?.some(el => el.id === id)

		// const [isLoading, setLoading] = useState(false)

		useEffect(() => {
			if (isLoading) {
				setTimeout(() => {
					setLoading(false)
				}, 200)
			}
		}, [isLoading])

		const handleClick2 = (): void => setLoading(true)

		return (
			<div className='py-2'>
				{/* <p className='py-3 mb-0 fs--1 fw-medium'>{searchResult?.length} Results</p> */}
				{searchResult?.map(hotelData => (
					<div key={nanoid()} className='card mt-1 p-2 rounded-3 mb-3 shadow-sm'>
						<div style={{ height: '190px' }}>
							<img
								alt='heroImage'
								src={hotelData.heroImage}
								className='img-fluid rounded-3 w-100 h-100 objectFit'
							/>
						</div>
						{/* <a href='/hotels/search-details'> */}
						<Flex justifyContent='between' className='mt-3 mb-4'>
							<div style={{ width: '60%' }}>
								<p className='fs-0 fw-bold text-dark mb-0 text-truncate'>
									{hotelData?.name}
								</p>
								<p className='fs--2 text-900 mb-1 text-truncate'>
									{hotelData?.contact?.address?.line1}
								</p>
								<Rating rating={hotelData?.starRating} />
							</div>
							<div className='text-end'>
								<p className='fs-0 fw-bold text-dark mb-1'>
									{currency}
									{(+hotelData.rate.baseRate / dayCount).toFixed(2)}
								</p>
								<span className='fs--2 d-block text-900'>Cost per night</span>
								<span className='fs--2 d-block text-900'>
									Total price : {hotelData?.rate?.totalRate}
								</span>
								<span className='fs--2 d-block text-900'>Inclusive taxes and fees</span>
							</div>
						</Flex>
						<Flex justifyContent='center'>
							<div
								tabIndex={0}
								role='button'
								className={classNames(
									'mb-0 cursor-pointer fw-medium fs--1 me-3 pe-3 border-end border-600',
									checkIsInCompare(hotelData.id) ? 'text-primary disable' : 'text-1000'
								)}
								onClick={(): void => {
									!checkIsInCompare(hotelData.id) && setCompareHotelHandler(hotelData)
								}}
								onKeyPress={(): void => {
									!checkIsInCompare(hotelData.id) && setCompareHotelHandler(hotelData)
								}}
							>
								<PlusSquareRegular height='1.2rem' width='1.2rem' className='me-2' />
								{!checkIsInCompare(hotelData.id) ? ' Add to compare' : 'Added'}
							</div>
							<p className='mb-0 cursor-pointer text-1000 fw-medium fs--1'>
								<MapMarkerAltRegular height='1.2rem' width='1.2rem' className='me-2' />
								Show on map
							</p>
						</Flex>
						<Button
							bsPrefix='btn bg-primary fs-0 text-white fw-normal px-4 mt-3'
							disabled={isLoading && Id === hotelData.id}
							onClick={(): void => handleClick(hotelData.id)}
						>
							{isLoading && Id === hotelData.id ? 'Showing Details…' : 'Details'}
						</Button>
					</div>
				))}

				<Button
					disabled={isLoading}
					onClick={!isLoading ? handleClick2 : (): void => {}}
					bsPrefix='btn bg-primary text-100 fs-0 fw-semi-bold py-3 w-100 mt-3'
				>
					{isLoading ? 'Searching for mor results ...' : 'Show more result'}
				</Button>

				{compareHotel?.length ? (
					<div
						className='position-fixed bottom-0 start-0 end-0 cHotelCompare p-0 p-2 mx-auto'
						style={{ maxWidth: '600px' }}
					>
						<Flex
							className='overflow-auto scrollbar d-flex flex-nowrap w-100 pt-1 mx-auto'
							justifyContent={compareHotel?.length < 2 ? 'center' : 'start'}
						>
							{compareHotel?.map(hotel => (
								<HotelSelectedForCompare
									key={hotel.id}
									hotel={hotel}
									dayCount={dayCount}
									removeHotel={(): void => removeCompareItemHandler(hotel.id)}
									onMobile
								/>
							))}
						</Flex>

						<Flex justifyContent='center' direction='column' alignItems='center'>
							<Button
								onClick={(): void => setOpenCompare(true)}
								disabled={compareHotel.length === 1}
								bsPrefix='btn text-white bg-primary fw-bold fs-0 py-2 px-6 mt-2'
							>
								Compare
							</Button>
						</Flex>

						<div>
							{openCompare && (
								<HotelCompareOffCanvas
									openCompare={openCompare}
									closeCompare={closeCompare}
									HotelData={compareHotel}
								/>
							)}
						</div>
					</div>
				) : null}
			</div>
		)
	}

export default HotelSearchResultCard

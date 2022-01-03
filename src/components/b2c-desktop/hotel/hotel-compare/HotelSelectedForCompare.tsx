import { Button } from 'react-bootstrap'
import React, { FC } from 'react'

import { IHotelSearchProps } from 'interface/IHotelProps'
import { useAppSelector } from 'hooks/useReduxState'

interface HotelSelectedForCompareProps {
	hotel: IHotelSearchProps
	dayCount: number
	removeHotel: (id: string) => void
	onMobile?: boolean
}

const HotelSelectedForCompare: FC<HotelSelectedForCompareProps> =
	function HotelSelectedForCompare(props) {
		const { hotel, dayCount, removeHotel, onMobile } = props

		const { currency } = useAppSelector(state => state.context)

		return (
			<div className='bg-white hotelCompareWrap rounded-3 overflow-hidden p-2 d-flex me-3 last-me-0'>
				<div className='hotelCompareImage overflow-hidden rounded-3 me-2'>
					<img
						src={hotel.images?.[0].links?.[0].url}
						alt='hotel'
						className='img-fluid h-100 objectFit'
					/>
				</div>
				<div className='flex-1 d-flex flex-column justify-content-between'>
					<p
						className={`text-1100 mb-2 hotelCompareTitleTruncate ${
							onMobile ? 'fs--1 fw-semi-bold' : 'fs-0 fw-bold'
						}`}
					>
						{hotel?.name}
					</p>
					<div className='d-flex align-items-center justify-content-between'>
						<p className='mb-0 border border-1100 text-1100 rounded-3 w-fit py-1 px-2 fs-0  fw-semi-bold'>
							{currency}
							{(+hotel.rate.baseRate / dayCount).toFixed(2)}
						</p>
						<Button
							onClick={(): void => removeHotel(hotel?.id)}
							bsPrefix='btn bg-primary text-white fw-semi-bold fs-0 px-2'
						>
							Remove
						</Button>
					</div>
				</div>
			</div>
		)
	}

HotelSelectedForCompare.defaultProps = {
	onMobile: false
}

export default HotelSelectedForCompare

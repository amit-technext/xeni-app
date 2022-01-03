import React, { FC } from 'react'
import MHotelRoomCart from './MHotelRoomCart'

export const HotelRooms: FC = function HotelRooms() {
	return (
		<div id='Rooms' className='mt-4'>
			<p className='fw-bold fs-0 mb-3'>Choose your room</p>
			<MHotelRoomCart data={[1, 2]} />
		</div>
	)
}
export default HotelRooms

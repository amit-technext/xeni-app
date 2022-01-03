import React, { FC } from 'react'
import { Offcanvas } from 'react-bootstrap'
import MHotelBookingFormWidget from 'components/b2c-mobile/hotel/hotel-forms/MHotelBookingFormWidget'
import MCarsBookingFormWidget from 'components/b2c-mobile/car/form/MCarsBookingFormWidget'
import { useLocation } from 'react-router-dom'
import MobileContainer from '../../../../container/b2c-mobile/MobileContainer'
import MFlightBookingFormWidget from './MFlightBookingFormWidget'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useReduxState'
import { setShowSearchPanel } from '../../../../features/context/contextSlice'

const MFormOnOffCanvas: FC = function MFormOnOffcanvas() {
	const { showSearchPanel } = useAppSelector(state => state.context)
	const dispatch = useAppDispatch()
	const { pathname } = useLocation()

	let renderCanvasBody
	let renderCanvasTitle

	if (pathname === '/flight/search') {
		renderCanvasBody = <MFlightBookingFormWidget passengers={[]} />
		renderCanvasTitle = 'Flight destination'
	}
	if (pathname === '/hotels/search') {
		renderCanvasBody = <MHotelBookingFormWidget />
		renderCanvasTitle = 'Chose your hotels'
	}
	if (pathname === '/cars/search') {
		renderCanvasBody = <MCarsBookingFormWidget />
		renderCanvasTitle = 'Chose your destination'
	}

	return (
		<Offcanvas
			className='overflow-auto scrollbar'
			style={{
				height: 'fit-content',
				borderRadius: '0 0 17px 17px'
			}}
			show={showSearchPanel}
			onHide={(): any => dispatch(setShowSearchPanel(false))}
			placement='top'
		>
			<Offcanvas.Header closeButton className='pb-1'>
				<Offcanvas.Title className='ms-n1'>{renderCanvasTitle}</Offcanvas.Title>
			</Offcanvas.Header>
			<MobileContainer mobileCClassName='pb-0'>{renderCanvasBody}</MobileContainer>
		</Offcanvas>
	)
}

export default MFormOnOffCanvas

import React, { FC, useState } from 'react'
import { Nav, Offcanvas } from 'react-bootstrap'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MShoppingCart from 'components/common/shopping-cart/MShoppingCart'

const CartNotification: FC = function CartNotification() {
	const [show, setShow] = useState(false)
	const handleClose = (): void => setShow(false)
	const handleShow = (): void => setShow(true)

	return (
		<>
			<Nav.Item className='py-2 pe-2'>
				<div
					tabIndex={0}
					role='button'
					onClick={handleShow}
					onKeyPress={handleShow}
					className={classNames('px-0', {
						'notification-indicator notification-indicator-warning notification-indicator-fill cursor-pointer':
							true
					})}
				>
					<span className='notification-indicator-number'>2</span>
					<FontAwesomeIcon
						icon='shopping-cart'
						transform='shrink-7'
						className='fs-4 text-700'
					/>
				</div>
			</Nav.Item>

			<Offcanvas show={show} onHide={handleClose} placement='end'>
				<Offcanvas.Header closeButton className='border-bottom'>
					<Offcanvas.Title className='m-0'>Cart</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<MShoppingCart />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	)
}

export default CartNotification

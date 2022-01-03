import React, { FC, useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import Cart from './Cart-no-need'

const CartOffCanvas: FC = function CartOffCanvas() {
	const [show, setShow] = useState(true)

	const handleClose = (): void => {
		setShow(false)
	}

	return (
		<Offcanvas
			show={show}
			placement='end'
			onHide={handleClose}
			scroll
			// backdrop={false}
			onBackdropClick={handleClose}
		>
			<Offcanvas.Header closeButton>
				{/* <Offcanvas.Title>MCart</Offcanvas.Title> */}
			</Offcanvas.Header>
			<Offcanvas.Body className='mx-auto'>
				<Cart />
			</Offcanvas.Body>
		</Offcanvas>
	)
}

export default CartOffCanvas

import React, { FC, useState } from 'react'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { CloseButton, Modal } from 'react-bootstrap'
import MShoppingCart from 'components/common/shopping-cart/MShoppingCart'
import IconButton from '../../common/utils/IconButton'

const MCart: FC = function MCart() {
	const [fullscreen, setFullscreen] = useState<
		true | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down' | undefined
	>(true)
	const [show, setShow] = useState(false)

	const handleShow = (breakpoint: any): any => {
		setFullscreen(breakpoint)
		setShow(true)
	}

	return (
		<div>
			<IconButton
				onClick={(): void => handleShow('md-down')}
				icon={faSave}
				className='btn btn-dark position-fixed translate-middle-x'
				style={{ bottom: '1.5%', left: '50%', zIndex: 1020 }}
			>
				Saved (3)
			</IconButton>
			<Modal
				show={show}
				fullscreen={fullscreen}
				onHide={(): void => setShow(false)}
			>
				<Modal.Header>
					<Modal.Title>Cart</Modal.Title>
					<CloseButton
						className='btn btn-circle btn-sm transition-base p-0'
						onClick={(): void => setShow(false)}
					/>
				</Modal.Header>
				<Modal.Body>
					<MShoppingCart />
				</Modal.Body>
			</Modal>
		</div>
	)
}

export default MCart

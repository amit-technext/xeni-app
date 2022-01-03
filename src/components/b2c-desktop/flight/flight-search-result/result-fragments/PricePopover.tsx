import React, { FC } from 'react'
import { Popover } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Flex from '../../../../common/utils/Flex'

const PricePopover: FC = function PricePopover() {
	return (
		<Popover.Body>
			<div className='text-justify'>
				<span className='fw-bold fs-0'>Price Breakdown</span>
			</div>
			<div className='mt-2'>
				<div className='fs--1 d-flex align-items-center justify-content-between py-1'>
					<div className='d-flex align-items-center'>
						<FontAwesomeIcon icon={faCreditCard} className='me-2' size='sm' />
						<span>Ticket Price</span>
					</div>
					<div>$249</div>
				</div>
				<div className='fs--1 d-flex align-items-center justify-content-between py-1'>
					<div className='d-flex align-items-center'>
						<FontAwesomeIcon icon={faShoppingBag} className='me-2' size='sm' />
						<span>Carry-on bag</span>
					</div>
					<div>Included</div>
				</div>
				<div className='fs--1 d-flex align-items-center justify-content-between py-1'>
					<div className='d-flex align-items-center'>
						<FontAwesomeIcon icon={faShoppingBag} className='me-2' size='sm' />
						<span>Checked-on bag</span>
					</div>
					<div>Included</div>
				</div>
			</div>
			<hr />
			<Flex className='fw-bold fs--1' justifyContent='between'>
				<div>Total</div>
				<div>$249</div>
			</Flex>
		</Popover.Body>
	)
}
PricePopover.propTypes = {}

export default PricePopover

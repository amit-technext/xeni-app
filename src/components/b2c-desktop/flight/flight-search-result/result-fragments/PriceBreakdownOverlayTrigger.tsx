import React, { FC, HTMLAttributes } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import PricePopover from './PricePopover'
import Flex from '../../../../common/utils/Flex'

interface PriceBreakdownOverlayTriggerProps
	extends HTMLAttributes<HTMLOrSVGElement> {
	icon: IconProp
	info: number
	offerPrice: number
}

const PriceBreakdownOverlayTrigger: FC<PriceBreakdownOverlayTriggerProps> =
	function PriceBreakdownOverlayTrigger(props) {
		const { icon, info, offerPrice } = props

		return (
			<OverlayTrigger
				placement='left-start'
				delay={{ show: 100, hide: 100 }}
				overlay={
					<Popover id='popoverSeatClass'>
						<PricePopover />
					</Popover>
				}
			>
				<div
					className={classNames(
						'd-flex align-items-center text-dark cursor-pointer',
						{ 'border me-1 px-1 rounded-3': icon }
					)}
				>
					<FontAwesomeIcon className='icon' icon={icon} />
					<Flex justifyContent='between' className='w-100'>
						<span className={classNames('fs--2', { 'fw-semi-bold ps-1': icon })}>
							{info}
						</span>
						{offerPrice && !icon && (
							<span className={classNames('fs--2', { 'fw-semi-bold ps-1': icon })}>
								{`$ ${offerPrice}`}
							</span>
						)}
					</Flex>
				</div>
			</OverlayTrigger>
		)
	}

export default PriceBreakdownOverlayTrigger

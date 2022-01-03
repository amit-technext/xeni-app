import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import CabinPopover from './CabinPopover'
import Flex from '../../../../common/utils/Flex'
import { CabinAndExtraType } from '../../../../../type/FlightSearchResultDataType'

interface CabinInformationOverlayTriggerProps
	extends HTMLAttributes<HTMLOrSVGElement> {
	cabinFeature: CabinAndExtraType
	icon?: IconProp
	info?: string
	offerPrice?: number
}

const CabinInformationOverlayTrigger: FC<CabinInformationOverlayTriggerProps> =
	function CabinInformationOverlayTrigger(props) {
		const { cabinFeature, icon, info, offerPrice } = props

		return (
			<OverlayTrigger
				placement='left-start'
				delay={{ show: 100, hide: 100 }}
				overlay={
					<Popover style={{ margin: 0 }} id='popoverSeatClass'>
						<CabinPopover
							cabinFeature={cabinFeature.list}
							currency={cabinFeature.currency}
							totalPrice={cabinFeature.totalPrice}
							cabinClass={cabinFeature.cabinClass}
						/>
					</Popover>
				}
			>
				<div
					className={classNames(
						'd-flex align-items-center text-dark cursor-pointer',
						{ 'border me-1 px-1  rounded-3': icon }
					)}
				>
					{icon && <FontAwesomeIcon className='icon' icon={icon} />}

					<Flex justifyContent='between' className='w-100'>
						<span
							className={classNames('fs--2', {
								'fw-semi-bold ps-1': icon
							})}
						>
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

CabinInformationOverlayTrigger.defaultProps = {
	icon: undefined,
	info: '',
	offerPrice: undefined
}

export default CabinInformationOverlayTrigger

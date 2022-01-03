import React, { FC } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WishListNotification: FC = function WishListNotification() {
	return (
		<div
			className={classNames('py-2 ps-0 ps-sm-1', {
				'cursor-pointer': true
			})}
		>
			<FontAwesomeIcon
				icon='heart'
				transform='shrink-7'
				className='fs-4 text-700'
			/>
		</div>
	)
}

export default WishListNotification

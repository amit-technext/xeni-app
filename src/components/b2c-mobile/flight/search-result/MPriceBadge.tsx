import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

interface MPriceBadgeProps extends HTMLAttributes<HTMLOrSVGElement> {
	tag: string
}

const MPriceBadge: FC<MPriceBadgeProps> = function MPriceBadge({
	tag
}: MPriceBadgeProps) {
	return (
		<span
			className={classNames('badge rounded-2 me-2', {
				'badge-soft-primary': tag === 'Best',
				'badge-soft-warning': tag === 'Cheapest',
				'badge-soft-success': tag === 'Quickest'
			})}
		>
			{tag}
		</span>
	)
}

export default MPriceBadge

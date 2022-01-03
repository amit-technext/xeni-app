import React, { FC, HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

interface SoftBadgeProps extends HTMLAttributes<HTMLOrSVGElement> {
	bg?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| 'danger'
		| 'light'
		| 'dark'
	pill: boolean
	children: ReactNode
	className: string
}

const SoftBadge: FC<SoftBadgeProps> = function SoftBadge({
	bg,
	pill,
	children,
	className
}) {
	return (
		<div
			className={classNames(className, `badge badge-soft-${bg}`, {
				'rounded-pill': pill
			})}
		>
			{children}
		</div>
	)
}

SoftBadge.defaultProps = {
	bg: 'primary'
}

export default SoftBadge

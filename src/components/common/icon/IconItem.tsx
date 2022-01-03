import React, { FC, HTMLAttributes } from 'react'
// import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'react-router-dom'

interface IconItemProps extends HTMLAttributes<HTMLOrSVGElement> {
	icon: IconProp
	href: string
	bg: string
	size?: 'sm' | 'lg'
	color: string
	className?: string
	iconClass?: string
	transform?: string
	onClick: () => void
}

const IconItem: FC<IconItemProps> = function IconItem({
	icon,
	bg,
	size,
	color,
	className,
	transform,
	iconClass,
	onClick,
	href,
	...rest
}) {
	return (
		<Link
			to={href}
			className={classNames(className, 'icon-item', {
				[`icon-item-${size}`]: size,
				[`bg-${bg}`]: bg,
				[`text-${color}`]: color
			})}
			{...rest}
			onClick={onClick}
		>
			<FontAwesomeIcon icon={icon} transform={transform} className={iconClass} />
		</Link>
	)
}

IconItem.defaultProps = {
	size: 'sm',
	className: '',
	iconClass: '',
	transform: ''
}

// IconItem.propTypes = {
// 	tag: PropTypes.string,
// 	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
// 	href: PropTypes.string,
// 	bg: PropTypes.string,
// 	size: PropTypes.oneOf(['sm', 'lg']),
// 	color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// 	className: PropTypes.string,
// 	iconClass: PropTypes.string,
// 	transform: PropTypes.string,
// 	onClick: PropTypes.func
// }

export default IconItem

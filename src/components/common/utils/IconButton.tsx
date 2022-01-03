import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { IconPrefix } from '@fortawesome/free-regular-svg-icons'
import { IconName } from '@fortawesome/free-solid-svg-icons'
import { IconLookup } from '@fortawesome/free-brands-svg-icons'

interface IconButtonProps extends HTMLAttributes<HTMLOrSVGElement> {
	icon: IconProp | [IconPrefix, IconName] | IconLookup
	children: React.ReactNode
	iconAlign?: 'left' | 'right'
	iconClassName?: string
	transform?: string
	size?: 'sm' | 'lg'
	onClick: () => void
	className: string
	style?: React.CSSProperties
}

const IconButton: FC<IconButtonProps> = function IconButton({
	icon,
	iconAlign = 'left',
	iconClassName,
	className,
	transform,
	children,
	onClick,
	style,
	...rest
}) {
	return (
		<Button {...rest} onClick={onClick} className={className || ''} style={style}>
			{iconAlign === 'right' && children}
			<FontAwesomeIcon
				icon={icon}
				className={classNames(iconClassName, {
					'me-1': children && iconAlign === 'left',
					'ms-1': children && iconAlign === 'right'
				})}
				transform={transform}
			/>
			{iconAlign === 'left' && children}
		</Button>
	)
}
IconButton.defaultProps = {
	iconAlign: 'left',
	iconClassName: 'string',
	transform: 'string',
	size: 'sm',
	style: undefined
}
export default IconButton

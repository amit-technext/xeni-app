import React, { FC, HTMLAttributes } from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import IconItem from './IconItem'

type IconGroupTypes = {
	icon: IconProp
	color: string
	bg: string
	href: string
}

interface IconGroupProps extends HTMLAttributes<HTMLOrSVGElement> {
	icons: Array<IconGroupTypes>
	className: string
}

const IconGroup: FC<IconGroupProps> = function IconGroup({
	icons,
	className,
	...rest
}) {
	return (
		<div className={classNames('icon-group', className)} {...rest}>
			{icons.map((icon, index) => (
				<React.Fragment key={index.toString()}>
					<IconItem
						onClick={(): void => {
							throw new Error('Function not implemented.')
						}}
						{...icon}
					/>
				</React.Fragment>
			))}
		</div>
	)
}

// IconGroup.propTypes = {
// 	icons: PropTypes.array.isRequired,
// 	className: PropTypes.string
// }

export default IconGroup

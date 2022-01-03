import React, { FC } from 'react'
import classNames from 'classnames'

interface FlexProps extends React.HTMLAttributes<HTMLOrSVGElement> {
	justifyContent?: string
	alignItems?: string
	alignContent?: string
	inline?: boolean
	wrap?: string
	className?: string
	tag?: keyof JSX.IntrinsicElements
	children: React.ReactNode
	breakpoint?: string
	direction?: string
}

const Flex: FC<FlexProps> = function Flex({
	alignContent,
	alignItems,
	justifyContent,
	children,
	className,
	direction,
	inline,
	tag,
	wrap,
	breakpoint
}) {
	const Tag = tag as keyof JSX.IntrinsicElements
	return (
		<Tag
			className={classNames(
				{
					[`d-${breakpoint ? `${breakpoint}-` : ''}flex`]: !inline,
					[`d-${breakpoint ? `${breakpoint}-` : ''}inline-flex`]: inline,
					[`flex-${direction}`]: direction,
					[`justify-content-${justifyContent}`]: justifyContent,
					[`align-items-${alignItems}`]: alignItems,
					[`align-content-${alignContent}`]: alignContent,
					[`flex-${wrap}`]: wrap
				},
				className
			)}
		>
			{children}
		</Tag>
	)
}
Flex.defaultProps = {
	alignContent: '',
	alignItems: '',
	justifyContent: '',
	className: '',
	direction: '',
	inline: false,
	wrap: '',
	breakpoint: '',
	tag: 'div'
}
export default Flex

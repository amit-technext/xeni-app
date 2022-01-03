import React, { FC } from 'react'
import { CloseButton } from 'react-bootstrap'
import classNames from 'classnames'
import { useAppSelector } from 'hooks/useReduxState'

interface FalconCloseButtonProps
	extends React.HTMLAttributes<HTMLOrSVGElement> {
	size?: 'sm' | 'lg'
	onClick: () => void
	noOutline?: boolean
	variant?: 'white' | undefined
	className?: string
}

const FalconCloseButton: FC<FalconCloseButtonProps> =
	function FalconCloseButton(props) {
		const { size, onClick, noOutline, variant, className } = props

		const { isDark } = useAppSelector(state => state.context)

		return (
			<CloseButton
				variant={variant || (isDark ? 'white' : undefined)}
				className={classNames(className, {
					[`btn-${size}`]: size,
					'outline-none': noOutline
					// [className]: className
				})}
				onClick={onClick}
			/>
		)
	}

FalconCloseButton.defaultProps = {
	size: 'sm',
	noOutline: true,
	variant: undefined,
	className: ''
}

export default FalconCloseButton

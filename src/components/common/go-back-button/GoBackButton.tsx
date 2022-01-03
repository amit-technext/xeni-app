import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { ArrowLeftRegular } from '../../../assets/icons'

interface GoBackButtonProps {
	// eslint-disable-next-line react/require-default-props
	onClick?: () => void
	className?: string
	iconClassName?: string
	height?: string
	width?: string
}

const GoBackButton: FC<GoBackButtonProps> = function GoBackButton(props) {
	const { onClick, className, iconClassName, height, width } = props
	const history = useHistory()

	const onClickHandler = (): void => {
		onClick ? onClick() : history.goBack()
	}

	return (
		<div
			className={className}
			role='button'
			tabIndex={0}
			onClick={onClickHandler}
			onKeyPress={onClickHandler}
		>
			<ArrowLeftRegular className={iconClassName} height={height} width={width} />
		</div>
	)
}

GoBackButton.defaultProps = {
	className: 'my-2',
	iconClassName: '',
	height: '1.5rem',
	width: '1.5rem'
}

export default GoBackButton

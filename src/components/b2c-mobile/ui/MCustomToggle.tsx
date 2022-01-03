import { useAccordionButton } from 'react-bootstrap'
import React, { FC, HTMLAttributes, SetStateAction } from 'react'

interface MCustomToggleProps extends HTMLAttributes<HTMLOrSVGElement> {
	children: React.ReactNode
	eventKey: string
	setOpen: React.Dispatch<SetStateAction<boolean>>
}

const MCustomToggle: FC<MCustomToggleProps> = function MCustomToggle({
	children,
	eventKey,
	setOpen
}: MCustomToggleProps) {
	const decoratedOnClick = useAccordionButton(eventKey, () =>
		setOpen(value => !value)
	)
	return (
		<div
			role='button'
			tabIndex={0}
			onKeyDown={decoratedOnClick}
			onClick={decoratedOnClick}
		>
			{children}
		</div>
	)
}

export default MCustomToggle

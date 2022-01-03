import React, { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

interface FalconCardFooterLinkProps {
	title: string
	bg?: string
	borderTop?: boolean
	to?: string
	className?: string
	size?: 'sm' | 'lg'
}

const FalconCardFooterLink: FC<FalconCardFooterLinkProps> =
	function FalconCardFooterLink(props) {
		const { title, bg, borderTop, to, className, size } = props

		return (
			<Card.Footer
				className={classNames(className, `bg-${bg} p-0`, {
					'border-top': borderTop
				})}
			>
				<Button variant='link' className='w-100 py-2' size={size}>
					{title}
					{to}
					<FontAwesomeIcon icon='chevron-right' className='ms-1 fs--2' />
				</Button>
			</Card.Footer>
		)
	}

FalconCardFooterLink.defaultProps = {
	size: 'sm',
	to: '#!',
	bg: 'light',
	borderTop: false,
	className: ''
}

export default FalconCardFooterLink

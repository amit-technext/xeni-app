import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

interface LogoProps extends HTMLAttributes<HTMLOrSVGElement> {
	at?: 'navbar-vertical' | 'navbar-top' | 'auth' | 'none'
	width?: number
	height?: number
	logo: string
	alt?: string
	className?: string
}

const Logo: FC<LogoProps> = function Logo(props) {
	const { at, width, height, logo, alt, className } = props
	return (
		<Link
			to='/'
			className={classNames(
				'text-decoration-none',
				{ 'navbar-brand text-left': at === 'navbar-vertical' },
				{ 'navbar-brand text-left': at === 'navbar-top' }
			)}
		>
			<div
				className={classNames(
					'd-flex',
					{
						'align-items-center py-3': at === 'navbar-vertical',
						'align-items-center': at === 'navbar-top',
						'flex-center fw-bolder fs-5 mb-4': at === 'auth'
					},
					className
				)}
			>
				<img className='me-2' src={logo} alt={alt} width={width} height={height} />
			</div>
		</Link>
	)
}

Logo.defaultProps = {
	at: 'auth',
	width: 58,
	height: undefined,
	className: '',
	alt: 'logo'
}

export default Logo

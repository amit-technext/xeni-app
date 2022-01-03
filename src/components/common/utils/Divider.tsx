import classNames from 'classnames'
import React, { FC } from 'react'

interface DividerProps extends React.HTMLAttributes<HTMLOrSVGElement> {
	children: React.ReactNode
	className: string
}

const Divider: FC<DividerProps> = function Divider(props) {
	const { className, children } = props
	return (
		<div className={classNames('w-100 position-relative text-center', className)}>
			<hr className='text-300' />
			<div className='divider-content-center'>{children}</div>
		</div>
	)
}

export default Divider

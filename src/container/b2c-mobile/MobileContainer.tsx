import React, { FC, HTMLAttributes } from 'react'

interface MobileContainerProps extends HTMLAttributes<HTMLOrSVGElement> {
	children: React.ReactNode
	menu?: React.ReactNode
	bodyBg?: string
	mobileCClassName?: string
}

const MobileContainer: FC<MobileContainerProps> = function MobileContainer(
	props
) {
	const { children, menu, bodyBg, mobileCClassName } = props
	return (
		<div className={`bg-white ${mobileCClassName}`}>
			{menu ? (
				<div className='top-0 pb-3 position-sticky z-1000'>
					<div className='mx-auto' style={{ maxWidth: '600px' }}>
						{menu}
					</div>
				</div>
			) : null}

			<div className={bodyBg}>
				<div
					className='w-100 mx-auto px-2 px-sm-1 px-md-0'
					style={{ maxWidth: '600px' }}
				>
					{children}
				</div>
			</div>
		</div>
	)
}

MobileContainer.defaultProps = {
	menu: undefined,
	bodyBg: 'bg-white',
	mobileCClassName: 'pb-2'
}

export default MobileContainer

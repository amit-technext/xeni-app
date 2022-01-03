import React, { FC } from 'react'
import classNames from 'classnames'

interface ScrollMenuProps extends React.HTMLAttributes<HTMLOrSVGElement> {
	option: string[]
	optionSelect: string
	callBackSelect: (select: string) => void
}

const ScrollMenu: FC<ScrollMenuProps> = function ScrollMenu(props) {
	const { option, optionSelect, callBackSelect } = props

	return (
		<div
			className='sticky-top w-100 overflow-hidden'
			style={{ height: '40px', borderBottom: 'black' }}
		>
			<div className='d-flex overflow-scroll scrollbar-hr-none bg-white justify-content-between'>
				{option.map((item, index) => (
					<a
						key={index.toString()}
						href={`#${item}`}
						className='text-decoration-none'
					>
						<div
							role='button'
							tabIndex={0}
							className={classNames(
								`px-sm-4 px-3 py-sm-1 py-2 fs--1 border-bottom border-3`,
								{
									'text-primary border-primary': item === optionSelect
								},
								{
									'text-600': item !== optionSelect
								}
							)}
							onClick={(): void => callBackSelect(item)}
							onKeyPress={(): void => callBackSelect(item)}
						>
							{item}
						</div>
					</a>
				))}
			</div>
		</div>
	)
}

export default ScrollMenu

import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { nanoid } from 'nanoid'

interface BackgroundProps extends HTMLAttributes<HTMLOrSVGElement> {
	overlay: boolean | string
	position: string | { x: string; y: string }
	video: Array<string>
	className: string
}

const Background: FC<BackgroundProps> = function Background({
	overlay,
	position,
	video,
	className
}: BackgroundProps) {
	return (
		<div
			className={classNames(
				'bg-holder',
				{
					overlay,
					[`overlay-${overlay}`]: typeof overlay === 'string'
				},
				className
			)}
			style={
				typeof position === 'string'
					? { backgroundPosition: position }
					: { backgroundPositionX: position.x, backgroundPositionY: position.y }
			}
		>
			{video && (
				<video className='bg-video' autoPlay loop muted playsInline>
					{video.map(src => (
						<source key={nanoid()} src={src} type={`video/${src.split('.').pop()}`} />
					))}
				</video>
			)}
		</div>
	)
}

export default Background

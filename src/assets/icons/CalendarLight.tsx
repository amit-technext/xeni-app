import * as React from 'react'
import { SVGProps } from 'react'

const SvgCalendarLight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		aria-hidden='true'
		data-prefix='fad'
		data-icon='calendar-alt'
		className='calendar-light_svg__svg-inline--fa calendar-light_svg__fa-calendar-alt calendar-light_svg__fa-w-14'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 448 512'
		width='1em'
		height='1em'
		{...props}
	>
		<g className='calendar-light_svg__fa-group' fill='currentColor'>
			<path
				className='calendar-light_svg__fa-secondary'
				d='M0 192v272a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V192zm128 244a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm0-128a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm128 128a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm0-128a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm128 128a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm0-128a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm-80-180h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16zm-192 0h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16z'
				opacity={0.4}
			/>
			<path
				className='calendar-light_svg__fa-primary'
				d='M448 112v80H0v-80a48 48 0 0 1 48-48h48v48a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V64h128v48a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V64h48a48 48 0 0 1 48 48z'
			/>
		</g>
	</svg>
)

export default SvgCalendarLight

import * as React from 'react'
import { SVGProps } from 'react'

const SvgFlight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		aria-hidden='true'
		data-prefix='fad'
		data-icon='plane-departure'
		className='flight_svg__svg-inline--fa flight_svg__fa-plane-departure flight_svg__fa-w-20'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 640 512'
		width='1em'
		height='1em'
		{...props}
	>
		<g className='flight_svg__fa-group' fill='currentColor'>
			<path
				className='flight_svg__fa-secondary'
				d='M640 448v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h608a16 16 0 0 1 16 16z'
				opacity={0.4}
			/>
			<path
				className='flight_svg__fa-primary'
				d='M636.11 59.08c7.23 14.56 5.24 35.17-13.07 63.65-16.31 25.37-40.28 44.74-67 58.31l-291 147.65a65.79 65.79 0 0 1-29.64 7.12l-130.52.19a33 33 0 0 1-24.33-10.71l-76.21-83a18.28 18.28 0 0 1 5.57-28.08L50 193.86a17.8 17.8 0 0 1 16.07 0l72.35 36.47 103.21-52.38L85.45 79.83a18.27 18.27 0 0 1 5.17-28.53l65.75-33.37a17.8 17.8 0 0 1 18 1.11l218.7 82.06 98.51-50c26.74-13.55 56.42-21.41 86.28-19.47 33.51 2.18 51.04 12.88 58.25 27.45z'
			/>
		</g>
	</svg>
)

export default SvgFlight

import * as React from 'react'
import { SVGProps } from 'react'

const SvgWiFi = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 19 14'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M1 5.25c5.1-5.667 11.9-5.667 17 0M4.4 8.65c3.06-3.4 7.14-3.4 10.2 0M9.5 12.9a.85.85 0 1 0 0-1.7.85.85 0 0 0 0 1.7Z'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

export default SvgWiFi

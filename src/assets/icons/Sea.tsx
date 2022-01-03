import * as React from 'react'
import { SVGProps } from 'react'

const SvgSea = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 17 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M0 15.887c0-.076.061-.137.137-.137h16.726c.076 0 .137.061.137.137A4.113 4.113 0 0 1 12.887 20H4.113A4.113 4.113 0 0 1 0 15.887ZM8.5 15.402V.737a.2.2 0 0 1 .356-.125l8 9.999a.2.2 0 0 1-.056.297l-8 4.666a.2.2 0 0 1-.3-.172Z'
			fill='currentColor'
		/>
		<path
			d='M4.25 12.208 8.5 1.583v11.333l-4.25-.708Z'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
	</svg>
)

export default SvgSea

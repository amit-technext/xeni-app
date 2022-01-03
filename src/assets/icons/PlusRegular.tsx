import * as React from 'react'
import { SVGProps } from 'react'

const SvgPlusRegular = (props: SVGProps<SVGSVGElement>) => (
	<svg
		aria-hidden='true'
		data-prefix='far'
		data-icon='plus'
		className='plus-regular_svg__svg-inline--fa plus-regular_svg__fa-plus plus-regular_svg__fa-w-12'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 384 512'
		width='1em'
		height='1em'
		{...props}
	>
		<path
			fill='currentColor'
			d='M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z'
		/>
	</svg>
)

export default SvgPlusRegular

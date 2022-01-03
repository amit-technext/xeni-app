import * as React from 'react'
import { SVGProps } from 'react'

const SvgArrowLeftRegular = (props: SVGProps<SVGSVGElement>) => (
	<svg
		aria-hidden='true'
		data-prefix='far'
		data-icon='arrow-left'
		className='arrow-left-regular_svg__svg-inline--fa arrow-left-regular_svg__fa-arrow-left arrow-left-regular_svg__fa-w-14'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 448 512'
		width='1em'
		height='1em'
		{...props}
	>
		<path
			fill='currentColor'
			d='m229.9 473.899 19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z'
		/>
	</svg>
)

export default SvgArrowLeftRegular

import * as React from 'react'
import { SVGProps } from 'react'

const SvgMapMarkerAltRegular = (props: SVGProps<SVGSVGElement>) => (
	<svg
		aria-hidden='true'
		data-prefix='far'
		data-icon='map-marker-alt'
		className='map-marker-alt-regular_svg__svg-inline--fa map-marker-alt-regular_svg__fa-map-marker-alt map-marker-alt-regular_svg__fa-w-12'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 384 512'
		width='1em'
		height='1em'
		{...props}
	>
		<path
			fill='currentColor'
			d='M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z'
		/>
	</svg>
)

export default SvgMapMarkerAltRegular

import * as React from 'react'
import { SVGProps } from 'react'

const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 18 25'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M17 8.967c0 4.399-7.995 13.91-7.995 13.91S1 13.366 1 8.967C1 4.568 4.58 1 8.995 1 13.42 1 17 4.568 17 8.967Z'
			stroke='currentColor'
			strokeWidth={2}
			strokeMiterlimit={10}
		/>
		<path
			d='M12.476 9.202c0 1.886-1.551 3.421-3.48 3.421-1.92 0-3.48-1.534-3.48-3.421 0-1.887 1.55-3.421 3.48-3.421 1.929.01 3.48 1.534 3.48 3.42Z'
			stroke='currentColor'
			strokeWidth={2}
			strokeMiterlimit={10}
		/>
	</svg>
)

export default SvgLocation

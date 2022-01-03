import * as React from 'react'
import { SVGProps } from 'react'

const SvgP = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 11 14'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M0 0h5.923c1.347 0 2.638.492 3.59 1.367S11 3.429 11 4.667c0 1.237-.535 2.424-1.487 3.3-.952.875-2.243 1.366-3.59 1.366h-4.23V14H0V0Zm1.692 1.556v6.222h4.231c.898 0 1.759-.328 2.393-.911.635-.584.992-1.375.992-2.2 0-.825-.357-1.617-.992-2.2a3.541 3.541 0 0 0-2.393-.911h-4.23Z'
			fill='currentColor'
		/>
	</svg>
)

export default SvgP

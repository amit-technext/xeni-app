import * as React from 'react'
import { SVGProps } from 'react'

const SvgPlainRounded = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 19 19'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M14.695 10.292h-2.661L9.5 7.125H8.016l1.919 3.167H5.58l-.905-1.584H3.562l.785 2.617c.048.16.142.299.27.398.126.099.28.152.437.152h9.641a.72.72 0 0 0 .525-.232.819.819 0 0 0 .217-.56.82.82 0 0 0-.217-.56.72.72 0 0 0-.525-.231Z'
			fill='currentColor'
		/>
		<path
			d='M9.5 19A9.5 9.5 0 1 1 19 9.5 9.51 9.51 0 0 1 9.5 19Zm0-17.643A8.143 8.143 0 1 0 17.643 9.5 8.153 8.153 0 0 0 9.5 1.357Z'
			fill='currentColor'
		/>
	</svg>
)

export default SvgPlainRounded

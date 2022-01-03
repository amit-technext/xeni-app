import * as React from 'react'
import { SVGProps } from 'react'

const SvgCoffeeCup = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 17 19'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M1.821 6.375A1.821 1.821 0 0 0 0 8.196v3.643a6.679 6.679 0 0 0 13.106 1.822h.858a3.036 3.036 0 1 0 0-6.072h-.71a1.821 1.821 0 0 0-1.718-1.214H1.82Zm11.536 2.429h.607a1.821 1.821 0 1 1 0 3.642h-.634c.017-.2.027-.402.027-.607V8.804ZM1.214 8.196a.607.607 0 0 1 .607-.607h9.715a.607.607 0 0 1 .607.607v3.643a5.464 5.464 0 1 1-10.929 0V8.196ZM2.125 0h1.063v5.313H2.125zM6.375 0h1.063v5.313H6.375zM10.625 0h1.063v5.313h-1.063z'
			fill='currentColor'
		/>
	</svg>
)

export default SvgCoffeeCup

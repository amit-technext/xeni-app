import * as React from 'react'
import { SVGProps } from 'react'

const SvgCalenderCross = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 16 18'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M13.523 1.755H12.49V0h-1.342v1.755H3.923V0H2.58v1.755H1.548C.723 1.755 0 2.477 0 3.303v12.078c0 .412.103.825.413 1.032.31.31.722.413 1.032.413h6.607L6.71 15.484H1.342V6.4h12.49v3.51l1.342-1.342V3.2c-.103-.826-.722-1.445-1.651-1.445Zm.206 3.406H1.342V2.994h12.49V5.16h-.103Zm1.342 6.504-3.613 3.612L9.6 13.42l-.929.93 2.787 2.787L16 12.594l-.929-.93Zm-7.845-2.89-.93-.93-1.341 1.342-1.342-1.342-.93.93 1.343 1.341-1.342 1.342.929.93 1.342-1.343 1.342 1.342.929-.929-1.342-1.342 1.342-1.342Z'
			fill='currentColor'
		/>
	</svg>
)

export default SvgCalenderCross

import * as React from 'react'
import { SVGProps } from 'react'

const SvgBedEmptySolid = (props: SVGProps<SVGSVGElement>) => (
	<svg
		aria-hidden='true'
		data-prefix='fas'
		data-icon='bed-empty'
		className='bed-empty-solid_svg__svg-inline--fa bed-empty-solid_svg__fa-bed-empty bed-empty-solid_svg__fa-w-20'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 640 512'
		width='1em'
		height='1em'
		{...props}
	>
		<path
			fill='currentColor'
			d='M112 256h96a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16Zm416-128H272a16 16 0 0 0-16 16v144H64V80a16 16 0 0 0-16-16H16A16 16 0 0 0 0 80v352a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-48h512v48a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V240a112 112 0 0 0-112-112Z'
		/>
	</svg>
)

export default SvgBedEmptySolid

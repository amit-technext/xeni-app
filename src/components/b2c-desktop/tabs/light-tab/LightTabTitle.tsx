import React, { FC } from 'react'
import Flex from '../../../common/utils/Flex'

interface LightTabTitleProps {
	title: string
}

const LightTabTitle: FC<LightTabTitleProps> = function LightTabTitle({
	title
}: LightTabTitleProps) {
	return (
		<Flex direction='column' alignItems='center' className='cursor-pointer'>
			<h6 className='text-800 text-nowrap mb-0 py-2'>{title}</h6>
		</Flex>
	)
}

export default LightTabTitle

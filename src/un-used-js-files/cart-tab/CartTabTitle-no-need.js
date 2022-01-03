import React, { FC } from 'react'
import PropTypes from 'prop-types'
import Flex from '../../components/common/utils/Flex'

const CartTabTitle: FC = function CartTabTitle(props) {
	const { title } = props

	return (
		<Flex direction='column' alignItems='center' className='cursor-pointer'>
			<h6 className='text-800 text-nowrap mb-0'>{title}</h6>
		</Flex>
	)
}

CartTabTitle.propTypes = {
	title: PropTypes.string.isRequired
}

export default CartTabTitle

import { number } from 'is_js'
import React, { Fragment } from 'react'
import PropTypes, { object } from 'prop-types'
import Radio from './Radio'

function RadioList(props) {
	const { items, value, onChange } = props

	return (
		<div>
			{items?.map(
				item =>
					item.active && (
						<Radio
							item={item}
							key={item.id}
							checked={item.value === value}
							onChange={onChange}
						/>
					)
			)}
		</div>
	)
}

RadioList.propTypes = {
	items: PropTypes.arrayOf(object),
	value: PropTypes.string || number,
	onChange: PropTypes.func
}

export default RadioList

import { Col } from 'react-bootstrap'
import React, { FC, useState } from 'react'
import { textShorter } from 'helpers/helpers'
import { IHotelSearchProps } from 'interface/IHotelProps'

interface HotelDescriptionProps {
	hotel: IHotelSearchProps
	initialLength: number
	col?: number
}

const HotelDescription: FC<HotelDescriptionProps> = function HotelDescription(
	props
) {
	const { hotel, initialLength, col } = props
	const [readMoreLimit, setReadMoreLimit] = useState(initialLength)

	const readMoreLimitHandler = (text: string): void => {
		if (readMoreLimit === initialLength) {
			setReadMoreLimit(text?.length)
		} else {
			setReadMoreLimit(initialLength)
		}
	}

	return (
		<Col lg={col}>
			<div className='text-justify fs--1'>
				{textShorter(hotel?.descriptions?.[0].text, readMoreLimit)}

				{hotel?.descriptions?.[0].text?.length >= initialLength ? (
					<div
						role='button'
						tabIndex={0}
						className='fw-bold text-primary cursor-pointer fs--1'
						onClick={(): void => readMoreLimitHandler(hotel?.descriptions?.[0].text)}
						onKeyPress={(): void =>
							readMoreLimitHandler(hotel?.descriptions?.[0].text)
						}
					>
						{readMoreLimit === initialLength ? ' Read More' : 'Read Less'}
					</div>
				) : null}
			</div>
		</Col>
	)
}

HotelDescription.defaultProps = {
	col: 12
}

export default HotelDescription

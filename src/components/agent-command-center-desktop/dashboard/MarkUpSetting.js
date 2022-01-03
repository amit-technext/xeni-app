import React, { useEffect, useState } from 'react'
import { Card, Row, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../../common/utils/Flex'

function MarkUpSetting({ markUp }) {
	const [formData, setFromData] = useState({})
	useEffect(() => {
		const fData = {}
		markUp.map(item => item.children.map(i => (fData[i.type] = i.percent)))
		// console.log(fData['Flight']);
		setFromData(fData)
		// console.log(formData);
	}, [])

	const onChangeHandeler = ({ target: { name, value } }) => {
		setFromData({ ...formData, [name]: value })
		console.log(formData)
	}

	return (
		<div>
			<Row className='ms-0'>
				{markUp.map((item, index) => (
					<Card
						className='me-3 col-lg-3 col-12 my-2 w-lg-30 w-40'
						style={{ width: '18rem' }}
						key={index}
					>
						<Card.Body className={classNames({ 'px-0': screen.availWidth < 1650 })}>
							<Card.Title className='d-flex'>
								<Flex
									justifyContent='center'
									alignItems='center'
									className='rounded-circle bg-soft-primary p-2'
									style={{ width: '2.5rem', height: '2.5rem' }}
								>
									<FontAwesomeIcon icon={item.icon} className='text-primary fs-1' />
								</Flex>
								<div className='d-flex mt-1 ps-2'>
									<h7 className='mt-2 ms-1 fs--1'>{item.lebal}</h7>
								</div>
							</Card.Title>
							<Card.Text className='mt-3'>
								{item.children.map((data, i) => (
									<div key={i} className='fw-bolder d-flex justify-content-between mt-1'>
										<h6 className='text-800 fw-semi-bold pt-2 w-40'>{data.type}</h6>
										{item.inputType === 'print' ? (
											<h6 className='text-800 fw-semi-bold pt-2'>{data.percent}</h6>
										) : (
											<Form.Control
												type='text'
												name={data.type}
												placeholder={data.percent === '' && '%'}
												value={formData[data.type]}
												onChange={onChangeHandeler}
											/>
										)}
									</div>
								))}
							</Card.Text>
						</Card.Body>
					</Card>
				))}
			</Row>
		</div>
	)
}

MarkUpSetting.propTypes = {
	markUp: PropTypes.any.isRequired
}

export default MarkUpSetting

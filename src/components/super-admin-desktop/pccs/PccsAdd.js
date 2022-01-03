import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Flex from '../../common/utils/Flex'

function PCCsAdd({ callBackSave }) {
	const [data] = useState(0)
	const saveData = () => {}
	return (
		<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
			<Flex direction='row'>
				<div className='pe-2 w-50'>
					<Form.Label className='fs--2'>Tenant</Form.Label>
					<Form.Control type='email' className='fs--1' placeholder='' />
				</div>
				<div className='pe-2 w-50'>
					<Form.Label className='fs--2'>PCC</Form.Label>
					<Form.Control type='email' className='fs--1' placeholder='' />
				</div>
			</Flex>

			<Flex justifyContent='between'>
				<div>
					<Flex justifyContent='center' alignItems='center'>
						<Form.Check type='checkbox' id='Enable' label='Enable' className='pt-2' />
					</Flex>
				</div>
				<div>
					<Button
						onClick={() => {
							saveData(data)
							callBackSave()
						}}
						className='me-2 mb-1 mt-4'
					>
						Save
					</Button>
				</div>
			</Flex>
		</Form.Group>
	)
}

PCCsAdd.propTypes = {
	callBackSave: PropTypes.func
}
export default PCCsAdd

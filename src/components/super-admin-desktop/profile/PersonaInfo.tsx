import React, { FC } from 'react'
import { Form } from 'react-bootstrap'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import Flex from '../../common/utils/Flex'
import IconButton from '../../common/utils/IconButton'

const PersonalInfo: FC = function PersonalInfo() {
	return (
		<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
			<Flex>
				<div className='pe-2'>
					<Form.Label className='fs--2'>Email address</Form.Label>
					<Form.Control
						type='email'
						className='fs--1'
						placeholder='name@example.com'
					/>
				</div>
				<div className='pe-2'>
					<Form.Label className='fs--2'>Phone Number</Form.Label>
					<Form.Control
						type='number'
						className='fs--1'
						placeholder='Enter the number'
					/>
				</div>
				<div>
					<Flex justifyContent='center' alignItems='center'>
						<Form.Check
							type='checkbox'
							id='checkedCheckbox'
							label='Two Factor authentication'
							className='pt-2'
						/>
					</Flex>
				</div>
			</Flex>
			<Flex>
				<div className='pe-2'>
					<Form.Label className='fs--2'>Password</Form.Label>
					<Form.Control type='password' className='fs--1' />
				</div>
				<div className='pe-5'>
					<Form.Label className='fs--2'>Old Password</Form.Label>
					<Form.Control type='password' className='fs--1' />
				</div>
				<div className='d-flex align-items-end'>
					<IconButton
						icon={faKey}
						className=''
						size='sm'
						transform='shrink-3'
						onClick={(): void => {}}
					>
						Change Password
					</IconButton>
				</div>
			</Flex>
		</Form.Group>
	)
}
export default PersonalInfo

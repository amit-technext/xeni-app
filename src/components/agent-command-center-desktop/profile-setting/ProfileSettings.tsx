import React, { FC } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import image from '../../../assets/img/generic/4.jpg'
import Flex from '../../common/utils/Flex'
import IconButton from '../../common/utils/IconButton'
import Avatar from '../../common/utils/Avatar'

interface ProfileSettingsProps {
	changeSubsriptionPlan: {
		src: string
		name: string
	}[]
}

const ProfileSettings: FC<ProfileSettingsProps> = function ProfileSettings({
	changeSubsriptionPlan
}) {
	return (
		<Row className='mx-3'>
			<div className='col-xl-8 col-lg-12'>
				<Flex justifyContent='between' className='mt-4'>
					<p className='fw-bold text-800'>Profile Settings</p>
					<div>
						<button type='button' className='btn btn-falcon-primary me-1'>
							Cancel
						</button>
						<button type='button' className='btn bg-primary text-white ms-1'>
							Save
						</button>
					</div>
				</Flex>
				<div
					className='position-relative mb-4'
					style={{ height: '114px', width: '114px' }}
				>
					<img
						className='rounded-circle avatar'
						height={114}
						width={114}
						src={image}
						alt='profile'
					/>
					<div
						className='position-absolute bg-white px-2 py-1 shadow-lg rounded-3'
						style={{ right: '5%', bottom: '0' }}
					>
						<FontAwesomeIcon icon={faPencilAlt} size='sm' />
					</div>
				</div>
				<Card className='p-2'>
					<div>
						<p className='my-2 fw-bold'>General</p>
					</div>
					<div>
						<div className='d-flex flex-sm-row flex-column mx-3'>
							<div className='pe-2 me-3 w-sm-50 w-100'>
								<Form.Label className='fs--2'>First Name</Form.Label>
								<Form.Control type='text' className='fs--1' placeholder='First Name' />
							</div>
							<div className='pe-2 w-sm-50 w-100'>
								<Form.Label className='fs--2'>Last Name</Form.Label>
								<Form.Control type='text' className='fs--1' placeholder='Last Name' />
							</div>
						</div>
						<div className='d-flex flex-sm-row flex-column mx-3'>
							<div className='pe-2 me-3 w-sm-50 w-100'>
								<Form.Label className='fs--2'>Email</Form.Label>
								<Form.Control
									type='email'
									className='fs--1'
									placeholder='abc@gmail.com'
								/>
							</div>
							<div className='pe-2 w-sm-50 w-100'>
								<Form.Label className='fs--2'>Phone</Form.Label>
								<Form.Control type='number' className='fs--1' placeholder='' />
							</div>
						</div>
						<div className='d-flex justify-content-sm-end justify-content-start mx-3 my-3'>
							<IconButton
								className='me-2 mb-1'
								size='sm'
								transform='shrink-3'
								onClick={(): void => {}}
								icon={faEdit}
							>
								Update
							</IconButton>
						</div>
					</div>
				</Card>
				<Card className='p-2 mt-2'>
					<div>
						<p className='my-2 fw-bold'>Change Password</p>
					</div>
					<div className='mx-3 pe-2'>
						<div className='pe-2 w-sm-50 w-100'>
							<Form.Label className='fs--2'>Old Password</Form.Label>
							<Form.Control
								type='password'
								className='fs--1'
								placeholder='Old password'
							/>
						</div>
						<div className='pe-2 w-sm-50 w-100'>
							<Form.Label className='fs--2'>Email</Form.Label>
							<Form.Control type='email' className='fs--1' placeholder='Email' />
						</div>
						<div className='d-flex justify-content-between flex-sm-row flex-column mb-4'>
							<div className='pe-2 w-sm-50 w-100'>
								<Form.Label className='fs--2'>Phone</Form.Label>
								<Form.Control type='number' className='fs--1' placeholder='Phone' />
							</div>
							<div className='mt-sm-4 mt-2 pt-1'>
								<IconButton
									className='me-2 mb-1'
									size='sm'
									transform='shrink-3'
									onClick={(): void => {}}
									icon={faEdit}
								>
									Update Password
								</IconButton>
							</div>
						</div>
					</div>
				</Card>
			</div>
			<div className='col-xl-4 col-sm-12 mt-sm-2 mt-2 flex-lg-column'>
				<Card className='ps-1 '>
					<Card.Body>
						<h5 className='fs-xl-0 fs-lg-1s mb-3'>Change Subscription Plan</h5>
						<h5>Plan</h5>
						<p>
							<b>Developer-</b> Unlimited private repositories
						</p>
						<Button variant='falcon-default' className='me-2 mb-1 fs--1'>
							Update Plan
						</Button>
						<hr />
						<h5>Payment</h5>
						<p>You have not added any auto payment.</p>
						<Button variant='falcon-default' className='me-2 mb-1 fs--1'>
							Update Plan
						</Button>
						<div className='d-flex mt-2 me-2 justify-content-end'>
							<p className='text-primary fw-semi-bold'>View Details &gt;</p>
						</div>
					</Card.Body>
				</Card>
				<Card className='mt-2'>
					<Card.Header>
						<div className='d-flex justify-content-between mt-2'>
							<h5 className='fs-xl-0 fs-lg-1 mb-2 mt-2'>Change Subscription Plan</h5>
							<div>
								<Button size='sm' variant='falcon-default' className='fs-1'>
									&middot;&middot;&middot;
								</Button>
							</div>
						</div>
					</Card.Header>
					<Card.Body className='py-0'>
						{changeSubsriptionPlan.map((item, index) => (
							<div
								key={index.toString()}
								className=' my-2 border border-dashed rounded-3 d-flex justify-content-between'
							>
								<div className='px-2 py-2 d-flex'>
									<div className='me-1 ' style={{ paddingTop: '2px' }}>
										{item.src === null ? (
											<Avatar rounded='circle' size='s' name={item.name} />
										) : (
											<Avatar src={item.src} rounded='circle' size='s' />
										)}
									</div>{' '}
									<b className='fw-semi-bold'>{item.name}</b>
								</div>
								<Link to='/' className='text-primary mx-2 py-2'>
									<b>Connect &gt;</b>
								</Link>
							</div>
						))}
					</Card.Body>
				</Card>
			</div>
		</Row>
	)
}

// ProfileSettings.propTypes = {
// 	changeSubsriptionPlan: PropTypes.any.isRequired
// }

export default ProfileSettings

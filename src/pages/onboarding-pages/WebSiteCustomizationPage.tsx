/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC, useEffect, useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from 'react-dropzone'
import { nanoid } from 'nanoid'
import cloudUpload from '../../assets/icon/cloud-upload.svg'
import Flex from '../../components/common/utils/Flex'

const WebSiteCustomizationPage: FC = function WebSiteCustomizationPage() {
	const re = /[0-9A-Fa-f#]{6}/g
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
	const [chooseTheme, setChooseTheme] = useState('#000000')
	const files = acceptedFiles.map(file => (
		<li key={nanoid()}>
			{/* {file.path} -  */}
			{file.size} bytes
		</li>
	))
	const colorHandeler = (e: any): void => {
		if (re.test(e.target.value)) {
			setChooseTheme(e.target.value)
		} else if (e.target.value.length > 7) {
			// eslint-disable-next-line no-alert
			alert('invalid color')
		}
	}
	useEffect(() => {}, [chooseTheme])
	return (
		<div>
			<div className='d-flex flex-column mt-6 mb-3'>
				<p className='text-center fs-1 text-black fw-bold'>
					Customize your Travel Website
				</p>
				<p className='text-center text-800 mx-auto w-90 w-md-65'>
					You are almost there, Please fill up the additional information listed
					below
				</p>
			</div>

			<Card className='d-flex flex-row mx-auto w-100 w-md-90 w-lg-85 w-xl-75 my-4 bg-100'>
				<div className='d-none d-md-block'>
					<img className='position-absolute image' alt='' />
				</div>
				<Form className='w-100 mx-4 mt-2 position-relative bg-transparent text-black'>
					<Row className='py-4 px-3'>
						<Col xs={12} md={4}>
							<div>
								<h5 className='mb-2 pt-1'>Subscription Details</h5>
								<Flex className='w-96'>
									<div>
										<FontAwesomeIcon className=' me-2' icon={faInfoCircle} />
									</div>
									<p className='fs--2 fs-xxl--1 pe-2' style={{ paddingTop: '2.7px' }}>
										This information can be changed from your profile settings page
									</p>
								</Flex>
							</div>
						</Col>
						<Col xs={12} md={8} className='d-flex'>
							<Form.Group className='mb-3 me-3 w-100'>
								<Form.Label>First Name</Form.Label>
								<Form.Control type='text' value='Anthony' placeholder='Anthony' />
							</Form.Group>
							<Form.Group className='mb-3 w-100'>
								<Form.Label>Last Name</Form.Label>
								<Form.Control type='text' value='Hopkins' placeholder='Hopkins' />
							</Form.Group>
						</Col>
					</Row>
					<Row className='py-4 px-3'>
						<Col xs={12} md={4}>
							<div>
								<h5 className='mb-2 mt-3 pt-1 '>Subdomain Information</h5>
								<Flex className='w-96'>
									<div>
										<FontAwesomeIcon className='text-black me-2 ' icon={faInfoCircle} />
									</div>
									<p className='fs--2 fs-xxl--1' style={{ paddingTop: '2.7px' }}>
										Standard & premium subscribers can configure custom domain on command
										center dashboard
									</p>
								</Flex>
							</div>
						</Col>
						<Col xs={12} md={8} className='d-flex align-items-center'>
							<Form.Group className='mb-3 me-3 w-100'>
								<Form.Label>Credential</Form.Label>
								<Form.Control type='text' value='biirdee' />
							</Form.Group>
							<p className='w-100 mt-4'>.xeniapp.com</p>
						</Col>
					</Row>
					<Row className='py-4 px-3'>
						<Col xs={12} md={4}>
							<div>
								<h5 className='mb-3 '>Choose your theme</h5>
								<Flex className='w-95'>
									<div>
										<FontAwesomeIcon className='text-black me-2' icon={faInfoCircle} />
									</div>
									<p className='fs--2 fs-xxl--1' style={{ paddingTop: '2.7px' }}>
										Theme color scheme can be changed later
									</p>
								</Flex>
							</div>
						</Col>
						<Col xs={12} md={8} className='d-flex align-items-center'>
							<Flex direction='column'>
								<div className='d-flex mb-2'>
									<div
										className='colorHover'
										style={{
											border: '1px solid #ECE8E7',
											borderRadius: '5px'
										}}
									>
										<div
											role='button'
											tabIndex={0}
											style={{
												padding: '10px 27px 17px 10px',
												backgroundColor: '#F3BD2D',
												borderRadius: '10px',
												border: '6px solid white'
											}}
											id='exampleColorInput'
											onClick={(): void => setChooseTheme('#F3BD2D')}
											onKeyPress={(): void => setChooseTheme('#F3BD2D')}
										/>
									</div>
									<div
										className='colorHover ms-3'
										style={{
											border: '1px solid #ECE8E7',
											borderRadius: '5px'
										}}
									>
										<div
											role='button'
											tabIndex={0}
											style={{
												padding: '10px 27px 17px 10px',
												backgroundColor: '#539DCE',
												borderRadius: '10px',
												border: '6px solid white'
											}}
											id='exampleColorInput'
											onClick={(): void => setChooseTheme('#539DCE')}
											onKeyPress={(): void => setChooseTheme('#539DCE')}
										/>
									</div>
									<div
										className='colorHover ms-3'
										style={{
											border: '1px solid #ECE8E7',
											borderRadius: '5px'
										}}
									>
										<div
											role='button'
											tabIndex={0}
											style={{
												padding: '10px 27px 17px 10px',
												backgroundColor: '#6CBF73',
												borderRadius: '10px',
												border: '6px solid white'
											}}
											id='exampleColorInput'
											onClick={(): void => setChooseTheme('#6CBF73')}
											onKeyPress={(): void => setChooseTheme('#6CBF73')}
										/>
									</div>
									<div
										className='colorHover ms-3'
										style={{
											border: '1px solid #ECE8E7',
											borderRadius: '5px'
										}}
									>
										<div
											role='button'
											tabIndex={0}
											style={{
												padding: '10px 27px 17px 10px',
												backgroundColor: '#A857A1',
												borderRadius: '10px',
												border: '6px solid white'
											}}
											id='exampleColorInput'
											onClick={(): void => setChooseTheme('#A857A1')}
											onKeyPress={(): void => setChooseTheme('#A857A1')}
										/>
									</div>
								</div>
								<div className='mt-2'>
									<label> Enter the color code : </label>
								</div>
								<div className='row'>
									<div className='col-8'>
										<input
											type='text'
											className='form-control'
											style={{
												marginTop: '1px'
											}}
											value={chooseTheme}
											onChange={colorHandeler}
										/>
									</div>
									<div className='col-4'>
										<input
											type='color'
											className='form-control form-control-color me-3'
											id='exampleColorInput'
											value={chooseTheme}
											onChange={(e): void => setChooseTheme(e.target.value)}
											title='Choose your theme'
										/>
									</div>
								</div>
							</Flex>
						</Col>
					</Row>
					<Row className='py-4 px-3'>
						<Col xs={12} md={4}>
							<div>
								<h5 className='mb-3 '>Upload Logo</h5>
								<Flex className='w-95'>
									<div>
										<FontAwesomeIcon className='text-black me-2' icon={faInfoCircle} />
									</div>
									<p className='fs--2 fs-xxl--1' style={{ paddingTop: '2.7px' }}>
										This information can be changed from your profile settings page
									</p>
								</Flex>
							</div>
						</Col>
						<Col xs={12} md={8} className='d-flex'>
							<div
								{...getRootProps({
									className: 'dropzone-area py-6 w-100'
								})}
							>
								<input {...getInputProps({ multiple: false })} />
								<Flex justifyContent='center'>
									<img src={cloudUpload} alt='' width={25} className='me-2' />
									<p className='fs-0 mb-0'>Drop your file here</p>
								</Flex>
							</div>
							<div className='mt-3'>
								{acceptedFiles.length > 0 && (
									<>
										<h6>File</h6>
										<ul>{files}</ul>
									</>
								)}
							</div>
						</Col>
					</Row>
					<Row className='py-4 px-3'>
						<Col xs={12} md={4}>
							<div>
								<h5 className='mb-3 '>Upload Banner</h5>
								<Flex className='w-95'>
									<div>
										<FontAwesomeIcon className='text-black me-2' icon={faInfoCircle} />
									</div>
									<p className='fs--2 fs-xxl--1' style={{ paddingTop: '2.7px' }}>
										This information can be changed form your profile settings page
									</p>
								</Flex>
							</div>
						</Col>
						<Col xs={12} md={8} className='d-flex'>
							<div
								{...getRootProps({
									className: 'dropzone-area py-6 w-100'
								})}
							>
								<input {...getInputProps({ multiple: false })} />
								<Flex justifyContent='center'>
									<img src={cloudUpload} alt='' width={25} className='me-2' />
									<p className='fs-0 mb-0 text-700'>Drop your file here</p>
								</Flex>
							</div>
							<div className='mt-3'>
								{acceptedFiles.length > 0 && (
									<>
										<h6>File</h6>
										<ul>{files}</ul>
									</>
								)}
							</div>
						</Col>
					</Row>
					<div className='d-flex justify-content-end mb-4 px-3'>
						<Link
							to='/landing-preview'
							className='btn px-3 bg-primary text-white btn-sm mx-3 '
						>
							Preview
						</Link>
						<Link
							to='/payment-details'
							className='btn px-3 bg-primary text-white btn-sm '
						>
							Proceed To Payment
						</Link>
					</div>
				</Form>
			</Card>
		</div>
	)
}

export default WebSiteCustomizationPage

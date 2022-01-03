import React, { FC, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import Flex from 'components/common/utils/Flex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFlag,
	faFrown,
	faSmile,
	faThumbsUp
} from '@fortawesome/free-solid-svg-icons'
import FalconCloseButton from 'components/common/utils/FalconCloseButton'

const Review: FC = function Review() {
	const number = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
	const [visible, setVisible] = useState(2)

	const loadMore = (): void => {
		if (visible === 2) {
			setVisible(preValue => preValue + 10)
		} else {
			setVisible(2)
		}
	}

	const [show, setShow] = useState(false)
	const handleShow = (): void => setShow(true)

	return (
		<>
			{number.slice(0, visible).map((item, index) => (
				<div key={index.toString()} className='mb-4'>
					<p className='fs-0 text-dark fw-semi-bold mb-1'>5/5 Excelent</p>
					<p className='fs--1 text-dark fw-semi-bold mb-1'>Curtis Hutt</p>
					<p className='fs--1 text-dark fw-normal mb-1'>
						Traveled with pets, Traveled with family
					</p>
					<p className='fs--1 text-dark fw-normal mb-3'>Nov 29, 2021</p>
					<p className='fs--1 text-dark fw-normal mb-1'>
						Stayed 1 night in Nov 2021
					</p>
					<div>
						<FontAwesomeIcon icon={faSmile} className='me-1' size='xs' />
						<span className='fs--1 fw-semi-bold'>Liked :</span>{' '}
						<span className='fs--1 text-dark fw-normal'>
							Staff & service, property conditions & facilities
						</span>
					</div>
					<div className='mb-2'>
						<FontAwesomeIcon icon={faFrown} className='me-1' size='xs' />
						<span className='fs--1 fw-semi-bold'>Disliked :</span>{' '}
						<span className='fs--1 text-dark fw-normal'>Cleanliness</span>
					</div>
					<div>
						<p className='fs--1 text-dark fw-semi-bold mb-0'>Comment</p>
						<p className='fs--1 text-dark fw-normal mb-0'>
							We&apos;ve of periodic not, to queen&apos;s of what he of gentlemen,
							herself the viewer. Own just project hell for mountains, I rather them
							gone the from handles who he drew just if the he easy height it enormity,
							and the objects one claim leaning and state as of self-interest...{' '}
						</p>
						<Flex className='mt-3'>
							<div className='me-4'>
								<FontAwesomeIcon icon={faThumbsUp} className='me-2 text-primary' />
								<span className='fs--1 text-dark'>01</span>
							</div>
							<div className='me-3'>
								<FontAwesomeIcon icon={faFlag} className='me-2 text-primary' />
								<button
									type='button'
									onClick={handleShow}
									className='bg-transparent border-0 fs--1 text-dark text-decoration-underline px-0'
								>
									Report review
								</button>
							</div>
						</Flex>
					</div>
				</div>
			))}
			<div className='mt-4'>
				<Button
					onClick={loadMore}
					className='bg-transparent text-primary rounded-3'
				>
					{visible > 2 ? 'See less reviews' : 'See all reviews'}
				</Button>
			</div>
			<Modal
				show={show}
				fullscreen
				onHide={(): void => setShow(false)}
				aria-labelledby='example-modal-sizes-title-lg'
			>
				<Modal.Header>
					<Modal.Title id='example-modal-sizes-title-lg' className='fw-medium fs-0'>
						Report review
					</Modal.Title>

					<FalconCloseButton onClick={(): void => setShow(false)} size='sm' />
				</Modal.Header>
				<Modal.Body className='p-3'>
					<p className='fs--1'>
						If you&apos;re the property owner or manager and want to dispute this
						review, please use this form.
					</p>
					<p className='fs--1'>
						Your feedback helps us create a community where everyone is respected.
					</p>
					<p className='fs-0 fw-medium'>What&apos;s the problem with this review?</p>
					<Form.Check type='checkbox' id='defaultCheckbox12' label='Profanity' />
					<Form.Check type='checkbox' id='defaultCheckbox2' label='Inappropriate' />
					<Form.Check
						type='checkbox'
						id='defaultCheckbox3'
						label='Discriminatory language'
					/>
					<Button
						onClick={(): void => setShow(false)}
						className='bg-primary border-0 mt-2 fs--1'
					>
						Submit
					</Button>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default Review

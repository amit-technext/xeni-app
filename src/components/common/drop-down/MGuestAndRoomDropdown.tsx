/* eslint-disable no-console */
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MGuestAndRoomDropdownProps } from 'interface/IHotelProps'
import React, { FC, useState } from 'react'
import { Button, CloseButton, Form, Modal } from 'react-bootstrap'
import guestIcon from '../../../assets/icon/guest.svg'
import { useBreakpoints } from '../../../hooks/useBreakpoints'
import { Guests } from '../../../type/HotelInfoType'

import {
	ageRender,
	decrementSeatCount,
	incrementGuestCount,
	updateAgeOfChild
} from './guestAndRoomDropdownFunction'

const MGuestAndRoomDropdown: FC<MGuestAndRoomDropdownProps> =
	function MGuestAndRoomDropdown({ guest, setGuest }) {
		const [show, setShow] = useState(false)
		const [totalRoom, setTotalRoom] = useState(guest[0].count)
		const [totalGuest, setTotalGuest] = useState(
			guest.length === 0 ? 1 : guest[0].count
		)

		const { width } = useBreakpoints()

		const onSubmitDropdown = (): void => {
			setShow(false)
			console.log(guest)
		}

		return (
			<div
				className='bg-100 m-1 py-1 d-flex justify-content-start align-items-center cursor-pointer border rounded position-relative border-300 ps-2'
				style={{ minWidth: '240px', height: '48px' }}
			>
				<div
					role='button'
					tabIndex={0}
					onKeyDown={(e): void => {
						if (e.key === 'Enter') setShow(true)
					}}
					className='d-flex justify-content-start py-1 ps-1 w-100'
					onClick={(): void => setShow(true)}
				>
					<img
						alt='guest icon'
						src={guestIcon}
						width='14'
						className='me-2 mt-0 me-0'
					/>
					<p className='text-nowrap text-dark fw-regular text-center fs--1 mb-0 me-2'>
						{`${totalRoom} ${totalRoom > 1 ? 'Rooms' : 'Room'}`},{' '}
						{totalGuest === 1 ? '1 Adult' : `${totalGuest} Guests`}
					</p>
					<span className='ms-3 text-900 dropdown-indicator mt--1' />
				</div>

				<Modal
					show={show}
					fullscreen={
						(width <= 1024) as
							| true
							| 'sm-down'
							| 'md-down'
							| 'lg-down'
							| 'xl-down'
							| 'xxl-down'
							| undefined
					}
					onHide={(): void => setShow(false)}
				>
					<Modal.Header>
						<Modal.Title>
							<span className='fs--1 text-dark fw-semi-bold'>
								{`${totalRoom} ${totalRoom > 1 ? 'Rooms' : 'Room'}`},{' '}
								{totalGuest === 1 ? '1 Adult' : `${totalGuest} Guests`}
							</span>
						</Modal.Title>
						<CloseButton
							className='btn btn-circle btn-sm transition-base p-0 me-0'
							onClick={(): void => setShow(false)}
						/>
					</Modal.Header>
					<Modal.Body>
						<div>
							{guest.map((p: Guests) => (
								<div
									className='d-flex justify-content-between mt-1 mb-3 first-mt-0 last-mb-0'
									key={p.id}
								>
									<div className='d-flex align-self-center'>
										<p className='fw-normal fs--1 text-900 mb-0'>{p.type}</p>
									</div>
									<div
										className='ms-4 fw-semi-bold fs--1 d-flex justify-content-between align-items-center text-center'
										style={{ width: '85px' }}
									>
										<button
											type='button'
											onKeyDown={(): void | Guests =>
												decrementSeatCount(p, guest, setGuest, setTotalRoom, setTotalGuest)
											}
											onClick={(): void | Guests =>
												decrementSeatCount(p, guest, setGuest, setTotalRoom, setTotalGuest)
											}
											style={{ height: '26px', width: '26px' }}
											className={
												(p.count === 1 && p.type === 'Adults') ||
												(p.count === 1 && p.type === 'Room') ||
												p.count === 0
													? 'disabled btn btn-falcon-primary px-1 py-0 me-2'
													: 'btn btn-falcon-primary px-1 py-0 me-2'
											}
										>
											<FontAwesomeIcon icon={faMinus} size='xs' />
										</button>
										<span>{p.count}</span>
										<button
											type='button'
											onKeyDown={(): void | Guests =>
												incrementGuestCount(p, guest, setGuest, setTotalRoom, setTotalGuest)
											}
											onClick={(): void | Guests =>
												incrementGuestCount(p, guest, setGuest, setTotalRoom, setTotalGuest)
											}
											style={{ height: '26px', width: '26px' }}
											className={
												p?.count === 5
													? 'disabled btn btn-falcon-primary px-1 py-0 ms-2'
													: 'btn btn-falcon-primary px-1 py-0 ms-2'
											}
										>
											<FontAwesomeIcon icon={faPlus} size='xs' />
										</button>
									</div>
								</div>
							))}
							{guest?.[guest.length - 1]?.childGuests?.length > 0 ? (
								<>
									<hr />
									{guest[guest.length - 1].childGuests.map((child: any) => (
										<div
											key={child.childCount}
											className='d-flex align-items-center justify-content-between mt-1 mb-2 first-mt-0 last-mb-0'
										>
											<p className='fs--1 fw-normal mb-0 text-black'>
												Age of child {child.childCount}
											</p>
											<div className='border rounded  border-300'>
												<Form.Select
													onChange={(e): void => updateAgeOfChild(e, child, guest, setGuest)}
													size='sm'
													defaultValue={child.age}
												>
													{ageRender()?.map(age => (
														<option key={age} value={age}>
															{age}
														</option>
													))}
												</Form.Select>
											</div>
										</div>
									))}
								</>
							) : null}
						</div>
						<div className='d-flex justify-content-center mt-3'>
							<Button onClick={onSubmitDropdown}>Done</Button>
						</div>
					</Modal.Body>
				</Modal>
			</div>
		)
	}

export default MGuestAndRoomDropdown

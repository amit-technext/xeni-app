import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useClickAway from 'hooks/useClickAway'
import { MGuestAndRoomDropdownProps } from 'interface/IHotelProps'
import React, { FC, useRef, useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import { Guests } from 'type/HotelInfoType'
import guestIcon from '../../../assets/icon/guest.svg'
import {
	ageRender,
	decrementSeatCount,
	incrementGuestCount,
	updateAgeOfChild
} from './guestAndRoomDropdownFunction'

const GuestAndRoomDropdown: FC<MGuestAndRoomDropdownProps> =
	function GuestAndRoomDropdown(props) {
		const { guest, setGuest } = props

		const selectRef = useRef(null)

		const [show, setShow] = useState(false)
		const [totalRoom, setTotalRoom] = useState(guest[0].count)
		const [totalGuest, setTotalGuest] = useState(
			guest.length === 0 ? 1 : guest[0].count
		)

		useClickAway(selectRef, () => {
			setShow(false)
		})

		return (
			<div
				role='button'
				tabIndex={0}
				ref={selectRef}
				onClick={(): void => setShow(true)}
				onKeyPress={(): void => setShow(true)}
				className='hover-bg-200 m-1 d-flex justify-content-start align-items-center cursor-pointer border rounded position-relative border-300 ps-3'
				style={{ minWidth: '240px', height: '55px' }}
			>
				<div className='d-flex justify-content-between py-1 w-100 pe-2'>
					<p className='text-nowrap text-dark fw-regular text-center fs--1 mb-0 '>
						<img src={guestIcon} width='14' className='me-3' alt='guest' />
						{`${totalRoom} ${totalRoom > 1 ? 'Rooms' : 'Room'}`},{' '}
						{totalGuest === 1 ? '1 Adult' : `${totalGuest} Guests`}
					</p>
					<span className='text-900 dropdown-indicator' />
				</div>

				<Card
					className={
						show
							? 'd-block position-absolute-form-popup'
							: // 'd-block position-absolute-form-popup'
							  'd-none'
					}
					style={{ width: '100%', left: '0' }}
				>
					<Card.Body>
						{guest.map((p: Guests) => (
							<div
								className='d-flex justify-content-between mt-1 mb-3 first-mt-0 last-mb-0'
								key={p.id}
							>
								<div className='d-flex align-self-center'>
									<p className='fw-regular text-900 mb-0 fs--1'>{p.type}</p>
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
											(p?.count === 1 && p.type === 'Adults') ||
											(p?.count === 1 && p.type === 'Room') ||
											p?.count === 0
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
								{guest?.[guest.length - 1]?.childGuests?.map((child: any) => (
									<div
										key={child.childCount}
										className='d-flex align-items-center justify-content-between mt-1 mb-2 first-mt-0 last-mb-0'
									>
										<p className='fs--1 fw-normal mb-0 text-black'>
											Age of child {child?.childCount}
										</p>
										<div className='border rounded border-300'>
											<Form.Select
												onChange={(e): void => updateAgeOfChild(e, child, guest, setGuest)}
												defaultValue={child.age}
												size='sm'
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
					</Card.Body>
				</Card>
			</div>
		)
	}

export default GuestAndRoomDropdown

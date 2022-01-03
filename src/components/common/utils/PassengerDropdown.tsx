import { Card, CloseButton } from 'react-bootstrap'
import React, { useState, useRef, FC } from 'react'
import useClickAway from 'hooks/useClickAway'
import classNames from 'classnames'
import Flex from './Flex'
import { PassengerType } from '../../../type/PassengerType'
import FalconCloseButton from './FalconCloseButton'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface PassengerDropdownProps
	extends React.HtmlHTMLAttributes<HTMLOrSVGElement> {
	passenger: PassengerType[]
	setPassenger: React.Dispatch<React.SetStateAction<PassengerType[]>>
	border?: boolean
}

const PassengerDropdown: FC<PassengerDropdownProps> =
	function PassengerDropdown({
		passenger,
		setPassenger,
		border
	}: PassengerDropdownProps) {
		const [show, setShow] = useState(false)
		const [totalSeat, setTotalSeat] = useState(
			passenger.length === 0 ? 1 : passenger[0].seatCount
		)

		const selectRef = useRef(null)

		useClickAway(selectRef, () => {
			setShow(false)
		})

		const incrementSeatCount = (p: PassengerType): void => {
			setPassenger(
				passenger.map(item =>
					item.type === p.type ? { ...item, seatCount: item.seatCount + 1 } : item
				)
			)
			setPassenger(state => {
				updateTotalSeat(state)
				return state
			})
		}
		const decrementSeatCount = (p: PassengerType): void => {
			setPassenger(
				passenger.map(item =>
					item.type === p.type ? { ...item, seatCount: item.seatCount - 1 } : item
				)
			)
			setPassenger(state => {
				updateTotalSeat(state)
				return state
			})
		}

		function updateTotalSeat(seats: PassengerType[]) {
			const seatArray = seats.map(item => item.seatCount)
			const sum = seatArray.reduce((a, b) => a + b)
			setTotalSeat(sum)
		}

		return (
			<div
				ref={selectRef}
				className={classNames(
					'd-flex flex-column position-relative cursor-pointer',
					{
						'border rounded-2 border-primary': border
					}
				)}
				style={{ minWidth: '125px' }}
			>
				<div
					role='button'
					tabIndex={0}
					className='d-flex justify-content-center py-0'
					onClick={() => setShow(true)}
					onKeyDown={() => setShow(true)}
				>
					<p className='text-nowrap text-center fs--1 fw-medium text-primary mb-0 me-2'>
						{totalSeat === 1 ? '1 Adult' : `${totalSeat} Passengers`}
					</p>
					<span className='text-900 dropdown-indicator ms-3 mb-1' />
				</div>

				<Card
					className={show ? 'd-block position-absolute-form-popup' : 'd-none'}
					style={{ width: '325px' }}
				>
					<Card.Header className='border-bottom d-flex justify-content-between align-items-center py-2'>
						<span className={'fs--1 text-dark fw-semi-bold mx-0'}>
							{totalSeat === 1 ? '1 Adult' : `${totalSeat} Passengers`}
						</span>
						<CloseButton
							className='btn btn-circle btn-sm transition-base p-0'
							onClick={() => setShow(false)}
						/>
					</Card.Header>
					<Card.Body>
						{passenger?.map(p => (
							<div className='d-flex justify-content-between my-3 mx-0' key={p.type}>
								<div className='d-flex align-self-center'>
									<p className='fw-semi-bold fs--1 text-dark mb-0 mt-1'>
										{p.type} <sub className='text-600'>{p.age}</sub>
									</p>
								</div>
								<Flex
									alignContent='center'
									alignItems='center'
									className='gap-2 fs--1 fw-semi-bold'
								>
									<div>
										<button
											onClick={() => decrementSeatCount(p)}
											className={
												(p.seatCount === 1 && p.type === 'Adults') || p.seatCount === 0
													? 'disabled btn btn-falcon-primary px-1 py-0 me-2'
													: 'btn btn-falcon-primary px-1 py-0 me-2'
											}
										>
											<FontAwesomeIcon icon={faMinus} size='xs' className={'mx-1'} />
										</button>
									</div>
									<p
										className='mb-0 text-center align-self-center'
										style={{ width: '1em' }}
									>
										{p.seatCount}
									</p>
									<div>
										<button
											onClick={() => incrementSeatCount(p)}
											className={classNames('btn btn-falcon-primary px-1 py-0 ms-2', {
												disabled: p.seatCount === 5
											})}
										>
											<FontAwesomeIcon icon={faPlus} size='xs' className={'mx-1'} />
										</button>
									</div>
								</Flex>
							</div>
						))}
					</Card.Body>
				</Card>
			</div>
		)
	}

PassengerDropdown.defaultProps = {
	border: false
}

export default PassengerDropdown

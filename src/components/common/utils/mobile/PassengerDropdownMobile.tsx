import React, {
	Dispatch,
	FC,
	HTMLAttributes,
	SetStateAction,
	useState
} from 'react'
import { CloseButton, Modal, Button } from 'react-bootstrap'
import classNames from 'classnames'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flex from '../Flex'
import { PassengerType } from '../../../../type/PassengerType'

interface PassengerDropdownMobileProps
	extends HTMLAttributes<HTMLOrSVGElement> {
	passenger: PassengerType[]
	setPassenger: Dispatch<SetStateAction<PassengerType[]>>
	additionalTitle: string
}

const PassengerDropdownMobile: FC<PassengerDropdownMobileProps> =
	function PassengerDropdownMobile({
		passenger,
		setPassenger,
		additionalTitle
	}) {
		const [show, setShow] = useState(false)
		const [totalSeat, setTotalSeat] = useState(
			passenger.length === 0 ? 1 : passenger[0].seatCount
		)
		const [fullscreen, setFullscreen] = useState<
			true | 'md-down' | 'sm-down' | 'lg-down' | 'xl-down' | 'xxl-down' | undefined
		>(true)

		const handleShow = (
			breakpoint:
				| true
				| 'md-down'
				| 'sm-down'
				| 'lg-down'
				| 'xl-down'
				| 'xxl-down'
				| undefined
		): void => {
			setFullscreen(breakpoint)
			setShow(true)
		}
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

		const updateTotalSeat = (seats: PassengerType[]): void => {
			const seatArray = seats.map(item => item.seatCount)
			const sum = seatArray.reduce((a, b) => a + b)
			setTotalSeat(sum)
		}

		return (
			<div className='d-flex px-2 border border-1 border-300 rounded-2 cursor-pointer'>
				<div
					role='button'
					tabIndex={0}
					onKeyDown={(): void => handleShow('md-down')}
					className='d-flex justify-content-center align-items-center py-1'
					onClick={(): void => handleShow('md-down')}
				>
					<p className='text-nowrap text-center text-black fs--1 text-center fw-normal mb--1 me-3'>
						{`${additionalTitle}:`}
						{totalSeat === 1 ? '1 Adult' : `${totalSeat} Passengers`}
					</p>
					<span className='text-900 dropdown-indicator ms-2 mb-1' />
				</div>
				<Modal
					show={show}
					fullscreen={fullscreen}
					onHide={(): void => setShow(false)}
				>
					<Modal.Header>
						<Modal.Title>
							<span className='fs--1 text-dark fw-semi-bold'>
								{totalSeat === 1 ? '1 Adult' : `${totalSeat} Passengers`}
							</span>
						</Modal.Title>
						<CloseButton
							className='btn btn-circle btn-sm transition-base p-0 me-0'
							onClick={(): void => setShow(false)}
						/>
					</Modal.Header>
					<Modal.Body>
						{passenger?.map(p => (
							<div className='d-flex justify-content-between mt-1 py-1' key={p.type}>
								<div className='d-flex align-self-center'>
									<p className='fw-normal fs--1 text-dark mb-0 mt-1'>
										{p.type} <sub className='text-600'>{p.age}</sub>
									</p>
								</div>
								<Flex
									alignContent='center'
									alignItems='center'
									className='gap-2 fs--1 fw-medium'
								>
									<div>
										<button
											type='button'
											tabIndex={0}
											onKeyDown={(): void => decrementSeatCount(p)}
											onClick={(): void => decrementSeatCount(p)}
											className={
												(p.seatCount === 1 && p.type === 'Adults') || p.seatCount === 0
													? 'disabled btn btn-falcon-primary px-1 py-0 me-2'
													: 'btn btn-falcon-primary px-1 py-0 me-2'
											}
										>
											<FontAwesomeIcon icon={faMinus} size='xs' className='mx-1' />
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
											type='button'
											tabIndex={0}
											onKeyDown={(): void => incrementSeatCount(p)}
											onClick={(): void => incrementSeatCount(p)}
											className={classNames('btn btn-falcon-primary px-1 py-0 ms-2', {
												disabled: p.seatCount === 5
											})}
										>
											<FontAwesomeIcon icon={faPlus} size='xs' className='mx-1' />
										</button>
									</div>
								</Flex>
							</div>
						))}
						<div className='d-flex justify-content-center mt-4'>
							<Button onClick={(): void => setShow(false)} className='w-100'>
								Done
							</Button>
						</div>
					</Modal.Body>
				</Modal>
			</div>
		)
	}

export default PassengerDropdownMobile

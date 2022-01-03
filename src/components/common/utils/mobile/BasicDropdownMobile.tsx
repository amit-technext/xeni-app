import React, { FC, HTMLAttributes, useState } from 'react'
import { CloseButton, Modal } from 'react-bootstrap'

interface BasicDropdownMobileProps extends HTMLAttributes<HTMLOrSVGElement> {
	options: string[]
	selected: string
	setSelected: React.Dispatch<React.SetStateAction<string>>
	additionalTitle: string
}
type Breakpoint =
	| true
	| 'sm-down'
	| 'md-down'
	| 'lg-down'
	| 'xl-down'
	| 'xxl-down'
	| undefined
const BasicDropdownMobile: FC<BasicDropdownMobileProps> =
	function BasicDropdownMobile({
		options,
		selected,
		setSelected,
		additionalTitle
	}: BasicDropdownMobileProps) {
		const [show, setShow] = useState(false)
		const [fullscreen, setFullscreen] = useState<Breakpoint>(undefined)

		const handleShow = (breakpoint: Breakpoint): void => {
			setFullscreen(breakpoint)
			setShow(true)
		}
		return (
			<div className='d-flex flex-column border border-1 border-300 rounded-3 px-2 cursor-pointer'>
				<div
					role='button'
					tabIndex={0}
					className='d-flex justify-content-center align-items-center py-1'
					onClick={(): void => handleShow('sm-down')}
					onKeyDown={(): void => handleShow('sm-down')}
				>
					<p className='text-nowrap fs--1 text-black fw-normal text-center me-3 mb--1'>
						{`${`${additionalTitle}: `}`}
						{selected !== '' ? selected : additionalTitle}
					</p>
					<span className='text-dark dropdown-indicator ms-2' />
				</div>
				<Modal
					show={show}
					fullscreen={fullscreen as Breakpoint}
					onHide={(): void => setShow(false)}
				>
					<Modal.Header>
						<Modal.Title>
							<span className='fs--1 text-dark fw-semi-bold'>{selected}</span>
						</Modal.Title>
						<CloseButton
							className='btn btn-circle btn-sm transition-base p-0'
							onClick={(): void => setShow(false)}
						/>
					</Modal.Header>
					<Modal.Body>
						<div className='fs--1 text-dark fw-medium'>
							{options.map(item =>
								item ? (
									<div
										tabIndex={0}
										role='button'
										onKeyDown={(): void => {
											setSelected(item)
											setShow(false)
										}}
										onClick={(): void => {
											setSelected(item)
											setShow(false)
										}}
										key={item}
										className={
											item === selected
												? 'bg-200 rounded-3 py-2 my-1'
												: 'hover-bg-100 rounded-3 py-2 my-1'
										}
									>
										<p className='mb-0 text-left cursor-pointer ms-2 rounded text-nowrap'>
											{item}
										</p>
									</div>
								) : (
									<div className='d-flex py-2 ms-2 text-left text-nowrap align-items-center'>
										<div>{item}:</div>
										<input
											type='number'
											onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
												setSelected(e.target.value)
											}}
											onKeyDown={(): void => {
												setShow(false)
											}}
											className='me-3 ms-1 px-2 w-100 overflow-hidden bg-gray border border-2'
										/>
									</div>
								)
							)}
						</div>
					</Modal.Body>
				</Modal>
			</div>
		)
	}
export default BasicDropdownMobile

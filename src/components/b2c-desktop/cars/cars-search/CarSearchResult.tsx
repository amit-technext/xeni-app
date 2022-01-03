import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import {
	CarSearchResultProps,
	ICarsSearchResult
} from '../../../../interface/ICars'

const CarSearchResult: FC<CarSearchResultProps> = function CarSearchResult(
	props
) {
	const { searchResult } = props

	return (
		<>
			{searchResult.map((car: ICarsSearchResult) => (
				<div
					key={car.id}
					className='card d-flex flex-row mb-3 pb-3 pe-3 p-2 carPage'
				>
					<div className='d-flex flex-column'>
						<div
							className='mb-2 bg-200 py-5 px-2 rounded-3 imageDiv'
							style={{ maxWidth: '200px' }}
						>
							<img src={car.carImage} alt='car img' className='w-100' />
						</div>
						<div className='ps-2 mb-3'>
							<div>
								<FontAwesomeIcon icon={faWind} size='sm' className='me-2 text-black' />
								<span className='fs--1 text-black'>Air Conditioning</span>
							</div>
							<div>
								<FontAwesomeIcon
									icon={faSlidersH}
									size='sm'
									className='me-2 text-black'
								/>
								<span className='fs--1 text-black'>Automatic</span>
							</div>
						</div>
						<div className='ps-2'>
							<OverlayTrigger
								overlay={
									<Tooltip id='overlay-trigger-example'>
										<div className='px-3 py-1'>{car.carCompany}</div>
									</Tooltip>
								}
							>
								<img src={car.companyLogo} alt='car logo' className='companyLogo' />
							</OverlayTrigger>
						</div>
					</div>
					<div className='d-flex justify-content-between ps-3 mt-1'>
						<div className='d-flex flex-column mb-3'>
							<div className='mb-4'>
								<p className='fs--1 fs-sm-1 fw-bold text-dark mb-0 mt-2 mt-md-0'>
									{car.title}
								</p>
								<p className='mb-3 fs--1 text-900 fw-semi-bold'>{car.carSeatClass}</p>
								<div className='d-flex mb-0'>
									{car?.conditions.map((item, index) => (
										<OverlayTrigger
											key={nanoid() + index.toString()}
											overlay={
												<Tooltip id='overlay-trigger-example'>
													{item.itemCount} {item.itemName}
												</Tooltip>
											}
										>
											<div className='d-flex align-items-center me-3 text-black cursor-pointer'>
												<FontAwesomeIcon icon={item.icon} size='sm' className='me-2' />
												<span className='fs--1'>{item.itemCount}</span>
											</div>
										</OverlayTrigger>
									))}
								</div>
							</div>

							<div className='d-flex'>
								<div className='me-5'>
									<p className='fs--1 fw-bold text-dark mb-0 overflow-hidden'>Pick-up</p>
									<p className='fs--1 text-900 mb-0'>{car.pickTime},</p>
									<p className='fs--1 text-900 mb-0'>{car.pickLocation}</p>
								</div>
								<div>
									<p className='fs--1 fw-bold text-dark mb-0 overflow-hidden'>
										Drop-off
									</p>
									<p className='fs--1 text-900 mb-0'>{car.dropTime},</p>
									<p className='fs--1 text-900 mb-0'>{car.dropLocation}</p>
								</div>
							</div>
							<hr className='my-3' />
							<div className='d-md-flex gap-3 justify-content-between'>
								<div className='fs--1 text-nowrap'>
									<p className='fw-bold text-black mb-0'>Fuel Policy</p>
									<p className='mb-0'>Full to full</p>
								</div>
								<div className='fs--1 text-nowrap'>
									<p className='fw-bold text-black mb-0'>Included Mileage</p>
									<p className='mb-0'>Unlimited</p>
								</div>
								<div className='fs--1 text-nowrap'>
									<p className='fw-bold text-black mb-0'>Estimated Deposit</p>
									<p className='mb-0'>$174.00</p>
								</div>
							</div>
						</div>
						<div className='d-flex flex-column mt-0'>
							<div className='mb-3'>
								<p className='fs-1 fw-bold text-dark mb-0'>${car.fare}</p>
								<span className='fs--1 d-block text-900'>Price for {car.fareFor}</span>
							</div>
							<Link to='/cars/result-details'>
								<Button className='bg-primary border-0 text-white px-3 text-nowrap'>
									View Deal
								</Button>
							</Link>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default CarSearchResult

import React, { FC } from 'react'
import Flex from 'components/common/utils/Flex'
import { Card, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { CarSearchResultProps } from '../../../../interface/ICars'

const MCarSearchResult: FC<CarSearchResultProps> = function MCarSearchResult(
	props
) {
	const { searchResult } = props

	return (
		<>
			{/* <MCarSearchResultCount /> */}
			{searchResult?.map((car, index) => (
				<Card className='mb-3 p-2' key={index.toString()}>
					<Flex direction='column'>
						<div className='mb-3 bg-200 py-4 px-3 rounded-3'>
							<img src={car.carImage} alt='car img' className='w-80 mx-4' />
						</div>
						<Flex direction='row' justifyContent='between'>
							<div className='ps-2 mb-2'>
								<OverlayTrigger
									overlay={
										<Tooltip id='overlay-trigger-example'>
											<div className='px-3 py-1'>{car.carCompany}</div>
										</Tooltip>
									}
								>
									<img src={car.companyLogo} alt='car logo' />
								</OverlayTrigger>
							</div>
							<div className='text-black mt-n2 me-2'>
								<div>
									<FontAwesomeIcon icon={faWind} size='sm' className='me-2' />
									<span className='fs--1'>Air Conditioning</span>
								</div>
								<div>
									<FontAwesomeIcon icon={faSlidersH} size='sm' className='me-2' />
									<span className='fs--1'>Automatic</span>
								</div>
							</div>
						</Flex>
					</Flex>
					<hr className='mb-2' />
					<Flex direction='row' justifyContent='between' className='mb-3'>
						<div>
							<p className='fw-bold text-dark mb-0'>{car.title}</p>
							<p className='fs--1 text-900 fw-medium mb-2'>{car.carSeatClass}</p>
							<div className='d-flex'>
								{car?.conditions.map((item, ind) => (
									<OverlayTrigger
										key={ind.toString()}
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
						<div className='text-end mt-4'>
							<p className='fw-bold text-dark mb-0'>${car.fare}</p>
							<span className='fs--1 text-900'>Price for {car.fareFor}</span>
						</div>
					</Flex>
					<Flex direction='row' justifyContent='between'>
						<div className='me-5'>
							<p className='fs--1 fw-medium text-dark mb-0 overflow-hidden'>Pick-up</p>
							<p className='fs--1 text-900 mb-0'>{car.pickTime}</p>
							<p className='fs--1 text-900'>{car.pickLocation}</p>
						</div>
						<div className='text-end'>
							<p className='fs--1 fw-medium text-dark mb-0 overflow-hidden'>
								Drop-off
							</p>
							<p className='fs--1 text-900 mb-0'>{car.dropTime}</p>
							<p className='fs--1 text-900'>{car.dropLocation}</p>
						</div>
					</Flex>
					<hr className='mt-0' />
					<Flex justifyContent='between' className='flex-wrap gap-2 mb-3'>
						<div>
							<p className='fw-medium fs--1 text-black mb-0'>Fuel Policy</p>
							<p className='fs--1 mb-0'>Full to full</p>
						</div>
						<div>
							<p className='fw-medium fs--1 text-black mb-0'>Included Mileage</p>
							<p className='fs--1 mb-0'>Unlimited</p>
						</div>
						<div>
							<p className='fw-medium fs--1 text-black mb-0'>Estimated Deposit</p>
							<p className='fs--1 mb-0'>$174.00</p>
						</div>
					</Flex>

					<Link to='/cars/result-details'>
						<Button className='w-100 bg-primary border-0 text-white fs--1'>
							View Deal
						</Button>
					</Link>
				</Card>
			))}
		</>
	)
}

export default MCarSearchResult

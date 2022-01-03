import { Card } from 'react-bootstrap'
import CustomCollapse from 'components/common/collapse/CustomCollapse'
import React, { FC, useState } from 'react'

const CarPolicies: FC = function CarPolicies() {
	const [showMore, setShowMore] = useState('d-none')

	return (
		<Card className='px-4 py-3'>
			<CustomCollapse initialState title='Cancellation policy' fontSize='16px'>
				<div className='fs--1'>
					<p className='mb-0'>Free cancellation</p>
					<p className='mb-0 fw-normal'>
						Cancel for free up to 48 hours before pick-up time
					</p>
				</div>
			</CustomCollapse>
			<hr />
			<CustomCollapse initialState={false} title='Mileage policy' fontSize='16px'>
				<div className='fs--1'>
					<p className='mb-0'>Free cancellation</p>
					<p className='mb-0 fw-normal'>
						Cancel for free up to 48 hours before pick-up time
					</p>
				</div>
			</CustomCollapse>
			<hr />
			<CustomCollapse initialState title='Terms & Conditions' fontSize='16px'>
				<div className='fs--1'>
					<p className='mb-0 fw-normal w-90'>
						Additional charges may apply for required insurance, optional items, or
						additional drivers. These services can be purchased from the rental car
						company at the time of rental.
					</p>

					{showMore === 'd-none' ? (
						<div
							role='button'
							tabIndex={0}
							onClick={(): void => setShowMore('d-block')}
							onKeyPress={(): void => setShowMore('d-block')}
							className='fs--1 pt-3 text-primary cursor-pointer mb-2 fw-normal'
						>
							Show more
						</div>
					) : (
						''
					)}

					<div className={showMore}>
						<div className='mb-3 mt-3'>
							<p className='mb-0'>Important Information</p>
							<p className='mb-0 fw-normal'>
								Car hire companies require the driver to supply a credit card in his/her
								name in order to pick up the car. Additional restrictions and fees may
								apply based on driver&apos;s age. Additional restrictions and
								documentation requirements may apply to local car hires. Additional
								charges may apply for required insurance, optional items, or additional
								drivers. These services can be purchased from the car hire company at
								the time of hire. Please see terms and conditions below for detailed
								cancellation and change policies.
							</p>
						</div>
						<div className='mb-3'>
							<p className='mb-0'>Rental Period Calculation</p>
							<p className='mb-0 fw-normal'>
								The minimum charge is one day (24 hours) , unless &quot;Calendar
								day&quot; is indicated on the Rental Agreement. The daily charge applies
								to consecutive 24-hour periods starting at the hour and minute the
								rental begins or, if a calendar day is specified on the rental document,
								each consecutive calendar day or any part of a calendar day starting on
								the calendar day on which the rental commences. Included in Price •
								Collision Damage Waiver• Theft Waiver• Third Party Liability Protection•
								Vehicle Rental• Rate Distance Unlimited• Taxes And SurchargesNote: In
								the event of damage or theft of the hire car, you are liable to pay the
								excess amount of USD 857.
							</p>
						</div>
						<div className='mb-3'>
							<p className='mb-0'>Airport parking fee</p>
							<p className='mb-0 fw-normal'>
								Either pickup or return of the vehicle at Dubai International Airport
								will be charged an airport parking fee of AED 50 per rental
							</p>
						</div>
						<div className='mb-3'>
							<p className='mb-0'>Payment Method</p>
							<p className='mb-0 fw-normal'>
								Accepted payment method(s) by DOLLAR for payment due at pick-up:Credit
								card(s) in the name of main driverAccepted cards: Visa; Master*The
								credit cards must be embossed.In the case of payment made by credit
								cards not in the name of main driver at pick-up, the driver may need to
								supplement evidentiary materials for scrutiny of payments or car rental
								agent may refuse to release the vehicle. No funds paid will be
								reimbursed. Deposit USD 953.03 for pre-authorization on main
								driver&apos;s credit card(s) at pick up.Usually a deposit will be held
								as a guarantee by car rental companies at pick-up. This will be fully
								released or refunded if there is no damage/theft of the vehicle or any
								due payment after car return. Please note that this does not represent
								your total excess liability which can be found in the Insurance
								Coverage/ Excess liability section. In the event that you fail to
								present a valid payment method with enough funds for deposit,the car
								rental agent may refuse to release the vehicle. In these instances, no
								funds paid will be reimbursed.
							</p>
						</div>
					</div>

					{showMore === 'd-block' ? (
						<div
							role='button'
							tabIndex={0}
							onClick={(): void => setShowMore('d-none')}
							onKeyPress={(): void => setShowMore('d-none')}
							className='fs--1 text-primary cursor-pointer mb-2 fw-normal'
						>
							Show less
						</div>
					) : (
						''
					)}
				</div>
			</CustomCollapse>
		</Card>
	)
}

export default CarPolicies

import React, { FC, useState } from 'react'
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import FooterLinks from './FooterLinks'
import { countryData } from '../../data/countryData'
import IconGroup from '../common/icon/IconGroup'
import {
	footerCompanyInfo,
	footerContactInfo,
	footerMoreInfo,
	footerSocialLinks,
	footerShortDescription
} from '../../data/footer/footerData'

const Footer: FC = function Footer() {
	const [country, setCountry] = useState(countryData[0])

	return (
		<footer className='px-3 px-md-0 bg-200 fs--1'>
			<Container>
				<Row className='pt-5'>
					<Col xs={6} sm={4} md={3}>
						<FooterLinks titleOfCategory='Company' items={footerCompanyInfo} />
					</Col>
					<Col xs={6} sm={4} md={3}>
						<FooterLinks titleOfCategory='Contact' items={footerContactInfo} />
					</Col>
					<Col xs={6} sm={4} md={3}>
						<FooterLinks titleOfCategory='More' items={footerMoreInfo} />
					</Col>
					<Col xs={6} sm={4} md={3}>
						<h6 className='fw-bold pb-2'>Site / Currency</h6>
						<div className='mb-3 dropDown'>
							<DropdownButton
								align='end'
								id='dropdown-menu-align-right'
								drop='up'
								variant='secondary'
								title={
									<div className='ms-0'>
										<img
											className='me-1 me-lg-2'
											src={country.countryIcon}
											alt='UK'
											height='20'
										/>
										<span className='fs--2'>{country.country}</span>
									</div>
								}
							>
								{countryData?.map((item, index) => (
									<Dropdown.Item key={index.toString()} eventKey={item.country}>
										<div
											tabIndex={0}
											role='button'
											key={index.toString()}
											className='d-flex cursor-pointer countryData p-1'
											onClick={(): void => setCountry(item)}
											onKeyPress={(): void => setCountry(item)}
										>
											<img className='me-2' src={item.countryIcon} alt='UK' height='18' />
											<p className='fs--2 m-0'>{item.country}</p>
										</div>
									</Dropdown.Item>
								))}
							</DropdownButton>
						</div>

						<div className='dropDown mb-4'>
							<DropdownButton
								align='end'
								id='dropdown-menu-align-right'
								drop='up'
								variant='secondary'
								title={
									<div>
										<span>{country.currencyIcon}</span>
										<span className='fs--2 ms-1 ms-lg-3'>{country.currency}</span>
									</div>
								}
							>
								{/* <h6 className="ps-3 fw-semi-bold">All Currencies</h6> */}
								{countryData?.map((item, index) => (
									<Dropdown.Item key={index.toString()} eventKey={item.country}>
										<div
											tabIndex={0}
											role='button'
											key={index.toString()}
											className='d-flex cursor-pointer countryData p-1'
											onClick={(): void => setCountry(item)}
											onKeyPress={(): void => setCountry(item)}
										>
											<span className='fs--2 me-2 fw-semi-bold'>{item.currencyIcon}</span>
											<span className='fs--2 m-0'>{item.currency}</span>
										</div>
									</Dropdown.Item>
								))}
							</DropdownButton>
						</div>

						<div>
							<IconGroup className='float-end' icons={footerSocialLinks} />
						</div>
					</Col>
				</Row>
				<hr />
				<p className='pb-3 pt-2 mb-n1 text-center fw-normal'>
					{footerShortDescription}
				</p>
			</Container>
		</footer>
	)
}

export default Footer

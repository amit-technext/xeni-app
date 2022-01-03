import React, { FC } from 'react'
import AddSection from '../../components/onboarding/AddSection'
import Slider from '../../components/onboarding/Slider'
import map from '../../assets/img/services/map.png'
import favorite from '../../assets/img/services/favourite.png'
import gear from '../../assets/img/services/gear.png'
import campaign from '../../assets/img/services/campaign.png'
import air from '../../assets/img/air.jpg'
import room from '../../assets/img/room.jpg'
import adventure from '../../assets/img/adventure.jpg'
import uk from '../../assets/img/uk.jpg'
import ship from '../../assets/img/ship.jpeg'
import car from '../../assets/img/car.jpg'
import portal from '../../assets/img/services/portal.png'

const LandingPage: FC = function LandingPage() {
	return (
		<>
			<div className='mx-auto landingPage'>
				<Slider />
				<div className='pb-5 pt-4'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 mb-3 mb-sm-3 me-0 me-sm-4 card'>
								<div className='d-flex flex-column align-items-center pt-4 pb-3'>
									<div className='pb-3'>
										<img src={map} alt='Icon' height='29' />
									</div>
									<p className='fw-bold text-black mb-2'>Itineraries</p>
									<p className='fs--1 text-800 text-center'>
										Build Itineraries in minutes and communicate them to your clients
									</p>
								</div>
							</div>
							<div className='col col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 mb-3 mb-sm-3 me-0 me-sm-4 card'>
								<div className='d-flex flex-column align-items-center pt-4 pb-3'>
									<div className='pb-3'>
										<img src={favorite} alt='Icon' height='29' />
									</div>
									<p className='fw-bold text-black mb-2'>Higher commissions</p>
									<p className='fs--1 text-800 text-center'>
										Net rates mean bigger commissions. You decide how much to markup
									</p>
								</div>
							</div>
							<div className='col col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 mb-3 mb-sm-3 me-0 me-sm-4 card'>
								<div className='d-flex flex-column align-items-center pt-4 pb-3'>
									<div className='pb-3'>
										<img src={gear} alt='Icon' height='29' />
									</div>
									<p className='fw-bold text-black mb-2'>Manage operations</p>
									<p className='fs--1 text-800 text-center'>
										Track & maintain records of bookings, payments, and customer journey
									</p>
								</div>
							</div>
							<div className='col col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 mb-3 mb-sm-3 me-0 me-sm-4 card'>
								<div className='d-flex flex-column align-items-center pt-4 pb-3'>
									<div className='pb-3'>
										<img src={campaign} alt='Icon' height='29' />
									</div>
									<p className='fw-bold text-black mb-2'>Marketing campaigns</p>
									<p className='fs--1 text-800 text-center'>
										Manage leads, build custom packages, distribute coupons, view
										analytics
									</p>
								</div>
							</div>
							<div className='col col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 mb-3 mb-sm-3 me-0 me-sm-4 card'>
								<div className='d-flex flex-column align-items-center pt-4 pb-3'>
									<div className='pb-3'>
										<img src={portal} alt='Icon' height='29' />
									</div>
									<p className='fw-bold text-black mb-2'>Customer portal</p>
									<p className='fs--1 text-800 text-center'>
										Your customers can book, track and approve right on your site
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='heroSection'>
					<div className='d-flex flex-column align-items-center pt-4 pb-4'>
						<p className='fs-2 fw-bold text-black text-center'>
							One booking engine for everything
						</p>
						<p className='w-90 w-sm-70 text-center'>
							Your Xeniapp login grants you access to a full portfolio of bookable
							travel. Book everything from villas to cruises to private jet travel and
							much more, at the best prices on the market.
						</p>
					</div>

					<div className='container'>
						<div className='row px-0 px-md-7'>
							<div className='col mb-3 col-12 col-xs-12 col-sm-6 col-lg-4'>
								<img alt='icon' src={room} className='w-100 card mb-3' />
								<div>
									<p className='fw-bold text-black mb-1'>Book Air Travels</p>
									<p className='fs--1 text-black'>
										Get there by air! Fly private or commercials
									</p>
								</div>
							</div>
							<div className='col mb-3 col-12 col-xs-12 col-sm-6 col-lg-4'>
								<img src={air} className='w-100 card mb-3' alt='air' />
								<div>
									<p className='fw-bold text-black mb-1'>Book Accommodations</p>
									<p className='fs--1 text-black'>
										The best places to stay! From luxury resorts to rustic campgrounds
									</p>
								</div>
							</div>
							<div className='col mb-3 col-12 col-xs-12 col-sm-6 col-lg-4'>
								<img src={car} className='w-100 card mb-3' alt='car' />
								<div>
									<p className='fw-bold text-black mb-1'>Book Ground Transport</p>
									<p className='fs--1 text-black'>
										Hit the road! Rent a car, an RV, or arrange for a pick-up
									</p>
								</div>
							</div>
							<div className='col mb-3 col-12 col-xs-12 col-sm-6 col-lg-4'>
								<img src={adventure} className='w-100 card mb-3' alt='adventure' />
								<div>
									<p className='fw-bold text-black mb-1'>Book Packages</p>
									<p className='fs--1 text-black'>
										Discover special destinations! Experience our curated adventuress
									</p>
								</div>
							</div>
							<div className='col mb-3 col-12 col-xs-12 col-sm-6 col-lg-4'>
								<img src={uk} className='w-100 card mb-3' alt='uk' />
								<div>
									<p className='fw-bold text-black mb-1'>Book Sea Travel</p>
									<p className='fs--1 text-black'>
										Ride the waves! Book a cruise, a private yacht or a boat
									</p>
								</div>
							</div>
							<div className='col mb-3 col-12 col-xs-12 col-sm-6 col-lg-4'>
								<img src={ship} className='w-100 card mb-3' alt='ship' />
								<div>
									<p className='fw-bold text-black mb-1'>Book Activities</p>
									<p className='fs--1 text-black'>
										Find local activities for everything from adventure to cultural
										enrichment
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-100'>
				<AddSection />
			</div>
		</>
	)
}

export default LandingPage

import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import sliderImg from '../../assets/img/slider/landing.png'
import Flex from '../../components/common/utils/Flex'

export const sliders = [
	{
		image: sliderImg,
		shortDesc: 'The one stop shop for travel industry professionals',
		link: 'url'
	},
	{
		image: sliderImg,
		shortDesc: 'The one stop shop for travel industry professionals',
		link: 'url'
	},
	{
		image: sliderImg,
		shortDesc: 'The one stop shop for travel industry professionals',
		link: 'url'
	}
]

const LandingPreviewPage: FC = function LandingPreviewPage() {
	return (
		<Card className='mb-6 LandingPreview'>
			<Carousel>
				{sliders?.map(slider => (
					<Carousel.Item key={nanoid()} interval={1500}>
						<div>
							<img className='w-100' src={slider.image} alt='First slide' />
						</div>
						<Carousel.Caption>
							<p className='text-white fs--2 fs-sm--1 fs-md-1 fs-xl-4 fw-bold w-70'>
								{slider.shortDesc}
							</p>
							<Link to='/landing-preview'>
								<Button className='text-white bg-primary border-0 text-decoration-none px-3 px-md-5 fs--2 fs-lg--1 py-2 fw-normal'>
									Build now
								</Button>
							</Link>
							<Flex
								alignItems='center'
								direction='column'
								className='cursor-pointer scrollBar d-none'
							>
								<div className='border border-2 border-black rounded-pill py-3 px-2'>
									<FontAwesomeIcon className='text-black' icon={faChevronDown} />
								</div>
								<div className='text-black fs--1 fw-semi-bold pt-2'>Scroll Down</div>
							</Flex>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</Card>
	)
}
export default LandingPreviewPage

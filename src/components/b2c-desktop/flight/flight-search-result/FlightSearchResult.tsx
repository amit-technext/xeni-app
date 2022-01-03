import React, { FC, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHeart,
	faShareAlt,
	faShoppingBag
} from '@fortawesome/free-solid-svg-icons'
import FlightDetails from './FlightDetails'
import PriceBreakdownOverlayTrigger from './result-fragments/PriceBreakdownOverlayTrigger'
import CabinInformationOverlayTrigger from './result-fragments/CabinInformationOverlayTrigger'
import Flex from '../../../common/utils/Flex'
import { FlightData } from '../../../../type/FlightSearchResultDataType'

const shareAndFavorite = [
	{ id: 10, icon: faShareAlt, link: '/result_ex_details' },
	{ id: 11, icon: faHeart, link: '/result_ex_details' }
]

interface FlightSearchResultProps extends HTMLAttributes<HTMLOrSVGElement> {
	searchData: FlightData[]
}

const FlightSearchResult: FC<FlightSearchResultProps> =
	function FlightSearchResult(props) {
		const { searchData } = props

		return (
			<Flex direction='column' className='card SearchResult'>
				<div className='px-1 px-md-1 pt-3 mb-2'>
					<span className='ms-2 rounded-pill badge cursor-pointer badge-soft-primary '>
						Best
					</span>
					<span className='ms-2 rounded-pill badge cursor-pointer badge-soft-success'>
						Cheapest
					</span>
				</div>

				<Flex
					justifyContent='between'
					className='position-relative popoverStyle cursor-pointer flex-wrap'
				>
					<div className='py-0 my-auto'>
						{searchData?.map(searchResult => (
							<div key={searchResult.id} className='my-3'>
								<FlightDetails flightData={searchResult} />
							</div>
						))}
					</div>

					<div className='px-0 px-sm-3 mt-n4'>
						<div className='me-0 pb-3'>
							<div className='d-flex mb-3'>
								<PriceBreakdownOverlayTrigger
									icon={faShoppingBag}
									info={1}
									offerPrice={300}
								/>
								<PriceBreakdownOverlayTrigger
									icon={faShoppingBag}
									info={2}
									offerPrice={65}
								/>
							</div>
							<p className='fs-1 text-dark fw-semi-bold mb-0 pb-2'>$ 249.00</p>

							<CabinInformationOverlayTrigger
								cabinFeature={searchData[0].cabinAndExtra}
								info='Economy Classic'
							/>
							<CabinInformationOverlayTrigger
								cabinFeature={searchData[0].cabinAndExtra}
								info='Economy Choice'
								offerPrice={310}
							/>
						</div>

						<div className='px-lg-0 px-0 ms-0 mb-1'>
							<Link
								to={{ pathname: '/flight/search-details' }}
								className='btn bg-primary text-white btn-sm px-1 px-md-4 me-3 me-md-0 text-nowrap'
							>
								View Details
							</Link>
						</div>
					</div>
				</Flex>

				<Flex
					justifyContent='between'
					className='rounded-bottom-lg py-2 px-3 mt-0 mb-0 cursor-pointer'
				>
					<p className='ms-n1 m-0 fs--1'>Etihad Airways</p>
					<div>
						{shareAndFavorite?.map(item => (
							<Link key={item.id} to={{ pathname: item.link }}>
								<FontAwesomeIcon icon={item.icon} className='ms-3 text-secondary' />
							</Link>
						))}
					</div>
				</Flex>
			</Flex>
		)
	}

export default FlightSearchResult

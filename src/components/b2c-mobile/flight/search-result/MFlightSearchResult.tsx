import React, { FC, HTMLAttributes, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import MAirCraftDetails from './MAirCraftDetails'
import MExpendedDetails from './search-result-details/MExpendedDetails'
import MPriceBadge from './MPriceBadge'
import Flex from '../../../common/utils/Flex'
import ModalCustom from '../../modal/ModalCustom'
import { FlightDataMobileType } from '../../../../type/FlightSearchResultDataType'

interface MFlightSearchResultProps extends HTMLAttributes<HTMLOrSVGElement> {
	flightResultDataMap: FlightDataMobileType
}

const MFlightSearchResult: FC<MFlightSearchResultProps> =
	function MFlightSearchResult({
		flightResultDataMap
	}: MFlightSearchResultProps) {
		const [show, setShow] = useState(false)
		const [disable, setDisable] = useState(false)
		const [fullscreen, setFullscreen] = useState(true)

		const handleShow = (breakpoint: any): any => {
			if (!disable) {
				setFullscreen(breakpoint)
				setShow(true)
			}
		}

		return (
			<>
				<Card
					onClick={(): void => handleShow('md-down')}
					className='my-2 cursor-pointer border-1 shadow-sm mb-3'
				>
					<Card.Body className='p-3'>
						<div>
							{flightResultDataMap.priceTag.map((item: string) => (
								<MPriceBadge key={item} tag={item} />
							))}
						</div>
						<div className='row flex-nowrap align-items-center mb-3'>
							<Flex direction='column' className='col'>
								{flightResultDataMap.flightInfo.map(item => (
									<MAirCraftDetails aircraftInfo={item} key={item.id} />
								))}
							</Flex>
							<div
								className='text-center col-auto py-1'
								onMouseEnter={(): void => setDisable(true)}
								onMouseLeave={(): void => setDisable(false)}
							>
								<p className='fw-semi-bold fs-1 text-dark mb-1 mb-0 text-end'>{`${flightResultDataMap.currency} ${flightResultDataMap.price}`}</p>
								<p className='mb-0 text-700 fs--1'>Multiple Fares</p>
								<Button
									variant='primary'
									className='rounded-3 hover-shadow text-nowrap btn-sm d-none d-sm-block my-2'
								>
									View deal
								</Button>
							</div>
						</div>
						<hr style={{ pointerEvents: 'none' }} className='mb-2 mt-1' />
						<Flex
							style={{ pointerEvents: 'none' }}
							justifyContent='between'
							alignItems='center'
							className='mt-3'
						>
							<p className='text-black fs--1  mb-0'>
								{`Operated By: ${flightResultDataMap.airlines.join('/')}`}
							</p>
							<FontAwesomeIcon icon={faHeart} />
						</Flex>
					</Card.Body>
				</Card>

				<ModalCustom
					show={show}
					modalTitle={
						<>
							<span>
								<FontAwesomeIcon icon={faHeart} />
							</span>
							<span className='ms-3'>
								<FontAwesomeIcon icon={faShareAlt} />
							</span>
						</>
					}
					fullscreen={fullscreen}
					setShow={setShow}
					bodyClassName='bg-100'
				>
					<MExpendedDetails
						flightDetailsInfo={flightResultDataMap.flightDetailsInfo}
					/>
				</ModalCustom>
			</>
		)
	}

export default MFlightSearchResult

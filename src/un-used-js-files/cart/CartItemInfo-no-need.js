import React, { FC } from 'react'
import BaseCollapse from './CartCollapse-no-need'
import Plane from '../../assets/icon/plane.svg'
import Flex from '../../components/common/utils/Flex'

const CartItemInfo: FC = function CartItemInfo(props) {
	const { data } = props

	return (
		<>
			<div className='mb-2'>
				<BaseCollapse
					initialState
					departureAirport={data.departure[0].departureAirport}
					arrivalAirport={data.departure[1].arrivalAirport}
					departureDate={data.departure[0].departureDate}
				>
					{data.departure?.map((item, index) => (
						<div
							key={index.toString()}
							className='d-flex position-relative justify-content-between px-3 pt-3'
						>
							<div className='px-0 lh-1'>
								<p className='fw-semi-bold text-dark'>{item.departureAirport}</p>
								<p className='fw-semi-bold fs--1 text-dark'>{item.departureTime}</p>
								<p className='fw-medium fs--2 city'>{item.departureCity}</p>
							</div>
							<div>
								<div className='position-absolute line'>
									<img className='pe-1 ps-1' src={Plane} alt='plane' />
								</div>
							</div>
							<div className='px-0 text-end lh-1'>
								<p className='fw-semi-bold text-dark'>{item.arrivalAirport}</p>
								<p className='fw-semi-bold fs--1 text-dark'>{item.arrivalTime}</p>
								<p className='fw-medium fs--2 city'>{item.arrivalCity}</p>
							</div>
						</div>
					))}
					<hr className='mx-3 m-0' />
					<Flex className='px-3 py-2'>
						<div className='rounded w-100 bg-100 py-2 px-3'>
							<div className='d-flex pb-1'>
								<div className='fw-medium fs--1'>1 Adult</div>
							</div>
							<div className='d-flex align-items-center justify-content-between'>
								<span className='fw-medium fs--1'>Economy</span>
								<span className='text-dark fw-bold'>$ 249.00</span>
							</div>
						</div>
					</Flex>
				</BaseCollapse>
			</div>
			<div className='mb-2'>
				<BaseCollapse
					initialState={false}
					departureAirport={data.return[0].departureAirport}
					arrivalAirport={data.return[1].arrivalAirport}
					departureDate={data.return[0].departureDate}
				>
					{data.return?.map((item, index) => (
						<div
							key={index.toString()}
							className='d-flex position-relative justify-content-between px-3 pt-3'
						>
							<div className='px-0 lh-1'>
								<p className='fw-semi-bold'>{item.departureAirport}</p>
								<p className='fw-semi-bold fs--1'>{item.departureTime}</p>
								<p className='fw-medium fs--2'>{item.departureCity}</p>
							</div>
							<div>
								<div className='position-absolute line'>
									<img className='pe-1 ps-1' src={Plane} alt='plane' />
								</div>
							</div>
							<div className='px-0 text-end' style={{ lineHeight: '14px' }}>
								<p className='fw-semi-bold'>{item.arrivalAirport}</p>
								<p className='fw-semi-bold fs--1'>{item.arrivalTime}</p>
								<p className='fw-medium' style={{ fontSize: '12px' }}>
									{item.arrivalCity}
								</p>
							</div>
						</div>
					))}
					<hr className='mx-3 m-0' />
					<Flex className='px-3 py-2'>
						<div className='rounded w-100 bg-100 py-2 px-3'>
							<div className='d-flex pb-1'>
								<div className='fw-medium fs--1'>1 Adult</div>
							</div>
							<div className='d-flex align-items-center justify-content-between'>
								<span className='fw-medium fs--1'>Economy</span>
								<span className='text-dark fw-bold'>$ 249.00</span>
							</div>
						</div>
					</Flex>
				</BaseCollapse>
			</div>
		</>
	)
}

export default CartItemInfo

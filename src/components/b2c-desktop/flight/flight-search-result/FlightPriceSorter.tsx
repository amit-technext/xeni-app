import className from 'classnames'
import React, { FC, useState } from 'react'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flex from '../../../common/utils/Flex'

const FlightPriceSorter: FC = function FlightPriceSorter() {
	const [sortType, setSortType] = useState('Cheapest')

	return (
		<Flex
			justifyContent='between'
			alignItems='center'
			alignContent='center'
			className='card shadow-sm flex-row ticketSorter mb-2'
		>
			<Flex
				onClick={(): void => setSortType('Cheapest')}
				justifyContent='center'
				direction='column'
				className={className(
					'w-100 w-lg-25 cursor-pointer p-2 mx-2 me-lg-0 my-2 sorter',
					{
						'bg-200': sortType === 'Cheapest',
						'hover-bg-200': !(sortType === 'Cheapest')
					}
				)}
			>
				<p className='mb-1 text-700 fw-bold'>Cheapest</p>
				<Flex className='text-nowrap' alignItems='center'>
					<p className='mb-0 text-900 fw-semi-bold fs-1'>$ 249.00 </p>
					<span className='mx-1 small'>&bull;</span>
					<p className='mb-0 fw-semi-bold fs--1 text-600'>26h 41m</p>
				</Flex>
			</Flex>
			<Flex
				justifyContent='center'
				direction='column'
				className={className(
					'w-100 w-lg-25 cursor-pointer p-2 ms-2 me-2 me-lg-0 my-2 sorter',
					{
						'bg-200': sortType === 'Best',
						'hover-bg-200': !(sortType === 'Best')
					}
				)}
				onClick={(): void => setSortType('Best')}
			>
				<p className='mb-1 text-700 fw-bold'>Best</p>
				<Flex className='text-nowrap' alignItems='center'>
					<p className='mb-0 text-900 fw-semi-bold fs-1'>$ 300.00 </p>
					<span className='mx-1 small'>&bull;</span>
					<p className='mb-0 fw-semi-bold fs--1 text-600'>26h 41m</p>
				</Flex>
			</Flex>
			<Flex
				justifyContent='center'
				direction='column'
				className={className(
					'w-100 w-lg-25 cursor-pointer p-2 ms-2 me-2 me-lg-0 my-2 sorter',
					{
						'bg-200': sortType === 'Quickest',
						'hover-bg-200': !(sortType === 'Quickest')
					}
				)}
				onClick={(): void => setSortType('Quickest')}
			>
				<p className='mb-1 text-700 fw-bold'>Quickest</p>
				<Flex className='text-nowrap' alignItems='center'>
					<p className='mb-0 text-900 fw-semi-bold fs-1'>$ 349.00 </p>
					<span className='mx-1 small'>&bull;</span>
					<p className='mb-0 fw-semi-bold fs--1 text-600'>26h 00m</p>
				</Flex>
			</Flex>
			<Flex
				justifyContent='center'
				alignItems='center'
				className='w-100 w-lg-25 p-3 cursor-pointer hover-primary position-relative'
				style={{ height: '100%' }}
			>
				<span
					className='border position-absolute h-75 d-none d-lg-block'
					style={{ left: '5%', top: '14%' }}
				/>
				<span
					className='rounded-circle bg-100 border p-1 mt-1'
					style={{ height: '26px', width: '26px' }}
				>
					<FontAwesomeIcon
						style={{ marginLeft: '1px', marginBottom: '5px' }}
						icon={faListUl}
						size='sm'
					/>
				</span>
				<span
					style={{ marginTop: '4px' }}
					className='ps-2 hover-primary fw-medium text-dark'
				>
					Other sort
				</span>
			</Flex>
		</Flex>
	)
}

export default FlightPriceSorter

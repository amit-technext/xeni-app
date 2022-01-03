/* eslint-disable no-console */
import classNames from 'classnames'
import { Button, Offcanvas } from 'react-bootstrap'
import React, { FC, HTMLAttributes, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { capitalize } from '../../../helpers/helpers'
import MFlightSearchResultSorter from './MFlightSearchResultSorter'
import MHotelSearchResultSorter from './MHotelSearchResultSorter'
import { SortType } from '../../../type/Sort'
import MCarSearchResultSorter from './MCarSearchResultSorter'

interface MSortingMenuProps extends HTMLAttributes<HTMLOrSVGElement> {
	sortingOptions: SortType[]
	module: string
}

const MSortingMenu: FC<MSortingMenuProps> = function MSortingMenu({
	sortingOptions,
	module
}: MSortingMenuProps) {
	const [sortType, setSortType] = useState('')
	const [show, setShow] = useState(false)
	const handleClose = (): void => setShow(false)
	const handleShow = (): void => setShow(true)

	const handleClick = (type: React.SetStateAction<string>): void => {
		handleShow()
		setSortType(type)
	}

	const callback = (data: any): void => {
		// setSort(data)
		console.log(data)

		handleClose()
	}

	let renderShorterContent
	if (module === 'Hotel') {
		renderShorterContent = (
			<MHotelSearchResultSorter
				sortType={sortType}
				// callbackSort={async (): Promise<void> => callback()}
			/>
		)
	} else if (module === 'Cars') {
		renderShorterContent = (
			<MCarSearchResultSorter
				sortType={sortType}
				// callbackSort={async (): Promise<void> => callback()}
			/>
		)
	} else if (module === 'Flight') {
		renderShorterContent = (
			<MFlightSearchResultSorter
				sortType={sortType}
				// callbackSort={(): void => callback()}
			/>
		)
	}

	return (
		<div className='bg-white' style={{ marginBottom: '-6px' }}>
			<div className='overflow-auto scrollbar d-flex flex-nowrap w-100 pt-3 pb-2'>
				{sortingOptions.map(item => (
					<Button
						key={item.type}
						onClick={(): void => handleClick(item.type)}
						className={classNames('py-2 ms-2 text-nowrap fs--1', {
							'border border-primary bg-200':
								capitalize(sortType) === capitalize(item.type)
						})}
						variant='falcon-default'
					>
						{item.icon ? <FontAwesomeIcon className='me-2' icon={item.icon} /> : null}
						{item.type}
					</Button>
				))}
			</div>
			<Offcanvas
				style={{ height: 'max-content', borderRadius: '17px 17px 0 0' }}
				placement='bottom'
				show={show}
				onHide={handleClose}
			>
				<Offcanvas.Header className='pb-0' closeButton>
					<Offcanvas.Title className='text-capitalize'>
						{sortType === 'fees' ? 'Fee assistant' : sortType}
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{renderShorterContent}
					<div className='d-flex justify-content-center mt-4'>
						<Button className='w-100' onClick={(data): any => callback(data)}>
							Done
						</Button>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	)
}

export default MSortingMenu

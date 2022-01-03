import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from '../../../hooks/useReduxState'
import { setShowSearchPanel } from '../../../features/context/contextSlice'

const MSearchedCriteria: FC = function MSearchedCriteria() {
	const { pathname } = useLocation()
	const dispatch = useAppDispatch()

	let renderSearchCriteria

	if (pathname === '/flight/search') {
		renderSearchCriteria = (
			<>
				<div className='text-start'>
					<p className='m-0 fw-medium fs--1'>IND - PDA</p>
					<p className='m-0 fs--2'>
						Nov 12 - Dec 25
						<span className='ps-2 pe-1'>
							<FontAwesomeIcon size='sm' icon={faUser} />
						</span>
						1
					</p>
				</div>
				<FontAwesomeIcon icon={faEdit} className='ms-3' />
			</>
		)
	}
	if (pathname === '/hotels/search') {
		renderSearchCriteria = (
			<>
				<div className='text-start'>
					<p className='m-0 fw-medium fs--1'>London, England</p>
					<div className='d-flex align-items-center'>
						<p className='m-0 fs--2 fw-medium'> Nov 12 - Dec 25</p>
						<span className='ps-2'>
							<FontAwesomeIcon size='xs' icon={faUser} className='me-1' />
							<span className='fs--1'>1</span>
						</span>
						<span className='ps-2'>
							<FontAwesomeIcon size='xs' icon={faBed} className='me-1' />
							<span className='fs--1'>1</span>
						</span>
					</div>
				</div>
				<FontAwesomeIcon icon={faEdit} className='ms-3' />
			</>
		)
	}
	if (pathname === '/cars/search') {
		renderSearchCriteria = (
			<>
				<div className='text-start pe-3'>
					<p className='m-0 fw-medium fs--1'>New York,NY,United State</p>
					<p className='m-0 fw-medium fs--2'>22 Dec, 12:00 - 29 Dec, 12:00</p>
				</div>
				<FontAwesomeIcon icon={faEdit} />
			</>
		)
	}

	return (
		<div className='cursor-pointer text-start d-flex align-items-center position-md-absolute start-50 translate-md-middle-x'>
			<div
				role='button'
				tabIndex={0}
				className='cursor-pointer d-flex align-items-center ms-2'
				onClick={(): any => dispatch(setShowSearchPanel(true))}
				onKeyPress={(): any => dispatch(setShowSearchPanel(true))}
			>
				{renderSearchCriteria}
			</div>
		</div>
	)
}

export default MSearchedCriteria

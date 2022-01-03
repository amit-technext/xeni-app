import React, { FC } from 'react'
// import classNames from 'classnames'
// import Table from 'react-bootstrap/Table'
// import SimpleBarReact from 'simplebar-react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Button, Modal } from 'react-bootstrap'
// import Profile from './Profile'
// import Avatar from '../../common/utils/Avatar'
// import SoftBadge from '../../common/utils/SoftBadge'
// import ActionButton from '../../common/utils/ActionButton'
// import FalconCloseButton from '../../common/utils/FalconCloseButton'

// interface TopPagesTableProps {
// 	getTableProps: () => void
// 	headers: []
// 	page: {}[]
// 	prepareRow: () => void
// }

const TopPagesTable: FC = function TopPagesTable() {
	// const { getTableProps, headers, page, prepareRow } = props
	// const [editShow, setEditShow] = useState(false)
	// const [show, setShow] = useState(false)
	//
	// const handleClose = (): void => setShow(false)
	// const handleShow = (): void => setShow(true)
	// const callBack = (): void => {
	// 	setEditShow(false)
	// }
	return <p>Hello</p>
	// <>
	// 	<SimpleBarReact>
	// 		<Table {...getTableProps()} className='fs--1 mb-0'>
	// 			<thead className='bg-200 text-900'>
	// 				<tr>
	// 					{headers.map((column, index) => (
	// 						<th
	// 							className={classNames('white-space-nowrap', {
	// 								'text-end': index !== 0
	// 							})}
	// 							key={index.toString()}
	// 							{...column.getHeaderProps(column.getSortByToggleProps())}
	// 						>
	// 							{column.render('Header')}
	// 							{column.isSorted ? (
	// 								column.isSortedDesc ? (
	// 									<span className='sort desc' />
	// 								) : (
	// 									<span className='sort asc' />
	// 								)
	// 							) : (
	// 								<span className='sort' />
	// 							)}
	// 						</th>
	// 					))}
	// 				</tr>
	// 			</thead>
	// 			{page.length > 0 && (
	// 				<tbody>
	// 					{page.map((row, i) => {
	// 						prepareRow(row)
	// 						return (
	// 							<tr key={i.toString()}>
	// 								<td className='text-nowrap'>
	// 									<div className='d-flex align-items-center'>
	// 										<Avatar
	// 											src={row.original.avatar}
	// 											size='l'
	// 											name={row.original.name}
	// 										/>
	// 										<div className='ms-2'>
	// 											{row.original.name}
	// 											<div className='fs--2 text-info'>{row.original.date}</div>
	// 										</div>
	// 									</div>
	// 								</td>
	//
	// 								<td
	// 									className={classNames('white-space-nowrap', {
	// 										'text-end': 2 !== 0
	// 									})}
	// 								>
	// 									<SoftBadge pill bg={row.original.status.type}>
	// 										<FontAwesomeIcon
	// 											icon={row.original.status.icon}
	// 											className='ms-2 me-2'
	// 										/>
	// 										{row.original.status.title}
	// 									</SoftBadge>
	// 								</td>
	//
	// 								<td
	// 									className={classNames('white-space-nowrap', {
	// 										'text-end': 2 !== 0
	// 									})}
	// 								>
	// 									{row.original.passport}
	// 								</td>
	// 								<td
	// 									className={classNames('white-space-nowrap', {
	// 										'text-end': 2 !== 0
	// 									})}
	// 								>
	// 									{row.original.formOfPayment}
	// 								</td>
	// 								<td
	// 									className={classNames('white-space-nowrap', {
	// 										'text-end': 2 !== 0
	// 									})}
	// 								>
	// 									{row.original.country}
	// 								</td>
	// 								<td
	// 									className={classNames('white-space-nowrap', {
	// 										'text-end': 2 !== 0
	// 									})}
	// 								>
	// 									{row.original.address}
	// 								</td>
	// 								<td
	// 									className={classNames('white-space-nowrap', {
	// 										'text-end': 2 !== 0
	// 									})}
	// 								>
	// 									<ActionButton
	// 										icon='edit'
	// 										title='Edit'
	// 										variant='action'
	// 										className='p-0'
	// 										onClick={(): void => setEditShow(true)}
	// 									/>
	// 									|
	// 									<ActionButton
	// 										icon='ban'
	// 										title='Disable'
	// 										variant='action'
	// 										className='p-0'
	// 									/>
	// 									|
	// 									<ActionButton
	// 										icon='trash-alt'
	// 										title='Delete'
	// 										variant='action'
	// 										className='p-0'
	// 										onClick={handleShow}
	// 									/>
	// 								</td>
	// 								<Modal
	// 									show={show}
	// 									onHide={handleClose}
	// 									backdrop='static'
	// 									keyboard={false}
	// 								>
	// 									<Modal.Header>
	// 										<Modal.Title>Delete</Modal.Title>
	// 										<FalconCloseButton onClick={handleClose} />
	// 									</Modal.Header>
	// 									<Modal.Body>Are you sure to delete this profile.</Modal.Body>
	// 									<Modal.Footer>
	// 										<Button
	// 											variant='secondary '
	// 											className='me-2 mb-1'
	// 											onClick={handleClose}
	// 										>
	// 											Yes
	// 										</Button>
	// 										<Button
	// 											className='me-2 mb-1 text-white bg-youtube'
	// 											onClick={handleClose}
	// 										>
	// 											No
	// 										</Button>
	// 									</Modal.Footer>
	// 								</Modal>
	// 								<Modal
	// 									size='lg'
	// 									show={editShow}
	// 									onHide={() => setEditShow(false)}
	// 									aria-labelledby='example-modal-sizes-title-lg'
	// 								>
	// 									<Modal.Header>
	// 										<Modal.Title id='example-modal-sizes-title-lg'>Edit</Modal.Title>
	// 										<FalconCloseButton onClick={(): void => setEditShow(false)} />
	// 									</Modal.Header>
	// 									<Modal.Body>
	// 										<Profile callBackSave={callBack} />
	// 									</Modal.Body>
	// 								</Modal>
	// 							</tr>
	// 						)
	// 					})}
	// 				</tbody>
	// 			)}
	// 		</Table>
	// 	</SimpleBarReact>
	// 	{page.length === 0 && (
	// 		<div className='text-center'>
	// 			<p className='fw-bold fs-1 mt-3'>No data found</p>
	// 		</div>
	/*	)} */
	/* </> */
	// )
}

export default TopPagesTable

import React, { FC } from 'react'
// import { Card, Row, Col, Button, Form, Modal } from 'react-bootstrap'
// import {
// 	useTable,
// 	useSortBy,
// 	usePagination,
// 	useGlobalFilter,
// 	useAsyncDebounce
// } from 'react-table'
// import classNames from 'classnames'
// import TopPagesTable from './ProfileTopPagesTable'
// import Profile from './Profile'
// import TopPagesSearchBox from '../../dashboards/analytics/top-pages/TopPagesSearchBox'
// import IconButton from '../../common/utils/IconButton'
// import Flex from '../../common/utils/Flex'
// import FalconCloseButton from '../../common/utils/FalconCloseButton'
// import ProfileData from '../../../data/super-admin-desktop/adminData'
// import { TablePagination } from '../../common/advance-table/AdvanceTable'

const TopPages: FC = function TopPages() {
	// const { columns } = ProfileData[0]
	// const { data } = ProfileData[0]
	// const [lgShow, setLgShow] = useState(false)
	//
	// const callBack = (): void => {
	// 	setLgShow(false)
	// }
	// const {
	// getTableProps,
	// headers,
	// pageCount,
	// page,
	// prepareRow,
	// canPreviousPage,
	// canNextPage,
	// nextPage,
	// gotoPage,
	// previousPage,
	// state: { pageIndex, pageSize, globalFilter },
	// setGlobalFilter
	// } = useTable(
	// 	{
	// 		// columns,
	// 		// data,
	// 		// initialState: { pageSize: 10 }
	// 	},
	// 	useGlobalFilter,
	// 	useSortBy,
	// 	usePagination
	// )

	return <p>Top page table</p>
	// <Card className='h-100'>
	// 	<Card.Header>
	// 		<Row>
	// 			<Col xs='auto'>
	// 				<h6 className='mb-0 text-nowrap py-2 py-xl-0 fs-2 text-github mb-3 '>
	// 					Profiles
	// 				</h6>
	// 			</Col>
	// 		</Row>
	// 		<Row className='flex-between-center'>
	// 			<Col xs='auto' sm={4} lg={4}>
	// 				{/*<TopPagesSearchBox*/}
	// 				{/*	// globalFilter={globalFilter}*/}
	// 				{/*	// setGlobalFilter={setGlobalFilter}*/}
	// 				{/*	useAsyncDebounce={useAsyncDebounce}*/}
	// 				{/*/>*/}
	// 			</Col>
	// 			<Col xs='auto' sm={8} lg={8}>
	// 				<Flex justifyContent='end'>
	// 					<div className='ms-3'>
	// 						<IconButton
	// 							className=''
	// 							size='sm'
	// 							icon='plus'
	// 							transform='shrink-3'
	// 							onClick={(): void => setLgShow(true)}
	// 						>
	// 							Add Profile
	// 						</IconButton>
	// 						<Modal
	// 							size='lg'
	// 							show={lgShow}
	// 							onHide={(): void => setLgShow(false)}
	// 							aria-labelledby='example-modal-sizes-title-lg'
	// 						>
	// 							<Modal.Header>
	// 								<Modal.Title id='example-modal-sizes-title-lg'>
	// 									Add Profile
	// 								</Modal.Title>
	// 								<FalconCloseButton onClick={(): void => setLgShow(false)} />
	// 							</Modal.Header>
	// 							<Modal.Body>
	// 								<Profile callBackSave={callBack} />
	// 							</Modal.Body>
	// 						</Modal>
	// 					</div>
	// 				</Flex>
	// 			</Col>
	// 		</Row>
	// 	</Card.Header>
	// 	<Card.Body className='p-0'>
	// 		{/*<TopPagesTable*/}
	// 		{/*	getTableProps={getTableProps}*/}
	// 		{/*	headers={headers}*/}
	// 		{/*	page={page}*/}
	// 		{/*	prepareRow={prepareRow}*/}
	// 		{/*/>*/}
	// 	</Card.Body>
	// 	<Card.Footer>
	// 		<Row className='align-items-center'>
	// 			<Col>
	// 				<p className='mb-0 fs--1'>
	// 					<span className='d-none d-sm-inline-block me-2'>
	// 						{pageSize * pageIndex + 1} to {pageSize * pageIndex + page.length} of{' '}
	// 						{data.length}
	// 					</span>
	//
	// 					<span className='d-none d-sm-inline-block me-2'>
	// 						<Form.Select
	// 							size='sm'
	// 							className='me-2'
	// 							onChange={({ target }): void => gotoPage(target.value)}
	// 						>
	// 							{Array.from(Array(pageCount).keys()).map((pageC, index) => (
	// 								<option
	// 									key={index.toString()}
	// 									className={classNames({ active: pageIndex === pageC })}
	// 									value={index}
	// 								>
	// 									Page : {pageC + 1}
	// 								</option>
	// 							))}
	// 						</Form.Select>
	// 					</span>
	// 				</p>
	// 			</Col>
	// 			<Col xs='auto' as={Flex}>
	// 				<Button
	// 					size='sm'
	// 					variant={canPreviousPage ? 'primary' : 'light'}
	// 					onClick={(): void => previousPage()}
	// 					className={classNames({ disabled: !canPreviousPage })}
	// 				>
	// 					Previous
	// 				</Button>
	// 				<Button
	// 					size='sm'
	// 					variant={canNextPage ? 'primary' : 'light'}
	// 					className={classNames('px-4 ms-2', {
	// 						disabled: !canNextPage
	// 					})}
	// 					onClick={(): void => nextPage()}
	// 				>
	// 					Next
	// 				</Button>
	// 			</Col>
	// 		</Row>
	// 		<TablePagination
	// 			pageIndex={pageIndex}
	// 			pageCount={pageCount}
	// 			gotoPage={gotoPage}
	// 			canPreviousPage={canPreviousPage}
	// 			canNextPage={canNextPage}
	// 			nextPage={nextPage}
	// 			previousPage={previousPage}

	/*		/> */

	/*	</Card.Footer> */

	/* </Card> */

	// )
}
export default TopPages

/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useAsyncDebounce } from 'react-table'
import Flex from '../utils/Flex'

export function TableSearchBox({ globalFilter, setGlobalFilter }) {
	const [value, setValue] = useState(globalFilter)

	const onChange = useAsyncDebounce(value => {
		setGlobalFilter(value || undefined)
	}, 200)

	return (
		<InputGroup className='position-relative'>
			<FormControl
				value={value || ''}
				onChange={({ target: { value } }) => {
					setValue(value)
					onChange(value)
				}}
				size='sm'
				id='search'
				placeholder='Search...'
				type='search'
				className='shadow-none'
			/>
			<InputGroup.Text className='bg-transparent'>
				<FontAwesomeIcon icon='search' className='fs--1 text-600' />
			</InputGroup.Text>
		</InputGroup>
	)
}

export function TableFooter({
	page,
	pageSize,
	pageIndex,
	rowCount,
	setPageSize,
	canPreviousPage,
	canNextPage,
	nextPage,
	previousPage
}) {
	return (
		<Flex className='align-items-center justify-content-between mt-3'>
			<Flex alignItems='center' className='fs--1'>
				<p className='mb-0'>
					<span className='d-none d-sm-inline-block me-2'>
						{pageSize * pageIndex + 1} to {pageSize * pageIndex + page.length} of{' '}
						{rowCount}
					</span>
				</p>
				<p className='mb-0 mx-2'>Rows per page:</p>
				<Form.Select
					size='sm'
					className='w-auto'
					onChange={e => setPageSize(e.target.value)}
					defaultValue={pageSize}
				>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={15}>15</option>
				</Form.Select>
			</Flex>
			<Flex>
				<Button
					size='sm'
					variant={canPreviousPage ? 'primary' : 'light'}
					onClick={() => previousPage()}
					className={classNames({ disabled: !canPreviousPage })}
				>
					Previous
				</Button>
				<Button
					size='sm'
					variant={canNextPage ? 'primary' : 'light'}
					className={classNames('px-4 ms-2', {
						disabled: !canNextPage
					})}
					onClick={() => nextPage()}
				>
					Next
				</Button>
			</Flex>
		</Flex>
	)
}

export function TablePagination({
	canPreviousPage,
	canNextPage,
	previousPage,
	nextPage,
	pageCount,
	pageIndex,
	gotoPage
}) {
	return (
		<Flex alignItems='center' justifyContent='center' className='mt-3'>
			<Button
				size='sm'
				variant='falcon-default'
				onClick={() => previousPage()}
				className={classNames({ disabled: !canPreviousPage })}
			>
				<FontAwesomeIcon icon='chevron-left' />
			</Button>
			<ul className='pagination mb-0 mx-1'>
				{Array.from(Array(pageCount).keys()).map(page => (
					<li key={page} className={classNames({ active: pageIndex === page })}>
						<Button
							size='sm'
							variant='falcon-default'
							className='me-1 page'
							onClick={() => gotoPage(page)}
						>
							{page + 1}
						</Button>
					</li>
				))}
			</ul>
			<Button
				size='sm'
				variant='falcon-default'
				onClick={() => nextPage()}
				className={classNames({ disabled: !canNextPage })}
			>
				<FontAwesomeIcon icon='chevron-right' />
			</Button>
		</Flex>
	)
}

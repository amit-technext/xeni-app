import React, { FC, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { Search } from '../../../assets/icons'

interface SearchButtonProps extends HTMLAttributes<HTMLOrSVGElement> {
	searchData: object
	path: string
	onClick: () => void
}

const SearchButton: FC<SearchButtonProps> = function SearchButton(props) {
	const { searchData, path, onClick } = props

	return (
		<div className='d-flex w-100 w-md-auto'>
			<div className='m-1 me-0 w-100 w-md-auto d-none d-md-block'>
				<Link
					to={{
						pathname: path,
						state: { searchData }
					}}
					onClick={onClick}
					className='btn bg-primary h-100 w-100 w-md-auto d-md-flex align-items-md-center justify-content-md-center text-100'
				>
					<Search style={{ color: 'white' }} />
				</Link>
			</div>
		</div>
	)
}

const MSearchButton: FC<SearchButtonProps> = function MSearchButton(props) {
	const { searchData, path, onClick } = props
	return (
		<div className='d-flex w-100 mt-3' style={{ height: '48px' }}>
			<div className='mx-1 w-100'>
				<Link
					to={{
						pathname: path,
						state: { searchData }
					}}
					className='btn bg-primary h-100 w-100 w-md-auto d-flex align-items-center justify-content-center text-100'
					onClick={onClick}
				>
					<Search height='1.2rem' width='1.2rem' />
				</Link>
			</div>
		</div>
	)
}

export { SearchButton, MSearchButton }

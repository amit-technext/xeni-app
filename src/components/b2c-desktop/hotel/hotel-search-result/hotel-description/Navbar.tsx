import React, { FC, useState } from 'react'

const Navbar: FC = function Navbar() {
	const [optionSelect, setOptionSelect] = useState('Overview')
	const option = [
		'Overview',
		'Rooms',
		'Location',
		'Amenities',
		'Policies',
		'Reviews'
	]
	return (
		<div className='sticky-top bg-white'>
			<nav id='navbar-example2' className='navbar navbar-light py-0'>
				<ul className='nav nav-pills ms-n3'>
					{option.map(item => (
						<li
							key={item}
							className={`nav-item py-1
                ${
																	item === optionSelect
																		? 'border-bottom border-2 border-primary'
																		: 'border-0'
																}`}
						>
							<div
								role='button'
								tabIndex={0}
								onKeyPress={(): void => setOptionSelect(item)}
								onClick={(): void => setOptionSelect(item)}
							>
								<a className='nav-link fw-semi-bold fs--1' href={`#${item}`}>
									{item}
								</a>
							</div>
						</li>
					))}
				</ul>
			</nav>
			<hr className='my-0' />
		</div>
	)
}

export default Navbar

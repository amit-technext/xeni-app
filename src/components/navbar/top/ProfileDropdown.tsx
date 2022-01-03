import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import team3 from '../../../assets/img/team/3.jpg'
import Avatar from '../../common/utils/Avatar'
import { useAppDispatch } from '../../../hooks/useReduxState'
import {
	setAppName,
	setShowSettingPanel
} from '../../../features/context/contextSlice'

const ProfileDropdown: FC = function ProfileDropdown() {
	const dispatch = useAppDispatch()
	const logoutHandler = (): void => {
		dispatch(setAppName('default'))
	}

	const handleClick = (): void => {
		dispatch(setShowSettingPanel(true))
	}

	return (
		<Dropdown navbar>
			<Dropdown.Toggle
				bsPrefix='toggle'
				as={Link}
				to='#!'
				className='px-0 nav-link'
			>
				<Avatar src={team3} />
			</Dropdown.Toggle>

			<Dropdown.Menu className='dropdown-menu-card dropdown-menu-end z-1500'>
				<div className='bg-white rounded-2 py-2 dark__bg-1000 '>
					<Dropdown.Item href='#!'>Set status</Dropdown.Item>
					<Dropdown.Item as={Link} to='/pages/profile'>
						Profile &amp; account
					</Dropdown.Item>
					<Dropdown.Item href='#!'>Feedback</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item as={Link} to='/customize'>
						Settings
					</Dropdown.Item>
					<Dropdown.Item onClick={handleClick}>Theme</Dropdown.Item>
					<Dropdown.Item as={Link} to='/' onClick={logoutHandler}>
						Logout
					</Dropdown.Item>
				</div>
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default ProfileDropdown

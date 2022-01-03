import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import team3 from 'assets/img/team/3.jpg'
import Avatar from 'components/common/utils/Avatar'
import { useAppDispatch } from 'hooks/useReduxState'
import { setAppName } from 'features/context/contextSlice'
// import AppContext from '../../../context/Context'
// import Avatar from 'components/common/Avatar';

function ProfileDropdown() {
	const history = useHistory()
	// const { setConfig } = useContext(AppContext)
	const dispatch = useAppDispatch()
	return (
		<Dropdown navbar>
			<Dropdown.Toggle
				bsPrefix='toggle'
				as={Link}
				to='#!'
				className='pe-0 nav-link'
			>
				<Avatar src={team3} />
			</Dropdown.Toggle>

			<Dropdown.Menu className='dropdown-menu-card  dropdown-menu-end'>
				<Dropdown.Item as={Link} to='/pages/profile'>
					Tasnova
				</Dropdown.Item>
				<Dropdown.Item>
					<div
						onClick={() => {
							dispatch(setAppName('ag_command_center'))
							history.push('/')
						}}
					>
						Agent Command center Login
					</div>
				</Dropdown.Item>
				<Dropdown.Item href='#!'>Feedback</Dropdown.Item>
				<Dropdown.Item as={Link} to='/pages/settings'>
					Settings
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item as={Link} to='/demo-list'>
					Logout
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default ProfileDropdown

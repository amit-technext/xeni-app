import React, { FC, Fragment } from 'react'
// import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
// import { IAgentCommandCenterUser } from 'interface/IAgentCommandCenter'
import { AvatarType } from 'type/AgentCommandCenterType'
import CardDropdown from '../../common/utils/CardDropdown'
import FalconCardFooterLink from '../../common/utils/FalconCardFooterLink'
import Flex from '../../common/utils/Flex'
import SoftBadge from '../../common/utils/SoftBadge'
import FalconCardHeader from '../../common/utils/FalconCardHeader'
import Avatar from '../../common/utils/Avatar'
// import { IAgentCommandCenterUser } from 'interface/IAgentCommandCenter'

const ActiveUsers: FC<any> = function ActiveUsers(props) {
	const { users } = props

	return (
		<Card className='h-100'>
			<FalconCardHeader
				light
				title={
					<div className='d-flex'>
						<h6 className='m-0 '>Active Users</h6>
						<SoftBadge pill bg='success' className='ms-2 px-2 ms-2'>
							{users.newUsers} new
						</SoftBadge>
					</div>
				}
				titleTag='h6'
				className='py-2'
				endEl={<CardDropdown />}
			/>
			<Card.Body className='py-2'>
				{users.userData.slice(0, 5).map(
					(item: any, index: number): React.ReactNode => (
						<Fragment key={index.toString()}>
							<ActiveUser
								name={item.name}
								avatar={item.avatar}
								role={item.role}
								notification={item.notification}
								isLast={index === 4}
							/>
						</Fragment>
					)
				)}
			</Card.Body>
			<FalconCardFooterLink
				title='All active users'
				to='/social/followers'
				size='sm'
			/>
		</Card>
	)
}

interface ActiveUserProps {
	name: string
	avatar: AvatarType
	role: 'Admin' | 'Moderator' | 'Editor'
	notification: number
	isLast: boolean
}

const ActiveUser: FC<ActiveUserProps> = function ActiveUser(props) {
	const { name, avatar, role, notification, isLast } = props

	return (
		<div className='d-flex justify-content-between'>
			<Flex className={classNames('align-items-center', { 'mb-3': !isLast })}>
				<Avatar {...avatar} className={`status-${avatar.status}`} />
				<div className='ms-3'>
					<h6 className='mb-0 fw-semi-bold'>
						<Link className='text-900' to='/ag-command'>
							{name}
						</Link>
					</h6>
					<p className='text-500 fs--2 mb-0'>{role}</p>
				</div>
			</Flex>
			<div className='mt-2'>
				{notification > 0 && (
					<div
						className='d-flex justif-content-center align-items-center rounded-circle bg-success p-0 fs--2 text-white'
						style={{
							width: '1rem'
						}}
					>
						<div className='p-0 m-0 m-auto'>{notification}</div>
					</div>
				)}
			</div>
		</div>
	)
}

// ActiveUser.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	avatar: PropTypes.object,
// 	role: PropTypes.string,
// 	isLast: PropTypes.bool,
// 	notification: PropTypes.number
// }

// ActiveUsers.propTypes = {
// 	users: PropTypes.arrayOf(PropTypes.shape(ActiveUser.propTypes))
// }

export default ActiveUsers

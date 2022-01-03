/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import React, { FC, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
// import { IAgentCommandCenterRating } from 'interface/IAgentCommandCenter'
import Flex from '../../components/common/utils/Flex'
import SoftBadge from '../../components/common/utils/SoftBadge'
import ProfileInfo from '../../components/agent-command-center-desktop/dashboard/ProfileInfo'
import data, {
	rating,
	users
} from '../../data/agent-command-center/agent-command-centerData'
import ActiveUsers from '../../components/agent-command-center-desktop/dashboard/ActiveUsers'
import MarkUpSetting from '../../components/agent-command-center-desktop/dashboard/MarkUpSetting'
import DateRange from '../../components/agent-command-center-desktop/dashboard/DateRange'

const Dashboard: FC = function Dashboard() {
	const dates = [
		31, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24, 25, 26, 27, 28, 29
	]

	const yourTeam = data[4]
	const markUp = data[3]
	const profiles = data[2]
	// const users = data[1]
	// const rating: IAgentCommandCenterRating[] = rating
	const [sortType, setSortType] = useState<string>('')

	console.log(rating)
	console.log(sortType)

	// @ts-ignore
	return (
		<div>
			<Row>
				<Col sm={12} xxl={8}>
					<div className='pe-1'>
						<div>
							<Flex
								justifyContent='between'
								alignItems='center'
								alignContent='center'
								className='card flex-column flex-md-row ticketSorter'
								// style={{ height: '87px' }}
							>
								{rating.map((item, index) => (
									<Flex
										key={index.toString()}
										onClick={(): void => setSortType('Cheapest')}
										justifyContent='center'
										direction='column'
										className={classNames(
											'w-100 w-lg-25 cursor-pointer ps-3 py-2 gap-2 me-lg-0 gap sorter'
										)}
									>
										<p className='mb-0 xp-13-semi-bold-grey text-800'>{item.name}</p>
										<Flex className='text-nowrap' direction='column'>
											<h4 className='mb-1'>{item.value}</h4>
											<SoftBadge
												bg={+item.percentage >= 0 ? 'success' : 'warning'}
												className='m-0 p-1 w-md-35 w-xxl-25'
											>
												{+item.percentage >= 0 ? (
													<div>
														<FontAwesomeIcon icon={faArrowUp} /> {item.percentage}
													</div>
												) : (
													<div>
														<FontAwesomeIcon icon={faArrowDown} /> {+item.percentage * -1}
													</div>
												)}
											</SoftBadge>
										</Flex>
									</Flex>
								))}
							</Flex>
						</div>
						<div className='mt-2'>
							<Row>
								<Col sm={7} className='pe-1'>
									{/* <ProfileInfo data={profiles} /> */}
								</Col>
								<Col sm={5} className='ps-1'>
									<ActiveUsers users={users} />
								</Col>
							</Row>
						</div>
						<div className='mt-4'>
							<h6 className='text-800 fw-bold fs-0'>
								Default markup settings for all inventory
							</h6>
							<h6 className='text-600'>Customize your markup</h6>
							<MarkUpSetting markUp={markUp} />
						</div>
					</div>
				</Col>
				<Col sm={12} xxl={4} className='m-0 ps-1'>
					<div
						className={classNames({
							'ms-1 mt-2': screen.availWidth <= 1539
						})}
					>
						<div className='mb-3 px-2'>
							{/* <DateRange date={dates} month='oct' /> */}
						</div>
						<div className='px-2'>{/* <ProfileInfo data={yourTeam} /> */}</div>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard

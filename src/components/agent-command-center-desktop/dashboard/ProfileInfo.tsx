import React, { FC } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Flex from '../../common/utils/Flex'
import Avatar from '../../common/utils/Avatar'
import SoftBadge from '../../common/utils/SoftBadge'

const ProfileInfos: FC = function ProfileInfos({ data }: any) {
	return (
		<Card className='h-lg-100'>
			<Card.Body className='p-0'>
				<Table borderless responsive className='mb-0 fs--1 p-1'>
					<thead className='bg-light'>
						<tr className='text-900'>
							{data.column.map((item: any, i: any): any => (
								<th
									key={i.toString()}
									className={classNames(
										'm-0 pe-2',
										{ 'text-end': i > 0 },
										{ 'pe-3': i === data.column.length - 1 },
										{ 'text-center': data.row[0].status === null && i > 0 }
									)}
								>
									{item.item}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.row.slice(0, 5).map((item: any, index: any): any => (
							<tr key={index.toString()}>
								<td className='py-1 px-2'>
									<Flex className={classNames('align-items-center ms-2')}>
										<Avatar
											{...item.avatar}
											className={`status-${item.avatar.status} mb-1`}
										/>
										<div className='ms-3 mb-1'>
											<h6 className='mb-0 fw-semi-bold'>
												<Link className='text-900' to='/#'>
													{item.name}
												</Link>
											</h6>
											<p className='text-500 fs--2 mb-0'>{item.role}</p>
										</div>
									</Flex>
								</td>
								<td className='py-3 px-2 text-end'>
									{item.status === null ? (
										<h5 className='fs-0 text-center'> {item.proposalSend}</h5>
									) : (
										<SoftBadge
											pill
											bg={classNames(
												{ primary: item.status === 'Responded' },
												{ danger: item.status === 'Declined' },
												{ danger: item.status === 'Failed' },
												{ warning: item.status === 'Pending' }
											)}
										>
											{item.status}
										</SoftBadge>
									)}
								</td>
								<td className='py-0 text-end pe-3'>
									<div className='d-flex justify-content-end row'>
										{item.Date === null ? (
											<h5 className='fs-0 text-center py-3'>{item.sales}</h5>
										) : (
											<div>
												<h5 className='fs-0 fw-bold mt-1'>{item.Date}</h5>
												<h6>{item.time}</h6>
											</div>
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Card.Body>
			<Card.Footer className='bg-light py-3'>
				<Row className='flex-between-center'>
					<Col xs='auto'>
						<Form.Select size='sm' className='me-2'>
							<option>Last 7 days</option>
							<option>Last Month</option>
							<option>Last Year</option>
						</Form.Select>
					</Col>
					<Col xs='auto'>
						<Button variant='falcon-default' size='sm'>
							View All
						</Button>
					</Col>
				</Row>
			</Card.Footer>
		</Card>
	)
}

// ProfileInfos.propTypes = {
// 	data: PropTypes.any.isRequired
// }

export default ProfileInfos

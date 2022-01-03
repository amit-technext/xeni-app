import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Col, Row } from 'react-bootstrap'
import Flex from 'components/common/Flex'
import { getColor } from 'helpers/utils'
import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'

import {
	GridComponent,
	TooltipComponent,
	TitleComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import BasicECharts from 'components/common/BasicEChart'

echarts.use([
	TitleComponent,
	TooltipComponent,
	GridComponent,
	PieChart,
	CanvasRenderer
])

const getOptions = data => ({
	color: [getColor('primary'), getColor('info'), getColor('300')],
	tooltip: {
		formatter: params =>
			`<strong>${params.data.name}:</strong> ${params.percent}%`
	},
	series: [
		{
			name: '26M',
			type: 'pie',
			radius: ['100%', '87%'],
			avoidLabelOverlap: false,
			emphasis: {
				scale: false
			},
			itemStyle: {
				borderWidth: 2,
				borderColor: getColor('card-bg')
			},
			label: {
				show: true,
				position: 'center',
				formatter: '{a}',
				fontSize: 23,
				color: getColor('dark')
			},
			data
		}
	]
})

function MarketShare({ data }) {
	return (
		<Card className='h-md-100'>
			<Card.Body>
				<Row className='justify-content-between g-0'>
					<Col xs={5} sm={6} xxl className='pe-2'>
						<h6 className='mt-1'>Market Share</h6>

						<Flex
							alignItems='center'
							justifyContent='between'
							className='fw-semi-bold fs--2 mt-3'
						>
							<p className='mb-1'>
								<FontAwesomeIcon icon='circle' className='me-2 text-primary' />
								Samsung
							</p>
							<div className='d-xxl-none'>33%</div>
						</Flex>

						<Flex
							alignItems='center'
							justifyContent='between'
							className='fw-semi-bold fs--2'
						>
							<p className='mb-1'>
								<FontAwesomeIcon icon='circle' className='me-2 text-info' />
								Huawei
							</p>
							<div className='d-xxl-none'>29%</div>
						</Flex>

						<Flex
							alignItems='center'
							justifyContent='between'
							className='fw-semi-bold fs--2'
						>
							<p className='mb-1'>
								<FontAwesomeIcon icon='circle' className='me-2 text-300' />
								Xiomi
							</p>
							<div className='d-xxl-none'>20%</div>
						</Flex>
					</Col>
					<Col xs='auto'>
						<div className='ps-0'>
							<BasicECharts
								echarts={echarts}
								options={getOptions(data)}
								style={{ width: '6.625rem', height: '6.625rem' }}
							/>
						</div>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	)
}

MarketShare.propTypes = { data: PropTypes.array.isRequired }

export default MarketShare

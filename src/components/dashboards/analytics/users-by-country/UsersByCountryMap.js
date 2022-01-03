import React from 'react'
import PropTypes from 'prop-types'
import * as echarts from 'echarts/core'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import { MapChart } from 'echarts/charts'
import {
	GridComponent,
	TooltipComponent,
	TitleComponent,
	LegendComponent,
	ToolboxComponent,
	VisualMapComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { rgbaColor, getColor } from 'helpers/utils'
import world from 'assets/json/world.json'

echarts.use([
	TitleComponent,
	TooltipComponent,
	GridComponent,
	MapChart,
	CanvasRenderer,
	ToolboxComponent,
	LegendComponent,
	VisualMapComponent
])

echarts.registerMap('world', { geoJSON: world })

const total = 6961500

const getOptions = data => ({
	tooltip: {
		trigger: 'item',
		padding: [7, 10],
		backgroundColor: getColor('100'),
		borderColor: getColor('300'),
		textStyle: { color: getColor('dark') },
		borderWidth: 1,
		transitionDuration: 0,
		formatter: params =>
			`<strong>${params.data?.name} :</strong> ${(
				(params.data?.value / total) *
				100
			).toFixed(2)}%`
	},
	toolbox: {
		show: false,
		feature: {
			restore: {}
		}
	},
	visualMap: {
		show: false,
		min: 800,
		max: 50000,
		inRange: {
			color: [
				getColor('primary'),
				rgbaColor(getColor('primary'), 0.8),
				rgbaColor(getColor('primary'), 0.6),
				rgbaColor(getColor('primary'), 0.4),
				rgbaColor(getColor('primary'), 0.2)
			].reverse()
		}
	},
	series: [
		{
			type: 'map',
			map: 'world',
			data,
			roam: true,
			scaleLimit: {
				min: 1,
				max: 5
			},
			left: 0,
			right: 0,
			label: {
				show: false
			},
			itemStyle: {
				borderColor: getColor('300')
			},
			emphasis: {
				label: {
					show: false
				},
				itemStyle: {
					areaColor: getColor('warning')
				}
			}
		}
	]
})

function UsersByCountryMap({ data, chartRef }) {
	return (
		<ReactEChartsCore
			ref={chartRef}
			echarts={echarts}
			option={getOptions(data)}
			style={{ height: '12.5rem' }}
		/>
	)
}

UsersByCountryMap.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			value: PropTypes.number.isRequired
		}).isRequired
	),
	chartRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.elementType })
	]).isRequired
}

export default UsersByCountryMap

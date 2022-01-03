import React, { FC, HTMLAttributes } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import LightTabTitle from './LightTabTitle'
import { LightTabType } from '../../../../type/TabType'

interface LightTabProps extends HTMLAttributes<HTMLOrSVGElement> {
	tab: LightTabType[]
}

const LightTab: FC<LightTabProps> = function LightTab({ tab }) {
	return (
		<Tab.Container id='audience-tab' defaultActiveKey={tab[0].title}>
			<Nav className='nav-tabs border-0 d-flex flex-nowrap justify-content-between chart-tab'>
				{tab.map(tabElement => (
					<Nav.Item key={tabElement.title} className='flex-fill'>
						<Nav.Link className='mb-0' eventKey={tabElement.title}>
							<LightTabTitle title={tabElement.title} />
						</Nav.Link>
					</Nav.Item>
				))}
			</Nav>

			<div className='bg-transparent shadow-none'>
				<Tab.Content>
					{tab.map(content => (
						<Tab.Pane key={content.title} unmountOnExit eventKey={content.title}>
							{content.component}
						</Tab.Pane>
					))}
				</Tab.Content>
			</div>
		</Tab.Container>
	)
}

export default LightTab

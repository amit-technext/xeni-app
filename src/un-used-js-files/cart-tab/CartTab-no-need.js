import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { Tab, Nav } from 'react-bootstrap'
import CartTabTitle from './CartTabTitle-no-need'

const CartTab: FC = function CartTab(props) {
	const { tab } = props

	return (
		<div>
			{tab ? (
				<Tab.Container id='audience-tab' defaultActiveKey={tab[0].title}>
					<Nav className='nav-tabs border-0 d-flex flex-nowrap justify-content-between chart-tab'>
						{tab.map(tabElement => (
							<Nav.Item key={tabElement.title} className='flex-fill'>
								<Nav.Link className='mb-0' eventKey={tabElement.title}>
									<CartTabTitle title={tabElement.title} />
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>

					<div className='bg-transparent shadow-none'>
						<div>
							<Tab.Content>
								{tab.map(content => (
									<Tab.Pane key={content.title} unmountOnExit eventKey={content.title}>
										{content.component}
									</Tab.Pane>
								))}
							</Tab.Content>
						</div>
					</div>
				</Tab.Container>
			) : (
				<div>Please Provide data.</div>
			)}
		</div>
	)
}

CartTab.propTypes = {
	tab: PropTypes.arrayOf(Object).isRequired
}

export default CartTab

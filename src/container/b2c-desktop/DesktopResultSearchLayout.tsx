import React, { FC, HTMLAttributes } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Menu from '../../components/common/menu/Menu'
// import Cart from '../../components/b2c-desktop/cart/Cart'
import ShoppingCart from '../../components/common/shopping-cart/ShoppingCart'

interface IDesktopResultSearchLayout extends HTMLAttributes<HTMLOrSVGElement> {
	searchWidget: React.ReactNode
	searchResult: React.ReactNode
}

const DesktopResultSearchLayout: FC<IDesktopResultSearchLayout> =
	function DesktopResultSearchLayout(props: IDesktopResultSearchLayout) {
		const { searchWidget, searchResult } = props

		return (
			<>
				<div className='border-bottom bg-white pt-3'>
					<Container className='py-3'>
						<Menu onMobile={false} />
						{searchWidget}
					</Container>
				</div>

				<div className='border-bottom bg-100 pt-3 pb-6'>
					<Container>
						<Row>
							<Col lg={9}>{searchResult}</Col>
							<Col lg={3}>
								{/* <Cart /> */}
								<ShoppingCart />
							</Col>
						</Row>
					</Container>
				</div>
			</>
		)
	}

export default DesktopResultSearchLayout

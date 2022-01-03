/* eslint-disable no-console */
import React, { FC, MouseEventHandler } from 'react'
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	Nav,
	Row,
	Tab
	// useAccordionButton
} from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import ColorPicker from '../themes/ColorPicker'
import FontPicker from '../themes/FontPicker'
import Flex from '../components/common/utils/Flex'
import Menu from '../components/common/menu/Menu'
import RadioToggleList from '../components/b2c-desktop/ui/radio/RadioToggleList'
import 'react-date-range/dist/styles.css'
import { useAppDispatch, useAppSelector } from '../hooks/useReduxState'
import {
	setAircraftType,
	setHotelType,
	setNavItems,
	setPrimaryColor
} from '../features/context/contextSlice'
import { setStyleProperty } from '../helpers/htmlElementManager'
import { NavItem, RadioItem } from '../type/menuType'

// interface CustomToggleProps {
// 	children: React.ReactNode
// 	eventKey: SyntheticEvent
// }

const SiteCustomization: FC = function SiteCustomization() {
	const { navItems, fontFamily, aircraftType, hotelTypes } = useAppSelector(
		state => state.context
	)
	const dispatch = useAppDispatch()

	const changeNavState = (title: string): void => {
		const updatedData = navItems.map(
			(x: NavItem) => {
				if (x.title === title) {
					if (x.active) {
						return { ...x, active: false }
					}
					return { ...x, active: true }
				}
				return x
			}
			// x.title === title
			// 	? x.active
			// 		? { ...x, active: false }
			// 		: { ...x, active: true }
			// 	: x
		)
		dispatch(setNavItems(updatedData))
	}
	const changeAircraftTypeState = (label: string): void => {
		const updatedData = aircraftType.map(
			(x: RadioItem) => {
				if (x.label === label) {
					if (x.active) {
						return { ...x, active: false }
					}
					return { ...x, active: true }
				}
				return x
			}
			// x.label === label
			// 	? x.active
			// 		? { ...x, active: false }
			// 		: { ...x, active: true }
			// 	: x
		)
		dispatch(setAircraftType(updatedData))
	}
	const changeHotelTypeState = (label: string): void => {
		const updatedData = hotelTypes.map(
			(x: RadioItem) => {
				if (x.label === label) {
					if (x.active) {
						return { ...x, active: false }
					}
					return { ...x, active: true }
				}
				return x
			}
			// x.label === label
			// 	? x.active
			// 		? { ...x, active: false }
			// 		: { ...x, active: true }
			// 	: x
		)
		dispatch(setHotelType(updatedData))
	}

	// const CustomToggle: FC<CustomToggleProps> = function CustomToggle({
	// 	children,
	// 	eventKey
	// }: CustomToggleProps) {
	// 	const [open, setOpen] = useState(false)
	// 	const decoratedOnClick = useAccordionButton(eventKey as unknown as string)
	// 	return (
	// 		<div
	// 			onClick={() => {
	// 				decoratedOnClick(eventKey)
	// 				setOpen(value => !value)
	// 			}}
	// 			className='d-flex justify-content-between align-content-center'
	// 		>
	// 			<div>{children}</div>
	// 			<div>
	// 				<FontAwesomeIcon
	// 					icon={faCaretUp}
	// 					size='lg'
	// 					rotation={open ? 180 : undefined}
	// 				/>
	// 			</div>
	// 		</div>
	// 	)
	// }

	const resetPrimaryColor: MouseEventHandler = () => {
		setStyleProperty('--falcon-primary', '#2c7be5')
		dispatch(setPrimaryColor('#2c7be5'))
	}

	const setFlightOn = (): void => {
		console.log('none')
	}

	return (
		<Container>
			<Card className='my-5'>
				<Card.Header className='bg-100'>
					<Card.Title>Customize your website</Card.Title>
				</Card.Header>
				<Card.Body>
					<Tab.Container id='left-tabs-example' defaultActiveKey='color'>
						<Row>
							<Col sm={12} lg={3}>
								<div className='w-80 mx-auto'>
									<Nav variant='pills' className='flex-column'>
										<Nav.Item className='cursor-pointer'>
											<Nav.Link eventKey='color'>Primary Color</Nav.Link>
										</Nav.Item>
										<Nav.Item className='cursor-pointer'>
											<Nav.Link eventKey='font'>Font</Nav.Link>
										</Nav.Item>
										<Nav.Item className='cursor-pointer'>
											<Nav.Link eventKey='main-menu'>Main Menu</Nav.Link>
										</Nav.Item>
										{navItems[0].active && (
											<Nav.Item className='cursor-pointer'>
												<Nav.Link eventKey='aircraft-type'>Aircraft Type</Nav.Link>
											</Nav.Item>
										)}
										{navItems[1].active && (
											<Nav.Item className='cursor-pointer'>
												<Nav.Link eventKey='hotel-type'>Hotel Type</Nav.Link>
											</Nav.Item>
										)}
									</Nav>
									<hr className='d-block d-lg-none' />
								</div>
							</Col>
							<Col
								sm={12}
								lg={9}
								className='border-primary'
								style={{ borderLeft: '1px solid' }}
							>
								<div className='w-80 mx-auto'>
									<Tab.Content>
										<Tab.Pane eventKey='color'>
											<Flex className='gap-3' alignItems='center' alignContent='center'>
												<p className='m-0'>Chose your theme color</p>
												<Button
													onClick={resetPrimaryColor}
													variant='link'
													size='sm'
													className=''
												>
													Reset
												</Button>
											</Flex>
											<hr />
											<ColorPicker />
										</Tab.Pane>
										<Tab.Pane eventKey='font'>
											<p>Chose your theme font family</p>
											<hr />
											<FontPicker fonts={fontFamily} />
										</Tab.Pane>
										<Tab.Pane eventKey='main-menu'>
											<p>Chose your desired menus</p>
											<hr />
											<Flex className='gap-3'>
												{navItems.map(i => (
													<Form.Check
														key={i.id}
														type='checkbox'
														checked={i.active}
														onChange={(): void => changeNavState(i.title)}
														label={i.title}
													/>
												))}
											</Flex>
											<p className='m-0'>Preview</p>
											<hr />
											<Menu onMobile={false} />
										</Tab.Pane>
										<Tab.Pane eventKey='aircraft-type'>
											<p>Chose your aircraft types</p>
											<hr />
											<Flex direction='column' className='gap-2'>
												{aircraftType?.map(i => (
													<Form.Check
														key={i.id}
														type='checkbox'
														checked={i.active}
														onChange={(): void => changeAircraftTypeState(i.label)}
														label={i.label}
													/>
												))}
											</Flex>
											<p className='m-0'>Preview</p>
											<hr />
											<Flex>
												<RadioToggleList items={aircraftType} getResult={setFlightOn} />
											</Flex>
										</Tab.Pane>
										<Tab.Pane eventKey='hotel-type'>
											<p>Chose your hotel types</p>
											<hr />
											<Flex direction='column' className='gap-2'>
												{hotelTypes?.map(i => (
													<Form.Check
														key={i.id}
														type='checkbox'
														checked={i.active}
														onChange={(): void => changeHotelTypeState(i.label)}
														label={i.label}
													/>
												))}
											</Flex>
											<p className='m-0'>Preview</p>
											<hr />
											<Flex>
												<RadioToggleList items={hotelTypes} getResult={setFlightOn} />
											</Flex>
										</Tab.Pane>
									</Tab.Content>
								</div>
							</Col>
						</Row>
					</Tab.Container>
				</Card.Body>
			</Card>
			{/* <DatePickerFormElement */}
			{/*  rangeDate={rangeDate} */}
			{/*  setRangeDate={setRangeDate} */}
			{/*  Range */}
			{/*  setSingleDate={setSingleDate} */}
			{/*  singleDate={singleDate} */}
			{/*  Mobile={false} */}
			{/*  withFixedSelection */}
			{/* /> */}
			{/* /!* <Map /> *!/ */}
			{/* <Map2 /> */}
		</Container>
	)
}

export default SiteCustomization

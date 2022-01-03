import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Offcanvas, ButtonGroup, Form } from 'react-bootstrap'
import dark from '../../assets/img/theme/dark.png'
import light from '../../assets/img/theme/light.png'
import RadioItem from './RadioItem'
import Flex from '../common/utils/Flex'
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxState'
import {
	setIsDark,
	setIsRTL,
	setShowSettingPanel
} from '../../features/context/contextSlice'

const SettingsPanel: FC = function SettingsPanel() {
	const { isDark, isRTL, showSettingPanel } = useAppSelector(
		state => state.context
	)
	const dispatch = useAppDispatch()
	return (
		<Offcanvas
			show={showSettingPanel}
			onHide={(): any => dispatch(setShowSettingPanel(false))}
			placement='end'
			style={{ maxWidth: '22rem' }}
			className='border-0'
		>
			<Offcanvas.Header
				closeButton
				closeVariant='white'
				className='bg-shape settings-panel-header'
			>
				<Offcanvas.Title as='div' className='py-1 flex-grow-1 light'>
					<h5 className='text-white'>
						<FontAwesomeIcon icon='palette' className='me-2 fs-0' />
						Settings
					</h5>
					<p className='mb-0 fs--1 text-white opacity-75'>
						Set your own customized style
					</p>
				</Offcanvas.Title>
			</Offcanvas.Header>

			<Offcanvas.Body className='scrollbar'>
				<h5 className='fs-0'>Color Scheme</h5>
				<p className='fs--1'>Choose the perfect color mode for your app.</p>

				<ButtonGroup className='btn-group-navbar-style'>
					<RadioItem
						name='theme-mode'
						label='light'
						active={!isDark}
						onChange={({ target }): any => dispatch(setIsDark(!target.checked))}
						image={light}
					/>
					<RadioItem
						name='theme-mode'
						label='dark'
						active={isDark}
						onChange={({ target }): any => dispatch(setIsDark(target.checked))}
						image={dark}
					/>
				</ButtonGroup>

				<hr />

				<Flex justifyContent='between'>
					<div className='flex-1'>
						<h5 className='fs-0'>RTL Mode</h5>
						<p className='fs--1 mb-0'>Switch your language direction </p>
					</div>
					<Form.Check
						type='switch'
						id='rtl-switch'
						checked={isRTL}
						onChange={(): any => dispatch(setIsRTL(!isRTL))}
					/>
				</Flex>
				<hr />
			</Offcanvas.Body>
		</Offcanvas>
	)
}

export default SettingsPanel

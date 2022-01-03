import { useAppSelector } from 'hooks/useReduxState'
import React from 'react'
// import AppContext from 'context/Context';

const ToggleButton = () => {
	// const {
	//   config: { isNavbarVerticalCollapsed },
	//   setConfig
	// } = useContext(AppContext);

	const { isNavbarVerticalCollapsed } = useAppSelector(state => state.context)

	const handleClick = () => {
		document
			.getElementsByTagName('html')[0]
			.classList.toggle('navbar-vertical-collapsed')
		// setConfig('isNavbarVerticalCollapsed', !isNavbarVerticalCollapsed);
	}

	return (
		// <OverlayTrigger placement="left">
		<div className='toggle-icon-wrapper cursor-pointer'>
			<span className='navbar-toggler-humburger-icon' onClick={handleClick}>
				<span className='navbar-toggle-icon'>
					<span className='toggle-line' />
				</span>
			</span>
		</div>
		// </OverlayTrigger>
	)
}

export default ToggleButton

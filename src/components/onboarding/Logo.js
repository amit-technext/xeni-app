import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
// import logo from 'assets/img/illustrations/falcon.png';

const Logo = ({ width, height, logo, ...rest }) => {
	return (
		<Link to='/' className={classNames('text-decoration-none')} {...rest}>
			<img
				className='me-2'
				src={logo}
				alt='Logo'
				height={height}
				width={width}
				style={{ backgroundRepeat: 'none' }}
			/>
		</Link>
	)
}

Logo.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	logo: PropTypes.any
}

Logo.defaultProps = { width: 40 }

export default Logo

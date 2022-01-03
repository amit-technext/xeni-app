import React, { FC } from 'react'
import xeniGif from '../../../assets/img/xeni-gif/xeniapp.gif'

const XeniLoadingPage: FC = function XeniLoadingPage() {
	return (
		<div
			className='position-fixed vh-100 vw-100 top-0 start-0'
			style={{
				zIndex: '1000',
				background: '#00000038'
			}}
		>
			<div className='position-absolute start-50 top-50 translate-middle'>
				<img src={xeniGif} alt='loading...' />
			</div>
		</div>
	)
}

export default XeniLoadingPage

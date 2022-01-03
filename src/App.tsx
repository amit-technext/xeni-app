import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'rc-slider/assets/index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Layout from './container/Layout'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { setItemToStore } from './helpers/utils'
import { useAppSelector } from './hooks/useReduxState'
import { setStyleProperty } from './helpers/htmlElementManager'

// main css file
const App: FC = function App() {
	const contextState = useAppSelector(state => state.context)
	setItemToStore('userFontFamily', contextState.userFontFamily)
	setStyleProperty('--dynamic-font-family', contextState.userFontFamily)
	return (
		<Router basename='/'>
			<Layout />
		</Router>
	)
}

export default App

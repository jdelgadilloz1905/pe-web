/** @format */

import React, { useEffect } from 'react'
import { withRouter, useLocation } from 'react-router-dom'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const Layout = (props) => {
	let location = useLocation()
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		setTimeout(() => {
			document.body.style.overflow = 'auto'
		}, 600)
	}, [location.pathname])

	return (
		<>
			{!window.location.pathname.match(/wizard/) &&
				!window.location.pathname.match(/wiz-welcome/) &&
				!window.location.pathname.match(/wiz-welcome/) && <Header />}
			{props.children}
			{!window.location.pathname.match(/wizard/) &&
				!window.location.pathname.match(/wiz-welcome/) &&
				!window.location.pathname.match(/wiz-welcome/) && <Footer />}
		</>
	)
}
export default withRouter(Layout)

/** @format */

import React, { useEffect, useState } from 'react'
import { withRouter, useLocation } from 'react-router-dom'

import { Spin } from 'antd'

import mainVideo from '../../../components/Video/AdobeStockp.mov'
import aboutBg from '../../../assets/images/bg/about-bg.jpeg'
import Img1 from '../../../assets/images/bg/AdobeStock_98992939_Preview.jpeg'
import Img2 from '../../../assets/images/bg/AdobeStock_160950561.jpeg'
import Img3 from '../../../assets/images/bg/AdobeStock_165892885_Preview.jpeg'
import Img4 from '../../../assets/images/bg/AdobeStock_196821190_Preview-RT.jpeg'
import Img5 from '../../../assets/images/bg/AdobeStock_229018430_PreviewRT.jpeg'
import Img6 from '../../../assets/images/bg/AdobeStock_252882777_Preview-RT4.jpeg'
import Img7 from '../../../assets/images/bg/AdobeStock_252882777_Preview-RT41.jpeg'
import Img8 from '../../../assets/images/bg/AdobeStock_252882777_Preview-RT41.jpg'
import Img9 from '../../../assets/images/bg/AdobeStock_297432545_Preview-RT.jpg'
import Img10 from '../../../assets/images/bg/AdobeStock_297432545.jpeg'
import Img11 from '../../../assets/images/bg/AdobeStock_298598659_Preview.jpeg'
import Img12 from '../../../assets/images/bg/capture-process.JPG'
import Img13 from '../../../assets/images/bg/client-profile-setup.jpeg'
import Img14 from '../../../assets/images/bg/contact-bg.jpeg'
import Img15 from '../../../assets/images/bg/home-section-2.jpeg'
import Img16 from '../../../assets/images/bg/home-section-2.png'
import Img17 from '../../../assets/images/bg/home-section-3-left.jpeg'
import Img18 from '../../../assets/images/bg/home-section-3-left.png'
import Img19 from '../../../assets/images/bg/home-section-3-left11.jpeg'
import Img20 from '../../../assets/images/bg/home-section-3-right.jpeg'
import Img21 from '../../../assets/images/bg/home-section-3-right.png'
import Img22 from '../../../assets/images/bg/login-bg.jpeg'
import Img23 from '../../../assets/images/bg/register-advisor.jpeg'
import Img24 from '../../../assets/images/bg/register-advisor.jpg'
import Img25 from '../../../assets/images/bg/register-client.jpeg'
import Img26 from '../../../assets/images/bg/registration-code.PNG'
import Img27 from '../../../assets/images/bg/Sin título-1.png'
import Img28 from '../../../assets/images/bg/verify_code.jpg'
import Img29 from '../../../assets/images/bg/wizard-section-advisor.jpeg'
import Img30 from '../../../assets/images/bg/wizard-section-advisor.jpg'
import Img31 from '../../../assets/images/bg/wizard-section-advisor.jpg'
import Img32 from '../../../assets/images/bg/wizard-section-client-bg.png'
import Img33 from '../../../assets/images/bg/wizard-section-five-bg.jpg'
import Img34 from '../../../assets/images/bg/wizard-section-five-bg.jpeg'
import Img35 from '../../../assets/images/bg/wizard-section-four-bg.png'
import Img36 from '../../../assets/images/bg/wizard-section-one-bg.jpeg'
import Img37 from '../../../assets/images/bg/wizard-section-three-bg.jpeg'
import Img38 from '../../../assets/images/bg/wizard-section-three-bg.png'
import Img39 from '../../../assets/images/bg/wizard-section-two-bg.jpeg'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

import './style.scss'

const Layout = (props) => {
	const [isLoading, setLoading] = useState(true)
	let location = useLocation()
	const handleCacheImages = async (item) => {
		const promises = await item.map((element) => {
			return new Promise((resolve, reject) => {
				const img = new Image()
				img.src = element
				img.onload = resolve()
				img.onerror = reject()
			})
		})
		await Promise.all(promises)
		setLoading(false)
	}

	useEffect(() => {
		const images = [
			mainVideo,
			aboutBg,
			Img1,
			Img2,
			Img3,
			Img4,
			Img5,
			Img6,
			Img7,
			Img8,
			Img9,
			Img10,
			Img11,
			Img12,
			Img13,
			Img14,
			Img15,
			Img16,
			Img17,
			Img18,
			Img19,
			Img20,
			Img21,
			Img22,
			Img23,
			Img24,
			Img25,
			Img26,
			Img27,
			Img28,
			Img29,
			Img30,
			Img31,
			Img32,
			Img33,
			Img34,
			Img35,
			Img36,
			Img37,
			Img38,
			Img39,
		]
		handleCacheImages(images)
	}, [])

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		setTimeout(() => {
			document.body.style.overflow = 'auto'
		}, 600)
		window.scrollTo(0, 0)
	}, [location.pathname])

	return (
		<>
			{isLoading ? (
				<div className='pe-global-loading-container'>
					<Spin />
				</div>
			) : (
				<>
					{!window.location.pathname.match(/wizard/) && !window.location.pathname.match(/client/) && !window.location.pathname.match(/wiz-welcome/) && <Header />}
					{props.children}
					{!window.location.pathname.match(/wizard/) && !window.location.pathname.match(/wiz-welcome/) && !window.location.pathname.match(/client/) && <Footer />}
				</>
			)}
		</>
	)
}
export default withRouter(Layout)

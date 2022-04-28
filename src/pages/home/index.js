/** @format */

import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import ScrollAnimation from 'react-animate-on-scroll'

import MetaDescription from '../../components/MetaDescription'

import Image from '../../components/Image'

import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import PowerSlap from '../../components/Video/AdobeStockp.mov'

import logoColor from '../../assets/images/logos/PE-logo-color.svg'

import './style.sass'

export default function Home() {
	const [isloggedIn, setLoggedIn] = useState(null)
	const [isType] = useState(localStorage.getItem('type'))
	useEffect(() => {
		const isUserLogin = localStorage.getItem('userSession')
		if (isUserLogin) setLoggedIn(isUserLogin)
	}, [])

	return (
		<>
			<MetaDescription title={'Home | PE.com'} name={'description'} content={'Home | PE.com...'} />

			<div className='cw-home-banner-global-container'>
				<video
					autoPlay
					loop
					muted
					style={{
						position: 'fixed',
						width: '100%',
						left: '50%',
						top: '50%',
						height: '100%',
						objectFit: 'cover',
						transform: 'translate(-50%, -50%)',
						zIndex: '-3',
						overflow: 'hidden',
					}}>
					<source src={PowerSlap} type='video/mp4' />
				</video>
				<div className='cw-home-banner-main-container'>
					<div className='cw-home-banner-logo-container'>
						<ScrollAnimation animateIn='animate__fadeInDown' delay={500} animateOnce={true}>
							<Image classImg={'cw-home-banner-logo-img'} image={logoColor} alt={'Main Logo'} title={'Main Logo'} />
						</ScrollAnimation>
					</div>
					<ScrollAnimation animateIn='animate__fadeInUp' delay={1000} animateOnce={true}>
						<div className='cw-home-banner-title-container'>
							<h2 className='cw-home-banner-title'>Hi, it's great to meet you!</h2>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn='animate__fadeInUp' delay={1500} animateOnce={true}>
						{!isloggedIn ? (
							<>
								{isType ? (
									<div className='cw-home-banner-button-container-2'>
										<Link to={'/login'} className='cw-home-banner-third-button'>
											Sign In
										</Link>
									</div>
								) : (
									<div className='cw-home-banner-button-container'>
										<Link to={'/register-two'} className='cw-home-banner-first-button'>
											Join as a professional
										</Link>
										<Link to={'/wiz-welcome/step-one'} className='cw-home-banner-second-button'>
											Connect with a professional
										</Link>
									</div>
								)}
							</>
						) : (
							<>
								{isType === '1' ? (
									<div className='cw-home-banner-button-container-2'>
										<Link to={'/user-profile-detail'} className='cw-home-banner-third-button'>
											Go to User Dashboard
										</Link>
									</div>
								) : (
									<div className='cw-home-banner-button-container-2'>
										<Link to={'/user-profile-setup'} className='cw-home-banner-third-button'>
											Go to Client Profile
										</Link>
									</div>
								)}
							</>
						)}
					</ScrollAnimation>
				</div>
			</div>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
		</>
	)
}

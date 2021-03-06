/** @format */

import React from 'react'

import { Link } from 'react-router-dom'

import ScrollAnimation from 'react-animate-on-scroll'

import MetaDescription from '../../components/MetaDescription'

import Image from '../../components/Image'

import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'

import logoColor from '../../assets/images/logos/wix-logo-color.png'

import './style.sass'

export default function Home() {
	return (
		<>
			<MetaDescription
				title={'Home | Wix.com'}
				name={'description'}
				content={'Home | Wix.com...'}
			/>
			<div className='cw-home-banner-global-container'>
				<div className='cw-home-banner-main-container'>
					<div className='cw-home-banner-logo-container'>
						<ScrollAnimation
							animateIn='animate__fadeInDown'
							delay={500}
							animateOnce={true}>
							<Image
								classImg={'cw-home-banner-logo-img'}
								image={logoColor}
								alt={'Main Logo'}
								title={'Main Logo'}
							/>
						</ScrollAnimation>
					</div>
					<ScrollAnimation
						animateIn='animate__fadeInUp'
						delay={1000}
						animateOnce={true}>
						<div className='cw-home-banner-title-container'>
							<h2 className='cw-home-banner-title'>
								Hi, it's great to meet you!
							</h2>
						</div>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn='animate__fadeInUp'
						delay={1500}
						animateOnce={true}>
						<div className='cw-home-banner-button-container'>
							<Link
								to={'/client/step-one'}
								className='cw-home-banner-first-button'>
								Join as a professional
							</Link>
							<Link
								to={'/wiz-welcome/step-one'}
								className='cw-home-banner-second-button'>
								Connect with a professional
							</Link>
						</div>
					</ScrollAnimation>
				</div>
			</div>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
		</>
	)
}

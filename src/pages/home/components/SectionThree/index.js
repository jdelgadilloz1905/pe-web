/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

import { Parallax } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col } from 'antd'

import Image from '../../../../components/Image'

import logoWhite from '../../../../assets/images/logos/PE-logo-white.svg'

import backgroundImgLeft from '../../../../assets/images/bg/home-section-3-left.jpeg'
import backgroundImgRight from '../../../../assets/images/bg/home-section-3-right.jpeg'

import './style.sass'

export default function SectionThree() {
	return (
		<Row className='cw-section-three-global-container'>
			<Col span={7}>
				<div className='cw-section-three-parallax-left-container'>
					<Parallax strength={500} bgImage={backgroundImgLeft}></Parallax>
				</div>
			</Col>
			<Col span={10} className='cw-section-three-main-container'>
				<div className='cw-section-three-text-container'>
					<div className='cw-section-three-text-inner-container'>
						<ScrollAnimation animateIn='animate__fadeInUp' delay={100} animateOnce={true}>
							<h2 className='cw-section-three-title'>Your financial resource.</h2>
						</ScrollAnimation>
						<ScrollAnimation animateIn='animate__fadeInUp' delay={300} animateOnce={true}>
							<h4 className='cw-section-three-subtitle'>
								Whether you are a recent college graduate, midway through your career or a retiree your financial goals are unique to you. Professional Exchange carefully
								selects and qualifies a financial professional to work with you and create a plan that fits your life stage, preferences, goals, and values.
							</h4>
						</ScrollAnimation>
						<ScrollAnimation animateIn='animate__fadeInUp' delay={500} animateOnce={true}>
							<h4 className='cw-section-three-subtitle-2'>Establishing the right relationship is a key factor in realizing your dreams along your financial journey.</h4>
						</ScrollAnimation>
					</div>
					<ScrollAnimation animateIn='animate__fadeInUp' delay={700} animateOnce={true}>
						<div className='cw-section-three-button-container'>
							<Link to={'/wiz-welcome/step-one'} className='cw-section-three-button'>
								Connect with a professional
							</Link>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn='animate__fadeInUp' delay={900} animateOnce={true}>
						<div className='cw-section-three-main-logo-container'>
							<Image classImg={'cw-section-three-main-logo-img'} image={logoWhite} alt={'Main Logo'} title={'Main Logo'} />
						</div>
					</ScrollAnimation>
				</div>
			</Col>
			<Col span={7}>
				<div className='cw-section-three-parallax-container'>
					<Parallax strength={600} bgImage={backgroundImgRight}></Parallax>
				</div>
			</Col>
		</Row>
	)
}

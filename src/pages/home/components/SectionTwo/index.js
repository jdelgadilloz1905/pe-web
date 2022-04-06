/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

import { Parallax } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col } from 'antd'

import backgroundImg from '../../../../assets/images/bg/home-section-2.jpeg'

import './style.sass'

export default function SectionTwo() {
	return (
		<div className='cw-section-two-parallax-container'>
			<Parallax strength={200} bgImage={backgroundImg}>
				<Row className='cw-section-two-global-container'>
					<Col span={12}></Col>
					<Col span={12} className='cw-section-two-main-container'>
						<div className='cw-section-two-text-container'>
							<ScrollAnimation
								animateIn='animate__fadeInRight'
								delay={300}
								animateOnce={true}>
								<h2 className='cw-section-two-title'>
									Why Professional Exchange?
								</h2>
							</ScrollAnimation>
							<ScrollAnimation
								animateIn='animate__fadeInRight'
								delay={500}
								animateOnce={true}>
								<h4 className='cw-section-two-subtitle'>
									Professional Exchange was born out of a simple idea – everyone
									should have access to qualified, vetted financial
									professionals to help with life’s most important financial
									decisions.
								</h4>
							</ScrollAnimation>
							<ScrollAnimation
								animateIn='animate__fadeInRight'
								delay={700}
								animateOnce={true}>
								<h4 className='cw-section-two-subtitle'>
									Using analysis of proven industry measurements, consumer
									testimonials, and your answers to our survey, we match you
									with a professional who is the right fit for you and your
									financial goals.
								</h4>
							</ScrollAnimation>
							<ScrollAnimation
								animateIn='animate__fadeInRight'
								delay={900}
								animateOnce={true}>
								<div className='cw-section-two-button-container'>
									<Link
										to={'/wizard/step-one'}
										className='cw-section-two-button'>
										Connect with a professional
									</Link>
								</div>
							</ScrollAnimation>
						</div>
					</Col>
				</Row>
			</Parallax>
		</div>
	)
}

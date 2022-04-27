/** @format */

import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import Indicators from '../Indicators'

import './style.sass'

export default function MainTitle(props) {
	return (
		<>
			<ScrollAnimation animateIn='animate__fadeInDown' delay={2000} animateOnce={true}>
				<h5 className='cw-main-title-title-one'>{props.section}</h5>
				<h3 className='cw-main-title-title-two'>{props.title}</h3>
				<div className='cw-main-title-indicator-main-container'>
					<h2 className='cw-main-title-title-three'>{props.subtitle}</h2>
					<Indicators indicators={props.indicators} />
				</div>
			</ScrollAnimation>
			<ScrollAnimation animateIn='animate__fadeInDown' delay={2500} animateOnce={true}>
				<hr className='cw-main-title-section-spacer'></hr>
			</ScrollAnimation>
		</>
	)
}

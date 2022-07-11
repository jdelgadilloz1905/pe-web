/** @format */

import React from 'react'

import Indicators from '../Indicators'

import './style.sass'

export default function MainTitle(props) {
	return (
		<>
			<h5 className='cw-main-title-title-one'>{props.section}</h5>
			<h3 className='cw-main-title-title-two'>{props.title}</h3>
			<div className='cw-main-title-indicator-main-container'>
				<h2 className='cw-main-title-title-three'>{props.subtitle}</h2>
				<Indicators indicators={props.indicators} />
			</div>

			<hr className='cw-main-title-section-spacer'></hr>
		</>
	)
}

/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

import animationGif from '../../../../assets/images/icons/Logo-animation-5.gif'

import './style.sass'

export default function Buttons(props) {
	return (
		<>
			<Link to={props.previous} className='cw-wizard-button'>
				Back
			</Link>
			<div className='cw-wizard-button-icon-container'>
				<img className='cw-wizard-button-icon' src={animationGif} alt='PE gif' />
			</div>
			<Link to={props.next} className='cw-wizard-button'>
				Next
			</Link>
		</>
	)
}

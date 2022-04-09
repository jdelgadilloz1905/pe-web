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
			<img src={animationGif} alt='PE gif' width='100%' />
			<Link to={props.next} className='cw-wizard-button'>
				Next
			</Link>
		</>
	)
}

/** @format */

import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import animationGif from '../../../../assets/images/icons/Logo-animation-5.gif'

import './style.sass'

export default function Buttons(props) {
	let location = useLocation()
	const [isAmimationGif, setAnimationGif] = useState(null)
	useEffect(() => {
		setAnimationGif(animationGif)

		return () => {
			setAnimationGif(null)
		}
	}, [location.pathname])
	return (
		<>
			<Link to={props.previous} className='cw-wizard-button'>
				Back
			</Link>
			<div className='cw-wizard-button-icon-container'>
				<img className='cw-wizard-button-icon' src={isAmimationGif} alt='PE gif' />
			</div>
			<div onClick={() => props.handleValidate()} className='cw-wizard-button'>
				Next
			</div>
		</>
	)
}

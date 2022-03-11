/** @format */

import React from 'react'

import './style.scss'

export default function Indicators(props) {
	return (
		<>
			{props.indicators.map((item, index) => (
				<div
					className={`${
						item.indicator === true ? 'cw-wizard-indicators-filled' : ''
					} cw-wizard-indicators-container`}
					key={index}></div>
			))}
		</>
	)
}

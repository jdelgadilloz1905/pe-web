/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import './style.sass'

export default function Buttons(props) {
	return (
		<>
			<Link to={props.previous} className='cw-wizard-button'>
				Back
			</Link>
			<h2 className='cw-wizard-button-icon'>
				<LeftOutlined />•<RightOutlined />
			</h2>
			<Link to={props.next} className='cw-wizard-button'>
				Next
			</Link>
		</>
	)
}

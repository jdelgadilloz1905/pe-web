/** @format */

import React from 'react'

import { Link } from 'react-router-dom'

import './style.sass'

export default function NotFound() {
	return (
		<>
			<Link to='/'>Back</Link>
			<h1>not Found</h1>
		</>
	)
}

/** @format */

import React from 'react'

import { Helmet } from 'react-helmet'

export default function MetaDescription(props) {
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>{props.title}</title>
				<meta name={props.name} content={props.content} />
			</Helmet>
		</>
	)
}

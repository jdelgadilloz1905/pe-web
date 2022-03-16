/** @format */

import React from 'react'

import { Row, Col } from 'antd'

import './style.scss'

export default function MainList(props) {
	return (
		<>
			{props.data.map((item, index) => (
				<div className='cw-profile-list-result-main-container' key={index}>
					<Row>
						<Col span={4}>
							<div className='cw-profile-list-result-number-container'>
								<div className='cw-profile-list-result-number'>
									<span className='cw-profile-list-result-number-title'>{item.id}</span>
								</div>
								<h4 className='cw-profile-list-result-title'>
									<span className='cw-profile-list-result-title-elipsis'>{item.name}</span>
								</h4>
							</div>
						</Col>
						<Col span={4}>
							<h4 className='cw-profile-list-result-title-alt'>{item.date_added}</h4>
						</Col>
						<Col span={4}>
							<h4 className='cw-profile-list-result-title-alt'>{item.aum}</h4>
						</Col>
						<Col span={4}>
							<h4 className='cw-profile-list-result-title-alt'>{item.wellness_score}</h4>
						</Col>
						{props.alt_list ? (
							<Col span={4}>
								<h3 className='cw-profile-list-result-subtitle-alt'>Estate Planning:</h3>
								<h4 className='cw-profile-list-result-title-alt-2'>{item.date_action}</h4>
							</Col>
						) : (
							<Col span={4}>
								<h4 className='cw-profile-list-result-title-alt'>{item.date_action}</h4>
							</Col>
						)}
						<Col span={4}>
							<h4 className='cw-profile-list-result-title'>{item.notes}</h4>
						</Col>
					</Row>
				</div>
			))}
		</>
	)
}

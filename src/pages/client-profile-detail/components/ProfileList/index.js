/** @format */

import React from 'react'

import { Row, Col } from 'antd'

import MainList from './components/MainList'

import './style.scss'

export default function ProfileList(props) {
	return (
		<div className='cw-profile-list-global-container'>
			<Row>
				<Col span={8}>
					<div>
						<h3 className='cw-profile-list-main-title'>{props.info.name}</h3>
						<h3 className='cw-profile-list-main-subtitle'>
							Total AUM: <span className='cw-profile-list-main-description'>{props.info.amount}</span>
						</h3>
					</div>
				</Col>
				{props.info.name === 'Prospects' && (
					<Col span={8}>
						<div className='cw-profile-list-alt-column-container'>
							<h3 className='cw-profile-list-main-subtitle'>
								Number of Prospects: <span className='cw-profile-list-main-description'>{props.info.quantity}</span>
							</h3>
						</div>
					</Col>
				)}
			</Row>
			<Row>
				{props.info.titles.map((item, index) => (
					<Col span={item.rows} key={index}>
						<h4 className='cw-profile-list-headers-result-title'>{item.name}</h4>
					</Col>
				))}
			</Row>
			<MainList alt_list={props.alt_list} data={props.data} />
		</div>
	)
}

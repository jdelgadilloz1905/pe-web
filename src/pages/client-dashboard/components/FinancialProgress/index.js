/** @format */

import React from 'react'

import { Row, Col } from 'antd'

import { RiseOutlined } from '@ant-design/icons'

import { info } from './data'

import './style.scss'

export default function FinancialProgress() {
	return (
		<div className='cw-advisors-review-global-container'>
			<Row>
				<Col span={24}>
					<RiseOutlined />
					<h3>Your financial progress at a glance.</h3>
				</Col>
				{info.map((item, index) => (
					<Col span={6} key={index}>
						<div className='cw-advisors-map-container'>
							<div className='cw-advisors-profile-text-container'>
								<h3 className='cw-advisors-profile-name'>{item.title}</h3>
								<h3 className='cw-advisors-profile-percent'>{item.months} Months</h3>
							</div>
						</div>
					</Col>
				))}
			</Row>
		</div>
	)
}

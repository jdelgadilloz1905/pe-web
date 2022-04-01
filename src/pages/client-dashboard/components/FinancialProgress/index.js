/** @format */

import React from 'react'

import { Row, Col, Checkbox, Progress } from 'antd'

import { RiseOutlined } from '@ant-design/icons'

import { info } from './data'

import './style.scss'

export default function FinancialProgress() {
	return (
		<div className='cw-financial-progress-global-container'>
			<Row>
				<Col span={24}>
					<div className='cw-financial-progress-title-icon-container'>
						<RiseOutlined className='cw-financial-progress-icon' />
						<h3 className='cw-financial-progress-first-title'>
							Your financial progress at a glance.
						</h3>
					</div>
				</Col>
				<Col span={21}>
					<div className='cw-financial-progress-second-title-container'>
						<h3 className='cw-financial-progress-second-title'>
							Time remaining to hit target
						</h3>
					</div>
				</Col>
				<Col span={3}>
					<div className='cw-financial-progress-third-title-container'>
						<h3 className='cw-financial-progress-third-title'>Please advise</h3>
					</div>
				</Col>
				{info.map((item, index) => (
					<>
						<Col span={21} key={item.id}>
							<div className='cw-financial-progress-bar-container'>
								<h3 className='cw-financial-progress-profile-title'>
									{item.title}
								</h3>
								<div className='cw-financial-progress-container'>
									<Progress
										percent={item.percent}
										showInfo={false}
										className='cw-financial-progress-profile-bar'
									/>
									<div className='cw-financial-progress-profile-months-container'>
										<h3 className='cw-financial-progress-profile-months'>
											{item.months}
										</h3>
									</div>
								</div>
							</div>
						</Col>
						<Col
							span={3}
							className='cw-financial-progress-profile-check-container'>
							<div className='cw-financial-progress-profile-check-inner-container'>
								<Checkbox.Group>
									<Checkbox></Checkbox>
								</Checkbox.Group>
							</div>
						</Col>
					</>
				))}
			</Row>
		</div>
	)
}

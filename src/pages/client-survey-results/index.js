/** @format */

import React from 'react'

import { Row, Col, Checkbox } from 'antd'

import MetaDescription from '../../components/MetaDescription'

import { StarFilled } from '@ant-design/icons'

import './style.scss'

export default function SurveyResults() {
	return (
		<>
			<MetaDescription
				title={'Survey Results | Wix.com'}
				name={'description'}
				content={'Survey Results | Wix.com...'}
			/>
			<div className='cw-survey-result-global-background'>
				<div className='cw-survey-result-main-container'>
					<Row className='cw-survey-result-inner-container'>
						<Col span={24}>
							<h2 className='cw-survey-result-title'>Question Answers and Ranking</h2>
						</Col>
						<Col span={24} className='cw-survey-result-col-container'>
							<Row>
								<Col span={21}>
									<h3 className='cw-survey-result-subtitle'>
										What is your preferred method of communicating with your advisor?
									</h3>
									<div className='cw-survey-result-form-option-container'>
										<Checkbox.Group>
											<Checkbox value='Phone'>Phone</Checkbox>
											<Checkbox value='Email'>Email</Checkbox>
											<Checkbox value='My Office'>My Office</Checkbox>
											<Checkbox value='Their Office'>Their Office</Checkbox>
										</Checkbox.Group>
									</div>
								</Col>
								<Col span={3}>
									<h3 className='cw-survey-result-subtitle'>Your ranking</h3>
									<div>
										<StarFilled className='cw-survey-result-icon-filled' />
										<StarFilled className='cw-survey-result-icon-filled' />
										<StarFilled className='cw-survey-result-icon-filled' />
										<StarFilled className='cw-survey-result-icon' />
										<StarFilled className='cw-survey-result-icon' />
									</div>
								</Col>
							</Row>
						</Col>
						<Col span={24} className='cw-survey-result-col-container'>
							<Row>
								<Col span={21}>
									<h3 className='cw-survey-result-subtitle'>
										Would you prefer your advisor have an office in your area?
									</h3>
									<div className='cw-survey-result-form-option-container'>
										<Checkbox.Group>
											<Checkbox value='Yes'>Yes</Checkbox>
											<Checkbox value='No'>No</Checkbox>
										</Checkbox.Group>
									</div>
								</Col>
								<Col span={3}>
									<h3 className='cw-survey-result-subtitle'>Your ranking</h3>
									<div>
										<StarFilled className='cw-survey-result-icon-filled' />
										<StarFilled className='cw-survey-result-icon-filled' />
										<StarFilled className='cw-survey-result-icon-filled' />
										<StarFilled className='cw-survey-result-icon-filled' />
										<StarFilled className='cw-survey-result-icon-filled' />
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</div>
		</>
	)
}

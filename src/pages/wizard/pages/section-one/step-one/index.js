/** @format */

import React, { useState, useEffect } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col, Checkbox } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar'
import Buttons from '../../../components/Buttons'

import servicesAdvisor from '../../services'

import './style.scss'

export default function StepOne() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_one')
	const [isStep] = useState('step_one')
	const [isSelected, setSelected] = useState(null)

	useEffect(() => {
		servicesAdvisor.GetQuestion(isStep).then((response) => {
			if (response) {
				setSelected(response.answers)
				setRateOne(response.rate)
			}
		})
	}, [isStep])

	const handleChangeRate = async (value) => {
		setRateOne(value)
		await servicesAdvisor.PushQuestion(value, isSelected, isSection, isStep).then((response) => {
			//..
		})
	}

	const handleChangeCheckbox = async (values) => {
		setSelected(values)
		await servicesAdvisor.PushQuestion(isRateOne, values, isSection, isStep).then((response) => {
			//..
		})
	}
	return (
		<>
			<MetaDescription
				title={'Communication-1 | PE.com'}
				name={'description'}
				content={'Communication-1 | PE.com...'}
			/>
			<div className='cw-wizard-stsone-advisor-global-container'>
				<Row className='cw-wizard-stsone-main-container'>
					<Col span={10}>
						<Sidebar animation={true} />
					</Col>
					<Col span={14}>
						<ScrollAnimation
							style={{ height: '100%' }}
							animateIn='animate__slideInRight'
							delay={300}
							duration={2}
							animateOnce={true}>
							<div className='cw-wizard-stsone-form-global-container'>
								<div className='cw-wizard-stsone-form-main-title-container'>
									<MainTitle
										indicators={[{ indicator: true }, { indicator: false }]}
										section={'Section 1 of 5'}
										title={'Communication with your advisor'}
										subtitle={'Question 1 of 2'}
									/>
								</div>
								<div className='cw-wizard-stsone-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-stsone-form-title-container'>
											<h2 className='cw-wizard-stsone-form-title'>
												What is your preferred method of communicating with your
												advisor?
											</h2>
										</div>

										<div className='cw-wizard-stsone-form-option-container'>
											<Checkbox.Group
												onChange={handleChangeCheckbox}
												defaultValue={isSelected}
												value={isSelected}>
												<Row>
													<Col span={12}>
														<Checkbox value='Phone'>Phone</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Their Office'>Their Office</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Email'>Email</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Chat'>Chat</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Video'>Video Conference</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Any or all'>
															Any or all of the previous options
														</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='My Office'>My Office</Checkbox>
													</Col>
												</Row>
											</Checkbox.Group>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-stsone-value-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-stsone-value-title-container'>
											<h2 className='cw-wizard-stsone-value-rate-title'>
												How important is this question to you?
											</h2>
										</div>

										<div className='cw-wizard-stsone-value-option-container'>
											<NormalRate
												className={''}
												onChange={handleChangeRate}
												defaultValue={isRateOne}
											/>
										</div>
									</ScrollAnimation>
								</div>
								<ScrollAnimation
									animateIn='animate__fadeInUp'
									delay={4000}
									animateOnce={true}>
									<div className='cw-wizard-stsone-form-buttons-container'>
										<Buttons previous={'/'} next={'/wizard/step-two'} />
									</div>
								</ScrollAnimation>
							</div>
						</ScrollAnimation>
					</Col>
				</Row>
			</div>
		</>
	)
}

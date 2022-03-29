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

export default function StepTwelve() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_three')
	const [isStep] = useState('step_twelve')
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
		await servicesAdvisor
			.PushQuestion(value, isSelected, isSection, isStep)
			.then((response) => {
				//..
			})
	}

	const handleChangeCheckbox = async (values) => {
		setSelected(values)
		await servicesAdvisor
			.PushQuestion(isRateOne, values, isSection, isStep)
			.then((response) => {
				//..
			})
	}
	return (
		<>
			<MetaDescription
				title={'Personal Preferences-4 | PE.com'}
				name={'description'}
				content={'Personal Preferences-4 | PE.com...'}
			/>
			<div className='cw-wizard-ststwelve-advisor-global-container'>
				<Row className='cw-wizard-ststwelve-main-container'>
					<Col span={10}>
						<Sidebar />
					</Col>
					<Col span={14}>
						<ScrollAnimation
							style={{ height: '100%' }}
							animateIn='animate__backInRight'
							delay={300}
							duration={2}
							animateOnce={true}>
							<div className='cw-wizard-ststwelve-form-global-container'>
								<div className='cw-wizard-ststwelve-form-main-title-container'>
									<MainTitle
										indicators={[
											{ indicator: true },
											{ indicator: true },
											{ indicator: true },
											{ indicator: true },
										]}
										section={'Section 3 of 5'}
										title={'Personal Preferences'}
										subtitle={'Question 4 of 4'}
									/>
								</div>
								<div className='cw-wizard-ststwelve-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-ststwelve-form-title-container'>
											<h2 className='cw-wizard-ststwelve-form-title'>
												What is your current financial goal?
											</h2>
										</div>
										<div className='cw-wizard-ststwelve-form-option-container'>
											<Checkbox.Group
												onChange={handleChangeCheckbox}
												defaultValue={isSelected}
												value={isSelected}>
												<Row>
													<Col span={12}>
														<Checkbox value='Saving'>
															Saving for retirement
														</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Tax'>Tax Strategy</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Financial'>
															Financial Security
														</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Estate'>Estate Planning</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='College'>
															College Planning
														</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Other'>Other</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Wealth'>
															Wealth Management
														</Checkbox>
													</Col>
												</Row>
											</Checkbox.Group>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-ststwelve-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-ststwelve-form-title-container'>
											<h2 className='cw-wizard-ststwelve-form-rate'>
												How important is this question to you?
											</h2>
										</div>
										<div className='cw-wizard-ststwelve-form-option-container-rate'>
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
									<div className='cw-wizard-ststwelve-form-buttons-container'>
										<Buttons
											previous={'/wizard/step-eleven'}
											next={'/wizard/step-thirteen'}
										/>
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

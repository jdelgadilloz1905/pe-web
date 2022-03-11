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

export default function StepFive() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_two')
	const [isStep] = useState('step_five')
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
				title={'Specialty-3 | PE.com'}
				name={'description'}
				content={'Specialty-3 | PE.com...'}
			/>
			<div className='cw-wizard-stsfive-global-container'>
				<Row className='cw-wizard-stsfive-main-container'>
					<Col span={10}>
						<Sidebar animation={true} />
					</Col>
					<Col span={14}>
						<ScrollAnimation
							style={{ height: '100%' }}
							animateIn='animate__backInRight'
							delay={300}
							duration={2}
							animateOnce={true}>
							<div className='cw-wizard-stsfive-form-global-container'>
								<div className='cw-wizard-stsfive-form-main-title-container'>
									<MainTitle
										indicators={[
											{ indicator: true },
											{ indicator: true },
											{ indicator: true },
											{ indicator: false },
											{ indicator: false },
											{ indicator: false },
										]}
										section={'Section 2 of 5'}
										title={'Advisor speciality or skill'}
										subtitle={'Question 3 of 6'}
									/>
								</div>
								<div className='cw-wizard-stsfive-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-stsfive-form-title-container'>
											<h2 className='cw-wizard-stsfive-form-title'>
												Which area of experience is most important for your
												financial advisor to have?
											</h2>
										</div>
										<div className='cw-wizard-stsfive-form-option-container'>
											<Checkbox.Group
												onChange={handleChangeCheckbox}
												defaultValue={isSelected}
												value={isSelected}>
												<Row>
													<Col span={12}>
														<Checkbox value='Estate planning'>
															Estate planning
														</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Retirement planning'>
															Retirement planning
														</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Education savins'>
															Education savins
														</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Tax plannings'>
															Tax plannings
														</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Portfolio management'>
															Portfolio management
														</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Insurance products'>
															Insurance products
														</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Trust and Will services'>
															Trust and Will services
														</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Real estate'>Real estate</Checkbox>
													</Col>
												</Row>
											</Checkbox.Group>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-stsfive-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-stsfive-form-title-container'>
											<h2 className='cw-wizard-stsfive-form-rate'>
												How important is this question to you?
											</h2>
										</div>
										<div className='cw-wizard-stsfive-form-option-container-rate'>
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
									<div className='cw-wizard-stsfive-form-buttons-container'>
										<Buttons
											previous={'/wizard/step-four'}
											next={'/wizard/step-six'}
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

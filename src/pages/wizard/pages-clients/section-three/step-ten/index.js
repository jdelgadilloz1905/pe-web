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

export default function StepTen() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_three')
	const [isStep] = useState('step_ten')
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
				title={'Personal Preferences-2 | PE.com'}
				name={'description'}
				content={'Personal Preferences-2 | PE.com...'}
			/>
			<div className='cw-wizard-ststen-global-container'>
				<Row className='cw-wizard-ststen-main-container'>
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
							<div className='cw-wizard-ststen-form-global-container'>
								<div className='cw-wizard-ststen-form-main-title-container'>
									<MainTitle
										indicators={[
											{ indicator: true },
											{ indicator: true },
											{ indicator: false },
											{ indicator: false },
										]}
										section={'Section 3 of 5'}
										title={'Personal Preferences'}
										subtitle={'Question 2 of 4'}
									/>
								</div>
								<div className='cw-wizard-ststen-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-ststen-form-title-container'>
											<h2 className='cw-wizard-ststen-form-title'>
												What level of investment knowledge do you prefer in a
												client?
											</h2>
										</div>
										<div className='cw-wizard-ststen-form-option-container'>
											<Checkbox.Group
												onChange={handleChangeCheckbox}
												defaultValue={isSelected}
												value={isSelected}>
												<Row>
													<Col span={24}>
														<Checkbox value='Low'>New to investing.</Checkbox>
													</Col>
													<Col span={24}>
														<Checkbox value='Moderate'>
															Somewhat knowledgeable: I prefer a client who
															needs guidence and education with their decisions.
														</Checkbox>
													</Col>
													<Col span={24}>
														<Checkbox value='High'>
															Seasoned investor: I prefer a client who is up
															date and educated with the market and feels
															confident in their investment decisions.
														</Checkbox>
													</Col>
												</Row>
											</Checkbox.Group>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-ststen-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-ststen-form-title-container'>
											<h2 className='cw-wizard-ststen-form-rate'>
												How important is this question to you?
											</h2>
										</div>
										<div className='cw-wizard-ststen-form-option-container-rate'>
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
									<div className='cw-wizard-ststen-form-buttons-container'>
										<Buttons
											previous={'/client/step-nine'}
											next={'/client/step-eleven'}
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

/** @format */

import React, { useState, useEffect } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col, Radio } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar'
import Buttons from '../../../components/Buttons'

import servicesAdvisor from '../../services'

import './style.scss'

export default function StepFifteen() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_four')
	const [isStep] = useState('step_fifteen')
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

	const handleChangeRadio = async (e) => {
		setSelected(e.target.value)
		await servicesAdvisor
			.PushQuestion(isRateOne, e.target.value, isSection, isStep)
			.then((response) => {
				//..
			})
	}
	return (
		<>
			<MetaDescription
				title={'Personal Information-3 | PE.com'}
				name={'description'}
				content={'Personal Information-3 | PE.com...'}
			/>
			<div className='cw-wizard-sfsfifteen-advisor-global-container'>
				<Row className='cw-wizard-sfsfifteen-main-container'>
					<Col span={10}>
						<Sidebar />
					</Col>
					<Col span={14}>
						<ScrollAnimation
							style={{ height: '100%' }}
							animateIn='animate__slideInRight'
							delay={300}
							duration={2}
							animateOnce={true}>
							<div className='cw-wizard-sfsfifteen-form-global-container'>
								<div className='cw-wizard-sfsfifteen-form-main-title-container'>
									<MainTitle
										indicators={[
											{ indicator: true },
											{ indicator: true },
											{ indicator: true },
											{ indicator: false },
										]}
										section={'Section 4 of 5'}
										title={'Personal Information'}
										subtitle={'Question 3 of 4'}
									/>
								</div>
								<div className='cw-wizard-sfsfifteen-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-sfsfifteen-form-title-container'>
											<h2 className='cw-wizard-sfsfifteen-form-title'>
												What is your current household income?
											</h2>
										</div>
										<div className='cw-wizard-sfsfifteen-form-option-container'>
											<Radio.Group onChange={handleChangeRadio} value={isSelected}>
												<Row>
													<Col span={24}>
														<Radio value='0-100000'>$0 – $100,000</Radio>
													</Col>
													<Col span={24}>
														<Radio value='100000-250000'>$100,000 – $250,000</Radio>
													</Col>
													<Col span={24}>
														<Radio value='250000-500000'>$250,000 – $500,000</Radio>
													</Col>
													<Col span={24}>
														<Radio value='500000-1000000'>
															$500,000 – $1,000,000
														</Radio>
													</Col>
													<Col span={24}>
														<Radio value='1000000-5000000'>
															$1,000,000 – $5,000,000
														</Radio>
													</Col>
													<Col span={24}>
														<Radio value='5000000+'>$5,000,000 and up</Radio>
													</Col>
												</Row>
											</Radio.Group>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-sfsfifteen-value-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-sfsfifteen-value-title-container'>
											<h2 className='cw-wizard-sfsfifteen-value-rate-title'>
												How important is this question to you?
											</h2>
										</div>

										<div className='cw-wizard-sfsfifteen-value-option-container'>
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
									<div className='cw-wizard-sfsfifteen-form-buttons-container'>
										<Buttons
											previous={'/wizard/step-fourteen'}
											next={'/wizard/step-sixteen'}
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

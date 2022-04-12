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

export default function StepSixteen() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_four')
	const [isStep] = useState('step_sixteen')
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
				title={'Personal Information-4 | PE.com'}
				name={'description'}
				content={'Personal Information-4 | PE.com...'}
			/>
			<div className='cw-wizard-sfssixteen-advisor-global-container'>
				<Row className='cw-wizard-sfssixteen-main-container'>
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
							<div className='cw-wizard-sfssixteen-form-global-container'>
								<div className='cw-wizard-sfssixteen-form-main-title-container'>
									<MainTitle
										indicators={[
											{ indicator: true },
											{ indicator: true },
											{ indicator: true },
											{ indicator: true },
										]}
										section={'Section 4 of 5'}
										title={'Personal Information'}
										subtitle={'Question 4 of 4'}
									/>
								</div>
								<div className='cw-wizard-sfssixteen-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-sfssixteen-form-title-container'>
											<h2 className='cw-wizard-sfssixteen-form-title'>
												Please estimate your current investable assets.
											</h2>
										</div>
										<div className='cw-wizard-sfssixteen-form-option-container'>
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
								<div className='cw-wizard-sfssixteen-value-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-sfssixteen-value-title-container'>
											<h2 className='cw-wizard-sfssixteen-value-rate-title'>
												How important is this question to you?
											</h2>
										</div>

										<div className='cw-wizard-sfssixteen-value-option-container'>
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
									<div className='cw-wizard-sfssixteen-form-buttons-container'>
										<Buttons
											previous={'/wizard/step-fifteen'}
											next={'/wizard/step-seventeen'}
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

/** @format */

import React, { useState, useEffect } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col, Radio } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar2'
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
			<div className='cw-wizard-sfsfifteen-global-container'>
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
											{ indicator: false },
										]}
										section={'Section 4 of 5'}
										title={'Personal Information'}
										subtitle={'Question 3 of 5'}
									/>
								</div>
								<div className='cw-wizard-sfsfifteen-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-sfsfifteen-form-title-container'>
											<h2 className='cw-wizard-sfsfifteen-form-title'>
												How many clients do you manage today?
											</h2>
										</div>
										<div className='cw-wizard-sfsfifteen-form-option-container'>
											<Radio.Group onChange={handleChangeRadio} value={isSelected}>
												<Row>
													<Col span={24}>
														<Radio value='0-10'>0 to 10</Radio>
													</Col>
													<Col span={24}>
														<Radio value='10-20'>10 to 20</Radio>
													</Col>
													<Col span={24}>
														<Radio value='20-30'>20 to 30</Radio>
													</Col>
													<Col span={24}>
														<Radio value='30-40'>30 to 40</Radio>
													</Col>
													<Col span={24}>
														<Radio value='40-50'>40 to 50</Radio>
													</Col>
													<Col span={24}>
														<Radio value='50+'>50 and up</Radio>
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
											previous={'/client/step-fourteen'}
											next={'/client/step-sixteen'}
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

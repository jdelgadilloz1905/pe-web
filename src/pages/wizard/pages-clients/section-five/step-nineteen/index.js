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

export default function StepNineteen() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_five')
	const [isStep] = useState('step_nineteen')
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
				title={'Organization Preferences-3 | PE.com'}
				name={'description'}
				content={'Organization Preferences-3 | PE.com...'}
			/>
			<div className='cw-wizard-sfsnineteen-global-container'>
				<Row className='cw-wizard-sfsnineteen-main-container'>
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
							<div className='cw-wizard-sfsnineteen-form-global-container'>
								<div className='cw-wizard-sfsnineteen-form-main-title-container'>
									<MainTitle
										indicators={[
											{ indicator: true },
											{ indicator: true },
											{ indicator: true },
										]}
										section={'Section 5 of 5'}
										title={'Organization Preferences'}
										subtitle={'Question 3 of 3'}
									/>
								</div>
								<div className='cw-wizard-sfsnineteen-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-sfsnineteen-form-title-container'>
											<h2 className='cw-wizard-sfsnineteen-form-title'>
												Is socially responsible investing important to you?
											</h2>
										</div>
										<div className='cw-wizard-sfsnineteen-form-option-container'>
											<Radio.Group
												onChange={handleChangeRadio}
												value={isSelected}>
												<Row>
													<Col span={24}>
														<Radio value='Yes'>Yes</Radio>
													</Col>
													<Col span={24}>
														<Radio value='No'>No</Radio>
													</Col>
												</Row>
											</Radio.Group>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-sfsnineteen-form-option-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-sfsnineteen-form-title-container'>
											<h2 className='cw-wizard-sfsnineteen-form-rate'>
												How important is this question to you?
											</h2>
										</div>

										<div className='cw-wizard-sfsnineteen-form-option-container'>
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
									<div className='cw-wizard-sfsnineteen-form-buttons-container'>
										<Buttons
											previous={'/client/step-eighteen'}
											next={'/register-two'}
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

/** @format */

import React, { useState, useEffect } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col, Checkbox, Radio } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar'
import Buttons from '../../../components/Buttons'

import servicesAdvisor from '../../services'

import './style.scss'

export default function StepNine() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_three')
	const [isStep] = useState('step_nine')
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
		console.log('values....', values.target.value)
		setSelected(values.target.value)
		await servicesAdvisor.PushQuestion(isRateOne, values.target.value, isSection, isStep).then((response) => {
			//..
		})
	}

	return (
		<>
			<MetaDescription title={'Personal Preferences-1 | PE.com'} name={'description'} content={'Personal Preferences-1 | PE.com...'} />
			<div className='cw-wizard-stsnine-advisor-global-container'>
				<Row className='cw-wizard-stsnine-main-container'>
					<Col span={10}>
						<Sidebar />
					</Col>
					<Col span={14}>
						<ScrollAnimation style={{ height: '100%' }} animateIn='animate__slideInRight' delay={300} duration={2} animateOnce={true}>
							<div className='cw-wizard-stsnine-form-global-container'>
								<div className='cw-wizard-stsnine-form-main-title-container'>
									<MainTitle
										indicators={[{ indicator: true }, { indicator: false }, { indicator: false }, { indicator: false }]}
										section={'Section 3 of 5'}
										title={'Personal Preferences'}
										subtitle={'Question 1 of 4'}
									/>
								</div>
								<div className='cw-wizard-stsnine-form-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3000} animateOnce={true}>
										<div className='cw-wizard-stsnine-form-title-container'>
											<h2 className='cw-wizard-stsnine-form-title'>What is your level of Risk Tolerance for investing?</h2>
										</div>
										<div className='cw-wizard-stsnine-form-option-container'>
											<Radio.Group onChange={handleChangeCheckbox} defaultValue={isSelected} value={isSelected}>
												<Row>
													<Col span={24}>
														<Radio value='Very low'>Very conservative: no risk</Radio>
													</Col>
													<Col span={24}>
														<Radio value='Low'>Somewhat conservative: small amount of risk</Radio>
													</Col>
													<Col span={24}>
														<Radio value='Moderate'>Moderate: some risk</Radio>
													</Col>
													<Col span={24}>
														<Radio value='High'>Somewhat aggressive: large amount of risk</Radio>
													</Col>
													<Col span={24}>
														<Radio value='Very high'>Very aggressive: maximum amount of risk</Radio>
													</Col>
												</Row>
											</Radio.Group>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-stsnine-value-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3500} animateOnce={true}>
										<div className='cw-wizard-stsnine-value-title-container'>
											<h2 className='cw-wizard-stsnine-value-rate-title'>How important is this question to you?</h2>
										</div>

										<div className='cw-wizard-stsnine-value-option-container'>
											<NormalRate className={''} onChange={handleChangeRate} defaultValue={isRateOne} />
										</div>
									</ScrollAnimation>
								</div>
								<ScrollAnimation animateIn='animate__fadeInUp' delay={3000} animateOnce={true}>
									<div className='cw-wizard-stsnine-form-buttons-container'>
										<Buttons previous={'/wizard/step-eight'} next={'/wizard/step-ten'} />
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

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

export default function StepSix() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_two')
	const [isStep] = useState('step_six')
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
			<MetaDescription title={'Specialty-4 | PE.com'} name={'description'} content={'Specialty-4 | PE.com...'} />
			<div className='cw-wizard-stssix-global-container'>
				<Row className='cw-wizard-stssix-main-container'>
					<Col span={10}>
						<Sidebar />
					</Col>
					<Col span={14}>
						<ScrollAnimation style={{ height: '100%' }} animateIn='animate__slideInRight' delay={300} duration={2} animateOnce={true}>
							<div className='cw-wizard-stssix-form-global-container'>
								<div className='cw-wizard-stssix-form-main-title-container'>
									<MainTitle
										indicators={[{ indicator: true }, { indicator: true }, { indicator: true }, { indicator: true }, { indicator: false }, { indicator: false }]}
										section={'Section 2 of 5'}
										title={'Advisor speciality or skill'}
										subtitle={'Question 4 of 6'}
									/>
								</div>
								<div className='cw-wizard-stssix-form-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3000} animateOnce={true}>
										<div className='cw-wizard-stssix-form-title-container'>
											<h2 className='cw-wizard-stssix-form-title'>Would you prefer your advisor to specialize with any of the following?</h2>
										</div>
										<div className='cw-wizard-stssix-form-option-container'>
											<Checkbox.Group onChange={handleChangeCheckbox} defaultValue={isSelected} value={isSelected}>
												<Row>
													<Col span={12}>
														<Checkbox value='Medical'>Medical professionals</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Empty'>Empty nesters</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Corporate'>Corporate professionals</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Pre-retiree'>Pre-retiree (5 years from retirement)</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Business'>Business owners</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Retiree'>Retiree</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Legacy'>Legacy planning</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Widower'>Widower</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Family'>Family planning for college</Checkbox>
													</Col>
												</Row>
											</Checkbox.Group>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-stssix-value-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3500} animateOnce={true}>
										<div className='cw-wizard-stssix-value-title-container'>
											<h2 className='cw-wizard-stssix-value-rate-title'>How important is this question to you?</h2>
										</div>

										<div className='cw-wizard-stssix-value-option-container'>
											<NormalRate className={''} onChange={handleChangeRate} defaultValue={isRateOne} />
										</div>
									</ScrollAnimation>
								</div>
								<ScrollAnimation animateIn='animate__fadeInUp' delay={4000} animateOnce={true}>
									<div className='cw-wizard-stssix-form-buttons-container'>
										<Buttons previous={'/wizard/step-five'} next={'/wizard/step-seven'} />
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

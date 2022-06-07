/** @format */

import React, { useState, useEffect } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col, Slider, Form } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar2'
import Buttons from '../../../components/Buttons'

import servicesAdvisor from '../../services'

import './style.scss'

export default function StepThree() {
	const [threeStepForm] = Form.useForm()
	const [isToolTip, setToolTip] = useState(false)
	const marks = {
		0: '|',
		5: '|',
		10: '|',
		15: '|',
		20: '|',
		25: '|',
		30: '|',
	}

	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_two')
	const [isStep] = useState('step_three')
	const [isSelected, setSelected] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			setToolTip(true)
		}, 4000)
		servicesAdvisor.GetQuestion(isStep).then((response) => {
			if (response) {
				setSelected(response.answers)
				setRateOne(response.rate)
				threeStepForm.setFieldsValue({
					slider_question: response.answers,
				})
			}
		})
	}, [isStep])

	const handleChangeRate = async (value) => {
		setRateOne(value)
		await servicesAdvisor.PushQuestion(value, isSelected, isSection, isStep).then((response) => {
			//..
		})
	}

	const handleChangeSlider = async (values) => {
		setSelected(values)
		await servicesAdvisor.PushQuestion(isRateOne, values, isSection, isStep).then((response) => {
			//..
		})
	}

	return (
		<>
			<MetaDescription title={'Specialty-1 | PE.com'} name={'description'} content={'Specialty-1 | PE.com...'} />
			<div className='cw-wizard-ststhree-global-container'>
				<Row className='cw-wizard-ststhree-main-container'>
					<Col span={10}>
						<Sidebar />
					</Col>
					<Col span={14}>
						<ScrollAnimation style={{ height: '100%' }} animateIn='animate__slideInRight' delay={300} duration={2} animateOnce={true}>
							<div className='cw-wizard-ststhree-form-global-container'>
								<div className='cw-wizard-ststhree-form-main-title-container'>
									<MainTitle
										indicators={[{ indicator: true }, { indicator: false }, { indicator: false }, { indicator: false }, { indicator: false }, { indicator: false }]}
										section={'Section 2 of 5'}
										title={'Advisor speciality or skill'}
										subtitle={'Question 1 of 6'}
									/>
								</div>
								<div className='cw-wizard-ststhree-form-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3000} animateOnce={true}>
										<div className='cw-wizard-ststhree-form-title-container'>
											<h2 className='cw-wizard-ststhree-form-title'>How many years of work experience do you have as a finacial advisor?</h2>
										</div>
										<div className='cw-wizard-ststhree-form-option-container'>
											<Form initialValues={{ slider_question: isSelected ? isSelected : 0 }} form={threeStepForm}>
												<Form.Item name='slider_question'>
													<Slider marks={marks} step={5} max={30} onChange={handleChangeSlider} value={isSelected} tooltipVisible={isToolTip} />
												</Form.Item>
											</Form>
											<div className='cw-wizard-stsseven-form-option-subtitle-container'>
												<h2 className='cw-wizard-stsseven-form-option-subtitle'>Not Important</h2>
												<h2 className='cw-wizard-stsseven-form-option-subtitle'>Very Important</h2>
											</div>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-ststhree-value-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3500} animateOnce={true}>
										<div className='cw-wizard-ststhree-value-title-container'>
											<h2 className='cw-wizard-ststhree-value-rate-title'>How important is this question to you?</h2>
										</div>

										<div className='cw-wizard-ststhree-value-option-container'>
											<NormalRate className={''} onChange={handleChangeRate} defaultValue={isRateOne} />
										</div>
									</ScrollAnimation>
								</div>
								<ScrollAnimation animateIn='animate__fadeInUp' delay={4000} animateOnce={true}>
									<div className='cw-wizard-ststhree-form-buttons-container'>
										<Buttons previous={'/client/step-two'} next={'/client/step-four'} />
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

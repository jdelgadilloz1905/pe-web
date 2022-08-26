/** @format */

import React, { useState, useEffect } from 'react'

import { Row, Col, Radio, Form } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar'
import Buttons from '../../../components/Buttons'

import servicesAdvisor from '../../services'

import './style.scss'

export default function StepSeven() {
	const [sevenStepForm] = Form.useForm()
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
	const [isStep] = useState('step_seven')
	const [isSelected, setSelected] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			setToolTip(true)
		}, 4000)
		servicesAdvisor.GetQuestion(isStep).then((response) => {
			if (response) {
				setSelected(response.answers)
				setRateOne(response.rate)
				sevenStepForm.setFieldsValue({
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

	/* 	const handleChangeSlider = async (values) => {
		setSelected(values)
		await servicesAdvisor.PushQuestion(isRateOne, values, isSection, isStep).then((response) => {
			//..
		})
	}
 */
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
				title={'Specialty-5 | PE.com'}
				name={'description'}
				content={'Specialty-5 | PE.com...'}
			/>
			<div className='cw-wizard-stsseven-global-container'>
				<Row className='cw-wizard-stsseven-main-container'>
					<Col span={10}>
						<Sidebar />
					</Col>
					<Col span={14}>
						<div className='cw-wizard-stsseven-form-global-container'>
							<div className='cw-wizard-stsseven-form-main-title-container'>
								<MainTitle
									indicators={[
										{ indicator: true },
										{ indicator: true },
										{ indicator: true },
										{ indicator: true },
										{ indicator: true },
										{ indicator: false },
									]}
									section={'Section 2 of 5'}
									title={'Advisor speciality or skill'}
									subtitle={'Question 5 of 6'}
								/>
							</div>
							<div className='cw-wizard-stsseven-form-container'>
								<div className='cw-wizard-stsseven-form-title-container'>
									<h2 className='cw-wizard-stsseven-form-title'>
										How important is it that your advisor is a Certified Financial Planner
										(CFP)?
									</h2>
								</div>
								<div className='cw-wizard-stsfour-form-option-container'>
									<Radio.Group onChange={handleChangeRadio} value={isSelected}>
										<Row>
											<Col span={24}>
												<Radio value={0}>Not Important</Radio>
											</Col>
											<Col span={24}>
												<Radio value={1}>Very Important</Radio>
											</Col>
										</Row>
									</Radio.Group>
								</div>
								{/* <Form
										initialValues={{ slider_question: isSelected ? isSelected : 0 }}
										form={sevenStepForm}>
										<Form.Item name='slider_question'>
											<Slider
												marks={marks}
												step={5}
												max={30}
												onChange={handleChangeSlider}
												value={isSelected}
												tooltipVisible={isToolTip}
											/>
										</Form.Item>
									</Form>

									<div className='cw-wizard-stsseven-form-option-subtitle-container'>
										<h2 className='cw-wizard-stsseven-form-option-subtitle'>
											Not Important
										</h2>
										<h2 className='cw-wizard-stsseven-form-option-subtitle'>
											Very Important
										</h2>
									</div> */}
							</div>
							{/* 		<div className='cw-wizard-stsseven-value-container'>
								<div className='cw-wizard-stsseven-value-container'>
									<h2 className='cw-wizard-stsseven-value-rate-title'>
										How important is this question to you?
									</h2>
								</div>

								<div className='cw-wizard-stsseven-value-option-container'>
									<NormalRate
										className={''}
										onChange={handleChangeRate}
										defaultValue={isRateOne}
									/>
								</div>
							</div> */}

							<div className='cw-wizard-stsseven-form-buttons-container'>
								<Buttons previous={'/wizard/step-six'} next={'/wizard/step-eight'} />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

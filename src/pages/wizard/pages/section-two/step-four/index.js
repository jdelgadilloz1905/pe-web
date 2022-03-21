/** @format */

import React, { useState, useEffect } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col, Slider } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar'
import Buttons from '../../../components/Buttons'

import servicesAdvisor from '../../services'

import './style.scss'

export default function StepFour() {
	const marks = {
		0: '|',
		1: '|',
		2: '|',
		3: '|',
		4: '|',
		5: '|',
	}

	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_two')
	const [isStep] = useState('step_four')
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

	const handleChangeSlider = async (values) => {
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
				title={'Specialty-2 | PE.com'}
				name={'description'}
				content={'Specialty-2 | PE.com...'}
			/>
			<div className='cw-wizard-stsfour-global-container'>
				<Row className='cw-wizard-stsfour-main-container'>
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
							<div className='cw-wizard-stsfour-form-global-container'>
								<div className='cw-wizard-stsfour-form-main-title-container'>
									<MainTitle
										indicators={[
											{ indicator: true },
											{ indicator: true },
											{ indicator: false },
											{ indicator: false },
											{ indicator: false },
											{ indicator: false },
										]}
										section={'Section 2 of 5'}
										title={'Advisor speciality or skill'}
										subtitle={'Question 2 of 6'}
									/>
								</div>
								<div className='cw-wizard-stsfour-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-stsfour-form-title-container'>
											<h2 className='cw-wizard-stsfour-form-title'>
												How important is it that your advisor is a Fiduciary?
											</h2>
										</div>
										<div className='cw-wizard-stsfour-form-option-container'>
											<Slider
												marks={marks}
												step={1}
												defaultValue={0}
												max={5}
												onChange={handleChangeSlider}
												value={isSelected}
											/>
											<div className='cw-wizard-stsfour-form-option-subtitle-container'>
												<h2 className='cw-wizard-stsfour-form-option-subtitle'>
													Not Important
												</h2>
												<h2 className='cw-wizard-stsfour-form-option-subtitle'>
													Very Important
												</h2>
											</div>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-stsfour-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-stsfour-form-title-container'>
											<h2 className='cw-wizard-stsfour-form-rate'>
												How important is this question to you?
											</h2>
										</div>
										<div className='cw-wizard-stsfour-form-option-container-rate'>
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
									<div className='cw-wizard-stsfour-form-buttons-container'>
										<Buttons
											previous={'/wizard/step-three'}
											next={'/wizard/step-five'}
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

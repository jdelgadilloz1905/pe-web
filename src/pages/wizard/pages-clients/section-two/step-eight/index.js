/** @format */

import React, { useState, useEffect } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col, Input } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar'
import Buttons from '../../../components/Buttons'

import servicesAdvisor from '../../services'

import './style.scss'

export default function StepEight() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_two')
	const [isStep] = useState('step_eight')
	const [isTextarea, setTextarea] = useState('')
	const { TextArea } = Input

	useEffect(() => {
		servicesAdvisor.GetQuestion(isStep).then((response) => {
			if (response) {
				setTextarea(response.answers)
				setRateOne(response.rate)
			}
		})
	}, [isStep])

	const handleChangeRate = async (value) => {
		setRateOne(value)
		await servicesAdvisor
			.PushQuestion(value, isTextarea, isSection, isStep)
			.then((response) => {
				//..
			})
	}

	const handleChangeTextArea = async (e) => {
		setTextarea(e.target.value)
		await servicesAdvisor
			.PushQuestion(isRateOne, e.target.value, isSection, isStep)
			.then((response) => {
				//..
			})
	}
	return (
		<>
			<MetaDescription
				title={'Specialty-6 | PE.com'}
				name={'description'}
				content={'Specialty-6 | PE.com...'}
			/>
			<div className='cw-wizard-stseight-global-container'>
				<Row className='cw-wizard-stseight-main-container'>
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
							<div className='cw-wizard-stseight-form-global-container'>
								<div className='cw-wizard-stseight-form-main-title-container'>
									<MainTitle
										indicators={[
											{ indicator: true },
											{ indicator: true },
											{ indicator: true },
											{ indicator: true },
											{ indicator: true },
											{ indicator: true },
										]}
										section={'Section 2 of 5'}
										title={'Advisor speciality or skill'}
										subtitle={'Question 6 of 6'}
									/>
								</div>
								<div className='cw-wizard-stseight-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-stseight-form-title-container'>
											<h2 className='cw-wizard-stseight-form-title'>
												Is there anything else you would like to know about an
												advisor?
											</h2>
										</div>
										<div className='cw-wizard-stseight-form-option-container'>
											<TextArea
												rows={6}
												placeholder={'Add answer here'}
												onChange={handleChangeTextArea}
												value={isTextarea}
											/>
										</div>
									</ScrollAnimation>
								</div>

								<div className='cw-wizard-stseight-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-stseight-form-title-container'>
											<h2 className='cw-wizard-stseight-form-rate'>
												How important is this question to you?
											</h2>
										</div>
										<div className='cw-wizard-stseight-form-option-container-rate'>
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
									<div className='cw-wizard-stseight-form-buttons-container'>
										<Buttons
											previous={'/wizard/step-seven'}
											next={'/wizard/step-nine'}
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

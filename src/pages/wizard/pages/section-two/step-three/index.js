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

export default function StepThree() {
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
				title={'Specialty-1 | PE.com'}
				name={'description'}
				content={'Specialty-1 | PE.com...'}
			/>
			<div className='cw-wizard-ststhree-global-container'>
				<Row className='cw-wizard-ststhree-main-container'>
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
							<div className='cw-wizard-ststhree-form-global-container'>
								<div className='cw-wizard-ststhree-form-main-title-container'>
									<MainTitle
										indicators={[
											{ indicator: true },
											{ indicator: false },
											{ indicator: false },
											{ indicator: false },
											{ indicator: false },
											{ indicator: false },
										]}
										section={'Section 2 of 5'}
										title={'Advisor speciality or skill'}
										subtitle={'Question 1 of 6'}
									/>
								</div>
								<div className='cw-wizard-ststhree-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-ststhree-form-title-container'>
											<h2 className='cw-wizard-ststhree-form-title'>
												How many years of work experience would you prefer your
												advisor to have?
											</h2>
										</div>
										<div className='cw-wizard-ststhree-form-option-container'>
											<Slider
												marks={marks}
												step={5}
												defaultValue={0}
												max={30}
												onChange={handleChangeSlider}
												value={isSelected}
											/>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-ststhree-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-ststhree-form-title-container'>
											<h2 className='cw-wizard-ststhree-form-rate'>
												How important is this question to you?
											</h2>
										</div>
										<div className='cw-wizard-ststhree-form-option-container-rate'>
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
									<div className='cw-wizard-ststhree-form-buttons-container'>
										<Buttons
											previous={'/wizard/step-two'}
											next={'/wizard/step-four'}
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

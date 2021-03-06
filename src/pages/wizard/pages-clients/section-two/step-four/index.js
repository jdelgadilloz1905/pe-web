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

export default function StepFour() {
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
										title={'Your specialty or skill'}
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
												Are you a Fiduciary?
											</h2>
										</div>
										<div className='cw-wizard-stsfour-form-option-container'>
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
											previous={'/client/step-three'}
											next={'/client/step-five'}
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

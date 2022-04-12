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

export default function StepEleven() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_three')
	const [isStep] = useState('step_eleven')
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
		await servicesAdvisor.PushQuestion(isRateOne, e.target.value, isSection, isStep).then((response) => {
			//..
		})
	}
	return (
		<>
			<MetaDescription title={'Personal Preferences-3 | PE.com'} name={'description'} content={'Personal Preferences-3 | PE.com...'} />
			<div className='cw-wizard-stseleven-global-container'>
				<Row className='cw-wizard-stseleven-main-container'>
					<Col span={10}>
						<Sidebar />
					</Col>
					<Col span={14}>
						<ScrollAnimation style={{ height: '100%' }} animateIn='animate__slideInRight' delay={300} duration={2} animateOnce={true}>
							<div className='cw-wizard-stseleven-form-global-container'>
								<div className='cw-wizard-stseleven-form-main-title-container'>
									<MainTitle
										indicators={[{ indicator: true }, { indicator: true }, { indicator: true }, { indicator: false }]}
										section={'Section 3 of 5'}
										title={'Personal Preferences'}
										subtitle={'Question 3 of 4'}
									/>
								</div>
								<div className='cw-wizard-stseleven-form-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3000} animateOnce={true}>
										<div className='cw-wizard-stseleven-form-title-container'>
											<h2 className='cw-wizard-stseleven-form-title'>When do pefer to work with someone in the retirement timeline?</h2>
										</div>
										<div className='cw-wizard-stseleven-form-option-container'>
											<Radio.Group onChange={handleChangeRadio} value={isSelected}>
												<Row>
													<Col span={24}>
														<Radio value='1-4'>1-4 Years</Radio>
													</Col>
													<Col span={24}>
														<Radio value='5-9'>5-9 Years</Radio>
													</Col>
													<Col span={24}>
														<Radio value='10-19'>10-19 Years</Radio>
													</Col>
													<Col span={24}>
														<Radio value='20-29'>20-29 Years</Radio>
													</Col>
													<Col span={24}>
														<Radio value='30+'>30+ Years</Radio>
													</Col>
													<Col span={24}>
														<Radio value='Currently'>Currently Retired</Radio>
													</Col>
												</Row>
											</Radio.Group>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-stseleven-value-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3500} animateOnce={true}>
										<div className='cw-wizard-stseleven-value-title-container'>
											<h2 className='cw-wizard-stseleven-value-rate-title'>How important is this question to you?</h2>
										</div>

										<div className='cw-wizard-stseleven-value-option-container'>
											<NormalRate className={''} onChange={handleChangeRate} defaultValue={isRateOne} />
										</div>
									</ScrollAnimation>
								</div>
								<ScrollAnimation animateIn='animate__fadeInUp' delay={4000} animateOnce={true}>
									<div className='cw-wizard-stseleven-form-buttons-container'>
										<Buttons previous={'/client/step-ten'} next={'/client/step-twelve'} />
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

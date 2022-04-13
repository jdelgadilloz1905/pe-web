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

export default function StepTwo() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_one')
	const [isStep] = useState('step_two')
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
			<MetaDescription title={'Communication-2 | PE.com'} name={'description'} content={'Communication-2 | PE.com...'} />
			<div className='cw-wizard-ststwo-global-container'>
				<Row className='cw-wizard-ststwo-main-container'>
					<Col span={10}>
						<Sidebar />
					</Col>
					<Col span={14}>
						<ScrollAnimation style={{ height: '100%' }} animateIn='animate__slideInRight' delay={300} duration={2} animateOnce={true}>
							<div className='cw-wizard-ststwo-form-global-container'>
								<div className='cw-wizard-ststwo-form-main-title-container'>
									<MainTitle
										indicators={[{ indicator: true }, { indicator: true }]}
										section={'Section 1 of 5'}
										title={'Communication with your client'}
										subtitle={'Question 2 of 2'}
									/>
								</div>
								<div className='cw-wizard-ststwo-form-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3000} animateOnce={true}>
										<div className='cw-wizard-ststwo-form-title-container'>
											<h2 className='cw-wizard-ststwo-form-title'>Would you prefer your client live in your area?</h2>
										</div>
										<div className='cw-wizard-ststwo-form-option-container'>
											<Radio.Group onChange={handleChangeRadio} value={isSelected}>
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
								<div className='cw-wizard-ststwo-value-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3500} animateOnce={true}>
										<div className='cw-wizard-ststwo-value-title-container'>
											<h2 className='cw-wizard-ststwo-value-rate-title'>How important is this question to you?</h2>
										</div>

										<div className='cw-wizard-ststwo-value-option-container'>
											<NormalRate className={''} onChange={handleChangeRate} defaultValue={isRateOne} />
										</div>
									</ScrollAnimation>
								</div>
								<ScrollAnimation animateIn='animate__fadeInUp' delay={4000} animateOnce={true}>
									<div className='cw-wizard-ststwo-form-buttons-container'>
										<Buttons previous={'/client/step-one'} next={'/client/step-three'} />
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

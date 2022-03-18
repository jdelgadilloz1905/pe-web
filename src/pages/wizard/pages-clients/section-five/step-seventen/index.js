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

export default function StepSeventeen() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_five')
	const [isStep] = useState('step_seventen')
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
				title={'Organization Preferences-1 | PE.com'}
				name={'description'}
				content={'Organization Preferences-1 | PE.com...'}
			/>
			<div className='cw-wizard-sfsseventeen-global-container'>
				<Row className='cw-wizard-sfsseventeen-main-container'>
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
							<div className='cw-wizard-sfsseventeen-form-global-container'>
								<div className='cw-wizard-sfsseventeen-form-main-title-container'>
									<MainTitle
										indicators={[
											{ indicator: true },
											{ indicator: false },
											{ indicator: false },
										]}
										section={'Section 5 of 5'}
										title={'Organization Preferences'}
										subtitle={'Question 1 of 3'}
									/>
								</div>
								<div className='cw-wizard-sfsseventeen-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-sfsseventeen-form-title-container'>
											<h2 className='cw-wizard-sfsseventeen-form-title'>
												What type of fee structure would you prefer?
											</h2>
										</div>
										<div className='cw-wizard-sfsseventeen-form-option-container'>
											<Radio.Group
												onChange={handleChangeRadio}
												value={isSelected}>
												<Row>
													<Col span={24}>
														<Radio value='Commission'>Commission</Radio>
													</Col>
													<Col span={24}>
														<Radio value='Management'>
															Aset under management fee
														</Radio>
													</Col>
													<Col span={24}>
														<Radio value='Hourly'>Hourly fee</Radio>
													</Col>
													<Col span={24}>
														<Radio value='Annual'>Annual retainer</Radio>
													</Col>
												</Row>
											</Radio.Group>
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-sfsseventeen-form-option-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-sfsseventeen-form-title-container'>
											<h2 className='cw-wizard-sfsseventeen-form-rate'>
												How important is this question to you?
											</h2>
										</div>

										<div className='cw-wizard-sfsseventeen-form-option-container'>
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
									<div className='cw-wizard-sfsseventeen-form-buttons-container'>
										<Buttons
											previous={'/client/step-sixteen'}
											next={'/client/step-eighteen'}
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

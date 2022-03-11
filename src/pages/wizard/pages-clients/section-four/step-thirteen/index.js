/** @format */

import React, { useState, useEffect } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col, Radio } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar'
import Buttons from '../../../components/Buttons'

import servicesAdvisor from '../../services'

import './style.scss'

export default function StepThirteen() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_four')
	const [isStep] = useState('step_thirteen')
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
				title={'Personal Information-1 | PE.com'}
				name={'description'}
				content={'Personal Information-1 | PE.com...'}
			/>
			<div className='cw-wizard-sfsthirteen-global-container'>
				<Row className='cw-wizard-sfsthirteen-main-container'>
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
							<div className='cw-wizard-sfsthirteen-form-global-container'>
								<div className='cw-wizard-sfsthirteen-form-main-title-container'>
									<MainTitle
										indicators={[
											{ indicator: true },
											{ indicator: false },
											{ indicator: false },
											{ indicator: false },
										]}
										section={'Section 4 of 5'}
										title={'Personal Information'}
										subtitle={'Question 1 of 4'}
									/>
								</div>
								<div className='cw-wizard-sfsthirteen-form-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3000}
										animateOnce={true}>
										<div className='cw-wizard-sfsthirteen-form-title-container'>
											<h2 className='cw-wizard-sfsthirteen-form-title'>
												Do you own your own home?
											</h2>
										</div>
										<div className='cw-wizard-sfsthirteen-form-option-container'>
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
								<div className='cw-wizard-sfsthirteen-form-option-container'>
									<ScrollAnimation
										animateIn='animate__fadeInUp'
										delay={3500}
										animateOnce={true}>
										<div className='cw-wizard-sfsthirteen-form-title-container'>
											<h2 className='cw-wizard-sfsthirteen-form-rate'>
												How important is this question to you?
											</h2>
										</div>

										<div className='cw-wizard-sfsthirteen-form-option-container'>
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
									delay={3000}
									animateOnce={true}>
									<div className='cw-wizard-sfsthirteen-form-buttons-container'>
										<Buttons
											previous={'/wizard/step-twelve'}
											next={'/wizard/step-fourteen'}
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

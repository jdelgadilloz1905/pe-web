/** @format */

import React, { useState, useEffect } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col, Checkbox, Radio } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar'
import Buttons from '../../../components/Buttons'

import servicesAdvisor from '../../services'

import './style.scss'

export default function StepTen() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_three')
	const [isStep] = useState('step_ten')
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

	const handleChangeCheckbox = async (values) => {
		setSelected(values.target.value)
		await servicesAdvisor
			.PushQuestion(isRateOne, values.target.value, isSection, isStep)
			.then((response) => {
				//..
			})
	}
	return (
		<>
			<MetaDescription
				title={'Personal Preferences-2 | PE.com'}
				name={'description'}
				content={'Personal Preferences-2 | PE.com...'}
			/>
			<div className='cw-wizard-ststen-advisor-global-container'>
				<Row className='cw-wizard-ststen-main-container'>
					<Col span={10}>
						<Sidebar />
					</Col>
					<Col span={14}>
						<div className='cw-wizard-ststen-form-global-container'>
							<div className='cw-wizard-ststen-form-main-title-container'>
								<MainTitle
									indicators={[
										{ indicator: true },
										{ indicator: true },
										{ indicator: false },
										{ indicator: false },
									]}
									section={'Section 3 of 5'}
									title={'Personal Preferences'}
									subtitle={'Question 2 of 4'}
								/>
							</div>
							<div className='cw-wizard-ststen-form-container'>
								<div className='cw-wizard-ststen-form-title-container'>
									<h2 className='cw-wizard-ststen-form-title'>
										What is your level of investment knowledge?
									</h2>
								</div>
								<div className='cw-wizard-ststen-form-option-container'>
									<Radio.Group
										onChange={handleChangeCheckbox}
										defaultValue={isSelected}
										value={isSelected}>
										<Row>
											<Col span={24}>
												<Radio value='Low'>I am new to investing</Radio>
											</Col>
											<Col span={24}>
												<Radio value='Moderate'>
													Somewhat knowledgeable: I prefer an advisor who will guide
													and educate my decisions.
												</Radio>
											</Col>
											<Col span={24}>
												<Radio value='High'>
													Seasoned investor: I stay up to date and educated with the
													market and feel confident in my investment decisions.
												</Radio>
											</Col>
										</Row>
									</Radio.Group>
								</div>
							</div>
							<div className='cw-wizard-ststen-value-container'>
								<div className='cw-wizard-ststen-value-title-container'>
									<h2 className='cw-wizard-ststen-value-rate-title'>
										How important is this question to you?
									</h2>
								</div>

								<div className='cw-wizard-ststen-value-option-container'>
									<NormalRate
										className={''}
										onChange={handleChangeRate}
										defaultValue={isRateOne}
									/>
								</div>
							</div>

							<div className='cw-wizard-ststen-form-buttons-container'>
								<Buttons previous={'/wizard/step-nine'} next={'/wizard/step-eleven'} />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

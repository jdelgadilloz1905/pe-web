/** @format */

import React, { useState, useEffect } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import { Row, Col, Checkbox } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar2'
import Buttons from '../../../components/Buttons'

import servicesAdvisor from '../../services'

import './style.scss'

export default function StepFive() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_two')
	const [isStep] = useState('step_five')
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
		setSelected(values)
		await servicesAdvisor.PushQuestion(isRateOne, values, isSection, isStep).then((response) => {
			//..
		})
	}
	return (
		<>
			<MetaDescription
				title={'Specialty-3 | PE.com'}
				name={'description'}
				content={'Specialty-3 | PE.com...'}
			/>
			<div className='cw-wizard-stsfive-global-container'>
				<Row className='cw-wizard-stsfive-main-container'>
					<Col span={10}>
						<Sidebar />
					</Col>
					<Col span={14}>
						<div className='cw-wizard-stsfive-form-global-container'>
							<div className='cw-wizard-stsfive-form-main-title-container'>
								<MainTitle
									indicators={[
										{ indicator: true },
										{ indicator: true },
										{ indicator: true },
										{ indicator: false },
										{ indicator: false },
										{ indicator: false },
									]}
									section={'Section 2 of 5'}
									title={'Advisor speciality or skill'}
									subtitle={'Question 3 of 6'}
								/>
							</div>
							<div className='cw-wizard-stsfive-form-container'>
								<div className='cw-wizard-stsfive-form-title-container'>
									<h2 className='cw-wizard-stsfive-form-title'>
										What services do you offer?
									</h2>
								</div>
								<div className='cw-wizard-stsfive-form-option-container'>
									<Checkbox.Group
										onChange={handleChangeCheckbox}
										defaultValue={isSelected}
										value={isSelected}>
										<Row>
											<Col span={12}>
												<Checkbox value='Estate planning'>Estate planning</Checkbox>
											</Col>
											<Col span={12}>
												<Checkbox value='Retirement planning'>
													Retirement planning
												</Checkbox>
											</Col>
											<Col span={12}>
												<Checkbox value='Education savings'>Education savings</Checkbox>
											</Col>
											<Col span={12}>
												<Checkbox value='Tax plannings'>Tax plannings</Checkbox>
											</Col>
											<Col span={12}>
												<Checkbox value='Portfolio management'>
													Portfolio management
												</Checkbox>
											</Col>
											<Col span={12}>
												<Checkbox value='Insurance products'>
													Insurance products
												</Checkbox>
											</Col>
											<Col span={12}>
												<Checkbox value='Trust and Will services'>
													Trust and Will services
												</Checkbox>
											</Col>
											<Col span={12}>
												<Checkbox value='Real estate'>Real estate</Checkbox>
											</Col>
										</Row>
									</Checkbox.Group>
								</div>
							</div>
							<div className='cw-wizard-stsfive-value-container'>
								<div className='cw-wizard-stsfive-value-title-container'>
									<h2 className='cw-wizard-stsfive-value-rate-title'>
										How important is this question to you?
									</h2>
								</div>
								<div className='cw-wizard-stsfive-value-option-container'>
									<NormalRate
										className={''}
										onChange={handleChangeRate}
										defaultValue={isRateOne}
									/>
								</div>
							</div>
							<div className='cw-wizard-stsfive-form-buttons-container'>
								<Buttons previous={'/client/step-four'} next={'/client/step-six'} />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

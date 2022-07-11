/** @format */

import React, { useState, useEffect } from 'react'

import { Row, Col, Radio } from 'antd'

import MetaDescription from '../../../../../components/MetaDescription'
import NormalRate from '../../../../../components/Rate'

import MainTitle from '../../../components/MainTitle'
import Sidebar from '../../../components/Sidebar'
import Buttons from '../../../components/Buttons'

import servicesAdvisor from '../../services'

import './style.scss'

export default function StepEighteen() {
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_five')
	const [isStep] = useState('step_eighteen')
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
		await servicesAdvisor
			.PushQuestion(isRateOne, e.target.value, isSection, isStep)
			.then((response) => {
				//..
			})
	}
	return (
		<>
			<MetaDescription
				title={'Organization Preferences-2 | PE.com'}
				name={'description'}
				content={'Organization Preferences-2 | PE.com...'}
			/>
			<div className='cw-wizard-sfseighteen-advisor-global-container'>
				<Row className='cw-wizard-sfseighteen-main-container'>
					<Col span={10}>
						<Sidebar />
					</Col>
					<Col span={14}>
						<div className='cw-wizard-sfseighteen-form-global-container'>
							<div className='cw-wizard-sfseighteen-form-main-title-container'>
								<MainTitle
									indicators={[
										{ indicator: true },
										{ indicator: true },
										{ indicator: false },
									]}
									section={'Section 5 of 5'}
									title={'Organization Preferences'}
									subtitle={'Question 2 of 3'}
								/>
							</div>
							<div className='cw-wizard-sfseighteen-form-container'>
								<div className='cw-wizard-sfseighteen-form-title-container'>
									<h2 className='cw-wizard-sfseighteen-form-title'>
										What type of firm would you prefer?
									</h2>
								</div>
								<div className='cw-wizard-sfseighteen-form-option-container'>
									<Radio.Group
										onChange={handleChangeRadio}
										defaultValue={isSelected}
										value={isSelected}>
										<Row>
											<Col span={24}>
												<Radio value='None'>No preference.</Radio>
											</Col>
											<Col span={24}>
												<Radio value='Personal'>Small firm with a personal feel.</Radio>
											</Col>
											<Col span={24}>
												<Radio value='Recognizable'>
													Mid size firm with a recognizable name.
												</Radio>
											</Col>
											<Col span={24}>
												<Radio value='Wide'>
													Large firm with a wide range of services.
												</Radio>
											</Col>
										</Row>
									</Radio.Group>
								</div>
								<div className='cw-wizard-sfseighteen-value-container'>
									<div className='cw-wizard-sfseighteen-value-title-container'>
										<h2 className='cw-wizard-sfseighteen-value-rate-title'>
											How important is this question to you?
										</h2>
									</div>

									<div className='cw-wizard-sfseighteen-value-option-container'>
										<NormalRate
											className={''}
											onChange={handleChangeRate}
											defaultValue={isRateOne}
										/>
									</div>
								</div>
							</div>

							<div className='cw-wizard-sfseighteen-form-buttons-container'>
								<Buttons
									previous={'/wizard/step-seventeen'}
									next={'/wizard/step-nineteen'}
								/>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

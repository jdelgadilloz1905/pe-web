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

export default function StepOne() {
	const plainOptions = ['Phone', 'Their Office', 'Email', 'Chat', 'Video', 'My Office']
	const CheckboxGroup = Checkbox.Group
	const [isRateOne, setRateOne] = useState(0)
	const [isSection] = useState('section_one')
	const [isStep] = useState('step_one')
	const [isSelected, setSelected] = useState(null)

	const [indeterminate, setIndeterminate] = useState(true)
	const [checkAll, setCheckAll] = useState(false)
	const [checkedList, setCheckedList] = useState([])

	useEffect(() => {
		servicesAdvisor.GetQuestion(isStep).then((response) => {
			if (response) {
				setSelected(response.answers)
				setRateOne(response.rate)
				setCheckedList(response.answers)
				if (response.answers.length == plainOptions.length) {
					setCheckAll(true)
				}
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
		setCheckedList(values)
		console.log('values...', values)
		setSelected(values)
		setIndeterminate(!!values.length && values.length < plainOptions.length)
		setCheckAll(values.length === plainOptions.length)
		await servicesAdvisor.PushQuestion(isRateOne, values, isSection, isStep).then((response) => {
			//..
		})
	}

	const handleAllOptions = (item) => {
		setCheckedList(item.target.checked ? plainOptions : [])
		setIndeterminate(false)
		setCheckAll(item.target.checked)
		console.log('plain options...', plainOptions)
		servicesAdvisor.PushQuestion(isRateOne, item.target.checked ? plainOptions : [], isSection, isStep)
	}

	return (
		<>
			<MetaDescription title={'Communication-1 | PE.com'} name={'description'} content={'Communication-1 | PE.com...'} />
			<div className='cw-wizard-stsone-global-container'>
				<Row className='cw-wizard-stsone-main-container'>
					<Col span={10}>
						<Sidebar animation={true} />
					</Col>
					<Col span={14}>
						<ScrollAnimation style={{ height: '100%' }} animateIn='animate__slideInRight' delay={300} duration={2} animateOnce={true}>
							<div className='cw-wizard-stsone-form-global-container'>
								<div className='cw-wizard-stsone-form-main-title-container'>
									<MainTitle indicators={[{ indicator: true }, { indicator: false }]} section={'Section 1 of 5'} title={'Communication with your client'} subtitle={'Question 1 of 2'} />
								</div>
								<div className='cw-wizard-stsone-form-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3000} animateOnce={true}>
										<div className='cw-wizard-stsone-form-title-container'>
											<h2 className='cw-wizard-stsone-form-title'>What is your preferred method of communicating with your clients?</h2>
										</div>

										<div className='cw-wizard-stsone-form-option-container'>
											<CheckboxGroup options={plainOptions} value={checkedList} onChange={handleChangeCheckbox} />
											<Col span={12} className='cw-wizard-stone-form-all-checkbox'>
												<Checkbox indeterminate={indeterminate} onChange={(data) => handleAllOptions(data)} checked={checkAll}>
													All of the previous options
												</Checkbox>
											</Col>
											{/* 	<Checkbox.Group onChange={handleChangeCheckbox} defaultValue={isSelected} value={isSelected}>
												<Row>
													<Col span={12}>
														<Checkbox value='Phone'>Phone</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Their Office'>Their Office</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Email'>Email</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Chat'>Chat</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Video'>Video Conference</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='Any or all'>Any or all of the above</Checkbox>
													</Col>
													<Col span={12}>
														<Checkbox value='My Office'>My Office</Checkbox>
													</Col>
												</Row>
											</Checkbox.Group> */}
										</div>
									</ScrollAnimation>
								</div>
								<div className='cw-wizard-stsone-value-container'>
									<ScrollAnimation animateIn='animate__fadeInUp' delay={3500} animateOnce={true}>
										<div className='cw-wizard-stsone-value-title-container'>
											<h2 className='cw-wizard-stsone-value-rate-title'>How important is this question to you?</h2>
										</div>

										<div className='cw-wizard-stsone-value-option-container'>
											<NormalRate className={''} onChange={handleChangeRate} defaultValue={isRateOne} />
										</div>
									</ScrollAnimation>
								</div>
								<ScrollAnimation animateIn='animate__fadeInUp' delay={4000} animateOnce={true}>
									<div className='cw-wizard-stsone-form-buttons-container'>
										<Buttons previous={'/'} next={'/client/step-two'} />
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

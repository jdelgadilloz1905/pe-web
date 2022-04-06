/** @format */

import React, { useState, useEffect } from 'react'

import { Row, Col, Form, Button, Select } from 'antd'

import { useGlobal, setGlobal } from 'reactn'

import Input from '../../components/Inputs/Normal'
import Image from '../../components/Image'
import MetaDescription from '../../components/MetaDescription'
import { info } from './data.js'
import logoWhite from '../../assets/images/logos/wix-logo-white.png'

import servicesUsers from './services'

import { rulesValidation } from '../../components/Inputs/Normal/rules'

import './style.scss'

export default function Register() {
	const [formMainForm] = Form.useForm()
	const [formCodeverify] = Form.useForm()
	const [isLoading, setLoading] = useState(false)
	const [isForm] = useGlobal('UserForm')
	const [isFormCode] = useGlobal('UserCode')
	const { Option } = Select

	useEffect(() => {
		setGlobal({
			UserForm: true,
			UserCode: false,
		})
	}, [])

	const handleLoginUser = async (item) => {
		console.log(item)
		setLoading(true)
		await servicesUsers.Register(item, 0).then((response) => {
			setLoading(false)

			if (response) {
				setGlobal({
					UserForm: false,
					UserCode: true,
				})
			}
		})
	}

	const handleValidateCode = async (item) => {
		setLoading(true)
		await servicesUsers.CodeVerify(item.code_verify).then((response) => {
			setLoading(false)
			if (response) {
				setTimeout(() => {
					window.location.href = '/client-profile-setup'
				}, 1000)
			}
		})
	}
	return (
		<>
			<MetaDescription title={'Register | PE.com'} name={'description'} content={'Register | PE.com...'} />
			<div className='cw-register-global-container'>
				<Row className='cw-register-main-container'>
					<Col span={9}></Col>
					<Col span={15} className='cw-register-col-container'>
						<div className='cw-register-form-global-container'>
							<div className='cw-register-logo-container'>
								<Image classImg={'cw-register-logo-img'} image={logoWhite} alt={'Main Logo'} title={'Main Logo'} />
							</div>
							{isForm && (
								<>
									<h3 className='cw-register-main-title'>Let's begin our journey</h3>

									<div className='cw-register-form-main-container'>
										<h2 className='cw-register-form-title'>Register</h2>
										<Form
											name='cw-register-main-form'
											form={formMainForm}
											initialValues={{
												first_name: '',
												last_name: '',
												email: '',
												phone: '',
												zid_code: '',
												company: '',
											}}
											onFinish={handleLoginUser}>
											<Form.Item>
												<Input
													className={'cw-register-input'}
													inputName={'first_name'}
													inputNameLabel={'First Name'}
													inputNameRule={true}
													inputNameMessage={'Enter your name'}
													inputNameType={'text'}
													inputNameIcon={''}
													inputNameRules={'rulesFirstNameEN'}
												/>
											</Form.Item>
											<Form.Item>
												<Input
													className={'cw-register-input'}
													inputName={'last_name'}
													inputNameLabel={'Last Name'}
													inputNameRule={true}
													inputNameMessage={'Enter your last name'}
													inputNameType={'text'}
													inputNameIcon={''}
													inputNameRules={'rulesLastNameEN'}
												/>
											</Form.Item>
											<Form.Item>
												<Input
													className={'cw-register-input'}
													inputName={'email'}
													inputNameLabel={'Email'}
													inputNameRule={true}
													inputNameMessage={'Enter your e-mail'}
													inputNameType={'text'}
													inputNameIcon={''}
													inputNameRules={'rulesEmailEN'}
												/>
											</Form.Item>
											<Form.Item>
												<Input
													className={'cw-register-input'}
													inputName={'zid_code'}
													inputNameLabel={'Zid Code'}
													inputNameRule={true}
													inputNameMessage={'Enter your zid code'}
													inputNameType={'text'}
													inputNameIcon={''}
													inputNameRules={'rulesZidEN'}
												/>
											</Form.Item>
											<Form.Item>
												<Input
													className={'cw-register-input'}
													inputName={'phone'}
													inputNameLabel={'Phone'}
													inputNameRule={true}
													inputNameMessage={'Enter your phone'}
													inputNameType={'text'}
													inputNameIcon={''}
													inputNameRules={'rulesPhoneEN'}
												/>
											</Form.Item>
											<Form.Item>
												<Input
													className={'cw-register-input'}
													inputName={'company'}
													inputNameLabel={'Company'}
													inputNameRule={true}
													inputNameMessage={'Enter your company'}
													inputNameType={'text'}
													inputNameIcon={''}
													inputNameRules={'rulesCompanyEN'}
												/>
											</Form.Item>
											<Form.Item className='cw-register-input-select-container' name='country' rules={rulesValidation.rulesRequiredEN}>
												<Select
													className='cw-register-input-select'
													placeholder='Select state'
													size='large'
													style={{ width: '100%', border: 'none', color: '#fff' }}
													allowClear={true}>
													{info.map((item, index) => (
														<Option value={item.name} key={index}>
															{item.name}
														</Option>
													))}
												</Select>
											</Form.Item>

											<Form.Item>
												<div className='cw-register-two-main-button-container'>
													<Button loading={isLoading} htmlType='submit' className='cw-register-two-main-button'>
														Submit
													</Button>
												</div>
											</Form.Item>

											<h3 className='cw-register-two-main-subtitle'>
												Once submitted, you're registration code and the link to create your sign-in will be emailed to the address you provided.
											</h3>
										</Form>
									</div>
								</>
							)}
							{isFormCode && (
								<>
									<h3 className='cw-register-main-title'>Complete Registration</h3>
									<h3 className='cw-register-main-subtitle'>Registration Code</h3>

									<div className='cw-register-form-main-container'>
										<Form
											name='cw-register-main-form'
											form={formCodeverify}
											initialValues={{
												code_verify: '',
											}}
											onFinish={handleValidateCode}>
											<Form.Item>
												<Input
													className={'cw-register-input'}
													inputName={'code_verify'}
													inputNameLabel={'Enter your registration code here'}
													inputNameRule={true}
													inputNameMessage={'invalid code'}
													inputNameType={'text'}
													inputNameIcon={''}
													inputNameRules={'rulesCodeVerifyEN'}
												/>
											</Form.Item>
											<Form.Item>
												<div className='cw-register-two-main-button-container'>
													<Button loading={isLoading} htmlType='submit' className='cw-register-two-main-button'>
														Submit
													</Button>
												</div>
											</Form.Item>
										</Form>
									</div>
								</>
							)}
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

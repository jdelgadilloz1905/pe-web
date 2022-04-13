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
import './style.scss'

export default function Register() {
	const [formMainForm] = Form.useForm()
	const [formCodeverify] = Form.useForm()
	const [isLoading, setLoading] = useState(false)
	const [isForm] = useGlobal('UserForm')
	const [isFormComplete] = useGlobal('UserComplete')
	const [isFormCode] = useGlobal('UserCode')
	const { Option } = Select

	useEffect(() => {
		setGlobal({
			UserForm: true,
			UserComplete: false,
			UserCode: false,
		})
	}, [])

	const handleLoginUser = async (item) => {
		setLoading(true)
		await servicesUsers.Register(item, 1).then((response) => {
			setLoading(false)

			if (response) {
				setGlobal({
					UserForm: false,
					UserComplete: true,
					UserCode: false,
				})
			}
		})
	}

	const handleInserCodigo = () => {
		setGlobal({
			UserForm: false,
			UserComplete: false,
			UserCode: true,
		})
	}

	const handleValidateCode = async (item) => {
		setLoading(true)
		await servicesUsers.CodeVerify(item.code_verify).then((response) => {
			setLoading(false)

			if (response) {
				//lo envio a lcuestionario
				setTimeout(() => {
					window.location.href = '/user-profile-detail'
				}, 1000)
			}
		})
	}

	return (
		<>
			<MetaDescription title={'Register | PE.com'} name={'description'} content={'Register | PE.com...'} />
			<div className='cw-register-two-global-container'>
				<Row className='cw-register-two-main-container'>
					<Col span={9}></Col>
					<Col span={15} className='cw-register-two-col-container'>
						<div className='cw-register-two-form-global-container'>
							<div className='cw-register-two-logo-container'>
								<Image classImg={'cw-register-two-logo-img'} image={logoWhite} alt={'Main Logo'} title={'Main Logo'} />
							</div>

							{isForm && (
								<>
									<h3 className='cw-register-two-main-title'>By professionals, for professionals.</h3>
									<h3 className='cw-register-two-main-subtitle'>
										People are looking for advisors that match their preferences and you are looking for clients that fit your expertise. We can help you connect with
										them so let's get started!
									</h3>

									<div className='cw-register-two-form-main-container'>
										<Form
											name='cw-register-two-main-form'
											form={formMainForm}
											initialValues={{
												first_name: '',
												last_name: '',
												email: '',
												phone: '',
												zid_code: '',
												company: '',
												country: '',
											}}
											onFinish={handleLoginUser}>
											<Form.Item>
												<Input
													className={'cw-register-two-input'}
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
													className={'cw-register-two-input'}
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
													className={'cw-register-two-input'}
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
													className={'cw-register-two-input'}
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
													className={'cw-register-two-input'}
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
											<Form.Item name='country'>
												<div className='cw-register-input'>
													<Select
														className='cw-register-two-select-container'
														placeholder='Select state'
														size='large'
														style={{ width: '100%', border: 'none' }}
														allowClear={false}
														showSearch
														optionFilterProp='children'
														filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
														filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}>
														{info.map((item, index) => (
															<Option value={item.name} key={index}>
																{item.name}
															</Option>
														))}
													</Select>
												</div>
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
							{isFormComplete && (
								<>
									<h3 className='cw-register-two-main-title'>Thank you.</h3>
									<h3 className='cw-register-two-main-subtitle'>
										Once approved, your registration code and the link to create your sign-in will be sent to the email you provided.
									</h3>

									<h4 className='cw-register-two-main-underlined'>Please send me the code again</h4>

									<div className='cw-register-two-form-main-container'>
										<div className='cw-register-two-main-button-container'>
											<Button onClick={() => handleInserCodigo()} htmlType='submit' className='cw-register-two-main-button'>
												Complete registration
											</Button>
										</div>
									</div>
								</>
							)}
							{isFormCode && (
								<>
									<h3 className='cw-register-two-main-title'>Complete Registration</h3>
									<h3 className='cw-register-two-main-subtitle'>Registration Code</h3>

									<div className='cw-register-two-form-main-container'>
										<Form
											name='cw-register-two-main-form'
											form={formCodeverify}
											initialValues={{
												code_verify: '',
											}}
											onFinish={handleValidateCode}>
											<Form.Item>
												<Input
													className={'cw-register-two-input'}
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

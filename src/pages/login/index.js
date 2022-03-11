/** @format */

import React, { useState } from 'react'

import { Form, Button } from 'antd'

import Input from '../../components/Inputs/Normal'
import Image from '../../components/Image'
import MetaDescription from '../../components/MetaDescription'

import logoWhite from '../../assets/images/logos/wix-logo-white.png'

import servicesLogin from './services'
import './style.scss'

export default function Login() {
	const [form] = Form.useForm()
	const [isLoading, setLoading] = useState(false)

	const handleSendForm = async (item) => {
		setLoading(true)
		await servicesLogin.Login(item).then((response) => {
			setLoading(false)
			if (response) {
				console.log('resultado ', response)
			}
		})
		console.log('ITEM', item)
	}

	return (
		<>
			<MetaDescription
				title={'Login | PE.com'}
				name={'description'}
				content={'Login | PE.com...'}
			/>
			<div className='cv-login-global-background'>
				<div className='cv-login-section-1-main-container'>
					<div className='cv-login-section-1-inner-container'>
						<div className='cv-login-section-1-container'>
							<Image
								classImg={'cv-login-section-1-img'}
								image={logoWhite}
								alt={'Main Logo'}
								title={'Main Logo'}
							/>
							<h4 className='cv-login-section-1-main-title'>
								Please login in into our services:
							</h4>
							<Form
								name='cw_form'
								onFinish={handleSendForm}
								form={form}
								initialValues={{
									email: '',
									password: '',
								}}>
								<Form.Item>
									<Input
										className={'cv-login-input'}
										inputName={'email'}
										inputNameLabel={'Enter your email'}
										inputNameRule={true}
										inputNameMessage={'invalid email'}
										inputNameType={'text'}
										inputNameIcon={''}
										inputNameRules={'rulesEmailEN'}
									/>
								</Form.Item>
								<Form.Item>
									<Input
										className={'cv-login-input'}
										inputName={'password'}
										inputNameLabel={'Enter your password'}
										inputNameRule={true}
										inputNameMessage={'invalid email'}
										inputNameType={'password'}
										inputNameIcon={''}
										inputNameRules={'rulesPasswordEN'}
									/>
								</Form.Item>

								<Form.Item>
									<Button
										loading={isLoading}
										htmlType='submit'
										className='cv-login-main-button'>
										Submit
									</Button>
								</Form.Item>
							</Form>
							<h4 className='cv-login-lost-password-title'>
								If you have forgotten your email or password{' '}
								<span className='cv-login-lost-password-subtitle'>
									click here
								</span>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

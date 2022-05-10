/** @format */

import React, { useState } from 'react'

import { Form, Input, Button } from 'antd'

import Image from '../../components/Image'
import MetaDescription from '../../components/MetaDescription'

import logoWhite from '../../assets/images/logos/wix-logo-white.png'

import { rulesValidation } from './validators'

import servicesRestorePass from './services'

import './style.scss'

export default function RegisterCode() {
	const [form] = Form.useForm()
	const [isLoading, setLoading] = useState(false)

	const handleSendForm = async (item) => {
		setLoading(true)
		await servicesRestorePass.Recover(item).then((response) => {
			setLoading(false)
			if (response?.data.status === 200) {
				setTimeout(() => {
					window.location.href = '/'
				}, 2000)
			}
		})
	}

	return (
		<>
			<MetaDescription title={'Complete Registration | PE.com'} name={'description'} content={'Complete Registration | PE.com...'} />
			<div className='cw-register-code-global-background'>
				<div className='cw-register-code-main-container'>
					<div className='cw-register-code-inner-container'>
						<div className='cw-register-code-container'>
							<Image classImg={'cw-register-code-img'} image={logoWhite} alt={'Main Logo'} title={'Main Logo'} />
							<h4 className='cw-register-code-main-title'>Forgot your password?</h4>

							<h4 className='cw-register-code-main-subtitle'>Enter your email here:</h4>
							<Form name='cw_form' onFinish={handleSendForm} form={form}>
								<Form.Item name='email' rules={rulesValidation.rulesGeneralRequired}>
									<Input className='cw-register-code-input' size='large' type='text' placeholder={'Enter yor email'} />
								</Form.Item>
								<Form.Item>
									<Button loading={isLoading} htmlType='submit' className='cw-register-code-main-button'>
										Restore
									</Button>
								</Form.Item>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

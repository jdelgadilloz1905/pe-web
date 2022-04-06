/** @format */

import React, { useState } from 'react'

import { Form, Input, Button } from 'antd'

import Image from '../../components/Image'
import MetaDescription from '../../components/MetaDescription'

import logoWhite from '../../assets/images/logos/wix-logo-white.png'

import { rulesValidation } from './validators'

import './style.scss'

export default function RegisterCode() {
	const [form] = Form.useForm()
	const [isLoading, setLoading] = useState(false)

	const handleSendForm = async (item) => {
		setLoading(false)
		console.log('ITEM', item)
	}

	return (
		<>
			<MetaDescription
				title={'Complete Registration | PE.com'}
				name={'description'}
				content={'Complete Registration | PE.com...'}
			/>
			<div className='cw-register-code-global-background'>
				<div className='cw-register-code-main-container'>
					<div className='cw-register-code-inner-container'>
						<div className='cw-register-code-container'>
							<Image
								classImg={'cw-register-code-img'}
								image={logoWhite}
								alt={'Main Logo'}
								title={'Main Logo'}
							/>
							<h4 className='cw-register-code-main-title'>
								Complete Registration
							</h4>

							<h4 className='cw-register-code-main-subtitle'>
								Registration Code
							</h4>
							<Form name='cw_form' onFinish={handleSendForm} form={form}>
								<Form.Item
									name='first_name'
									rules={rulesValidation.rulesGeneralRequired}>
									<Input
										className='cw-register-code-input'
										size='large'
										type='text'
										placeholder={'Enter your registration code here'}
									/>
								</Form.Item>
								<Form.Item>
									<Button
										loading={isLoading}
										htmlType='submit'
										className='cw-register-code-main-button'>
										Submit
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

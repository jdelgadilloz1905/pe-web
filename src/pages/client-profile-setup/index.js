/** @format */

import React, { useState, useEffect } from 'react'

import { Row, Col, Button } from 'antd'

import {
	CameraOutlined,
	StarFilled,
	ThunderboltFilled,
	RiseOutlined,
	BellFilled,
	MailOutlined,
	BankFilled,
} from '@ant-design/icons'

import MetaDescription from '../../components/MetaDescription'

import servicesProfile from './service'

import './style.scss'

export default function ProfileSetup() {
	const [isDatosUser, setDatosUser] = useState(null)
	useEffect(() => {
		servicesProfile.GetDatosUser().then((response) => {
			if (response) {
				setDatosUser(response)
			}
		})
	}, [isDatosUser])

	const handleProfileClient = () => {
		window.location.href = '/client-dashboard'
	}

	const handleCloseSesion = async () => {
		await servicesProfile.CloseSession().then((response) => {
			window.location.href = '/'
		})
	}
	return (
		<>
			<MetaDescription
				title={'Profile SetUp | Wix.com'}
				name={'description'}
				content={'Profile SetUp | Wix.com...'}
			/>
			<div className='cw-profile-setup-global-background'>
				<div className='cw-profile-setup-main-container'>
					<div className='cw-profile-setup-container'>
						<Row className='cw-profile-setup-inner-container'>
							<Col span={8} className='cw-profile-col-container'>
								<div className='cw-profile-pic-container'>
									<div className='cw-profile-inner-container'>
										<CameraOutlined className='cw-profile-pic-icon' />
										<h6 className='cw-profile-pic-title'>Add Photo</h6>
									</div>
								</div>
								<div className='cw-profile-name-container'>
									<h6 className='cw-profile-name-title'>
										Hi {isDatosUser.name}{' '}
									</h6>
									<h6 className='cw-profile-name-subtitle'>
										Please complete your profile.
									</h6>
									<Button
										htmlType='submit'
										className='cw-profile-setup-first-button'
										onClick={() => handleProfileClient()}>
										Your Dashboard
									</Button>
								</div>
							</Col>
							<Col span={16}>
								<Row>
									<Col span={8} className='cw-profile-setup-col-container'>
										<StarFilled className='cw-profile-setup-icon' />
										<h4 className='cw-profile-setup-title'>
											Review or change your survey answers and ratings.
										</h4>
									</Col>
									<Col span={8} className='cw-profile-setup-col-container'>
										<RiseOutlined className='cw-profile-setup-icon' />
										<h4 className='cw-profile-setup-title'>
											Setup or change your financial health preferences.
										</h4>
									</Col>
									<Col span={8} className='cw-profile-setup-col-container'>
										<ThunderboltFilled className='cw-profile-setup-icon' />
										<h4 className='cw-profile-setup-title'>
											Setup or change your action items preferences.
										</h4>
									</Col>
									<Col span={8} className='cw-profile-setup-col-container'>
										<div className='cw-profile-setup-bell-icon-container'>
											<div className='cw-profile-setup-bell-text-container'>
												<h5 className='cw-profile-setup-bell-text'>0</h5>
											</div>
											<BellFilled className='cw-profile-setup-icon' />
										</div>
										<h4 className='cw-profile-setup-title'>
											Setup or change your alert preferences.
										</h4>
									</Col>
									<Col span={8} className='cw-profile-setup-col-container'>
										<MailOutlined className='cw-profile-setup-icon' />
										<h4 className='cw-profile-setup-title'>
											Setup or change your communication preferences.
										</h4>
									</Col>
									<Col span={8} className='cw-profile-setup-col-container'>
										<BankFilled className='cw-profile-setup-icon' />
										<h4 className='cw-profile-setup-title'>
											Setup or change your communication preferences.
										</h4>
									</Col>
									<Col span={24} className='cw-profile-setup-button-container'>
										<Button
											htmlType='submit'
											className='cw-profile-setup-second-button'
											onClick={() => handleCloseSesion()}>
											Finish
										</Button>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</>
	)
}

/** @format */

import React, { useState, useEffect } from 'react'

import moment from 'moment'

import { Row, Col, Button, notification, Modal, Form } from 'antd'

import { StarFilled, ThunderboltFilled, RiseOutlined, BellFilled, MailOutlined, BankFilled, EditOutlined, LockOutlined } from '@ant-design/icons'

import Loading from '../../components/Loading'

import MetaDescription from '../../components/MetaDescription'

import InputNormal from '../../components/Inputs/Normal'

import Image from '../../components/Image'

import servicesProfile from './services'

import './style.scss'

export default function ProfileSetup() {
	const [passwordForm] = Form.useForm()
	const [isDatosUser, setDatosUser] = useState(JSON.parse(localStorage.getItem('userSession')))
	const [isVisible, setVisible] = useState(false)
	const [isLoading, setLoading] = useState(false)

	const handleVisibleModal = () => {
		notification.close(1)
		setVisible(true)
	}

	const handleUpdatePassword = async (item) => {
		const data = {
			id: isDatosUser.id,
			newPassword: item.password,
		}
		setLoading(true)
		await servicesProfile.UpdatePassword(data).then((response) => {
			if (response) {
				setDatosUser(response)
				setVisible(false)
			}
		})
		setLoading(false)
	}

	const handleCalculateDate = () => {
		const date1 = moment(new Date())
		const date2 = moment(isDatosUser.password_expiry_date)
		const days = date1.diff(date2, 'days')
		return days
	}

	useEffect(() => {
		handleCalculateDate()
		if (handleCalculateDate() === 0) {
			notification['info']({
				description: (
					<section>
						<div>
							<div>
								<h1 className='cw-notification-service-title'>Advice:</h1>
								<p className='cw-notification-service-subtitle'>Do you seen what you don't have change your password, for security purposes, we recomend update it.</p>
								<p className='cw-notification-service-description'>Do you want to make new one?</p>
								<Button onClick={() => handleVisibleModal()} className='cw-notification-service-button'>
									Update Password
								</Button>
							</div>
						</div>
					</section>
				),
				key: 1,
				duration: 10,
			})
		}
	}, [])

	const handleProfileClient = () => {
		window.location.href = '/user-dashboard'
	}

	/* 	const handleCloseSesion = async () => {
		await servicesProfile.CloseSession().then((response) => {
			window.location.href = '/'
		})
	} */

	const handlePhotoUser = () => {
		if (isDatosUser && isDatosUser.photo && isDatosUser.photo !== '') return isDatosUser.photo
		else return 'https://dummyimage.com/120x120/fdfdfd.png&text=Please+Upload+Image'
	}

	if (!isDatosUser) {
		return <Loading />
	} else {
		return (
			<>
				<MetaDescription title={'Profile SetUp | Wix.com'} name={'description'} content={'Profile SetUp | Wix.com...'} />
				<div className='cw-profile-setup-global-background'>
					<div className='cw-profile-setup-main-container'>
						<div className='cw-profile-setup-container'>
							<Row className='cw-profile-setup-inner-container'>
								<Col span={8} className='cw-profile-col-container'>
									<div className='cw-profile-pic-container'>
										<Image classImg={'cw-client-info-image'} image={`${handlePhotoUser()}`} alt={'profile image'} title={'profile image'} />
									</div>
									<div className='cw-profile-name-container'>
										<h6 className='cw-profile-name-title'>Hi {isDatosUser.name} </h6>
										<div className='cw-client-info-user-subtitle-container'>
											<EditOutlined className='cw-client-info-user-profile-icon' />
											<h4 className='cw-client-info-user-subtitle'>Edit</h4>
										</div>
										<div className='pe-update-password-icons-container' onClick={() => handleVisibleModal()}>
											<h3 className='pe-update-password-icons-title'>Change Password</h3>
											<div className='pe-update-password-icons-inner-container'>
												<div className='pe-update-password-icons-inner-icon-container'>
													<LockOutlined className='pe-update-password-icon' />
												</div>
												<h3 className='pe-update-password-icons-asterisk'>*</h3>
												<h3 className='pe-update-password-icons-asterisk'>*</h3>
												<h3 className='pe-update-password-icons-asterisk'>*</h3>
												<h3 className='pe-update-password-icons-asterisk'>*</h3>
												<h3 className='pe-update-password-icons-asterisk'>*</h3>
											</div>
										</div>
										<Button htmlType='submit' className='cw-profile-setup-first-button' onClick={() => handleProfileClient()}>
											Your Dashboard
										</Button>
									</div>
								</Col>
								<Col span={16}>
									<Row>
										<Col span={8} className='cw-profile-setup-col-container'>
											<StarFilled className='cw-profile-setup-icon' />
											<h4 className='cw-profile-setup-title'>Review or change your survey answers and ratings.</h4>
										</Col>
										<Col span={8} className='cw-profile-setup-col-container'>
											<RiseOutlined className='cw-profile-setup-icon' />
											<h4 className='cw-profile-setup-title'>Setup or change your financial health preferences.</h4>
										</Col>
										<Col span={8} className='cw-profile-setup-col-container'>
											<ThunderboltFilled className='cw-profile-setup-icon' />
											<h4 className='cw-profile-setup-title'>Setup or change your action items preferences.</h4>
										</Col>
										<Col span={8} className='cw-profile-setup-col-container'>
											<div className='cw-profile-setup-bell-icon-container'>
												<div className='cw-profile-setup-bell-text-container'>
													<h5 className='cw-profile-setup-bell-text'>0</h5>
												</div>
												<BellFilled className='cw-profile-setup-icon' />
											</div>
											<h4 className='cw-profile-setup-title'>Setup or change your alert preferences.</h4>
										</Col>
										<Col span={8} className='cw-profile-setup-col-container'>
											<MailOutlined className='cw-profile-setup-icon' />
											<h4 className='cw-profile-setup-title'>Setup or change your communication preferences.</h4>
										</Col>
										<Col span={8} className='cw-profile-setup-col-container'>
											<BankFilled className='cw-profile-setup-icon' />
											<h4 className='cw-profile-setup-title'>Setup or change your communication preferences.</h4>
										</Col>
										<Col span={24} className='cw-profile-setup-button-container'>
											Personal Bio *
										</Col>
									</Row>
								</Col>
							</Row>
						</div>
					</div>
				</div>
				<Modal wrapClassName='est-upload-image-camera-modal-container' visible={isVisible} title='Update Password' footer={null} onCancel={() => setVisible(false)}>
					<h3>Please update you password:</h3>
					<br />
					<Form onFinish={handleUpdatePassword} form={passwordForm}>
						<InputNormal
							className={'pe-profile-input-field'}
							inputName={'password'}
							inputNameLabel={'Password'}
							inputNameRule={true}
							inputNameMessage={'Please input your password'}
							inputNameType={'password'}
							inputNameIcon={''}
							inputNameRules={'rulesPasswordEN'}
						/>
						<InputNormal
							className={'pe-profile-input-field'}
							inputName={'confirm'}
							inputNameLabel={'Confirm Password'}
							inputNameRule={true}
							inputNameMessage={'Please input your password'}
							inputNameType={'password'}
							inputNameIcon={''}
							dependencies={['password']}
							hasFeedback
							inputNameRules={'confirmPasswordEN'}
						/>
						<Button loading={isLoading} htmlType='submit' className='cw-notification-service-button'>
							Submit
						</Button>
					</Form>
				</Modal>
			</>
		)
	}
}

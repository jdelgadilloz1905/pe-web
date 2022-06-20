/** @format */

import React, { useState, useEffect } from 'react'

import moment from 'moment'

import { Row, Col, Button, notification, Modal, Form, Upload, Progress, Select, Input } from 'antd'

import { StarFilled, ThunderboltFilled, RiseOutlined, BellFilled, MailOutlined, BankFilled, EditOutlined, LockOutlined, CameraOutlined } from '@ant-design/icons'

import Loading from '../../components/Loading'

import MetaDescription from '../../components/MetaDescription'

import InputNormal from '../../components/Inputs/Normal'

import Image from '../../components/Image'

import servicesProfile from './services'

import serviceImage from '../client-dashboard/components/ClientInfo/services'

import { info } from './data.js'

import './style.scss'

export default function ProfileSetup() {
	const [isPreviewImg, setPreviewImg] = useState(null)
	const [passwordForm] = Form.useForm()
	const [editProfileForm] = Form.useForm()
	const [isDatosUser, setDatosUser] = useState(JSON.parse(localStorage.getItem('userSession')))
	const [isVisible, setVisible] = useState(false)
	const [isLoading, setLoading] = useState(false)
	const [isPreviewProfile, setPreviewProfile] = useState(false)
	const [isPreviewProfileImage, setPreviewProfileImage] = useState(false)
	const [isFileList, setFileList] = useState([])
	const [isProgress, setProgress] = useState(0)
	const [isPreviewModal, setPreviewModal] = useState(false)
	const [isEditProfileModal, setEditProfileModal] = useState(false)
	const [isEditProfileInfo, setEditProfileModalInfo] = useState(false)

	const [isEditType, setEditType] = useState(null)

	const { Option } = Select
	const { TextArea } = Input

	const handleOnChangeImage = ({ fileList }) => {
		setFileList(fileList)
	}

	const handleImageDelete = async (item) => {
		//rops.deleteItemImage(item)
		console.log('successfully removed')
		setFileList([])
	}

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
		await servicesProfile.UpdatePassword(data).then(async (response) => {
			if (response) {
				await servicesProfile.GetUserProfile({ id: isDatosUser.id }).then((response) => {
					if (response) {
						setDatosUser(response)
						setVisible(false)
						passwordForm.resetFields()
					}
				})
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

	const handleModalPreviewImage = () => {
		setPreviewProfile(true)
		setPreviewProfileImage(isDatosUser.photo)
	}

	const handlePreview = async (item) => {
		setPreviewModal(true)

		//setPreviewImg(item.thumbUrl)
	}

	const handleRemoveImageProfile = () => {
		let data = { ...isDatosUser }
		data.photo = null
		setDatosUser(data)
		setPreviewProfile(false)
	}

	/* 	const handleModalRemoveImage = () => {
		props.handleRemoveImageProfile()
		setPreviewProfile(false)
	} */

	const handleUploadImage = async (options) => {
		const { onSuccess, onError, file, onProgress } = options
		const data = new FormData()
		data.append('imagen[]', file)
		const config = {
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress: (event) => {
				const percent = Math.floor((event.loaded / event.total) * 100)
				setProgress(percent)
				if (percent === 100) {
					setTimeout(() => setProgress(0), 1000)
				}
				onProgress({ percent: (event.loaded / event.total) * 100 })
			},
		}
		onSuccess('Ok')
		await serviceImage.uploadImage(data, config).then((response) => {
			if (response) {
				setPreviewImg(response)
				serviceImage.sendImage(isDatosUser.id, response)
				let data = { ...isDatosUser }
				data.photo = response
				setDatosUser(data)
			}
		})
		console.log('on error...', onError)
	}

	useEffect(() => {
		handleCalculateDate()
		/* 		if (handleCalculateDate() === 0) { */
		notification['info']({
			description: (
				<section>
					<div>
						<div>
							<h1 className='cw-notification-service-title'>Alert:</h1>
							{/* 	<p className='cw-notification-service-subtitle'>Do you seen what you don't have change your password, for security purposes, we recomend update it.</p> */}
							<p className='cw-notification-service-description'>Please create a new password.</p>
							<Button onClick={() => handleVisibleModal()} className='cw-notification-service-button'>
								Update Password
							</Button>
						</div>
					</div>
				</section>
			),
			key: 1,
			duration: 10000000,
			onClose: () => setVisible(true),
		})
		/* 		} */
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

	const handleEditModal = (data) => {
		setEditProfileModal(true)
		setEditType(data)
		editProfileForm.setFieldsValue({
			name: isDatosUser.name,
			last: isDatosUser.last,
			email: isDatosUser.email,
			company: isDatosUser.company,
			country: isDatosUser.country,
			phone: isDatosUser.phone,
			bio_text: isDatosUser.bio_text,
		})
	}

	const handleUpdateProfile = async (item) => {
		if (isEditType === 'basic') {
			item.email = isDatosUser.email
			item.phone = isDatosUser.phone
			item.company = isDatosUser.company
			item.country = isDatosUser.country
			item.bio_text = isDatosUser.profile === '1' ? item.bio_text : null
		}

		if (isEditType === 'basic-2') {
			item.name = isDatosUser.name
			item.last = isDatosUser.last
			item.company = isDatosUser.company
			item.country = isDatosUser.country
			item.bio_text = isDatosUser.profile === '1' ? isDatosUser.bio_text : null
		}

		if (isEditType === 'company') {
			item.name = isDatosUser.name
			item.last = isDatosUser.last
			item.email = isDatosUser.email
			item.phone = isDatosUser.phone
			item.bio_text = isDatosUser.profile === '1' ? isDatosUser.bio_text : null
		}

		const data = {
			...item,
			id: isDatosUser.id,
		}

		setLoading(true)
		await servicesProfile.UpdateUserProfile(data).then(async (response) => {
			if (response) {
				await servicesProfile.GetUserProfile({ id: isDatosUser.id }).then((response) => {
					if (response) {
						setDatosUser(response)
						setEditProfileModal(false)
						editProfileForm.resetFields()
					}
				})
			}
		})
		setLoading(false)
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
									{isDatosUser && isDatosUser.photo && isDatosUser.photo !== '' ? (
										<>
											<div className='cw-profile-pic-container' onClick={() => handleModalPreviewImage()}>
												<Image classImg={'cw-client-info-image'} image={`${handlePhotoUser()}`} alt={'profile image'} title={'profile image'} />
											</div>
											<Modal wrapClassName='est-upload-image-camera-modal-container' visible={isPreviewProfile} title='Preview' footer={null} onCancel={() => setPreviewProfile(false)}>
												{isPreviewProfileImage && <img alt='visionCloud' style={{ width: '100%' }} src={isPreviewProfileImage} />}
												<br />
												<br />
												<Button onClick={() => handleRemoveImageProfile()} className='cw-notification-service-button'>
													Delete Image
												</Button>
											</Modal>
										</>
									) : (
										<>
											<Upload
												accept='image/*'
												customRequest={handleUploadImage}
												onChange={handleOnChangeImage}
												onPreview={handlePreview}
												onRemove={handleImageDelete}
												fileList={isFileList}
												listType='picture-card'
												className='image-upload-grid'>
												{isFileList.length >= 1 ? null : (
													<div className='est-upload-image-camera-text-global-container'>
														<div className='est-upload-image-camera-icon-container'>
															<div className='cw-profile-inner-container'>
																<CameraOutlined className='cw-profile-pic-icon' />
																<h6 className='cw-profile-pic-title'>Add Photo</h6>
															</div>
														</div>
													</div>
												)}
											</Upload>

											{isProgress > 0 ? <Progress percent={isProgress} /> : null}
										</>
									)}
									<div className='cw-profile-name-container'>
										<h6 className='cw-profile-name-title'>
											Hi {isDatosUser.name} {isDatosUser.last}
											<span className='cw-client-info-user-subtitle' onClick={() => handleEditModal('basic')}>
												<EditOutlined className='cw-client-info-user-profile-icon' />
											</span>
										</h6>
										<div className='pe-update-password-icons-container' onClick={() => handleVisibleModal()}>
											<h3 className='pe-update-password-icons-title'>Change Password:</h3>
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
										<Col span={8} className='cw-profile-setup-col-container' onClick={() => handleEditModal('basic-2')}>
											<MailOutlined className='cw-profile-setup-icon' />
											<h4 className='cw-profile-setup-title'>Setup or change your phone and email preferences.</h4>
										</Col>
										<Col span={8} className='cw-profile-setup-col-container' onClick={() => handleEditModal('company')}>
											<BankFilled className='cw-profile-setup-icon' />
											<h4 className='cw-profile-setup-title'>Setup or change your company and state preferences.</h4>
										</Col>
										{isDatosUser.profile === '1' && (
											<Col span={24} className='cw-user-profile-setup-bio-container'>
												<h4 className='cw-user-profile-setup-bio-title'>Personal Bio *</h4>
												<h3 className='cw-user-profile-setup-bio-subtitle'>{isDatosUser?.bio_text ? isDatosUser.bio_text : 'You need to edit your profile for edit bio'}</h3>
											</Col>
										)}
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
				<Modal
					wrapClassName='est-upload-image-camera-modal-container'
					visible={isEditProfileModal}
					title='Edit Profile Info'
					footer={null}
					onCancel={() => setEditProfileModal(false)}
					destroyOnClose={true}>
					{isEditProfileModal && (
						<Form onFinish={handleUpdateProfile} form={editProfileForm}>
							{isEditType && isEditType === 'basic' && (
								<>
									<InputNormal
										className={'pe-profile-input-field'}
										inputName={'name'}
										inputNameLabel={'First name'}
										inputNameRule={true}
										inputNameMessage={'Please input your Name'}
										inputNameType={'text'}
										inputNameRules={'rulesNameRequiredEN'}
									/>
									<InputNormal
										className={'pe-profile-input-field'}
										inputName={'last'}
										inputNameLabel={'Last Name'}
										inputNameRule={true}
										inputNameMessage={'Please input your Last Name'}
										inputNameType={'text'}
										inputNameRules={'rulesNameRequiredEN'}
									/>
								</>
							)}
							{isEditType && isEditType === 'basic-2' && (
								<>
									<InputNormal
										className={'pe-profile-input-field'}
										inputName={'email'}
										inputNameLabel={'Email'}
										inputNameRule={true}
										inputNameMessage={'Enter your e-mail'}
										inputNameType={'text'}
										inputNameIcon={''}
										inputNameRules={'rulesEmailEN'}
									/>
									<InputNormal
										className={'pe-profile-input-field'}
										inputName={'phone'}
										inputNameLabel={'Phone'}
										inputNameRule={true}
										inputNameMessage={'Enter your phone'}
										inputNameType={'text'}
										inputNameIcon={''}
										inputNameRules={'rulesPhoneEN'}
									/>
								</>
							)}
							<div className='pe-profile-input-field-select-container'>
								{isEditType && isEditType === 'company' && (
									<>
										<InputNormal
											className={'pe-profile-input-field'}
											inputName={'company'}
											inputNameLabel={'Company'}
											inputNameRule={true}
											inputNameMessage={'Enter your company'}
											inputNameType={'text'}
											inputNameIcon={''}
											inputNameRules={'rulesCompanyEN'}
										/>
										<Form.Item name='country'>
											<Select
												className='pe-profile-input-field-select'
												placeholder='Select state'
												defaultValue={{ value: isDatosUser.country, label: isDatosUser.country }}
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
										</Form.Item>
									</>
								)}
								{isEditType && isEditType === 'basic' && isDatosUser.profile === '1' && (
									<Form.Item name='bio_text' className='pe-profile-input-field-text'>
										<TextArea rows={6} placeholder='Bio info:' />
									</Form.Item>
								)}
							</div>
							<Button loading={isLoading} htmlType='submit' className='cw-notification-service-button'>
								Update
							</Button>
						</Form>
					)}
				</Modal>
			</>
		)
	}
}

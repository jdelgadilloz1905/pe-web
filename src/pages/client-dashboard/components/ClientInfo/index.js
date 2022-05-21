/** @format */

import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Row, Col, Upload, Progress, Modal } from 'antd'

import { EditOutlined, BellFilled, RiseOutlined, ThunderboltFilled, CameraOutlined } from '@ant-design/icons'

import serviceImage from './services'

import './style.scss'

export default function ClientInfo(props) {
	const [isDatosUser] = useState(props.dataUser)
	const [isPreviewImg, setPreviewImg] = useState(`${props.dataUser.photo}`)
	const [isFileList, setFileList] = useState([])
	const [isProgress, setProgress] = useState(0)
	const [isPreviewModal, setPreviewModal] = useState(false)

	const handleOnChangeImage = ({ fileList }) => {
		setFileList(fileList)
	}
	const handleImageDelete = async (item) => {
		//rops.deleteItemImage(item)
		console.log('successfully removed')
	}

	const handlePreview = async (item) => {
		setPreviewModal(true)

		//setPreviewImg(item.thumbUrl)
	}

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
			}
		})
		console.log('on error...', onError)
	}

	return (
		<div className='cw-client-global-container'>
			<div className='cw-client-info-user-container'>
				<Row className='cw-client-info-user-inner-container'>
					<Col span={8}>
						<div className='cw-client-info-container'>
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

							<Modal wrapClassName='est-upload-image-camera-modal-container' visible={isPreviewModal} title='Preview' footer={null} onCancel={() => setPreviewModal(false)}>
								{isPreviewImg && <img alt='visionCloud' style={{ width: '100%' }} src={isPreviewImg} />}
							</Modal>
							<div className='cw-client-info-user-title-main-container'>
								<h3 className='cw-client-info-user-title'>Hill {isDatosUser.name}</h3>
								<Link to='/user-profile-setup'>
									<div className='cw-client-info-user-subtitle-container'>
										<EditOutlined className='cw-client-info-user-profile-icon' />
										<h4 className='cw-client-info-user-subtitle'>Edit Profile</h4>
									</div>
								</Link>
							</div>
						</div>
					</Col>
					<Col span={16}>
						<Row className='cw-client-info-details-container'>
							<Col span={8} className='cw-client-info-user-col-container'>
								<div className='cw-client-info-user-icon-title-container'>
									<div className='cw-bell-icon-container'>
										<div className='cw-bell-text-title-container'>
											<h5 className='cw-bell-text-title'>3</h5>
										</div>
										<BellFilled className='cw-client-info-user-icon' />
									</div>
									<h4 className='cw-client-info-action-title'>You have 3 advisor matches to review</h4>
								</div>
							</Col>
							<Col span={8} className='cw-client-info-user-col-container'>
								<div className='cw-client-info-user-icon-title-container'>
									<RiseOutlined className='cw-client-info-user-icon' />
									<h4 className='cw-client-info-action-title'>Review your financial health</h4>
								</div>
							</Col>
							<Col span={8} className='cw-client-info-user-col-container'>
								<div className='cw-client-info-user-icon-title-container'>
									<ThunderboltFilled className='cw-client-info-user-icon' />
									<h4 className='cw-client-info-action-title'>You have action items to review</h4>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	)
}

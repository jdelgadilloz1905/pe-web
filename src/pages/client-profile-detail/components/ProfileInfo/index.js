/** @format */

import React, { useState } from 'react'

import { Row, Col } from 'antd'

import { EditOutlined, BellFilled } from '@ant-design/icons'

import Image from '../../../../components/Image'

import Calendar from '../../../../assets/images/icons/calendar.png'

import './style.scss'

export default function ProfileInfo(props) {
	const [isDatosUser, setDatosUser] = useState(props.dataUser)
	return (
		<div className='cw-profile-global-container'>
			<div className='cw-profile-info-user-container'>
				<Row className='cw-profile-info-user-inner-container'>
					<Col span={8}>
						<div className='cw-profile-info-container'>
							<Image
								classImg={'cw-profile-info-image'}
								image={'https://dummyimage.com/500x500/ddd/fff'}
								alt={'profile image'}
								title={'profile image'}
							/>
							<div className='cw-profile-info-user-title-main-container'>
								<h3 className='cw-profile-info-user-title'>
									Hill {isDatosUser.name}
								</h3>
								<div className='cw-profile-info-user-subtitle-container'>
									<EditOutlined className='cw-profile-info-user-icon' />
									<h4 className='cw-profile-info-user-subtitle'>
										Edit Profile
									</h4>
								</div>
							</div>
						</div>
					</Col>
					<Col span={16}>
						<Row className='cw-profile-info-details-container'>
							<Col span={6}>
								<div>
									<div>
										<h4 className='cw-profile-info-details-title'>Clients</h4>
										<h2 className='cw-profile-info-details-subtitle'>
											$51M
											<span className='cw-profile-info-details-description'>
												AUM
											</span>
										</h2>
									</div>
								</div>
							</Col>
							<Col span={6}>
								<div>
									<div>
										<h4 className='cw-profile-info-details-title'>Prospects</h4>
										<h2 className='cw-profile-info-details-subtitle'>
											$20M
											<span className='cw-profile-info-details-description'>
												AUM
											</span>
										</h2>
									</div>
								</div>
							</Col>
							<Col span={6}>
								<div>
									<div>
										<h4 className='cw-profile-info-details-title'>Actions</h4>
										<div className='cw-profile-info-user-icon-title-container'>
											<div className='cw-bell-icon-container'>
												<div className='cw-bell-text-title-container'>
													<h5 className='cw-bell-text-title'>5</h5>
												</div>
												<BellFilled className='cw-profile-info-user-bell-icon' />
											</div>
											<h4 className='cw-profile-info-action-title'>Review</h4>
										</div>
									</div>
								</div>
							</Col>
							<Col span={6}>
								<div>
									<div>
										<h4 className='cw-profile-info-details-title'>Calendar</h4>
										<Image
											classImg={'cw-profile-calendar-icon'}
											image={Calendar}
											alt={'Calendar Icon'}
											title={'Calendar Icon'}
										/>
									</div>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	)
}

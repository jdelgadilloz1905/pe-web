/** @format */

import React, { useState } from 'react'

import { Row, Col } from 'antd'

import {
	EditOutlined,
	BellFilled,
	RiseOutlined,
	ThunderboltFilled,
} from '@ant-design/icons'

import Image from '../../../../components/Image'

import './style.scss'

export default function ClientInfo(props) {
	const [isDatosUser, setDatosUser] = useState(props.dataUser)
	return (
		<div className='cw-client-global-container'>
			<div className='cw-client-info-user-container'>
				<Row className='cw-client-info-user-inner-container'>
					<Col span={8}>
						<div className='cw-client-info-container'>
							<Image
								classImg={'cw-client-info-image'}
								image={'https://dummyimage.com/500x500/ddd/fff'}
								alt={'profile image'}
								title={'profile image'}
							/>
							<div className='cw-client-info-user-title-main-container'>
								<h3 className='cw-client-info-user-title'>
									Hill {isDatosUser.name}
								</h3>
								<div className='cw-client-info-user-subtitle-container'>
									<EditOutlined className='cw-client-info-user-profile-icon' />
									<h4 className='cw-client-info-user-subtitle'>Edit Profile</h4>
								</div>
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
									<h4 className='cw-client-info-action-title'>
										You have 3 advisor matches to review
									</h4>
								</div>
							</Col>
							<Col span={8} className='cw-client-info-user-col-container'>
								<div className='cw-client-info-user-icon-title-container'>
									<RiseOutlined className='cw-client-info-user-icon' />
									<h4 className='cw-client-info-action-title'>
										Review your financial health
									</h4>
								</div>
							</Col>
							<Col span={8} className='cw-client-info-user-col-container'>
								<div className='cw-client-info-user-icon-title-container'>
									<ThunderboltFilled className='cw-client-info-user-icon' />
									<h4 className='cw-client-info-action-title'>
										You have action items to review
									</h4>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	)
}

/** @format */

import React, { useState } from 'react'

import { Row, Col, Button } from 'antd'

import { BellFilled } from '@ant-design/icons'

import Image from '../../../../components/Image'
import Spacer from '../../../../components/Spacer'
import Loading from '../../../../components/Loading'

import './style.scss'

export default function AdvisorsReview(props) {
	const [isDataAdvisors] = useState(props.dataAdvisors.data.result)
	if (!isDataAdvisors) {
		return <Loading />
	} else {
		return (
			<div className='cw-advisors-review-global-container'>
				<Row>
					<Spacer />
					<Col span={19}>
						<div className='cw-advisors-review-icon-title-container'>
							<div className='cw-advisors-bell-icon-container'>
								<div className='cw-advisors-bell-text-title-container'>
									<h5 className='cw-advisors-bell-text-title'>3</h5>
								</div>
								<BellFilled className='cw-advisors-icon' />
							</div>
							<h4 className='cw-advisors-icon-title'>Advisors to review</h4>
						</div>
					</Col>
					<Col span={6} className='cw-advisors-left-title-container'>
						<h2 className='cw-advisors-left-title'>
							Here are the top 3 advisors that best match your preferences.
						</h2>
					</Col>
					{isDataAdvisors.map((item, index) => (
						<Col span={6} key={index}>
							<div className='cw-advisors-map-container'>
								<div className='cw-advisors-profile-pic-container'>
									<div className='cw-advisors-profile-number-title-container'>
										<h3 className='cw-advisors-profile-number-title'>
											{index + 1}
										</h3>
									</div>
									<Image
										classImg={'cw-advisors-profile'}
										image={'https://dummyimage.com/500x500/ddd/fff'}
										alt={'Profile Picture'}
										title={'Profile Picture'}
									/>
								</div>
								<div className='cw-advisors-profile-text-container'>
									<h3 className='cw-advisors-profile-name'>{item.name}</h3>
									<h3 className='cw-advisors-profile-percent'>
										{item.percent}
									</h3>
									<h3 className='cw-advisors-profile-position'>
										{item.position}
									</h3>
									<h3 className='cw-advisors-profile-title'>{item.company}</h3>
									<h3 className='cw-advisors-profile-state'>{item.country}</h3>
								</div>

								<div className='cw-advisors-review-button-container'>
									<Button className='cw-advisors-review-button'>
										View Profile
									</Button>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</div>
		)
	}
}

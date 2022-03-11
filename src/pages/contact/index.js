/** @format */

import React from 'react'

import { Row, Col } from 'antd'

import MetaDescription from '../../components/MetaDescription'

import './style.scss'

export default function Contact() {
	return (
		<>
			<MetaDescription
				title={'Contact | Wix.com'}
				name={'description'}
				content={'Contact | Wix.com...'}
			/>
			<div className='cw-contact-global-container'>
				<Row className='cw-contact-main-container'>
					<Col span={9}></Col>
					<Col span={15} className='cw-contact-col-container'>
						<div className='cw-contact-form-global-container'>
							<h3 className='cw-contact-global-title'>Hello.</h3>

							<h3 className='cw-contact-main-title'>Email:</h3>
							<h3 className='cw-contact-main-subtitle'>info@professional-exchange.com</h3>

							<h3 className='cw-contact-main-title'>Phone:</h3>
							<h3 className='cw-contact-main-subtitle'>(913) 888-1234</h3>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

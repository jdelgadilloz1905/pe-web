/** @format */

import React from 'react'

import { Row, Col } from 'antd'

import MetaDescription from '../../components/MetaDescription'

import './style.scss'

export default function AboutUs() {
	return (
		<>
			<MetaDescription
				title={'About | Wix.com'}
				name={'description'}
				content={'About | Wix.com...'}
			/>
			<div className='cv-about-global-background'>
				<Row className='cv-about-section-1-main-container'>
					<Col span={9}></Col>
					<Col span={15}>
						<div className='cv-about-section-1-inner-container'>
							<div>
								<h3 className='cv-about-section-1-main-title'>
									We take the guesswork out of finding the perfect professional advisor for
									you.
								</h3>
								<h4 className='cv-about-section-1-main-subtitle'>
									Who is Professional Exchange?
								</h4>
								<p className='cv-about-section-1-main-description'>
									Built out of need, Professional Exchange focuses on creating connections
									between you and a professional that meets your current life needs–whether
									a small business owner or a soon to be empty-nester–connecting with the
									right professional sets you up for success. Our network of vetted, proven
									professionals takes the guesswork out of finding your expert.
								</p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='cv-about-section-2-main-container'>
					<Col span={12}>
						<div className='cv-about-section-2-inner-container'>
							<div>
								<h4 className='cv-about-section-2-main-subtitle'>
									An advisor-run, advisor exchange
								</h4>
								<p className='cv-about-section-2-main-description'>
									Having been in the financial industry for over 20 years, I have seen
									relationships that work–and others that don't. I realized that how the
									relationship started was the one main key to success.
								</p>
								<p className='cv-about-section-2-main-description'>
									Our lives are constantly changing, and finding a professional that can
									help to shape and guide us as we move forward is critical. Professional
									Exchange was born out of that idea: connecting an individual to a
									professional that meets his or her needs.
								</p>
								<p className='cv-about-section-2-main-description-footer'>– Bill Day</p>
							</div>
						</div>
					</Col>
					<Col span={12}>
						<div className='cv-about-section-2-parallax-container'></div>
					</Col>
				</Row>
			</div>
		</>
	)
}

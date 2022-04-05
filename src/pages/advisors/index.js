/** @format */

import React from 'react'

import { Parallax } from 'react-parallax'

import { Row, Col } from 'antd'

import MetaDescription from '../../components/MetaDescription'

import backgroundImgRight from '../../assets/images/bg/AdobeStock_298598659_Preview.jpeg'
import backgroundImgLeft from '../../assets/images/bg/AdobeStock_165892885_Preview.jpeg'

import './style.scss'

export default function Advisors() {
	return (
		<>
			<MetaDescription
				title={'Advisors | PE.com'}
				name={'description'}
				content={'Advisors | PE.com...'}
			/>
			<div className='cv-advisors-global-background'>
				<Row className='cv-advisors-section-1-main-container'>
					<Col span={9}></Col>
					<Col span={15}>
						<div className='cv-advisors-section-1-inner-container'>
							<div>
								<span className='cv-advisors-section-1-list-indicator'>1</span>
								<span className='cv-advisors-section-1-list-line'></span>
							</div>
							<div>
								<h3 className='cv-advisors-section-1-main-title'>
									Connecting professionals to clients that are looking for their unique
									knowledge and experience.
								</h3>
								<h4 className='cv-advisors-section-1-main-subtitle'>
									By professionals, for professionals.
								</h4>
								<p className='cv-advisors-section-1-main-description'>
									Built by industry professionals, we recognize the value in knowing your
									clients’ needs from the start. Professional Exchange only connects you
									with quality leads that align with your approach. Let us do the research
									and vetting so you don’t have to.
								</p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='cv-advisors-section-2-main-container'>
					<Col span={12}>
						<div className='cv-advisors-section-2-inner-container'>
							<div className='cv-advisors-section-2-inner-indicator-container'>
								<span className='cv-advisors-section-2-list-indicator'>2</span>
								<span className='cv-advisors-section-2-list-line'></span>
							</div>
							<div>
								<h4 className='cv-advisors-section-2-main-subtitle'>More than matching.</h4>
								<p className='cv-advisors-section-2-main-description'>
									Our matching system is not simply based off zip codes. It is designed to
									evaluate life stages, preferences, personal goals and values, and much
									more. By applying these factors for both professionals and clients we
									offer more than just a match. Professional Exchange matches you with the
									specific clientele you want to add to your firm.
								</p>
							</div>
						</div>
					</Col>
					<Col span={12}>
						<div className='cv-advisors-section-2-parallax-container'>
							<Parallax strength={400} bgImage={backgroundImgRight}></Parallax>
						</div>
					</Col>
				</Row>
				<Row className='cv-advisors-section-3-main-container'>
					<Col span={12}>
						<div className='cv-advisors-section-3-parallax-container'>
							<Parallax strength={400} bgImage={backgroundImgLeft}></Parallax>
						</div>
					</Col>
					<Col span={12}>
						<div className='cv-advisors-section-3-inner-container'>
							<div className='cv-advisors-section-2-inner-indicator-container'>
								<span className='cv-advisors-section-2-list-indicator'>3</span>
								<span className='cv-advisors-section-2-list-line'></span>
							</div>
							<div>
								<h4 className='cv-advisors-section-2-main-subtitle'>
									Quick setup, ongoing benefits.
								</h4>
								<p className='cv-advisors-section-2-main-description'>
									The process is simple: Enter your credentials, fill out our short online
									survey and Professional Exchange does the rest. Our proprietary matching
									system coupled with our unique Advisor Dashboard is simple to use yet
									sophisticated enough for the range of complexity professionals need.
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

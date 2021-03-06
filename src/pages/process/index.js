/** @format */

import React from 'react'

import { Parallax } from 'react-parallax'

import { Row, Col } from 'antd'

import MetaDescription from '../../components/MetaDescription'

import './style.scss'

export default function Proccess() {
	return (
		<>
			<MetaDescription
				title={'Process | Wix.com'}
				name={'description'}
				content={'Process | Wix.com...'}
			/>
			<div className='cv-process-global-background'>
				<Row className='cv-process-section-1-main-container'>
					<Col span={9}></Col>
					<Col span={15}>
						<div className='cv-process-section-1-inner-container'>
							<div>
								<span className='cv-process-section-1-list-indicator'>1</span>
								<span className='cv-process-section-1-list-line'></span>
							</div>
							<div>
								<h3 className='cv-process-section-1-main-title'>
									A step-by-step process to match you with the perfect advisor.
								</h3>
								<h4 className='cv-process-section-1-main-subtitle'>
									There are no direct fees for you.
								</h4>
								<p className='cv-process-section-1-main-description'>
									We believe you should have access to qualified vetted professionals to
									help drive life’s most important decisions. Professional Exchange does
									not charge you a fee, instead, we focus on delivering the highest quality
									professionals that best align with your needs.
								</p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='cv-process-section-2-main-container'>
					<Col span={7}>
						<div className='cv-process-section-2-parallax-container'>
							<Parallax
								strength={400}
								bgImage={'https://i.ibb.co/rb4J5R8/parallax-test.jpg'}></Parallax>
						</div>
					</Col>
					<Col span={10}>
						<div className='cv-process-section-2-inner-container'>
							<div className='cv-process-section-2-inner-indicator-container'>
								<span className='cv-process-section-2-list-indicator'>2</span>
								<span className='cv-process-section-2-list-line'></span>
							</div>
							<div>
								<h4 className='cv-process-section-2-main-subtitle'>
									Share what makes you comfortable.
								</h4>
								<p className='cv-process-section-2-main-description'>
									Our simple profile questionare allows you to quickly answer the questions
									that that will determine the qualities you desire in an advisor. You are
									unique and our aim is to match you with an advisor that is tailor made
									just for you.
								</p>
							</div>
						</div>
					</Col>
					<Col span={7}>
						<div className='cv-process-section-2-parallax-container'>
							<Parallax
								strength={400}
								bgImage={'https://i.ibb.co/rb4J5R8/parallax-test.jpg'}></Parallax>
						</div>
					</Col>
				</Row>
				<Row className='cv-process-section-3-main-container'>
					<Parallax strength={500} bgImage={'https://i.ibb.co/cw2B3pN/procces-three.jpg'}>
						<Col span={15}>
							<div className='cv-process-section-3-inner-container'>
								<div className='cv-process-section-3-inner-indicator-container'>
									<span className='cv-process-section-3-list-indicator'>3</span>
									<span className='cv-process-section-3-list-line'></span>
								</div>
								<div>
									<h3 className='cv-process-section-3-main-title'>
										Our easy step-by-step process matches you with qualified
										professionals.
									</h3>
									<p className='cv-process-section-3-main-description'>
										Our transparent matching approach creates an immediate connection
										between professional and client. Let us do the research and vetting so
										you don’t have to.
									</p>
								</div>
							</div>
						</Col>
						<Col span={9}></Col>
					</Parallax>
				</Row>
			</div>
		</>
	)
}

/** @format */

import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import Image from '../../../../components/Image'

import { BugOutlined } from '@ant-design/icons'

import logoLeave from '../../../../assets/images/icons/Leaves.svg'

import './style.sass'

export default function SectionOne() {
	return (
		<div className='cw-section-one-global-container'>
			<div className='cw-section-one-main-container'>
				<ScrollAnimation animateIn='animate__fadeInUp' delay={300} animateOnce={true}>
					<h4 className='cw-section-one-icon'>
						<Image classImg={'cw-section-One-main-logo-img'} image={logoLeave} alt={'Main Logo'} title={'Main Logo'} />
					</h4>
					<h3 className='cw-section-one-title'>
						It's the relationships we build that matter.<br></br>
						Connecting you to the right professional is how we build your foundation for success.
					</h3>
					<h4 className='cw-section-one-subtitle'>– Bill Day –</h4>
				</ScrollAnimation>
			</div>
		</div>
	)
}

/** @format */

import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import Image from '../../../../components/Image'

import logoWhite from '../../../../assets/images/logos/wix-logo-white.png'

export default function Sidebar(props) {
	return (
		<>
			{props.animation ? (
				<ScrollAnimation animateIn='animate__fadeInLeft' delay={500} animateOnce={true}>
					<div className='cw-wizard-sidebar-title-global-container'>
						<div className='cw-wizard-sidebar-title-inner-container'>
							<div className='cw-wizard-sidebar-logo-container'>
								<Image
									classImg={'cw-wizard-sidebar-logo-img'}
									image={logoWhite}
									alt={'Main Logo'}
									title={'Main Logo'}
								/>
							</div>
							<h2 className='cw-wizard-sidebar-title'>
								Let's match<br></br> you with the perfect client
							</h2>
						</div>
					</div>
				</ScrollAnimation>
			) : (
				<div className='cw-wizard-sidebar-title-global-container'>
					<div className='cw-wizard-sidebar-title-inner-container'>
						<div className='cw-wizard-sidebar-logo-container'>
							<Image
								classImg={'cw-wizard-sidebar-logo-img'}
								image={logoWhite}
								alt={'Main Logo'}
								title={'Main Logo'}
							/>
						</div>
						<h2 className='cw-wizard-sidebar-title'>
							Let's match<br></br> you with the perfect client
						</h2>
					</div>
				</div>
			)}
		</>
	)
}

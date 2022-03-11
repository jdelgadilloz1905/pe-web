/** @format */

import React from 'react'

import { Link } from 'react-router-dom'

import './style.sass'

export default function Footer() {
	return (
		<div className='cw-footer-global-container'>
			<div className='cw-footer-main-container'>
				<div className='cw-footer-menu-global-container'>
					<Link to='/' className='cw-footer-menu-text'>
						Home
					</Link>

					<Link to='/process' className='cw-footer-menu-text'>
						Process
					</Link>

					<Link to='/advisors' className='cw-footer-menu-text'>
						Advisors
					</Link>

					<Link to='/about' className='cw-footer-menu-text'>
						About Us
					</Link>

					<Link to='/contact' className='cw-footer-menu-text'>
						Contact
					</Link>

					<Link to='/login' className='cw-footer-menu-text'>
						Login
					</Link>
				</div>

				<hr className='cw-footer-spacer'></hr>

				<div className='cw-footer-faq-copy-container'>
					<h3 className='cw-footer-faq-text'>
						If you have any questions or need assistance, email us{' '}
						<Link to='/' className='cw-footer-faq-link'>
							here
						</Link>
					</h3>
					<h3 className='cw-footer-copy-text'>Copyright © 2022 Professional Exchange Inc.</h3>
				</div>
			</div>
		</div>
	)
}

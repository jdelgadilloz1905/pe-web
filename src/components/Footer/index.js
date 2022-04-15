/** @format */

import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.sass'

export default function Footer() {
	return (
		<div className='cw-footer-global-container'>
			<div className='cw-footer-main-container'>
				<div className='cw-footer-menu-global-container'>
					<NavLink to='/' activeClassName='cw-header-link-is-active' className='cw-footer-menu-text'>
						Home
					</NavLink>

					<NavLink to='/process' activeClassName='cw-header-link-is-active' className='cw-footer-menu-text'>
						Process
					</NavLink>

					<NavLink to='/advisors' activeClassName='cw-header-link-is-active' className='cw-footer-menu-text'>
						Advisors
					</NavLink>

					<NavLink to='/about' activeClassName='cw-header-link-is-active' className='cw-footer-menu-text'>
						About Us
					</NavLink>

					<NavLink to='/contact' activeClassName='cw-header-link-is-active' className='cw-footer-menu-text'>
						Contact
					</NavLink>

					<NavLink to='/login' activeClassName='cw-header-link-is-active' className='cw-footer-menu-text'>
						Login
					</NavLink>
				</div>

				<hr className='cw-footer-spacer'></hr>

				<div className='cw-footer-faq-copy-container'>
					<h3 className='cw-footer-faq-text'>
						If you have any questions or need assistance, email us{' '}
						<a className='cw-footer-faq-link' href='mailto: abc@example.com'>
							here
						</a>
					</h3>
					<h3 className='cw-footer-copy-text'>Copyright © 2022 Professional Exchange Inc.</h3>
				</div>
			</div>
		</div>
	)
}

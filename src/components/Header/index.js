/** @format */

import React from 'react'

import { NavLink } from 'react-router-dom'

import { Element } from 'react-scroll'

import DropdownMenu from './DropdownMenu'

import Image from '../Image'

import logoWhite from '../../assets/images/logos/PE-logo-white.svg'

import './style.sass'

export default function Header() {
	return (
		<>
			<div className='cw-header-global-container'>
				<div className='cw-header-main-container'>
					<Element name='navbar-init-scroll'>
						<NavLink to='/'>
							<Image classImg={'cw-header-main-logo-img'} image={logoWhite} alt={'Main Logo'} title={'Main Logo'} />
						</NavLink>
					</Element>
					<div className='cw-header-menu-global-container'>
						<div className='cw-header-menu-text-container'>
							<NavLink exact to='/' activeClassName='cw-header-link-is-active' className='cw-header-menu-text'>
								Home
							</NavLink>
						</div>
						<div className='cw-header-menu-text-container'>
							<NavLink to='/process' activeClassName='cw-header-link-is-active' className='cw-header-menu-text'>
								Process
							</NavLink>
						</div>
						<div className='cw-header-menu-text-container'>
							<NavLink to='/advisors' activeClassName='cw-header-link-is-active' className='cw-header-menu-text'>
								Advisors
							</NavLink>
						</div>
						<div className='cw-header-menu-text-container'>
							<NavLink to='/about' activeClassName='cw-header-link-is-active' className='cw-header-menu-text'>
								About Us
							</NavLink>
						</div>
						<div className='cw-header-menu-text-container'>
							<NavLink to='/contact' activeClassName='cw-header-link-is-active' className='cw-header-menu-text'>
								Contact
							</NavLink>
						</div>
						{/* <div className='cw-header-menu-text-container'>
							<NavLink
								to='/login'
								activeClassName='cw-header-link-is-active'
								className='cw-header-menu-text'>
								Login
							</NavLink>
						</div> */}
						<div className='cw-header-menu-text-container'>
							<DropdownMenu />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

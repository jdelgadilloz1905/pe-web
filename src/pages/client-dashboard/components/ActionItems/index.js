/** @format */

import React from 'react'

import { ThunderboltFilled } from '@ant-design/icons'

import './style.scss'

export default function ActionItems() {
	return (
		<div className='cw-profile-action-items-global-container'>
			<div className='cw-profile-action-items-main-title-container'>
				<ThunderboltFilled className='cw-profile-action-items-icon' />
				<h3 className='cw-profile-action-items-main-title'>Action Items</h3>
			</div>

			<div className='cw-profile-action-items-select-list'>
				<div className='cw-profile-action-items-select-icon'></div>
				<h4 className='cw-profile-action-items-select-title'>Respond to email intro</h4>
			</div>
			<div className='cw-profile-action-items-select-list'>
				<div className='cw-profile-action-items-select-icon'></div>
				<h4 className='cw-profile-action-items-select-title'>
					Take FinaMetrica risk assessment
				</h4>
			</div>
			<div className='cw-profile-action-items-select-list'>
				<div className='cw-profile-action-items-select-icon'></div>
				<h4 className='cw-profile-action-items-select-title'>Send 529 aplication</h4>
			</div>
			<div className='cw-profile-action-items-select-list'>
				<div className='cw-profile-action-items-select-icon'></div>
				<h4 className='cw-profile-action-items-select-title'>Provide statements to advisor</h4>
			</div>
		</div>
	)
}

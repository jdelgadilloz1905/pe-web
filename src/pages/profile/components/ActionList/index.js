/** @format */

import React from 'react'

import './style.scss'

export default function ActionList() {
	return (
		<div className='cw-profile-actions-global-container'>
			<h3 className='cw-profile-actions-main-title'>Action Items</h3>
			<div className='cw-profile-actions-select-list'>
				<div className='cw-profile-actions-select-icon'></div>
				<h4 className='cw-profile-actions-select-title'>Respond to email intro</h4>
			</div>
			<div className='cw-profile-actions-select-list'>
				<div className='cw-profile-actions-select-icon'></div>
				<h4 className='cw-profile-actions-select-title'>Take FinaMetrica risk assessment</h4>
			</div>
			<div className='cw-profile-actions-select-list'>
				<div className='cw-profile-actions-select-icon'></div>
				<h4 className='cw-profile-actions-select-title'>Send 529 aplication</h4>
			</div>
			<div className='cw-profile-actions-select-list'>
				<div className='cw-profile-actions-select-icon'></div>
				<h4 className='cw-profile-actions-select-title'>Provide statements to advisor</h4>
			</div>
		</div>
	)
}

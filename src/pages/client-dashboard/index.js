/** @format */

import React from 'react'

import MetaDescription from '../../components/MetaDescription'

import ClientInfo from './components/ClientInfo'
import AdvisorsReview from './components/AdvisorsReview'
import ActionItems from './components/ActionItems'
import FinancialProgress from './components/FinancialProgress'

import './style.scss'

export default function ClientDashboard() {
	return (
		<div className='cv-profile-global-background'>
			<MetaDescription title={'Wix - Profile'} name={'description'} content={'Wix - Profile'} />
			<div className='cw-profile-navbar-spacer'></div>
			<div className='cv-profile-container-1'>
				<div className='cv-profile-info-inner-container'>
					<ClientInfo />
				</div>
				<div className='cv-profile-list-inner-container'>
					<AdvisorsReview />
				</div>
			</div>
			<div className='cv-profile-list-actions-container'>
				<ActionItems />
			</div>
			<div className='cv-profile-list-2-inner-container'>
				<FinancialProgress />
			</div>
		</div>
	)
}

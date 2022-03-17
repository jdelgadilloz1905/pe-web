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
		<div className='cw-client-dashboard-global-background'>
			<MetaDescription title={'Wix - Profile'} name={'description'} content={'Wix - Profile'} />
			<div className='cw-client-dashboard-spacer'></div>
			<div className='cw-client-dashboard-container-1'>
				<div className='cw-client-dashboard-info-inner-container'>
					<ClientInfo />
				</div>
				<div className='cw-client-dashboard-advisor-inner-container'>
					<AdvisorsReview />
				</div>
			</div>
			<div className='cw-client-dashboard-actions-items-container'>
				<ActionItems />
			</div>
			<div className='cw-client-dashboard-financial-progress-inner-container'>
				<FinancialProgress />
			</div>
		</div>
	)
}

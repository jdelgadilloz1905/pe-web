/** @format */

import React, { useState, useEffect } from 'react'

import MetaDescription from '../../components/MetaDescription'

import ClientInfo from './components/ClientInfo'
import AdvisorsReview from './components/AdvisorsReview'
import ActionItems from './components/ActionItems'
import FinancialProgress from './components/FinancialProgress'

import Loading from '../../components/Loading'

import servicesProfile from './services'

import './style.scss'

export default function ClientDashboard() {
	const [isDatosUser, setDatosUser] = useState(null)

	useEffect(() => {
		servicesProfile.GetDatosUser().then((response) => {
			if (response) {
				setDatosUser(response)
			}
		})
	}, [isDatosUser])

	if (!isDatosUser) {
		return <Loading />
	} else {
		return (
			<div className='cw-client-dashboard-global-background'>
				<MetaDescription
					title={'PE - Profile'}
					name={'description'}
					content={'PE - Profile'}
				/>
				<div className='cw-client-dashboard-spacer'></div>
				<div className='cw-client-dashboard-container-1'>
					<div className='cw-client-dashboard-info-inner-container'>
						<ClientInfo dataUser={isDatosUser} />
					</div>
					<div className='cw-client-dashboard-advisor-inner-container'>
						<AdvisorsReview dataUser={isDatosUser} />
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
}

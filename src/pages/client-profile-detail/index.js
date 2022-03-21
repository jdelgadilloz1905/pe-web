/** @format */

import React, { useState, useEffect } from 'react'

import MetaDescription from '../../components/MetaDescription'

import ProfileInfo from './components/ProfileInfo'
import ProfileList from './components/ProfileList'
import ActionList from './components/ActionList'
import Calendar from './components/Calendar'

import Loading from '../../components/Loading'

import data from './data.json'

import servicesProfile from './services'

import './style.scss'

export default function MainProfile() {
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
			<div className='cv-profile-global-background'>
				<MetaDescription
					title={'Wix - Profile'}
					name={'description'}
					content={'Wix - Profile'}
				/>
				<div className='cw-profile-navbar-spacer'></div>
				<div className='cv-profile-container-1'>
					<div className='cv-profile-info-inner-container'>
						<ProfileInfo dataUser={isDatosUser} />
					</div>
					<div className='cv-profile-list-inner-container'>
						<ProfileList
							data={data.active_clients}
							info={{
								name: 'Active Clients',
								amount: '$51,318',
								titles: [
									'Client Name',
									'Date Added',
									'AUM',
									'Wellness Score',
									'Next Action',
									'Notes',
								],
							}}
						/>
					</div>
				</div>
				<div className='cv-profile-list-actions-container'>
					<ActionList />
				</div>
				<div className='cv-profile-list-2-inner-container'>
					<ProfileList
						data={data.prospects}
						alt_list={true}
						info={{
							name: 'Prospects',
							quantity: 5,
							amount: '$20,594,945',
							titles: [
								'Client Name',
								'Last Update',
								'Potential AUM',
								'Status',
								'Matched Attributes',
								'Notes',
							],
						}}
					/>
				</div>
				<div className='cv-profile-list-actions-container'>
					<Calendar />
				</div>
			</div>
		)
	}
}

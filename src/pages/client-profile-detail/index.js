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
	const [isUserActive, setUsertActive] = useState(null)
	const [isUserProspect, setUsertProspect] = useState(null)

	useEffect(() => {
		const getInfoContract = () => {
			servicesProfile.GetDatosUserAdvisor().then((response) => {
				if (response) {
					setDatosUser(response)
				}
			})
			servicesProfile.GetContractClient('active').then((response) => {
				if (response) {
					setUsertActive(response.data.result)
				}
			})
			servicesProfile.GetContractClient('prospect').then((response) => {
				if (response) {
					setUsertProspect(response.data.result)
				}
			})
		}
		getInfoContract()
	}, [])

	if (!isDatosUser && !isUserActive && !isUserProspect) {
		return <Loading />
	} else {
		return (
			<div className='cv-profile-global-background'>
				<MetaDescription title={'PE - Profile'} name={'description'} content={'PE - Profile'} />
				<div className='cw-profile-navbar-spacer'></div>
				<div className='cv-profile-container-1'>
					<div className='cv-profile-info-inner-container'>
						<ProfileInfo dataUser={isDatosUser} />
					</div>
					<div className='cv-profile-list-inner-container'>
						{isUserActive && (
							<ProfileList
								data={isUserActive}
								info={{
									name: 'Active Clients',
									amount: '$51,318',
									titles: ['Client Name', 'Date Added', 'AUM', 'Wellness Score', 'Next Action', 'Notes'],
								}}
							/>
						)}
					</div>
				</div>
				<div className='cv-profile-list-actions-container'>
					<ActionList />
				</div>
				<div className='cv-profile-list-2-inner-container'>
					{isUserProspect && (
						<ProfileList
							data={isUserProspect}
							alt_list={true}
							info={{
								name: 'Prospects',
								quantity: 5,
								amount: '$20,594,945',
								titles: ['Client Name', 'Last Update', 'Potential AUM', 'Status', 'Matched Attributes', 'Notes'],
							}}
						/>
					)}
				</div>
				<div className='cv-profile-list-actions-container'>
					<Calendar />
				</div>
			</div>
		)
	}
}

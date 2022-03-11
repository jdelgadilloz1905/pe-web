/** @format */

import axios from 'axios'

import { setGlobal } from 'reactn'

import notification from 'antd/lib/notification'

import { ENV_CORE } from '../../components/Hooks/Variables/Enviroment'

const servicesLogin = {
	async Login(item) {
		let returnResponse
		let data = {
			email: item.email,
			password: item.password,
		}
		await axios({
			method: 'POST',
			url: `${ENV_CORE}/api/users/login`,
			data: data,
		})
			.then((response) => {
				notification['success']({
					message: `Congratulations.`,
					description: `You have successfully logged in.`,
				})
				returnResponse = {
					name: response.data.result.name,
					last: response.data.result.last,
					id: response.data.result.id,
					modo: response.data.result.modo,
					email: response.data.result.email,
					photo: response.data.result.photo,
					last_login: response.data.result.last_login,
					profile: response.data.result.profile,
				}
				localStorage.setItem('userSession', JSON.stringify(returnResponse))
				setGlobal(() => ({
					userEmail: `${returnResponse.name} ${returnResponse.last}`,
					userData: returnResponse,
				}))
			})
			.catch((error) => {
				notification['error']({
					message: `Error`,
					description: `${error.response.data.comment}`,
				})
			})
		return returnResponse
	},

	async Recover(item, traduceThree) {
		let returnResponse
		let data = {
			conEmail: item.email,
		}
		await axios({
			method: 'POST',
			url: `${ENV_CORE}/api/auth/restore-password`,
			data: data,
		})
			.then((response) => {
				if (response.data.statusCode === 200) {
					notification['success']({
						message: `${traduceThree.service_recover_success_message}`,
						description: `${traduceThree.service_recover_success_description}`,
					})
					returnResponse = response
				} else {
					notification['warning']({
						message: `${traduceThree.service_recover_warning_message}`,
						description: `${traduceThree.service_recover_warning_description}`,
					})
				}
			})
			.catch(() => {
				notification['error']({
					message: `Error`,
					description: `${traduceThree.service_global_description}`,
				})
			})
		return returnResponse
	},
}
export default servicesLogin

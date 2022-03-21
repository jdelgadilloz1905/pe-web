/** @format */

import axios from 'axios'

import { setGlobal } from 'reactn'

import notification from 'antd/lib/notification'

import { ENV_CORE } from '../../components/Hooks/Variables/Enviroment'

const servicesRestorePass = {
	async RestorePassword(item) {
		let returnResponse
		let data = {
			email: item.email,
		}
		await axios({
			method: 'POST',
			url: `${ENV_CORE}/api/users/restore-password`,
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

	async Recover(item) {
		let returnResponse
		let data = {
			email: item.email,
		}
		await axios({
			method: 'POST',
			url: `${ENV_CORE}/api/users/restore-password`,
			data: data,
		})
			.then((response) => {
				notification['success']({
					message: `success:`,
					description: `${response.data.comment}`,
				})
				returnResponse = response
			})
			.catch((error) => {
				notification['error']({
					message: `Error`,
					description: `${error.response.data.comment}`,
				})
			})
		return returnResponse
	},
}
export default servicesRestorePass

/** @format */

import axios from 'axios'

import { setGlobal } from 'reactn'

import notification from 'antd/lib/notification'

import { ENV_CORE } from '../../components/Hooks/Variables/Enviroment'

const servicesUsers = {
	async Register(item, profile) {
		let returnResponse
		let data = {
			name: item.first_name,
			last: item.last_name,
			email: item.email,
			zid_code: item.zid_code,
			phone: item.phone,
			modo: 'direct',
			profile: profile,
		}

		await axios({
			method: 'POST',
			url: `${ENV_CORE}/api/users/register-user`,
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
	async CodeVerify(codeVerify) {
		let returnResponse
		let data = {
			code: codeVerify,
		}

		await axios({
			method: 'POST',
			url: `${ENV_CORE}/api/users/verify-code`,
			data: data,
		})
			.then((response) => {
				notification['success']({
					message: `success:`,
					description: `${response.data.comment}`,
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
export default servicesUsers

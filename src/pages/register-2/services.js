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

		// await axios({
		// 	method: 'POST',
		// 	url: `${ENV_CORE}/api/users/register-user`,
		// 	data: data,
		// })
		// 	.then((response) => {
		// 		notification['success']({
		// 			message: `success:`,
		// 			description: `${response.data.comment}`,
		// 		})
		// 		returnResponse = response
		// 	})
		// 	.catch((error) => {
		// 		notification['error']({
		// 			message: `Error`,
		// 			description: `${error.response.data.comment}`,
		// 		})
		// 	})
		let date = new Date().toDateString()
		returnResponse = {
			name: item.first_name,
			last: item.last_name,
			id: 668,
			modo: 'direct',
			email: item.email,
			photo:
				'https://static.wixstatic.com/media/2a9fd3_d5f6d6c89d40461ba134277f435fe9a8~mv2.jpg/v1/crop/x_0,y_5,w_221,h_221/fill/w_124,h_123,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/AdobeStock_206544404_Preview_edited.jpg',
			last_login: date,
			profile: profile,
			company: item.company,
			country: item.country,
		}
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
					company: response.data.result.company,
					country: response.data.result.country,
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

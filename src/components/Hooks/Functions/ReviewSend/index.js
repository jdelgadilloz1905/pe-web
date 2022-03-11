/** @format */

import axios from 'axios'

import notification from 'antd/lib/notification'

import { ENV_CORE } from '../../Variables/Enviroment'

export default async function SendReview(item, traduce) {
	let returnResponse
	await axios({
		method: 'POST',
		url: `${ENV_CORE}/api/publication/calification-user`,
		data: item,
	})
		.then((response) => {
			if (response.data.statusCode === 200) {
				returnResponse = response.data
				notification['success']({
					message: `${traduce.service_success_title}`,
					description: `${traduce.service_success_description}`,
				})
			} else if (response.data.statusCode === 400) {
				returnResponse = false
				notification['warning']({
					message: `${traduce.service_warning_title}`,
					description: `${traduce.service_warning_description}`,
				})
			} else {
				notification['warning']({
					message: 'Warning:',
					description: 'Service error: REACT_APP_SERVICE_CORE - User Reservations',
				})
			}
		})
		.catch(() => {
			notification['error']({
				message: `Error`,
				description: `${traduce.service_error_description}`,
			})
		})
	return returnResponse
}

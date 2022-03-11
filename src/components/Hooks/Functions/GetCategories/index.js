/** @format */

import axios from 'axios'

import notification from 'antd/lib/notification'

import { ENV_CORE } from '../../Variables/Enviroment'

export const GetCategories = async () => {
	let returnResponse
	await axios({
		method: 'POST',
		url: `${ENV_CORE}/api/category/all`,
	})
		.then((response) => {
			if (response.data.statusCode === 200) {
				returnResponse = {
					category: response.data.cateInfo,
					type_view: response.data.cateInfo2,
				}
			} else {
				notification['warning']({
					message: 'Warning:',
					description: 'Error en Servicio: REACT_APP_SERVICE_CORE - Categories',
				})
			}
		})
		.catch(() => {
			notification['error']({
				message: `Error`,
				description: 'Verifique su conexión a Internet',
			})
		})
	return returnResponse
}

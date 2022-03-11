/** @format */

import axios from 'axios'

import notification from 'antd/lib/notification'

import { ENV_CORE } from '../../../Hooks/Variables/Enviroment'

export default async function AdsDetail(item) {
	let returnResponse
	await axios({
		method: 'POST',
		url: `${ENV_CORE}/api/publication/detail-id`,
		data: { conId: item },
	})
		.then((response) => {
			if (response.data.statusCode === 200) {
				returnResponse = response.data.adsInfo
			} else {
				notification['warning']({
					message: 'Advertencia:',
					description: 'Error en Servicio: REACT_APP_SERVICE_CORE - AdsDetail',
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

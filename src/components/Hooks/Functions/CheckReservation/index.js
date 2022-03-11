/** @format */

import axios from 'axios'

import notification from 'antd/lib/notification'

import { ENV_CORE } from '../../Variables/Enviroment'

export const CheckReservation = async (item) => {
	let returnResponse
	await axios({
		method: 'POST',
		url: `${ENV_CORE}/api/publication/confirm-reservation`,
		data: { conRowid: item },
	})
		.then((response) => {
			if (response.data.statusCode === 200) {
				returnResponse = response.data.infoReser
			} else if (response.data.statusCode === 400) {
				notification['warning']({
					message: 'Advertencia:',
					description: `${response.data.mensaje}`,
				})
			} else {
				notification['warning']({
					message: 'Advertencia:',
					description: 'Error en Servicio: REACT_APP_SERVICE_CORE - CheckReservation',
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

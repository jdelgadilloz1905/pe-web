/** @format */

import axios from 'axios'

import notification from 'antd/lib/notification'

import {
	ENV_CORE,
	ENV_UPLOAD_IMAGE,
} from '../../../../components/Hooks/Variables/Enviroment'

const serviceImage = {
	async uploadImage(dataSend, config) {
		let returnResponse
		let data = {
			dataSend,
			config,
		}

		await axios({
			method: 'POST',
			url: `${ENV_UPLOAD_IMAGE}/api/products/upload-image`,
			data: dataSend,
			config,
		})
			.then((response) => {
				// console.log(
				// 	'subi la foto y ahora valido con google la extraccion de texto'
				// )
				// console.log('url ', response.data.url + response.data.imageInfo[0].file)

				returnResponse = response.data.url + response.data.imageInfo[0].file
			})
			.catch((error) => {
				notification['error']({
					message: `Error`,
					description: `${error}`,
				})
			})
		return returnResponse
	},
	async sendImage(id, image) {
		let returnResponse
		let data = {
			id,
			image,
		}
		await axios({
			method: 'POST',
			url: `${ENV_CORE}/api/users/update-image`,
			data: data,
		})
			.then((response) => {
				notification['success']({
					message: `success:`,
					description: `${response.data.comment}`,
				})
				const itemStr = JSON.parse(localStorage.getItem('userSession'))
				itemStr.photo = response.data.result.photo
				const newItemStr = JSON.stringify(itemStr)
				console.log('total ', newItemStr)
				localStorage.setItem('userSession', newItemStr)
				returnResponse = response
			})
			.catch((error) => {
				notification['error']({
					message: `Error`,
					description: `${error}`,
				})
			})
		return returnResponse
	},
}

export default serviceImage

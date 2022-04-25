/** @format */

import axios from 'axios'

import { setGlobal } from 'reactn'

import { notification, Button } from 'antd'

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
			// step_one,
			// step_two,
			// step_three,
			// step_four,
			// step_five,
			// step_six,
			// step_seven,
			// step_eight,
			// step_nine,
			// step_ten,
			// step_eleven,
			// step_twelve,
			// step_thirteen,
			// step_fourteen,
			// step_fifteen,
			// step_sixteen,
			// step_seventen,
			// step_eighteen,
			// step_nineteen,
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
				// localStorage.removeItem('step_one')
				// localStorage.removeItem('step_two')
				// localStorage.removeItem('step_three')
				// localStorage.removeItem('step_four')
				// localStorage.removeItem('step_five')
				// localStorage.removeItem('step_six')
				// localStorage.removeItem('step_seven')
				// localStorage.removeItem('step_eight')
				// localStorage.removeItem('step_nine')
				// localStorage.removeItem('step_ten')
				// localStorage.removeItem('step_eleven')
				// localStorage.removeItem('step_twelve')
				// localStorage.removeItem('step_thirteen')
				// localStorage.removeItem('step_fourteen')
				// localStorage.removeItem('step_fifteen')
				// localStorage.removeItem('step_sixteen')
				// localStorage.removeItem('step_sixteen2')
				// localStorage.removeItem('step_seventen')
				// localStorage.removeItem('step_eighteen')
				// localStorage.removeItem('step_nineteen')
			})
			.catch((error) => {
				notification['info']({
					description: (
						<section>
							<div>
								<div>
									<h1 className='cw-notification-service-title'>Advice:</h1>
									<p className='cw-notification-service-subtitle'>{error.response.data.comment}</p>
									<p className='cw-notification-service-description'>Do u need to Log In?</p>
									<Button onClick={() => (window.location.href = '/login')} className='cw-notification-service-button'>
										Click Here
									</Button>
								</div>
							</div>
						</section>
					),
					duration: 10,
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

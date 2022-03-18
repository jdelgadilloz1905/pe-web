/** @format */

import axios from 'axios'

import notification from 'antd/lib/notification'

import { ENV_CORE } from '../../components/Hooks/Variables/Enviroment'

const servicesProfile = {
	async CloseSession() {
		localStorage.removeItem('userSession')
		localStorage.removeItem('step_one')
		localStorage.removeItem('step_two')
		localStorage.removeItem('step_three')
		localStorage.removeItem('step_four')
		localStorage.removeItem('step_five')
		localStorage.removeItem('step_six')
		localStorage.removeItem('step_seven')
		localStorage.removeItem('step_eight')
		localStorage.removeItem('step_nine')
		localStorage.removeItem('step_ten')
		localStorage.removeItem('step_eleven')
		localStorage.removeItem('step_twelve')
		localStorage.removeItem('step_thirteen')
		localStorage.removeItem('step_fourteen')
		localStorage.removeItem('step_fifteen')
		localStorage.removeItem('step_sixteen')
		localStorage.removeItem('step_sixteen2')
		localStorage.removeItem('step_seventen')
		localStorage.removeItem('step_eighteen')
		localStorage.removeItem('step_nineteen')

		return 'ok'
	},
	async GetDatosUser() {
		return JSON.parse(localStorage.getItem('userSession'))
	},
}

export default servicesProfile

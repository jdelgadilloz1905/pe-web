/** @format */

// import axios from 'axios'

// import notification from 'antd/lib/notification'

// import { ENV_CORE } from '../../../components/Hooks/Variables/Enviroment'

const servicesAdvisor = {
	async PushQuestion(value, isSelected, isSection, isStep) {
		let data = {
			rate: value,
			answers: isSelected,
			quention: isStep,
			section: isSection,
		}

		localStorage.setItem(isStep, JSON.stringify(data))
		return data
	},
	async GetQuestion(isStep) {
		let step = localStorage.getItem(isStep)

		if (!step || step !== null) {
			return JSON.parse(step)
		} else {
			return null
		}
	},
}

export default servicesAdvisor

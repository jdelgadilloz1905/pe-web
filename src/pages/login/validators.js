/** @format */

export const rulesValidation = {
	rulesGeneralRequired: [
		{
			required: true,
			message: 'Please Enter a Value',
		},
	],
	rulesNameRequired: [
		{
			required: true,
			message: 'Please enter your name',
		},
	],
	rulesPhoneRequired: [
		{
			required: true,
			message: 'Please enter your phone number',
		},
	],
	rulesEmail: [
		{
			type: 'email',
			message: 'Email not valid',
		},
		{
			required: true,
			message: 'Please enter your email',
		},
	],
	rulesNumber: [
		() => ({
			validator(_, value) {
				const validate = /^[0-9]+$/.test(value)
				if (!validate) {
					return Promise.reject(new Error('Please enter only numbers.'))
				} else return Promise.resolve()
			},
		}),
	],
}

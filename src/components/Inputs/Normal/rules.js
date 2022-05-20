/** @format */

export const rulesValidation = {
	rulesRequiredEN: [
		{
			required: true,
			message: 'Please input a value',
		},
	],

	rulesPeopleEN: [
		() => ({
			validator(_, value) {
				const validate = /^[0-9]+$/.test(value)
				if (!validate) {
					return Promise.reject(new Error('Invalid format.'))
				} else return Promise.resolve()
			},
		}),
	],

	rulesNameRequiredEN: [
		{
			required: true,
			message: 'Please enter a value',
		},
		{
			min: 1,
			message: 'Minimum 1 character!',
		},
		{
			max: 32,
			message: 'Maximum 32 characters!',
		},
	],

	rulesAddressRequiredEN: [
		{
			required: true,
			message: 'Please enter a value',
		},
		{
			min: 1,
			message: 'Minimum 1 character!',
		},
		{
			max: 50,
			message: 'Maximum 50 characters!',
		},
	],

	rulesEmailEN: [
		{
			type: 'email',
			message: 'Email is not valid',
		},
		{
			required: true,
			message: 'Please enter your email',
		},
	],

	rulesPasswordEN: [
		{
			required: true,
			message: 'Enter your password!',
		},
		{
			min: 4,
			message: 'Minimum 4 characters!',
		},
	],
	rulesTextEN: [
		{
			required: true,
			message: 'Required fields',
		},
		{
			min: 1,
			message: 'Minimum 1 character!',
		},
	],
	rulesZidEN: [
		{
			required: true,
			message: 'Enter your zid code',
		},
		{
			min: 5,
			message: 'Minimum 5 numbers!',
		},
	],

	rulesCodeVerifyEN: [
		{
			required: true,
			message: 'invalid code',
		},
		{
			min: 6,
			message: 'Minimum 6 characters!',
		},
	],

	rulesFirstNameEN: [
		{
			required: true,
			message: 'Enter your name',
		},
		{
			min: 1,
			message: 'Minimum 1 character!',
		},
	],
	rulesCompanyEN: [
		{
			required: true,
			message: 'Enter name company',
		},
		{
			min: 1,
			message: 'Minimum 1 character!',
		},
	],

	rulesLastNameEN: [
		{
			required: true,
			message: 'Enter your last name',
		},
		{
			min: 1,
			message: 'Minimum 1 character!',
		},
	],
	rulesPhoneEN: [
		{
			required: true,
			message: 'Enter your Phone',
		},
		{
			min: 10,
			message: 'Minimum 10 characters!',
		},
	],
	rulesSpacer: [
		() => ({
			validator(_, value) {
				const validate = /^[A-Za-z0-9]+$/.test(value)
				if (value) {
					if (validate) {
						return Promise.resolve()
					} else {
						return Promise.reject(new Error('Formato no válido.'))
					}
				} else {
					return Promise.reject(new Error('Ingrese el No. de cupón.'))
				}
			},
		}),
	],
	rulesPeople: [
		() => ({
			validator(_, value) {
				const validate = /^[0-9]+$/.test(value)
				if (!validate) {
					return Promise.reject(new Error('Formato no válido.'))
				} else return Promise.resolve()
			},
		}),
	],

	rulesNumberEN: [
		() => ({
			validator(_, value) {
				const validate = /^[0-9]+$/.test(value)
				if (value?.replace(/[+()_/\s/]/g, '').length < 0) {
					return Promise.reject(new Error('Please enter a number.'))
				} else if (!validate) {
					return Promise.reject(new Error('Invalid format.'))
				} else if (value?.replace(/[+()_/\s/]/g, '').length > 17) {
					return Promise.reject(new Error('Maximum 17 characters.'))
				} else return Promise.resolve()
			},
		}),
	],

	confirmPasswordEN: [
		{
			required: true,
			message: 'Please confirm your password!',
		},
		({ getFieldValue }) => ({
			validator(rule, value) {
				if (!value || getFieldValue('password') === value || getFieldValue('regPassword') === value) {
					return Promise.resolve()
				}
				return Promise.reject('The two passwords you entered do not match!')
			},
		}),
	],
	confirmEmailEN: [
		{
			required: true,
			message: 'Please confirm your email!',
		},
		({ getFieldValue }) => ({
			validator(rule, value) {
				if (!value || getFieldValue('email') === value) {
					return Promise.resolve()
				}
				return Promise.reject('The two emails do not match!')
			},
		}),
	],
}

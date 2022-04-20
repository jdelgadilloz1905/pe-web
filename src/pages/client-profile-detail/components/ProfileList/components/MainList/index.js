/** @format */

import React from 'react'

import { Row, Col } from 'antd'

import Loading from '../../../../../../components/Loading'

import './style.scss'

export default function MainList(props) {
	const formatPrice = (value, options) => {
		const defaultOptions = {
			significantDigits: 2,
			thousandsSeparator: '.',
			decimalSeparator: ',',
			symbol: '$',
		}

		const fixedDecimals = (num, fixed) => {
			fixed = fixed || 0
			fixed = Math.pow(10, fixed)
			return Math.floor(num * fixed) / fixed
		}

		if (typeof value !== 'number') value = 0.0
		options = { ...defaultOptions, ...options }
		value = fixedDecimals(value, options.significantDigits)

		if (value - Math.floor(value) === 0) {
			value = value.toFixed(options.significantDigits)
		} else {
			value = value.toString()
			let counterDecimal = value.split('.')
			if (counterDecimal[1].length === 1) {
				let arrGivenString = [...counterDecimal[1]]
				arrGivenString.splice(1, 0, 0)
				let output = arrGivenString.join('')
				counterDecimal[1] = output
				value = counterDecimal.join('.')
			}
		}

		const [currency, decimal] = value.split('.')

		return `${currency.replace(
			/\B(?=(\d{3})+(?!\d))/g,
			options.thousandsSeparator
		)}${options.decimalSeparator}${decimal}`
	}

	const formatPrice2 = (item) => {
		let locale
		locale = 'en-US'
		return item.toLocaleString(locale, {
			style: 'currency',
			currency: 'USD',
		})
	}
	if (!props) {
		return <Loading />
	} else {
		return (
			<>
				{props.data.map((item, index) => (
					<div className='cw-profile-list-result-main-container' key={index}>
						<Row>
							<Col span={4}>
								<div className='cw-profile-list-result-number-container'>
									<div className='cw-profile-list-result-number'>
										<span className='cw-profile-list-result-number-title'>
											{index + 1}
										</span>
									</div>
									<h4 className='cw-profile-list-result-title'>
										<span className='cw-profile-list-result-title-elipsis'>
											{item.name}
										</span>
									</h4>
								</div>
							</Col>
							<Col span={4}>
								<h4 className='cw-profile-list-result-title-alt'>
									{item.date_added}
								</h4>
							</Col>
							<Col span={4}>
								<h4 className='cw-profile-list-result-title-alt'>{item.aum}</h4>
							</Col>
							<Col span={4}>
								<h4 className='cw-profile-list-result-title-alt'>
									{item.wellness_score}
								</h4>
							</Col>
							{props.alt_list ? (
								<Col span={4}>
									<h3 className='cw-profile-list-result-subtitle-alt'>
										Estate Planning:
									</h3>
									<h4 className='cw-profile-list-result-title-alt-2'>
										{item.date_action}
									</h4>
								</Col>
							) : (
								<Col span={4}>
									<h4 className='cw-profile-list-result-title-alt'>
										{item.date_action}
									</h4>
								</Col>
							)}
							<Col span={4}>
								<h4 className='cw-profile-list-result-title'>{item.notes}</h4>
							</Col>
						</Row>
					</div>
				))}
			</>
		)
	}
}

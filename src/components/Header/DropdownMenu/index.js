/** @format */
import React, { useState } from 'react'

import { Menu, Dropdown } from 'antd'
import {
	UserOutlined,
	SettingOutlined,
	PoweroffOutlined,
	SendOutlined,
	UnlockOutlined,
} from '@ant-design/icons'

import './style.scss'

export default function DropdownMenu() {
	const [isUserData] = useState(
		localStorage.getItem('userSession') !== undefined
			? localStorage.getItem('userSession')
			: null
	)

	const handleCloseSesion = () => {
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
		window.location.href = '/'
	}
	const menu = (
		<Menu className='cw-dropmenu-global-conatiner'>
			<Menu.Item key='0' icon={<SendOutlined />}>
				<a href='/login'>Login</a>
			</Menu.Item>
			<Menu.Item key='1' icon={<UnlockOutlined />}>
				<a href='/restore-password'>Forgot Password</a>
			</Menu.Item>
		</Menu>
	)

	const menu1 = (
		<Menu className='cw-dropmenu-global-conatiner'>
			<Menu.Item key='2' icon={<SettingOutlined />}>
				{isUserData && (
					<a
						href={
							isUserData.profile === '1'
								? '/user-profile-detail'
								: '/user-profile-setup'
						}>
						profile
					</a>
				)}
			</Menu.Item>
			<Menu.Item
				key='3'
				icon={<PoweroffOutlined />}
				onClick={() => handleCloseSesion()}>
				Sign off
			</Menu.Item>
		</Menu>
	)

	return (
		<Dropdown overlay={isUserData ? menu1 : menu} trigger={['click']}>
			<a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
				<UserOutlined className='cw-dropmenu-icon' />
			</a>
		</Dropdown>
	)
}

/** @format */
import React from 'react'

import { Menu, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import './style.scss'

const menu = (
	<Menu className='cw-dropmenu-global-conatiner'>
		<Menu.Item key='0'>Login</Menu.Item>
		<Menu.Item key='1'>Register</Menu.Item>
		<Menu.Item key='3'>Forgot Password</Menu.Item>
	</Menu>
)

export default function DropdownMenu() {
	return (
		<Dropdown overlay={menu} trigger={['click']}>
			<a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
				<UserOutlined className='cw-dropmenu-icon' />
			</a>
		</Dropdown>
	)
}

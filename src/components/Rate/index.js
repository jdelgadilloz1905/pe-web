/** @format */

import React from 'react'

import Rate from 'antd/lib/rate'

class NormalRate extends React.Component {
	render() {
		return (
			<>
				<Rate
					className={this.props.className}
					onChange={this.props.onChange}
					value={this.props.defaultValue}
				/>
			</>
		)
	}
}

export default NormalRate

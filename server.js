/** @format */

require('dotenv').config()

const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 4010

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`App launched on: ${PORT}`)
})

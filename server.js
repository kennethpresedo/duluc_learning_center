require('dotenv').config()
const path = require('path')
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico' )))

app.use('https://www.duluclearning.com/')
app.use('https://www.duluclearning.com/about')
app.use('https://www.duluclearning.com/contact')
app.use('https://www.duluclearning.com/services')

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
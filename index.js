const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

mongoose.Promise = global.Promise

const URLSTRING = 'mongodb://localhost/mongo-develop'
const PORT = 5000

let data = {
    name: 'Kostya',
    test: 'test',
}

app.get('/data', (req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
        res.contentType('application/json');

         let dateGreet = `какие-то данные для передачи во фронт`;

        res.end(dateGreet)
        console.log(`send ${data}`)
    } catch(e) {
        console.log('Что-то пошло не так!!!')
    }
})


async function startApp() {
    try {
        mongoose.connect(URLSTRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log('mongodb has been started...'))
            .catch((e) => console.log(e))

        app.use(express.static(path.resolve(__dirname, 'client')))

        app.get(`*`, (req, res) => {
            res.sendFile((path.resolve(__dirname, 'client', 'index.html')))
        })

        app.listen(PORT, () => console.log(`Server was been started on port: ${PORT}`))
    } catch (e) {
        console.log('Что-то пошло не так!!!')
        console.log(e)
    }
}

startApp()

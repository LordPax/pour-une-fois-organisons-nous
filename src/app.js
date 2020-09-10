const express = require('express')
const app = express()

const port = 8080
const domain = 'http://localhost:' + port + '/'

app.set('view engine', 'pug')

app.use('/assets', express.static('public'))
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => res.render('pages/index'))

app.listen(port, () => console.log('Ecoute le port', port, '...'))
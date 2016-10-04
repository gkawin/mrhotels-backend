import * as Database from './database'

import bodyParser from 'body-parser'
import cors from 'cors'
import Morgan from 'morgan'
import Express from 'express'
import Helmet from 'helmet'

import './bootstrap'

const app = Express()

// init
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

// db
app.use(Database.createConnection)
app.route('/api/v1/auth').post(auth).get(auth)
app.route('api/v1/users').post(auth)
app.use(Database.closeConnection)

app.listen(2100, () => {
  console.log('server is running.')
})

function auth (req, res, next) {
  console.log(req._dbConnect)
  res.send('hello this is auth login JWT')
  next()
}

import * as Database from './database'
import * as Services from './services'
import * as Middlewares from './middlewares'

import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import Express from 'express'
import helmet from 'helmet'

import './bootstrap'

const app = Express()

// init
app.use(Database.createConnection)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(Middlewares.jwt)
app.use(Middlewares.jwtHandleError)

// db
app.route('/api/v1/auth').post(Services.authentication)
app.route('/api/v1/users/createuser').post(Services.createUser)
app.route('/api/v1/users/:userid').get(Services.getUserById)
app.route('/api/v1/users/updateuser/:userid').put(Services.updateUserById)
app.route('/api/v1/users/updateusersetting/:userid').patch(Services.updateUserSettingsById)
app.route('/api/v1/users/deleteuser/:userid').delete(Services.deleteUserById)
app.route('/users/:userid/logs').get(Services.getActivitiesLogs)
app.use(Database.closeConnection)

app.listen(2100, () => {
  console.log('server is running.')
})

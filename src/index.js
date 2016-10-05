import * as Database from './database'
import * as Services from './services'

import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import Express from 'express'
import helmet from 'helmet'
// import jwt from 'express-jwt'

import './bootstrap'

const app = Express()

// init
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet())
// app.use(jwt({ secret: 'shhhhhhared-secret' }))
// app.use((err, req, res, next) => {
//   if (err.name === 'UnauthorizedError') {
//     res.status(401).send('invalid token...')
//   }
// })

// db
app.use(Database.createConnection)
app.route('/api/v1/auth').post(auth)
app.route('/api/v1/users/createuser').post(Services.createUser)
app.route('/api/v1/users/:userid').get(Services.getUserById)
app.route('/api/v1/users/updateuser/:userid').put(Services.updateUserById)
app.route('/api/v1/users/updateusersetting/:userid').patch(Services.updateUserSettingsById)
app.route('/api/v1/users/deleteuser/:userid').delete(Services.deleteUserById)
app.use(Database.closeConnection)

app.listen(2100, () => {
  console.log('server is running.')
})

function auth (req, res, next) {
  console.log(req.header)
  res.json({ message: 'Hello! The API is at http://localhost:2100/api' })
  next()
}

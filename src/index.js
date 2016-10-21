
import Express from 'express'
import Boom from 'boom'

import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import expressjwt from 'express-jwt'

import routes from './routes'
import errorHandlers from './errorHandlers'

import './bootstrap'

const app = Express()

// init
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(expressjwt({ secret: process.env.JWT_SECRET_KEY, credentialsRequired: false }).unless({ path: [ '/api/v1/auth' ] }))

app.use('/api/v1/', routes)
app.all('*', (req, res, next) => next(Boom.notFound()))
app.use(errorHandlers)

app.listen(2100, () => {
  console.log('server is running.')
})

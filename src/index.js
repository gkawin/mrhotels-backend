import * as Database from './database'
import * as Middlewares from './middlewares'

import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import Express from 'express'
import helmet from 'helmet'
import compression from 'compression'

import routes from './routes'

import './bootstrap'

const app = Express()

// init
app.use(Database.createConnection(app))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(Middlewares.jwt)
app.use(Middlewares.jwtHandleError)
app.use('/api/v1/', routes(app))
app.use(Database.closeConnection)

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({ error: err.message })
})

app.listen(2100, () => {
  console.log('server is running.')
})

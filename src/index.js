
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import Express from 'express'
import helmet from 'helmet'
import compression from 'compression'

import { notFound } from './lib/errorHandler'
import routes from './routes'

import './bootstrap'

const app = Express()

// init
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use('/api/v1/', routes)
app.all('*', (req, res, next) => next(notFound()))

app.use((err, req, res, next) => {
  const code = err.code || 500
  const message = err.message
  res.status(code).json({ code, message })
})

app.listen(2100, () => {
  console.log('server is running.')
})

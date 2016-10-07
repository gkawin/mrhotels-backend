
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
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use('/api/v1/', routes)

app.use((err, req, res, next) => {
  const errorCode = err.code || 500
  const errorMessage = err.message
  res.status(errorCode).json({
    errorCode,
    errorMessage
  })
})

app.listen(2100, () => {
  console.log('server is running.')
})


import Promise from 'bluebird'
import BodyParser from 'body-parser'
import Cors from 'cors'
import Morgan from 'morgan'
import Express from 'express'
import Helmet from 'helmet'
import fs from 'fs'
import dotenv from 'dotenv'

import r from 'rethinkdb'

loadConfig('.env')

function loadConfig (path) {
  if (fs.existsSync(path)) {
    console.log('(Loading configuration from ' + path + ')')
    dotenv.config({ path })
  } else {
    console.log('(Not loading configuration from ' + path + ')')
  }
}

// DB CONNECT

const connectToDriver = Promise.coroutine(function * () {
  const connection = yield r.connect({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    db: process.env.DB_NAME
  })
  try {
    yield r.tableCreate(`users`).run(connection)
  } catch (e) {
    console.log(e.message)
  }
})

connectToDriver()

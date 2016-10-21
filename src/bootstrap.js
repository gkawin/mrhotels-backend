import fs from 'fs'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const loadConfig = (path) => {
  if (fs.existsSync(path)) {
    console.log('(Loading configuration from ' + path + ')')
    dotenv.config({ path })
  } else {
    console.log('(Not loading configuration from ' + path + ')')
  }
}

loadConfig('.env')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/mh_login')

import fs from 'fs'
import dotenv from 'dotenv'
import { connect as dbConnect } from 'mongoose'

loadConfig('.env')
dbConnect('mongodb://localhost/mh_login')

const loadConfig = (path) => {
  if (fs.existsSync(path)) {
    console.log('(Loading configuration from ' + path + ')')
    dotenv.config({ path })
  } else {
    console.log('(Not loading configuration from ' + path + ')')
  }
}

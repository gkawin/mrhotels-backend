import fs from 'fs'
import dotenv from 'dotenv'

const loadConfig = (path) => {
  if (fs.existsSync(path)) {
    console.log('(Loading configuration from ' + path + ')')
    dotenv.config({ path })
  } else {
    console.log('(Not loading configuration from ' + path + ')')
  }
}

loadConfig('.env')

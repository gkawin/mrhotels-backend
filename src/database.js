
import r from 'rethinkdb'

export const createConnection = (app) => async (req, res, next) => {
  const conn = await r.connect({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    db: process.env.DB_NAME
  })
  app.set('dbConnect', conn)
  next()
}

export const closeConnection = async (req, res, next) => {
  req._dbConnect.close()
}

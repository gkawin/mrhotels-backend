
import r from 'rethinkdb'

export const createConnection = async (req, res, next) => {
  const conn = await r.connect()
  req._dbConnect = conn
  next()
}

export const closeConnection = async (req, res, next) => {
  req._dbConnect.close()
}

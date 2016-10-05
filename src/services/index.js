
import r from 'rethinkdb'

export const authentication = async (req, res, next) => {
  const connection = req._dbConnect
  const email = req.body.email
  const result = await r.table('users').filter(r.row('email').eq(email)).run(connection)
  const allAsArray = await result.toArray()
  await res.json(allAsArray)
  next()
}

export const createUser = async (req, res, next) => {
  await res.json({ message: 'create' })
  next()
}

export const getUserById = (req, res, next) => {
  res.json({ message: 'all member is here' })
  next()
}

export const updateUserById = (req, res, next) => {
  next()
}

export const updateUserSettingsById = (req, res, next) => {
  next()
}

export const deleteUserById = (req, res, next) => {
  next()
}

export const getActivitiesLogs = (req, res, next) => {
  next()
}

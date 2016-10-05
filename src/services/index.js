
import r from 'rethinkdb'
import jwt from 'jsonwebtoken'

export const authentication = async (req, res, next) => {
  const connection = req._dbConnect
  const email = req.body.email
  const result = await r.table('users').filter(r.row('email').eq(email)).run(connection)
  const user = await result.toArray()
  if (user.length === 0) res.json({ success: false, message: 'unauthorise' })

  // jwt token
  const token = jwt.sign(user[0], 'mrhotels_secret_key', {
    expiresIn: '1h'
  })
  res.json({
    success: true,
    token
  })
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

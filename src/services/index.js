
import r from 'rethinkdb'
import jwt from 'jsonwebtoken'
import _ from 'lodash'
import bcrypt from 'bcrypt'

export const authentication = (app) => async (req, res, next) => {
  const connection = app.get('dbConnect')
  console.log(connection)
  const email = _.get(req, 'body.email', null)
  const password = _.get(req, 'body.password', null)
  const result = await r.table('users').filter(r.row('email').eq(email)).run(connection)
  const user = await result.toArray()
  if (user.length === 0) res.json({ success: false, message: 'unauthorise' })

  // jwt token
  const token = jwt.sign(_.first(user), 'mrhotels_secret_key', {
    expiresIn: '1h'
  })
  res.json({
    success: true,
    token
  })
}

export const createUser = (app) => async (req, res, next) => {
  await res.json({ message: 'create' })
  next()
}

export const getUserById = (app) => (req, res, next) => {
  res.json({ message: 'all member is here' })
  next()
}

export const updateUserById = (app) => (req, res, next) => {
  next()
}

export const updateUserSettingsById = (app) => (req, res, next) => {
  next()
}

export const deleteUserById = (app) => (req, res, next) => {
  next()
}

export const getActivitiesLogs = (app) => (req, res, next) => {
  next()
}

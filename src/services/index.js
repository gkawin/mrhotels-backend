import * as db from '../database'
import { badRequest, boom } from '../lib/errorHandler'

import jwt from 'jsonwebtoken'
import _ from 'lodash'
import bcrypt from 'bcrypt'

export const authentication = async (req, res, next) => {
  if (_.isEmpty(req.body)) next(badRequest())
  try {
    const users = await db.findAll('users')
    const token = jwt.sign(_.first(users), 'mrhotels_secret_key', {
      expiresIn: '1h'
    })
    res.json({
      token,
      response_time: new Date()
    })
  } catch (e) {
    next(boom(e.message))
  }
  res.json({ success: true })
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

export const notFound = (req, res, next) => {
  next({
    status: 404,
    message: 'Not Found'
  })
}

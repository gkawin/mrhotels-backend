import * as db from '../database'
import { badRequest, boom } from '../lib/errorHandler'

import jwt from 'jsonwebtoken'
import _ from 'lodash'
import bcrypt from 'bcrypt'
import Joi from 'joi'

export const authentication = async (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    })
    Joi.validate(req.body, schema, (err) => {
      if (err) next(badRequest(err.message))
    })
    const email = req.body.email
    const users = await db.findBy('users', 'email', email)
    const token = jwt.sign(_.first(users), 'mrhotels_secret_key', {
      expiresIn: '1h'
    })
    res.json({
      token,
      response_time: new Date()
    })
  } catch (e) {
    // specially for internal error
    next(boom(e.message))
  }
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

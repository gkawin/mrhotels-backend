import * as Services from './services'

import Express from 'express'

const route = Express.Router()

export default (app) => ([
  route.post('/auth', Services.authentication(app)),
  route.post('/users/createuser', Services.createUser(app)),
  route.get('/users/:userid', Services.getUserById(app)),
  route.put('/users/updateuser/:userid', Services.updateUserById(app)),
  route.patch('/users/updateusersetting/:userid', Services.updateUserSettingsById(app)),
  route.delete('/users/deleteuser/:userid', Services.deleteUserById(app)),
  route.get('/users/:userid/logs', Services.getActivitiesLogs(app))
])

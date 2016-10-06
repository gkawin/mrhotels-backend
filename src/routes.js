import * as Services from './services'

import Express from 'express'

const route = Express.Router()

export default [
  route.post('/auth', Services.authentication),
  route.post('/users/createuser', Services.createUser),
  route.get('/users/:userid', Services.getUserById),
  route.put('/users/updateuser/:userid', Services.updateUserById),
  route.patch('/users/updateusersetting/:userid', Services.updateUserSettingsById),
  route.delete('/users/deleteuser/:userid', Services.deleteUserById),
  route.get('/users/:userid/logs', Services.getActivitiesLogs)
]

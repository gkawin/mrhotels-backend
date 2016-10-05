
export const authentication = (req, res, next) => {
  res.json({ message: 'authentication' })
  next()
}

export const createUser = (req, res, next) => {
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

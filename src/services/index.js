
export const createUser = (req, res, next) => {
  next()
}

export const getUserById = (req, res, next) => {
  console.log(req._dbConnect)
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


import jwt from 'express-jwt'

const jwtCheck = jwt({
  secret: process.env.JWT_SECRET_KEY,
  credentialsRequired: false,
  getToken: (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
      return req.query.token
    }
    return null
  }
})
.unless({ path: '/api/v1/auth' })

export default jwtCheck

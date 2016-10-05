
import jwt from 'express-jwt'

const jwtCheck = jwt({
  secret: new Buffer('mrhotels', 'base64')
})
.unless({ path: '/api/v1/auth' })

export default jwtCheck

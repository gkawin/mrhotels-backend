
import jwt from 'express-jwt'

const jwtCheck = jwt({
  secret: new Buffer('mrhotels', 'base64'),
  audience: 'mrhotels_client'
})
.unless({ path: '/api/v1/auth' })

export default jwtCheck

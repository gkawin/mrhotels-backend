
export default (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      code: 401,
      name: 'Unauthorized'
    })
  }
}

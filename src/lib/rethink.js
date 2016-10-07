
import r from 'rethinkdb'

const connection = r.connect({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  db: process.env.DB_NAME
})
.then((connection) => {
  module.exports.findAll = (tableName) => (
    r.table(tableName).run(connection).then((result) => result.toArray())
  )
})

module.exports = connection

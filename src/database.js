
import rdb from 'rethinkdb'

const createConnection = async () => rdb.connect({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  db: 'mh_login'
})

const closeConnection = (connection) => (
  (connection)
    ? connection.close()
    : null
)

export const findAll = async (tableName) => {
  const connection = await createConnection()
  const result = await rdb.table(tableName).run(connection)
  closeConnection(connection)
  return await result.toArray()
}

export const findById = async (tableName, id) => {
  const connection = await createConnection()
  const result = await rdb.table(tableName).get(id).run(connection)
  closeConnection(connection)
  return await result.toArray()
}

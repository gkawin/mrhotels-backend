
import rdb from 'rethinkdb'

const createConnection = async () => rdb.connect({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  db: process.env.DB_NAME
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

export const findBy = async (tableName, fieldName, value) => {
  const connection = await createConnection()
  const result = await rdb.table(tableName).filter(rdb.row(fieldName).eq(value)).run(connection)
  closeConnection(connection)
  return await result.toArray()
}

export const insert = async (tableName, object) => {
  const connection = await createConnection()
  const result = await rdb.table(tableName).insert(object).run(connection)
  closeConnection(connection)
  return await result.toArray()
}

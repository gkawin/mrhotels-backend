
import r from 'rethinkdb'

export const find = async (tableName, id, connection) => (
  await r.table(tableName).get(id).run(connection)
)

export const findAll = async (tableName, connection) => {
  const resultSet = await r.table(tableName).run(connection)
  return await resultSet.toArray()
}

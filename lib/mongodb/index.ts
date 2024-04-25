import { MongoClient } from 'mongodb'

const clientConnector = MongoClient.connect(process.env.DB_URL as string, {
  maxPoolSize: 10,
})

export default clientConnector

import { defineConfig } from 'cypress'
import { Db, MongoClient } from 'mongodb'

import { QueryModel } from './src/domains/QueryModel'

const DB_NAME = 'consulta-cep-test'
const DB_URL = `mongodb://localhost:27017/${DB_NAME}`
let db: Db | null = null;
(async () => {
  const connection = await MongoClient.connect(DB_URL)
  db = connection.db(DB_NAME)
})()

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      on('task', {
        async cepCollection() {
          await db?.collection('querys').deleteMany({})
          return null
        }
      })
    },
  },
  video: false,
})
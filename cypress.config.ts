import { defineConfig } from 'cypress'
import { Db, MongoClient } from 'mongodb'

import { QueryModel } from './src/domains/QueryModel'

const DB_NAME = 'consulta-cep-test'
const DB_URL = `mongodb://localhost:27017/${DB_NAME}`
let db: Db | null = null;
(async () => {
  const dataUrl = `${DB_URL}/${DB_NAME}`;
  const connection = await MongoClient.connect(dataUrl)
  db = connection.db(DB_NAME)
})()

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      on('task', {
        async queryCollection() {
          await db?.collection('ceps').deleteMany({})
          return null
        }
      })
    },
  },
  video: false,
})
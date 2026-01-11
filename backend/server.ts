import http from 'http'
import app from './app'
import dotenv from 'dotenv'
import { connectDatabase, disconnectDatabase } from './data/database'

dotenv.config()

const PORT = process.env.PORT || 4000

let server: http.Server

async function start() {
  try {
    await connectDatabase()

    server = http.createServer(app)

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })

  } catch (error) {
    console.error('Error starting server:', error)
    process.exit(1)
  }
}

async function shutdown() {
  console.log('Shutting down server...')

  if (server) {
    server.close(async () => {
      await disconnectDatabase()
      console.log('Server closed.')
      process.exit(0)
    })
  } else {
    process.exit(0)
  }
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

start()

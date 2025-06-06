import express from "express"
import { Server } from "socket.io"
import { createServer } from "node:http"

// Express app
export const app = express()

// Node server using Express
export const server = createServer(app)

// Socket server
export const io = new Server(server, {
    cors: {
      origin: process.env.WHITELISTED_DOMAINS, // TODO: Works for only one domain
      methods: [ "GET", "POST" ]
    }
  })

  
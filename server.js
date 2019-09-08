const express = require("express")
const http = require('http')
const socketIO = require('socket.io')

const { router } = require("./router")

const PORT = 4001

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// our web socket (socket io) code
require("./socketio")(io)

app.use(router)

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
const LISTENER_ACTIONS = {
    CONTROLS: "CONTROLS"
}

const EMIT_ACTIONS = {
    DATA: "DATA"
}

module.exports = function(io) {
    io.on('connection', socket => {
        console.log('User connected')

        socket.on("test", (msg) => {
            console.log(msg)
        })

        socket.on(LISTENER_ACTIONS.CONTROLS, (data, type, meta) => {
            console.log("CONTROL EVENT LISTENER", type, data)
            io.emit(EMIT_ACTIONS.DATA, type, data, meta)
        })
        
        socket.on('disconnect', () => {
          console.log('user disconnected')
        })
    })
}
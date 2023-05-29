module.exports = function (io) {
    io.on('connection', (socket) => {
      socket.on('join PM', (pm) => {
        socket.join(pm.room1)
        socket.join(pm.room2)
      })
      socket.on('private message', (message, callback) => {
        io.to(message.room).emit('new message', {
          text: message.text,
          sender: message.sender,
          room: message.room,
        })
        callback()
      })
    })
  }
  
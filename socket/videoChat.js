module.exports = function (io) {
    // signaling
    io.on('connection', function (socket) {
      // console.log('a user connected');
  
      socket.on('create or join', function (room) {
        // console.log('create or join to room ', room);
  
        var myRoom = io.sockets.adapter.rooms[room] || { length: 0 }
        var numClients = myRoom.length
  
        // console.log(room, ' has ', numClients, ' clients');
  
        if (numClients == 0) {
          socket.join(room)
          socket.emit('created', room)
        } else if (numClients == 1) {
          socket.join(room)
          socket.emit('joined', room)
        } else {
          socket.emit('full', room)
        }
      })
  
      socket.on('ready', function (room) {
        socket.broadcast.to(room).emit('ready')
      })
  
      socket.on('candidate', function (event) {
        socket.broadcast.to(event.room).emit('candidate', event)
      })
  
      socket.on('offer', function (event) {
        socket.broadcast.to(event.room).emit('offer', event.sdp)
      })
  
      socket.on('answer', function (event) {
        socket.broadcast.to(event.room).emit('answer', event.sdp)
      })
    })
  }
  
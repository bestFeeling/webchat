var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var clients = []

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

http.listen(3003,function(){
	console.log('listening on 3003');
});

io.on('connection', function(user){
	clients.push({ id: clients.length, uuid: user.id })

	io.to(user.id).emit('init',{ id: clients.length-1, uuid: user.id })
	io.emit('userlist',clients)
	console.log('a user connected.  client[' + (clients.length-1) + '] .= ' + clients[clients.length-1]);

	user.on('message',function (data) {
		io.emit('message',data)
	})

	user.on('disconnect', function(){
		for(var i in clients){
			if(clients[i].uuid == user.id){
				clients.splice(i,1)
				break;
			}
		}
		io.emit('userlist',clients)
        console.info('Client gone (id=' + user.id + ').');
        
	});
});

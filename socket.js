module.exports = function(httpServer, session) {
	var ios = require('socket.io-express-session');
	var io = require('socket.io').listen(httpServer);
	io.use(ios(session));

	io.sockets.on('connection',function(socket) {
	});
	return io;
};



var net = require('net');
const port = 1337

var clients: Array<object> = [];

function createUUID(){
   
    let dt = new Date().getTime()
    
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = (dt + Math.random()*16)%16 | 0
        dt = Math.floor(dt/16)
        return (c=='x' ? r :(r&0x3|0x8)).toString(16)
    })
    
    return uuid
}

var server = net.createServer((socket: any) => {
	console.log('Connection established\r\n');

	var clientId: string = createUUID();

	socket.id = clientId;
	console.log(socket.id);

	clients.push(socket);
	console.log("Active Connections: " + clients.length);

	socket.on('end', () => {
		//
		// WARNING
		//
		// this code is untested
		// should work, probably won't
		//
		console.log(socket.id);

		var targetIndex: number = -1;

		for (var v: number = 0; v < clients.length; v++) {
			var client: any = clients[v];

			if (client.id === socket.id)
				targetIndex = v;
		}

		clients.splice(targetIndex, 1);

		console.log('client disconnected');
		console.log("Active Connections: " + clients.length);
	});
	
	socket.on('error', (data: any) => {
		if (data.code === "ECONNRESET") {
			console.log(socket.id);

			var targetIndex: number = -1;

			for (var v: number = 0; v < clients.length; v++) {
				var client: any = clients[v];

				if (client.id === socket.id)
					targetIndex = v;
			}

			clients.splice(targetIndex, 1);

			console.log("Client unexpectedly disconnected");
			console.log("Active Connections: " + clients.length);
		}
	});

	socket.on('data', (data: any) => {
		console.log(data.toString());

		socket.write("SERVER SAYS HI");
		socket.pipe(socket);

		if (false) { // example of sending data to other clients
			var testSocket: any = clients[0];
			testSocket.write('SERVER SAYS HI');
			testSocket.pipe(testSocket);
		}
		console.log();
	});
});

server.on('end', () => {
	console.log("pog")
})

server.on('error', (err: any) => {
	throw err;
})

server.listen(1337, '127.0.0.1');
console.log(`Server listening on port ${port}`)
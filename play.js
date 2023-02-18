const net = require('net');
const PORT = 50541;
const IP = 'localhost'

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', function(data){
    console.log(data);
  });

  return conn;

};

console.log("Connecting ...");
connect();
const {IP, PORT} = require('./constants');

const net = require('net');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', function(){
    console.log('Successfully connected to game server');
    conn.write(`Name: SAM`)
  });

  conn.on('data', function(data){
    console.log(data);
  });


  return conn;
};

module.exports = { connect };

const PORT = 50541;
const IP = 'localhost'

const moves = {
  'w' : 'Move: up',
  'a' : 'Move: left',
  's' : 'Move: down',
  'd' : 'Move: right'
};

const messages = {
  'q' : "Say: Thanks for playing!",
  'z' : "Say: Good Job!"
};


module.exports = { 
  moves, 
  messages,
  IP,
  PORT };
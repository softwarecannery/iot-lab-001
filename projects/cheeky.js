var Cylon = require('cylon');
var DCD = require('dream-cheeky-thunder-driver');

Cylon.robot({
  connections: {
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.108:1883' },
  },

  devices: {
   message: { driver: 'mqtt', topic: 'roll', adaptor: 'mqtt', connection: 'server' },
  },

  work: function(my) {

    my.message.on('message', function (topic) {
    console.log(topic);

    if ( topic == "red" ) { };
    if ( topic == "green" ) { };
    if ( topic == "blue" ) { };
    if ( topic == "roll-short" ) { };
    if ( topic == "azul" ) { };
    if ( topic == "ev3-move" ) { };
    if ( topic == "ardrone" ) { };
    if ( topic == "cheeky-up" ) { DCD.moveUp(500); };
    if ( topic == "cheeky-down" ) { DCD.moveDown(500); };
    if ( topic == "cheeky-right" ) { DCD.moveRight(500); };
    if ( topic == "cheeky-left" ) { DCD.moveLeft(500); };
    if ( topic == "cheeky-fire" ) { DCD.fire(1); };
 });
  }
}).start();

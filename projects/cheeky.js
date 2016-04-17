var Cylon = require('cylon');
var DCD = require('dream-cheeky-thunder-driver');

Cylon.robot({
  connections: {
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.105:1883' },
    audio: { adaptor: 'speech' }
  },

  devices: {
   message: { driver: 'mqtt', topic: 'iot', adaptor: 'mqtt', connection: 'server' },
    voice1: { driver: 'speech', language: "english", gender: "f", speed: 200, connection: 'audio' },
  },

  work: function(my) {

    my.voice1.say("initiating missiles");
    my.message.on('message', function (topic) {
    console.log(topic);

    if ( topic == "cheeky-up" ) { DCD.moveUp(500); };
    if ( topic == "cheeky-down" ) { DCD.moveDown(500); };
    if ( topic == "cheeky-right" ) { DCD.moveRight(500); };
    if ( topic == "cheeky-left" ) { DCD.moveLeft(500); };
    if ( topic == "cheeky-fire" ) { DCD.fire(1); };
    if ( topic == "cheeky-park" ) { DCD.park(); };
 });
  }
}).start();

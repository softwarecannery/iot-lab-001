var Cylon = require('cylon');

Cylon.robot({
  connections: {
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.105:1883' },
    audio: { adaptor: 'speech' }
  },

  devices: {
   message: { driver: 'mqtt', topic: 'iot', adaptor: 'mqtt', connection: 'server' },
    voice1: { driver: 'speech', language: "english", gender: "f", speed: 275, connection: 'audio' },
  },

  work: function(my) {
  my.voice1.say("initiating speakers");

 my.message.on('message', function (topic) {
    my.voice1.say(topic);
    console.log(topic);

    if ( topic == "red" ) { };
    if ( topic == "green" ) { };
    if ( topic == "blue" ) { };
    if ( topic == "roll-short" ) { };
    if ( topic == "azul" ) { };
    if ( topic == "ev3-move" ) { };
    if ( topic == "ardrone" ) { };

 });
  }
}).start();

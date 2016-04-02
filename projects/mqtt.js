var Cylon = require('cylon');

Cylon.robot({
  connections: {
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.108:1883' },
    audio: { adaptor: 'speech' }
  },

  devices: {
   message: { driver: 'mqtt', topic: 'roll', adaptor: 'mqtt', connection: 'server' },
    voice1: { driver: 'speech', language: "english", gender: "f", speed: 1, connection: 'audio' },
  },

  work: function(my) {

 my.message.on('message', function (topic) {
    my.voice1.say("incoming message");
    console.log(topic);

    if ( topic == "red" ) { 
      my.voice1.say("red");
    };

    if ( topic == "green" ) { 
      my.voice1.say("green");
    };

    if ( topic == "blue" ) { 
      my.voice1.say("green");
    };

    if ( topic == "roll-short" ) { 
      my.voice1.say("rolling");
    };

    if ( topic == "azul" ) { 
      my.voice4.say("azul");
    };

 });
  }
}).start();

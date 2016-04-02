var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'dcc9720d629b', module: 'cylon-ble' },
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.108:1883' },
    audio: { adaptor: 'speech' }
  },

  devices: {
       bb8: { driver: 'bb8', module: "cylon-sphero-ble", adaptor: 'central', connection: 'bluetooth' },
   message: { driver: 'mqtt', topic: 'roll', adaptor: 'mqtt', connection: 'server' },
    voice1: { driver: 'speech', language: "english", gender: "f", speed: 255, connection: 'audio' },
    voice2: { driver: 'speech', language: "spanish", gender: "m", speed: 255, connection: 'audio' },
    voice3: { driver: 'speech', language: "spanish", gender: "m", speed: 255, connection: 'audio' },
    voice4: { driver: 'speech', language: "english", gender: "f", speed: 255, connection: 'audio' }
  },

  work: function(my) {
    my.bb8.color(0x00FFFF);

    my.voice1.say("estoy listo");
    after(500, function() { my.bb8.color(0xFF0000); });

 my.message.on('message', function (topic) {
    console.log(topic);
    if ( topic == "red" ) { my.bb8.color(0xFF0000); };
    if ( topic == "green" ) { my.bb8.color(0x00FF00); };
    if ( topic == "blue" ) { my.bb8.color(0x0000FF); };
    if ( topic == "roll-short" ) { 
      my.bb8.roll(255, 90);
      setTimeout(function() { my.bb8.stop(0); }, 200);
    };
    if ( topic == "azul" ) { my.bb8.color(0xF0FFFF); };

 });
  }
}).start();

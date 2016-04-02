var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'd16443432e7e', module: 'cylon-ble' },
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.108:1883' },
    audio: { adaptor: 'speech' }
  },

  devices: {
       bb8: { driver: 'bb8', module: "cylon-sphero-ble", adaptor: 'central', connection: 'bluetooth' },
   message: { driver: 'mqtt', topic: 'roll', adaptor: 'mqtt', connection: 'server' },
    voice1: { driver: 'speech', language: "english", gender: "f", speed: 1, connection: 'audio' },
    voice2: { driver: 'speech', language: "spanish", gender: "m", speed: 120, connection: 'audio' },
    voice3: { driver: 'speech', language: "spanish", gender: "m", speed: 120, connection: 'audio' },
    voice4: { driver: 'speech', language: "english", gender: "f", speed: 230, connection: 'audio' }
  },

  work: function(my) {
    my.bb8.color(0x00FFFF);

    my.voice1.say("estoy listo, vaminos!");
    after(500, function() { my.bb8.color(0xFF0000); });
    after(1000, function() { my.bb8.roll(255, 90); });
    after(2000, function() { my.bb8.stop(); });

 my.message.on('message', function (topic) {
    console.log(topic);
    if ( topic == "red" ) { 
      my.bb8.color(0xFF0000);
      my.voice1.say("robot es rojo");
    };
    if ( topic == "green" ) { 
      my.bb8.color(0x00FF00);
      my.voice2.say("robot es verde");
    };
    if ( topic == "blue" ) { 
      my.bb8.color(0x0000FF);
      my.voice3.say("robot es azul");
    };
    if ( topic == "roll-short" ) { 
      my.bb8.roll(255, 90);
      my.voice1.say("rolling");
      setTimeout(function() { my.bb8.stop(0); }, 2000);
    };
    if ( topic == "azul" ) { 
      my.bb8.color(0xF0FFFF);
      my.voice4.say("The robot is some sort of lightblueish greenish color. Why do I talk so fast? Change this garrett. Pleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeease. Help! Help! Help! Help me garrett! Please!");
      after(20000, function() { my.voice1.say("No."); });
      
    };

 });
  }
}).start();

var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'd16443432e7e', module: 'cylon-ble' },
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.105:1883' },
    audio: { adaptor: 'speech' }
  },

  devices: {
       bb8: { driver: 'bb8', module: "cylon-sphero-ble", adaptor: 'central', connection: 'bluetooth' },
   message: { driver: 'mqtt', topic: 'iot', adaptor: 'mqtt', connection: 'server' },
    voice1: { driver: 'speech', language: "english", gender: "f", speed: 300, connection: 'audio' },
    voice2: { driver: 'speech', language: "spanish", gender: "m", speed: 300, connection: 'audio' },
    voice3: { driver: 'speech', language: "spanish", gender: "m", speed: 300, connection: 'audio' },
    voice4: { driver: 'speech', language: "english", gender: "f", speed: 300, connection: 'audio' }
  },

  work: function(my) {
    my.bb8.color(0x00FFFF);

    after(500, function() { my.bb8.color(0xFF0000); });

 my.message.on('message', function (topic) {
    console.log(topic);
    if ( topic == "bb8-red" ) { 
      my.bb8.color(0xFF0000);
    };
    if ( topic == "bb8-green" ) { 
      my.bb8.color(0x00FF00);
    };
    if ( topic == "bb8-blue" ) { 
      my.bb8.color(0x0000FF);
    };
    if ( topic == "bb8-spin-left" ) { 
      my.bb8.spin("right",150);
    };
    if ( topic == "bb8-spin-right" ) { 
      my.bb8.spin("left",150);
    };
    if ( topic == "bb8-spin-stop" ) { 
      my.bb8.spin("right",0);
    };
    if ( topic == "roll-short" ) { 
      my.bb8.roll(100, 0);
      setTimeout(function() { my.bb8.stop(0); }, 1000);
    };
    if ( topic == "bb8-roll-up" ) { 
      my.bb8.roll(60, 0);
      setTimeout(function() { my.bb8.stop(0); }, 2000);
    };
    if ( topic == "bb8-roll-right" ) { 
      my.bb8.roll(60, 90);
      setTimeout(function() { my.bb8.stop(0); }, 2000);
    };
    if ( topic == "bb8-roll-back" ) { 
      my.bb8.roll(60, 180);
      setTimeout(function() { my.bb8.stop(0); }, 2000);
    };
    if ( topic == "bb8-roll-left" ) { 
      my.bb8.roll(60, 270);
      setTimeout(function() { my.bb8.stop(0); }, 2000);
    };
    if ( topic == "bb8-no" ) { 
      my.bb8.spin("right",120);
      setTimeout(function() { my.bb8.spin("left",120); }, 200);
      setTimeout(function() { my.bb8.spin("right",120); }, 400);
      setTimeout(function() { my.bb8.spin("left",120); }, 600);
      setTimeout(function() { my.bb8.spin("right",0); }, 800);
    };
    if ( topic == "bb8-yes" ) { 
      setTimeout(function() { my.bb8.roll(120,0); }, 200);
      setTimeout(function() { my.bb8.stop(0); }, 600);
    };

 });
  }
}).start();

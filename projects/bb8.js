var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bb8Robot1: { adaptor: 'central', uuid: 'd16443432e7e', module: 'cylon-ble' },
    bb8Robot2: { adaptor: 'central', uuid: 'dcc9720d629b', module: 'cylon-ble' },
    ollieRobot1: { adaptor: 'central', uuid: 'f687ca48d559', module: 'cylon-ble' },
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.105:1883' },
    audio: { adaptor: 'speech' }
  },

  devices: {
       bb8: { driver: 'bb8', module: "cylon-sphero-ble", adaptor: 'central', connection: 'bb8Robot1' },
       bb82: { driver: 'bb8', module: "cylon-sphero-ble", adaptor: 'central', connection: 'bb8Robot2' },
       ollie1: { driver: 'bb8', module: "cylon-sphero-ble", adaptor: 'central', connection: 'ollieRobot1' },
   message: { driver: 'mqtt', topic: 'iot', adaptor: 'mqtt', connection: 'server' },
    voice1: { driver: 'speech', language: "english", gender: "f", speed: 300, connection: 'audio' },
  },

  work: function(my) {
    my.bb8.color(0x00FFFF);
    my.bb82.color(0x00FFFF);
    my.ollie1.color(0x00FFFF);
    my.voice1.say("Initiating BB8,   BB8 1  and    Ollie");

    after(500, function() { my.bb8.color(0xFF0000); });
    after(1500, function() { my.bb82.color(0xFF0000); });
    after(1500, function() { my.ollie1.color(0xFF0000); });

 my.message.on('message', function (topic) {
    console.log(topic);
    if ( topic == "bb8-red" ) { 
      my.bb8.color(0xFF0000); 
      my.bb82.color(0xFF0000); 
      my.ollie1.color(0xFF0000); 
    };
    if ( topic == "bb8-green" ) { 
      my.bb8.color(0x00FF00); 
      my.bb82.color(0x00FF00); 
      my.ollie1.color(0x00FF00); 
    };
    if ( topic == "bb8-blue" ) { 
      my.bb8.color(0x0000FF); 
      my.bb82.color(0x0000FF); 
      my.ollie1.color(0x0000FF); 
    };
    if ( topic == "bb8-spin-left" ) { 
      my.bb8.spin("right",90); 
      my.bb82.spin("right",90); 
      my.ollie1.spin("right",90); 
    };
    if ( topic == "bb8-spin-right" ) { 
      my.bb8.spin("left",90); 
      my.bb82.spin("left",90); 
      my.ollie1.spin("left",90); 
    };
    if ( topic == "bb8-spin-stop" ) { 
      my.bb8.spin("right",0); 
      my.bb82.spin("right",0); 
      my.ollie1.spin("right",0); 
    };
    if ( topic == "roll-short" ) { 
      my.bb8.roll(100, 0); setTimeout(function() { my.bb8.stop(0); }, 1000);
      my.bb82.roll(100, 0); setTimeout(function() { my.bb82.stop(0); }, 1000);
      my.ollie1.roll(100, 0); setTimeout(function() { my.ollie1.stop(0); }, 1000);
    };
    if ( topic == "bb8-roll-up" ) { 
      my.bb8.roll(60, 0); setTimeout(function() { my.bb8.stop(0); }, 2000);
      my.bb82.roll(60, 0); setTimeout(function() { my.bb82.stop(0); }, 2000);
      my.ollie1.roll(60, 0); setTimeout(function() { my.ollie1.stop(0); }, 2000);
    };
    if ( topic == "bb8-roll-right" ) { 
      my.bb8.roll(60, 90); setTimeout(function() { my.bb8.stop(0); }, 2000);
      my.bb82.roll(60, 90); setTimeout(function() { my.bb82.stop(0); }, 2000);
      my.ollie1.roll(60, 90); setTimeout(function() { my.ollie1.stop(0); }, 2000);
    };
    if ( topic == "bb8-roll-back" ) { 
      my.bb8.roll(60, 180); setTimeout(function() { my.bb8.stop(0); }, 2000);
      my.bb82.roll(60, 180); setTimeout(function() { my.bb82.stop(0); }, 2000);
      my.ollie1.roll(60, 180); setTimeout(function() { my.ollie1.stop(0); }, 2000);
    };
    if ( topic == "bb8-roll-left" ) { 
      my.bb8.roll(60, 270); setTimeout(function() { my.bb8.stop(0); }, 2000);
      my.bb82.roll(60, 270); setTimeout(function() { my.bb82.stop(0); }, 2000);
      my.ollie1.roll(60, 270); setTimeout(function() { my.ollie1.stop(0); }, 2000);
    };
    if ( topic == "bb8-no" ) { 
      my.bb8.spin("right",120);
      setTimeout(function() { my.bb8.spin("left",120); }, 200);
      setTimeout(function() { my.bb8.spin("right",120); }, 400);
      setTimeout(function() { my.bb8.spin("left",120); }, 600);
      setTimeout(function() { my.bb8.spin("right",0); }, 800);
      my.bb82.spin("right",120);
      setTimeout(function() { my.bb82.spin("left",120); }, 200);
      setTimeout(function() { my.bb82.spin("right",120); }, 400);
      setTimeout(function() { my.bb82.spin("left",120); }, 600);
      setTimeout(function() { my.bb82.spin("right",0); }, 800);
      my.ollie1.spin("right",120);
      setTimeout(function() { my.ollie1.spin("left",120); }, 200);
      setTimeout(function() { my.ollie1.spin("right",120); }, 400);
      setTimeout(function() { my.ollie1.spin("left",120); }, 600);
      setTimeout(function() { my.ollie1.spin("right",0); }, 800);
    };
    if ( topic == "bb8-yes" ) { 
      setTimeout(function() { my.bb8.roll(200,0); }, 200);
      setTimeout(function() { my.bb8.stop(0); }, 300);

      setTimeout(function() { my.bb82.roll(200,0); }, 200);
      setTimeout(function() { my.bb82.stop(0); }, 300);

      setTimeout(function() { my.ollie1.roll(120,0); }, 200);
      setTimeout(function() { my.ollie1.stop(0); }, 100);
    };

 });
  }
}).start();

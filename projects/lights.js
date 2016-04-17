
"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: { 
    hue: { adaptor: "hue", host: process.argv[2], username: process.argv[3] },
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.105:1883' },
    audio: { adaptor: 'speech' }
  },

  devices: {
   bulb: { driver: "hue-light", lightId: 1 },
   message: { driver: 'mqtt', topic: 'iot', adaptor: 'mqtt', connection: 'server' },
    voice1: { driver: 'speech', language: "english", gender: "f", speed: 200, connection: 'audio' },
  },

  work: function(my) {
    my.voice1.say("initiating lights");
    my.message.on('message', function (topic) {
      console.log(topic);
      if ( topic == "red" ) { my.bulb.rgb(255,0,0); };
      if ( topic == "blue" ) { my.bulb.rgb(0,0,255); };
      if ( topic == "green" ) { my.bulb.rgb(0,255,0); };
	
	
    });
  }
}).start();

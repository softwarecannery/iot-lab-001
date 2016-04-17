// To run:
// $ node examples/blink/blink.js 192.168.1.85 35dacee025cd94cf3f50bb301ad8b4bf

"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: { 
    hue: { adaptor: "hue", host: process.argv[2], username: process.argv[3] },
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.105:1883' }
  },

  devices: {
   bulbJeffery: { driver: "hue-light", lightId: 1 },
   bulbFrancis: { driver: "hue-light", lightId: 2 },
   bulbPiper: { driver: "hue-light", lightId: 3 },
   message: { driver: 'mqtt', topic: 'iot', adaptor: 'mqtt', connection: 'server' }
  },

  work: function(my) {
    my.message.on('message', function (topic) {
      console.log(topic);
      if ( topic == "red" ) { my.bulbJeffery.rgb(255,0,0); };
      if ( topic == "blue" ) { my.bulbFrancis.rgb(0,0,255); };
      if ( topic == "green" ) { my.bulbPiper.rgb(0,255,0); };
	
	
    });
  }
}).start();

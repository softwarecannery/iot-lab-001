// To run:
// $ node examples/blink/blink.js 192.168.1.85 35dacee025cd94cf3f50bb301ad8b4bf

"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    hue: { adaptor: "hue", host: process.argv[2], username: process.argv[3] },
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.107:1883' }
  },

  devices: {
   bulb: { driver: "hue-light", lightId: 1 },
   message: { driver: 'mqtt', topic: 'iot', adaptor: 'mqtt', connection: 'server' }
  },

  work: function(my) {
    my.message.on('message', function (topic) {
      console.log(topic);
      if ( topic == "red" ) { my.bulb.rgb(255,0,0); };
    });
  }
}).start();

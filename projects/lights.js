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
   bulbRobert: { driver: "hue-light", lightId: 4 },
   message: { driver: 'mqtt', topic: 'iot', adaptor: 'mqtt', connection: 'server' }
  },

  work: function(my) {
    my.message.on('message', function (topic) {
      console.log(topic);
      if ( topic == "red" ) { my.bulbJeffery.rgb(255,0,0); };
      if ( topic == "blue" ) { my.bulbFrancis.rgb(0,0,255); };
      if ( topic == "green" ) { my.bulbPiper.rgb(0,255,0); };
      if ( topic == "purple" ) { my.bulbRobert.rgb(255,0,255); };
  if ( topic == "cyan" ) { my.bulbJeffery.rgb(0,255,255); };
  if ( topic == "magenta" ) { my.bulbJeffery.rgb(255,0,200); };
  if ( topic == "yellow" ) { my.bulbPiper.rgb(255,255,0); };
if ( topic == "orange" ) { my.bulbRobert.rgb(255,150,0); };
if ( topic == "teal" ) { my.bulbJeffery.rgb(0,128,128); };
if ( topic == "darkcyan" ) { my.bulbPiper.rgb(0,139,139); };
if ( topic == "peacock" ) { my.bulbRobert.rgb(51,161,201); };
if ( topic == "coral" ) { my.bulbFrancis.rgb(255,127,80); };
if ( topic == "beet" ) { my.bulbJeffery.rgb(142,56,142); };
if ( topic == "black" ) { my.bulbPiper.rgb(0,0,0); };
if ( topic == "burn" ) { my.bulbRobert.rgb(190,0,0); };
if ( topic == "cyan" ) { my.bulbJeffery.rgb(0,255,255); };
if ( topic == "rosybrown" ) { my.bulbRobert.rgb(255,193,193); };
if ( topic == "deeppink" ) { my.bulbFrancis.rgb(255,20,147); };
if ( topic == "orchid" ) { my.bulbJeffery.rgb(104,34,139); };
if ( topic == "gold" ) { my.bulbPiper.rgb(255,215,0); };
if ( topic == "snow" ) { my.bulbRobert.rgb(255,250,250); };
if ( topic == "darkolivegreen" ) { my.bulbFrancis.rgb(110,139,61); };
if ( topic == "paleturquoise" ) { my.bulbRobert.rgb(174,238,238); };
if ( topic == "seagreen" ) { my.bulbPiper.rgb(32,178,170); };
if ( topic == "turquoise" ) { my.bulbFrancis.rgb(64,224,208); };
if ( topic == "plum" ) { my.bulbJeffery.rgb(205,150,205); };
if ( topic == "fuchsia" ) { my.bulbFrancis.rgb(255,20,255); };
if ( topic == "oak" ) { my.bulbPiper.rgb(205,133,0); };
if ( topic == "sienna" ) { my.bulbRobert.rgb(238,121,66); };
if ( topic == "mediumturquoise" ) { my.bulbJeffery.rgb(72,209,204); };
if ( topic == "allred" ) { my.bulbJeffery.rgb(255,0,0); my.bulbFrancis.rgb(255,0,0);  my.bulbPiper.rgb(255,0,0); my.bulbRobert.rgb(255,0, 0); };
if ( topic == "allgreen" ) { my.bulbJeffery.rgb(0,255,0); my.bulbFrancis.rgb(0,255,0);  my.bulbPiper.rgb(0,255,0); my.bulbRobert.rgb(0,255, 0); };
if ( topic == "allblue" ) { my.bulbJeffery.rgb(0,0,255); my.bulbFrancis.rgb(0,0,255);  my.bulbPiper.rgb(0,0,255); my.bulbRobert.rgb(0,0, 255); };
if ( topic == "turnOn" ) { my.bulbJeffery.turnOn(255,0,0); my.bulbFrancis.turnOn(255,0,0);  my.bulbPiper.turnOn(255,0,0); my.bulbRobert.turnOn(255,0, 0); };
if ( topic == "royal" ) { my.bulbJeffery.rgb(255,0,200); my.bulbFrancis.rgb(255,127,80);  my.bulbPiper.rgb(255,215,0); my.bulbRobert.rgb(255,193, 193); };
if ( topic == "rk" ) { my.bulbJeffery.rgb(64,224,208); my.bulbFrancis.rgb(255,215,0);  my.bulbPiper.rgb(142,56,142); my.bulbRobert.rgb(205,150, 205); };
if ( topic == "rainbow" ) { my.bulbJeffery.rgb(51,161,201); my.bulbFrancis.rgb(255,127,80);  my.bulbPiper.rgb(110,139,61); my.bulbRobert.rgb(104,34, 139); };
if ( topic == "midnight" ) { my.bulbJeffery.rgb(255,0,200); my.bulbFrancis.rgb(255,20,147);  my.bulbPiper.rgb(0,139,139); my.bulbRobert.rgb(0,0, 255); };
if ( topic == "fruits" ) { my.bulbJeffery.rgb(142,56,142); my.bulbFrancis.rgb(110,139,61);  my.bulbPiper.rgb(32,178,170); my.bulbRobert.rgb(104,34, 139); };
if ( topic == "blossom" ) { my.bulbJeffery.rgb(205,150,205); my.bulbFrancis.rgb(255,20,255);  my.bulbPiper.rgb(205,133,0); my.bulbRobert.rgb(238,121, 66); };
if ( topic == "primary" ) { my.bulbJeffery.rgb(255,0,0); my.bulbFrancis.rgb(0,0,255);  my.bulbPiper.rgb(0,255,0); my.bulbRobert.rgb(255,150, 0); };
if ( topic == "seasons" ) { my.bulbJeffery.rgb(72,209,204); my.bulbFrancis.rgb(255,20,147);  my.bulbPiper.rgb(255,255,0); my.bulbRobert.rgb(190,0, 0); };
if ( topic == "waves" ) { my.bulbJeffery.rgb(0,128,128); my.bulbFrancis.rgb(0,0,255);  my.bulbPiper.rgb(0,139,139); my.bulbRobert.rgb(51,161, 201); };
if ( topic == "turnOff" ) { my.bulbJeffery.turnOff(255,0,0); my.bulbFrancis.turnOff(255,0,0);  my.bulbPiper.turnOff(255,0,0); my.bulbRobert.turnOff  (255,0, 0); }
;
if ( topic == "sunny" ) { my.bulbJeffery.rgb(255, 215, 0); my.bulbFrancis.rgb(255, 150, 0);  my.bulbPiper.rgb(255, 193, 193); my.bulbRobert.rgb(190, 0, 0); };



	
	
    });
  }
}).start();

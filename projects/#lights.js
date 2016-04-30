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
      if ( topic == "#raykatsc55LlEe red" ) { my.bulbJeffery.rgb(255,0,0); };
      if ( topic == "#raykatsc55LlEe blue" ) { my.bulbFrancis.rgb(0,0,255); };
      if ( topic == "#raykatsc55LlEe green" ) { my.bulbPiper.rgb(0,255,0); };
      if ( topic == "#raykatsc55LlEe purple" ) { my.bulbRobert.rgb(255,0,255); };
  if ( topic == "#raykatsc55LlEe cyan" ) { my.bulbJeffery.rgb(0,255,255); };      
  if ( topic == "#raykatsc55LlEe magenta" ) { my.bulbJeffery.rgb(255,0,200); };
  if ( topic == "#raykatsc55LlEe yellow" ) { my.bulbPiper.rgb(255,255,0); };
if ( topic == "#raykatsc55LlEe orange" ) { my.bulbRobert.rgb(255,150,0); };
if ( topic == "#raykatsc55LlEe teal" ) { my.bulbJeffery.rgb(0,128,128); };
if ( topic == "#raykatsc55LlEe darkcyan" ) { my.bulbPiper.rgb(0,139,139); };
if ( topic == "#raykatsc55LlEe peacock" ) { my.bulbRobert.rgb(51,161,201); };
if ( topic == "#raykatsc55LlEe coral" ) { my.bulbFrancis.rgb(255,127,80); };
if ( topic == "#raykatsc55LlEe beet" ) { my.bulbJeffery.rgb(142,56,142); };
if ( topic == "#raykatsc55LlEe black" ) { my.bulbPiper.rgb(0,0,0); };
if ( topic == "#raykatsc55LlEe burn" ) { my.bulbRobert.rgb(190,0,0); };
if ( topic == "#raykatsc55LlEe cyan" ) { my.bulbJeffery.rgb(0,255,255); };
if ( topic == "#raykatsc55LlEe rosybrown" ) { my.bulbRobert.rgb(255,193,193); };
if ( topic == "#raykatsc55LlEe deeppink" ) { my.bulbFrancis.rgb(255,20,147); };
if ( topic == "#raykatsc55LlEe orchid" ) { my.bulbJeffery.rgb(104,34,139); };
if ( topic == "#raykatsc55LlEe gold" ) { my.bulbPiper.rgb(255,215,0); };
if ( topic == "#raykatsc55LlEe snow" ) { my.bulbRobert.rgb(255,250,250); };
if ( topic == "#raykatsc55LlEe darkolivegreen" ) { my.bulbFrancis.rgb(110,139,61); };
if ( topic == "#raykatsc55LlEe paleturquoise" ) { my.bulbRobert.rgb(174,238,238); };
if ( topic == "#raykatsc55LlEe seagreen" ) { my.bulbPiper.rgb(32,178,170); };
if ( topic == "#raykatsc55LlEe turquoise" ) { my.bulbFrancis.rgb(64,224,208); };
if ( topic == "#raykatsc55LlEe plum" ) { my.bulbJeffery.rgb(205,150,205); };
if ( topic == "#raykatsc55LlEe fuchsia" ) { my.bulbFrancis.rgb(255,20,255); };
if ( topic == "#raykatsc55LlEe oak" ) { my.bulbPiper.rgb(205,133,0); };
if ( topic == "#raykatsc55LlEe sienna" ) { my.bulbRobert.rgb(238,121,66); };
if ( topic == "#raykatsc55LlEe mediumturquoise" ) { my.bulbJeffery.rgb(72,209,204); };
if ( topic == "#raykatsc55LlEe allred" ) { my.bulbJeffery.rgb(255,0,0); my.bulbFrancis.rgb(255,0,0);  my.bulbPiper.rgb(255,0,0); my.bulbRobert.rgb(255,0, 0); };
if ( topic == "#raykatsc55LlEe allgreen" ) { my.bulbJeffery.rgb(0,255,0); my.bulbFrancis.rgb(0,255,0);  my.bulbPiper.rgb(0,255,0); my.bulbRobert.rgb(0,255, 0); };
if ( topic == "#raykatsc55LlEe allblue" ) { my.bulbJeffery.rgb(0,0,255); my.bulbFrancis.rgb(0,0,255);  my.bulbPiper.rgb(0,0,255); my.bulbRobert.rgb(0,0, 255); };
if ( topic == "#raykatsc55LlEe turnOn" ) { my.bulbJeffery.turnOn(255,0,0); my.bulbFrancis.turnOn(255,0,0);  my.bulbPiper.turnOn(255,0,0); my.bulbRobert.turnOn(255,0, 0); };
if ( topic == "#raykatsc55LlEe royal" ) { my.bulbJeffery.rgb(255,0,200); my.bulbFrancis.rgb(255,127,80);  my.bulbPiper.rgb(255,215,0); my.bulbRobert.rgb(255,193, 193); };
if ( topic == "#raykatsc55LlEe rk" ) { my.bulbJeffery.rgb(64,224,208); my.bulbFrancis.rgb(255,215,0);  my.bulbPiper.rgb(142,56,142); my.bulbRobert.rgb(205,150, 205); };
if ( topic == "#raykatsc55LlEe rainbow" ) { my.bulbJeffery.rgb(51,161,201); my.bulbFrancis.rgb(255,127,80);  my.bulbPiper.rgb(110,139,61); my.bulbRobert.rgb(104,34, 139); };
if ( topic == "#raykatsc55LlEe midnight" ) { my.bulbJeffery.rgb(255,0,200); my.bulbFrancis.rgb(255,20,147);  my.bulbPiper.rgb(0,139,139); my.bulbRobert.rgb(0,0, 255); };
if ( topic == "#raykatsc55LlEe fruits" ) { my.bulbJeffery.rgb(142,56,142); my.bulbFrancis.rgb(110,139,61);  my.bulbPiper.rgb(32,178,170); my.bulbRobert.rgb(104,34, 139); };
if ( topic == "#raykatsc55LlEe blossom" ) { my.bulbJeffery.rgb(205,150,205); my.bulbFrancis.rgb(255,20,255);  my.bulbPiper.rgb(205,133,0); my.bulbRobert.rgb(238,121, 66); };
if ( topic == "#raykatsc55LlEe primary" ) { my.bulbJeffery.rgb(255,0,0); my.bulbFrancis.rgb(0,0,255);  my.bulbPiper.rgb(0,255,0); my.bulbRobert.rgb(255,150, 0); };
if ( topic == "#raykatsc55LlEe seasons" ) { my.bulbJeffery.rgb(72,209,204); my.bulbFrancis.rgb(255,20,147);  my.bulbPiper.rgb(255,255,0); my.bulbRobert.rgb(190,0, 0); };
if ( topic == "#raykatsc55LlEe waves" ) { my.bulbJeffery.rgb(0,128,128); my.bulbFrancis.rgb(0,0,255);  my.bulbPiper.rgb(0,139,139); my.bulbRobert.rgb(51,161, 201); };
if ( topic == "#raykatsc55LlEe turnOff" ) { my.bulbJeffery.turnOff(255,0,0); my.bulbFrancis.turnOff(255,0,0);  my.bulbPiper.turnOff(255,0,0); my.bulbRobert.turnOff  (255,0, 0); }
;
if ( topic == "#raykatsc55LlEe sunny" ) { my.bulbJeffery.rgb(255, 215, 0); my.bulbFrancis.rgb(255, 150, 0);  my.bulbPiper.rgb(255, 193, 193); my.bulbRobert.rgb(190, 0, 0); };



	
	
    });
  }
}).start();\\\\\

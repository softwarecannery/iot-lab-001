var Cylon = require('cylon');
var Board = require('firmata');
var arduino = new Board("/dev/ttyACM0",function(){});

Cylon.robot({
  connections: {
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.108:1883' },
  },

  devices: {
   message: { driver: 'mqtt', topic: 'roll', adaptor: 'mqtt', connection: 'server' },
  },

  work: function(my) {

    my.message.on('message', function (topic) {
    console.log(topic);

    if ( topic == "red" ) { };
    if ( topic == "green" ) { };
    if ( topic == "blue" ) { };
    if ( topic == "roll-short" ) { };
    if ( topic == "azul" ) { };
    if ( topic == "ev3-move" ) { };
    if ( topic == "ardrone" ) { };
    if ( topic == "arduino-dio13-on" ) { arduino.digitalWrite(13,true); };
    if ( topic == "arduino-dio13-off" ) { arduino.digitalWrite(13,false); };
 });
  }
}).start();
